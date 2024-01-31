import HelmetForm from "./HelmetForm";
import React from "react";


interface Props {
  id?: string[];
  open:boolean;
  onClose: () => void;
  refreshData: () => void;
  
 
}

const HelmetModal: React.FC<Props> = (props) => {
  if (!props.open) return <></>;

 


  return (
    <div className="flex justify-center ">

    <div
      className=" flex justify-center  "
      onClick={props.onClose}
      >
        <div
          className=' flex  z-1 mt-20  rounded'
          onClick={(e)=>{
            e.stopPropagation()
          }}
        >
          <div className='w-full flex flex-col'>
            <div className="flex flex-row space-apart">
              <p className="flex justify-center p-3 m-5 rounded-lg text-white bg-red-800 border-2 border-grey-900 hover:bg-red-500"
                onClick={props.onClose}>
                Back
                </p>
            </div>
            <div className="flex flex-col items-center text-center text-white my-3 p-2">
              <HelmetForm refreshData = {props.refreshData} onClose={props.onClose} id={props.id} />
            </div>
          </div>

      </div>
    </div>
    </div>
  )
}
export default HelmetModal