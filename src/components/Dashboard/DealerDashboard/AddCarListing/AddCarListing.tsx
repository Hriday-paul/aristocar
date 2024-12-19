import React from 'react';

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import AddForm from './AddForm';


const AddCarListing = ({ children }: { children: React.ReactNode }) => {
    return (
        <div>
            <Dialog>
                <DialogTrigger className='w-full'>{children}</DialogTrigger>
                <DialogContent className="!rounded-none p-5 lg:max-w-screen-lg overflow-y-scroll max-h-[calc(100vh-20px)] popup-scroll">
                    <DialogHeader>
                        <DialogTitle></DialogTitle>
                        <DialogDescription>
                            <AddForm />
                        </DialogDescription>
                    </DialogHeader>
                </DialogContent>
            </Dialog>

        </div>
    );
};


export default AddCarListing;