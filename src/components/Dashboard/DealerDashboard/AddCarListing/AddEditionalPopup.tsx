import React from 'react';
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"

const AddEditionalPopup = React.memo(({ children }: { children: React.ReactNode }) => {
    return (
        <div>
            <Popover>
                <PopoverTrigger>{children}</PopoverTrigger>
                <PopoverContent>Place content for the popover here.
                    
                </PopoverContent>
            </Popover>
        </div>
    );
});

AddEditionalPopup.displayName = "AddEditionalPopup"
export default AddEditionalPopup;