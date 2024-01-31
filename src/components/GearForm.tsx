import React from "react";
import Input from "./input";
import { useForm } from 'react-hook-form';
import { useDispatch} from 'react-redux';
import { ChooseGearBrand, ChooseGearType, ChooseGearSize, ChooseGearPrice, ChooseGearColor } from "../redux/slices/GearSlice";
import {server_calls} from "../api/server"




interface GearFormProps{
    id?: string[];
    onClose: () => void;
    refreshData: () => void;
    
}
const GearForm: React.FC<GearFormProps> = (props) => {
    const { register, handleSubmit } = useForm();
    const dispatch = useDispatch();



  



    const onSubmit = async (data:any, event:any) =>{
      console.log(`ID: ${props.id}`);
        if(props.id && props.id.length > 0) {
            server_calls.gear.update(props.id[0], data)
            console.log(`Updated! ${data} ${props.id}`)
            props.refreshData();
            event.target.reset()
        }else{
            dispatch(ChooseGearBrand(data.brand));
            dispatch(ChooseGearColor(data.color));
            dispatch(ChooseGearType(data.type));
            dispatch(ChooseGearPrice(data.price));
            dispatch(ChooseGearSize(data.size));
            console.log(data);
            await server_calls.gear.create(data)
            props.onClose()
            props.refreshData()
        }
    }
return(
    <div className="flex flex-col p-4 rounded">
    <form onSubmit={handleSubmit(onSubmit)} className="p-4 flex flex-col flex-wrap">
      <div className="flex flex-row">
        <div className="bg-white flex">
          <div className="flex m-3 flex-col">
            <label className="text-black" htmlFor="brand">Brand</label>
            <Input {...register('brand')} name='brand' placeholder="Brand"  />
          </div>
          <div className="flex m-3 flex-col">
            <label className="text-black" htmlFor="type">Type</label>
            <Input {...register('type')} name='type' placeholder="Type"  />
          </div>
          <div className="flex m-3 flex-col">
            <label className="text-black" htmlFor="color">Color</label>
            <Input {...register('color')} name='color' placeholder="Color"  />
          </div>
          <div className="flex m-3 flex-col">
            <label className="text-black" htmlFor="price">Price</label>
            <Input {...register('price')} name='price' placeholder="Price"  />
          </div>
          <div className="flex m-3  flex-col">
            <label className="text-black" htmlFor="size">Size</label>
            <Input {...register('size')} name='size' placeholder="Size"  />
          </div>
        </div>
      </div>
      <div className="separate">
        <div className="flex justify-center mt-4">
          <button className="p-3 rounded-lg bg-red-800 border-2 border-grey-900 hover:bg-red-500">
            Submit
          </button>
        </div>
      </div>
    </form>
  </div>
)
}

export default GearForm