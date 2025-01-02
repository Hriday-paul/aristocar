import React from 'react';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { contactType } from '@/redux/features/types';


const ContactView = ({ children, details }: { children: React.ReactNode, details: contactType }) => {
    return (
        <div>
            <Dialog>
                <DialogTrigger>{children}</DialogTrigger>
                <DialogContent className="!rounded-none p-5">
                    <DialogHeader>
                        <DialogTitle></DialogTitle>
                        <DialogDescription>
                            <div className='text-left'>
                                <section className='mb-3'>
                                    <p className="mb-1.5 block text-black dark:text-white font-poppins text-sm">Car Name</p>
                                    <p
                                        className={`w-full rounded-sm border-[1.5px] bg-transparent py-2.5 px-4 text-primary transition font-satoshi border-strokeinput bg-slate-100`}
                                    >{details?.carId?.name}</p>
                                </section>
                                <section className='mb-3'>
                                    <p className="mb-1.5 block text-black dark:text-white font-poppins text-sm">Contact</p>
                                    <p
                                        className={`w-full rounded-sm border-[1.5px] bg-transparent py-2.5 px-4 text-primary transition font-satoshi border-strokeinput bg-slate-100`}
                                    >{details?.phone}</p>
                                </section>
                                <section className='mb-3'>
                                    <p className="mb-1.5 block text-black dark:text-white font-poppins text-sm">Email</p>
                                    <p
                                        className={`w-full rounded-sm border-[1.5px] bg-transparent py-2.5 px-4 text-primary transition font-satoshi border-strokeinput bg-slate-100`}
                                    >{details?.email}</p>
                                </section>
                                <section className='mb-3'>
                                    <p className="mb-1.5 block text-black dark:text-white font-poppins text-sm">Message</p>
                                    <p
                                        className={`w-full rounded-sm border-[1.5px] bg-transparent py-2.5 px-4 text-primary transition font-satoshi border-strokeinput bg-slate-100`}
                                    >{details?.description}</p>
                                </section>
                            </div>
                        </DialogDescription>
                    </DialogHeader>
                </DialogContent>
            </Dialog>

        </div>
    );
};

export default ContactView;