import React from 'react';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"


const ContactView = ({ children }: { children: React.ReactNode }) => {
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
                                    >GTC BMW-29</p>
                                </section>
                                <section className='mb-3'>
                                    <p className="mb-1.5 block text-black dark:text-white font-poppins text-sm">Contact</p>
                                    <p
                                        className={`w-full rounded-sm border-[1.5px] bg-transparent py-2.5 px-4 text-primary transition font-satoshi border-strokeinput bg-slate-100`}
                                    >+8801892814892</p>
                                </section>
                                <section className='mb-3'>
                                    <p className="mb-1.5 block text-black dark:text-white font-poppins text-sm">Email</p>
                                    <p
                                        className={`w-full rounded-sm border-[1.5px] bg-transparent py-2.5 px-4 text-primary transition font-satoshi border-strokeinput bg-slate-100`}
                                    >hridoychandrapaul.10@gmail.com</p>
                                </section>
                                <section className='mb-3'>
                                    <p className="mb-1.5 block text-black dark:text-white font-poppins text-sm">Message</p>
                                    <p
                                        className={`w-full rounded-sm border-[1.5px] bg-transparent py-2.5 px-4 text-primary transition font-satoshi border-strokeinput bg-slate-100`}
                                    >{`Create a sleek car description section with a modern design, featuring a high-resolution image of the car alongside its name and model, such as "Tesla Model 3 (2024)." Highlight key features like electric zero-emission technology, 0-60 mph in 3.1 seconds, 358-mile range, and advanced autopilot capabilities. Include the price prominently, such as "$39,990," and a clear "View Details" button for user engagement. This layout ensures an appealing and informative experience for potential customers.`}</p>
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