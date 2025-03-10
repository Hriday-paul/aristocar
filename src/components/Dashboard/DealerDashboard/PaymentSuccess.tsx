"use client"

import { useCallback, useEffect, useRef } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import confetti from "canvas-confetti"
import { CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useRouter, useSearchParams } from "next/navigation"
import { useConfirm_paymentQuery } from "@/redux/features/DealerApi"
import { useReactToPrint } from "react-to-print"
import InvoiceContent from "./Invoice/InvoiceContent"
import { toast } from "sonner"
import { ImSpinner2, ImSpinner8 } from "react-icons/im"
import SmError from "@/components/shared/Dashboard/SmError"

function PaymentSuccess() {
    const searchParams = useSearchParams()
    const paymentId = searchParams.get('paymentId')
    const sessionId = searchParams.get('sessionId')

    const { isLoading, isError, isSuccess, data } = useConfirm_paymentQuery({ paymentId: paymentId || '', sessionId: sessionId || '' });

    const contentRef = useRef<HTMLDivElement>(null);

    const handlePrint = useReactToPrint({
        contentRef,
        // pageStyle: `@page { size:'auto'}; margin: 10mm }`
    });

    const router = useRouter();

    useEffect(() => {
        if (!paymentId || !sessionId) {
            router.push('/')
        }
        else {
            if (isSuccess) {
                confetti({
                    particleCount: 100,
                    spread: 70,
                    origin: { y: 0.6 },
                })
            }
        }
    }, [paymentId, sessionId, router, isSuccess])



    const handleClickBtn = useCallback(async () => {
        handlePrint()

    }, [handlePrint])


    return (

        <div>

            {
                isLoading ?
                    <div className="min-h-80 flex justify-center items-center">
                        <ImSpinner8 className="text-4xl text-primary animate-spin" />
                    </div>
                    : isError ? <SmError /> : isSuccess ? <div className="min-h-[70vh] flex items-center justify-center p-4">
                        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                            <div className="w-full max-w-md bg-gradient-to-b from-green-50 to-green-100 p-10 rounded-md space-y-8 font-poppins border border-stroke">
                                <div>
                                    <div className="text-center text-2xl font-bold text-green-600 flex items-center justify-center">
                                        <CheckCircle className="mr-2" />
                                        Payment Successful!
                                    </div>
                                </div>
                                <div>
                                    <p className="text-center text-gray-600 mb-6 font-poppins">
                                        Thank you for your purchase. Your payment has been processed successfully.
                                    </p>
                                </div>
                                <div className="flex flex-row gap-x-4 items-center">
                                    <Link href="/dealer/dashboard/subscription" className="w-full">
                                        <Button className="w-full">Return to Dashboard</Button>
                                    </Link>
                                    <Button onClick={handleClickBtn} disabled={isLoading} className="w-full bg-success hover:bg-success hover:bg-opacity-90 duration-200">
                                        {(isLoading) && <ImSpinner2 className="text-lg text-white animate-spin mr-1.5" />}
                                        Print Invoice
                                    </Button>
                                </div>
                            </div>
                            {isSuccess && <div className="hidden">
                                <div ref={contentRef}>
                                    <InvoiceContent data={data} />
                                </div>
                            </div>
                            }
                        </motion.div>
                    </div> : <></>
            }

        </div>
    )
}



export default PaymentSuccess;