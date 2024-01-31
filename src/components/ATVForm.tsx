import React from "react";
import Input from "./input";
import { useForm } from 'react-hook-form';
import { useDispatch} from 'react-redux';
import { ChooseATVBrand, ChooseATVColor, ChooseATVEngine, ChooseATVModel, ChooseATVPrice } from "../redux/slices/ATVSlice";
import {server_calls} from "../api/server"




interface ATVFormProps{
    id?: string[];
    onClose: () => void;
    refreshData: () => void;
    
}
const ATVForm: React.FC<ATVFormProps> = (props) => {
    const { register, handleSubmit } = useForm();
    const dispatch = useDispatch();



  



    const onSubmit = async (data:any, event:any) =>{
      console.log(`ID: ${props.id}`);
        if(props.id && props.id.length > 0) {
            server_calls.atvs.update(props.id[0], data)
            console.log(`Updated! ${data} ${props.id}`)
            props.refreshData();
        
            event.target.reset()
        }else{
            dispatch(ChooseATVBrand(data.brand));
            dispatch(ChooseATVColor(data.color));
            dispatch(ChooseATVEngine(data.engine));
            dispatch(ChooseATVPrice(data.price));
            dispatch(ChooseATVModel(data.model));
            console.log(data);
            await server_calls.atvs.create(data)
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
            <label className="text-black" htmlFor="model">Model</label>
            <Input {...register('model')} name='model' placeholder="Model"  />
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
            <label className="text-black" htmlFor="engine">Engine Size</label>
            <Input {...register('engine')} name='engine' placeholder="Engine"  />
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

export default ATVForm