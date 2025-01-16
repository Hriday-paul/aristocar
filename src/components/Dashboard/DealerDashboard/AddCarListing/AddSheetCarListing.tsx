import React from 'react';
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import AddForm from './AddForm';

const AddSheetCarListing = ({ children, formTxt }: { children: React.ReactNode, formTxt : {[key : string] : string} }) => {
    return (
        <div>
            <Sheet>
                <SheetTrigger asChild>
                    {children}
                </SheetTrigger>
                <SheetContent side={'bottom'} className='rounded-t-3xl p-5 overflow-y-scroll max-h-[calc(100vh-30px)] popup-scroll bg-secondary'>

                    <div className='max-w-3xl mx-auto'>
                        <AddForm formTxt={formTxt}/>
                    </div>

                    <SheetFooter>
                        <SheetClose asChild>
                            close
                        </SheetClose>
                    </SheetFooter>
                </SheetContent>
            </Sheet>
        </div>
    );
};

export default AddSheetCarListing;