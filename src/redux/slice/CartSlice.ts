import { carDetailsI } from "@/app/[locale]/(main)/details/[id]/@cardetails/page";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { toast } from "sonner";

const initialData: { cars: carDetailsI[] } = {
    cars: []
}

const cartSlice = createSlice({
    name: 'cart',
    initialState: initialData,
    reducers: {
        addCarInCart: (state, { payload }: PayloadAction<carDetailsI>) => {
            const find = state?.cars?.find(car => {
                return car?._id == payload?._id
            })
            if (find) {
                toast.error('Car already exist in your wishlist')
            } else {
                toast.success('Car successfully added to your wishlist')
                state.cars = [...state.cars, payload]
            }
        },
        removeCarFromCart: (state, { payload }: PayloadAction<{ id: string }>) => {

            const filter = state?.cars?.filter(car => {
                return car?._id !== payload?.id
            })
            state.cars = filter
        },
    }
});

export const { addCarInCart, removeCarFromCart } = cartSlice.actions;

export default cartSlice.reducer;