import {createSlice, PayloadAction} from "@reduxjs/toolkit"

interface ATVState {
    brand: string;
    model: string;
    engine: string;
    color: string;
    price: string;
}
const ATVSlice = createSlice({
    name: 'root',
    initialState:{
        brand: "brand",
        model: "model",
        color: "color",
        price: "price",
        engine: "engine"

    } as ATVState,
    reducers:{
        ChooseATVBrand: (state, action: PayloadAction<string>) => { state.brand = action.payload },
        ChooseATVModel: (state, action: PayloadAction<string>) => { state.model = action.payload },
        ChooseATVColor: (state, action: PayloadAction<string>) => { state.color = action.payload },
        ChooseATVEngine: (state, action: PayloadAction<string>) => { state.engine = action.payload },
        ChooseATVPrice: (state, action: PayloadAction<string>) => { state.price = action.payload },
        
        

    },
});
export const helmetReducer = ATVSlice.reducer;
export const { ChooseATVBrand, ChooseATVColor, ChooseATVEngine, ChooseATVModel, ChooseATVPrice} = ATVSlice.actions;