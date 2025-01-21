'use client'
import React, { useState } from 'react';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog"
import Link from 'next/link';

const VerifyPopUp = ({ open, setOpen }: { open: boolean, setOpen: React.Dispatch<React.SetStateAction<boolean>> }) => {

    return (
        <div>
            <Dialog open={open} onOpenChange={setOpen}>

                <DialogContent className="!rounded-lg p-5 md:max-w-lg">
                    <DialogHeader>
                        <DialogTitle></DialogTitle>
                        <DialogDescription>
                            <div>
                                <div className="flex items-start gap-x-0 md:gap-x-5">
                                    <div className="flex h-9 md:h-10 w-10 items-center justify-center rounded-full bg-yellow-600 text-yellow-400">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-triangle-alert"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"></path><path d="M12 9v4"></path><path d="M12 17h.01"></path></svg>
                                    </div>
                                    <div className="space-y-1.5">
                                        <h5 className="text-xl text-primary font-poppins">Verification Required</h5>
                                        <p className='text-zinc-800 text-base'>You need to <Link className="underline" href="/otp-varify">verify</Link> your account to continue.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex flex-row justify-end mt-8 space-x-2">
                                    <button onClick={() => setOpen(false)} type="button" className="text-zinc-900 inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-neutral-950 disabled:pointer-events-none disabled:opacity-50 dark:focus-visible:ring-neutral-300 border border-neutral-200 bg-white shadow-sm hover:bg-neutral-100 hover:text-neutral-900 dark:border-neutral-800 dark:bg-neutral-950 dark:hover:bg-neutral-800 dark:hover:text-neutral-50 h-9 px-4 py-2">Cancel</button>

                                    <Link href={'/otp-varify'} type="button" className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 bg-primary focus-visible:ring-neutral-950 disabled:pointer-events-none disabled:opacity-50 dark:focus-visible:ring-neutral-300 text-neutral-50 shadow hover:bg-neutral-900/90 dark:bg-neutral-50 dark:text-neutral-900 dark:hover:bg-neutral-50/90 h-9 px-4 py-2 bg-primary-black">Continue to Verify</Link>

                                </div>

                            </div>
                        </DialogDescription>
                    </DialogHeader>
                </DialogContent>
            </Dialog>
        </div>
    );
};

export default VerifyPopUp;
