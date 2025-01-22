"use client"

import { useCallback, useEffect, useRef } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import confetti from "canvas-confetti"
import { CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useRouter, useSearchParams } from "next/navigation"
import { useGetinvoiceMutation } from "@/redux/features/DealerApi"
import { useReactToPrint } from "react-to-print"
import InvoiceContent from "./Invoice/InvoiceContent"
import { toast } from "sonner"
import { ImSpinner2 } from "react-icons/im"

function PaymentSuccess() {
    const [getInvoice, { isLoading, isError, isSuccess, data }] = useGetinvoiceMutation();

    const contentRef = useRef<HTMLDivElement>(null);

    const handlePrint = useReactToPrint({
        contentRef,
        // pageStyle: `@page { size:'auto'}; margin: 10mm }`
    });

    const searchParams = useSearchParams()
    const paymentId = searchParams.get('paymentId')
    const router = useRouter();

    useEffect(() => {
        if (!paymentId) {
            router.push('/')
        }
        else {
            confetti({
                particleCount: 100,
                spread: 70,
                origin: { y: 0.6 },
            })
        }
    }, [paymentId, router])



    const handleClickBtn = useCallback(async () => {
        try {
            await getInvoice({ id: paymentId || '' }).unwrap();

            setTimeout(() => {
                handlePrint()
            }, 100)
        } catch (err) {
            toast.error("Payment invoice not found")
        }


    }, [getInvoice, handlePrint, paymentId])






    return (

        <div className="min-h-[70vh] flex items-center justify-center p-4">
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
                        <InvoiceContent data={data}/>
                    </div>
                </div>
                }
            </motion.div>
        </div>
    )
}



export default PaymentSuccess;