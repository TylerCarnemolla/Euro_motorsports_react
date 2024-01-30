import { useState} from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import GearModal from './GearModal.tsx'
import { server_calls } from '../api/server'
import {useGetData} from '../custom_hooks/FetchGearData.tsx'






const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width:150},
  { field: 'brand', headerName: 'Brand', width: 150 },
  {field: 'type', headerName: 'Type', width: 150},
  { field: 'color', headerName: 'Color', width: 150, editable: true,},
  {field: 'Size', headerName: 'Size', width:150},
  { field: 'price', headerName: 'Price', type: 'string', width: 150, editable: true,},
  
];



export default function GearGrid() {
  let [open, setOpen ] = useState(false)

  const { GearData, getData} = useGetData();
  const[selectionModel, setSelectionModel] = useState<string[]>([])


  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }
  

  

  const deleteData = () => {
    server_calls.gear.delete(selectionModel[0]);
    getData();
    console.log(`Selection model: ${selectionModel}`)
 
    
    }

  const refreshData = () => {
    getData();
  };

  


// datatable part
  
  

  return (
    <>
    <GearModal
       id = {selectionModel}
       open = {open}
       onClose={handleClose}
       refreshData = {refreshData}
      />
      <div className='flex flex-row'>
        <div>
          <button className='p-3 m-3 rounded-lg  bg-red-800 border-2 text-white border-grey-900 hover:bg-red-500'
          onClick={()=> handleOpen()}>
            Add Gear to Stock

          </button>
        </div>
        <button onClick={handleOpen} className="p-3 m-3 rounded-lg bg-red-800 border-2 border-grey-900 text-white hover:bg-red-500" >Update</button>
        <button onClick={deleteData} className="p-3 m-3 rounded-lg bg-red-800 border-2 border-grey-900 text-white hover:bg-red-500" >Delete</button>
      </div>


      <div className={open ? "hidden" : "container mx-10 my-5 flex flex-col"} style={{ height: 400, width: '90%' }}>
          <h2 className="p-3 bg-red-800 text-white my-2 rounded">Apparal and Accessories</h2>
              <div className=' rounded bg-gray-500'>
            <DataGrid
              rows={GearData}
              columns={columns}
              
              checkboxSelection={true}
              onRowSelectionModelChange={(item: any) => {
                setSelectionModel(item);
              }}
              style={{
              color:"text-white", // Set text color to white
            }}
            />
          </div>
        </div>

    
    
    </>

  );
}