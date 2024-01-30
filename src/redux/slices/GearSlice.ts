import {createSlice, PayloadAction} from "@reduxjs/toolkit"

interface GearState {
    brand: string;
    type: string;
    size: string;
    color: string;
    price: string;
}
const GearSlice = createSlice({
    name: 'root',
    initialState:{
        brand: "brand",
        type: "type",
        size: "size",
        price: "price",
        color: "color",

    } as GearState,
    reducers:{
        ChooseGearBrand: (state, action: PayloadAction<string>) => { state.brand = action.payload },
        ChooseGearType: (state, action: PayloadAction<string>) => { state.type = action.payload },
        ChooseGearColor: (state, action: PayloadAction<string>) => { state.color = action.payload },
        ChooseGearSize: (state, action: PayloadAction<string>) => { state.size = action.payload },
        ChooseGearPrice: (state, action: PayloadAction<string>) => { state.price = action.payload },
        
        

    },
});
export const helmetReducer = GearSlice.reducer;
export const { ChooseGearBrand, ChooseGearColor, ChooseGearSize, ChooseGearType, ChooseGearPrice} = GearSlice.actions;