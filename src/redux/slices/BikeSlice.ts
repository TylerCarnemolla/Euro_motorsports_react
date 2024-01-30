import {createSlice, PayloadAction} from "@reduxjs/toolkit"

interface BikeState {
    brand: string;
    model: string;
    engine: string;
    color: string;
    price: string;
}
const bikeSlice = createSlice({
    name: 'root',
    initialState:{
        brand: "brand",
        model: "model",
        color: "color",
        price: "price",
        engine: "engine"

    } as BikeState,
    reducers:{
        ChooseBikeBrand: (state, action: PayloadAction<string>) => { state.brand = action.payload },
        ChooseBikeModel: (state, action: PayloadAction<string>) => { state.model = action.payload },
        ChooseBikeColor: (state, action: PayloadAction<string>) => { state.color = action.payload },
        ChooseBikeEngine: (state, action: PayloadAction<string>) => { state.engine = action.payload },
        ChooseBikePrice: (state, action: PayloadAction<string>) => { state.price = action.payload },
        
        

    },
});
export const helmetReducer = bikeSlice.reducer;
export const { ChooseBikeBrand, ChooseBikeColor, ChooseBikeEngine, ChooseBikeModel, ChooseBikePrice} = bikeSlice.actions;