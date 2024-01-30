import {createSlice, PayloadAction} from "@reduxjs/toolkit"

interface HelmetState {
    brand: string;
    color: string;
    price: string;
    size: string;
}
const helmetSlice = createSlice({
    name: 'root',
    initialState:{
        brand: "brand",
        color: "color",
        price: "price",
        size: "size",

    } as HelmetState,
    reducers:{
        ChooseBrand: (state, action: PayloadAction<string>) => { state.brand = action.payload },
        ChooseColor: (state, action: PayloadAction<string>) => { state.color = action.payload },
        ChoosePrice: (state, action: PayloadAction<string>) => { state.price = action.payload },
        ChooseSize: (state, action: PayloadAction<string>) => { state.size = action.payload },
        

    },
});
export const helmetReducer = helmetSlice.reducer;
export const { ChooseBrand, ChooseColor, ChoosePrice, ChooseSize} = helmetSlice.actions;