import { useState} from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import BikeModal from './BikeModal.tsx'
import { server_calls } from '../api/server'
import {useGetData} from '../custom_hooks/FetchBikeData.tsx'
import { Box } from '@mui/material';






const columns: GridColDef[] = [
  
  { field: 'brand', headerName: 'Brand', width: 150 },
  {field: 'model', headerName: 'Brand', width: 150},
  { field: 'color', headerName: 'Color', width: 150,},
  {field: 'engine', headerName: 'Engine', width:150},
  { field: 'price', headerName: 'Price', type: 'string', width: 150},
  
];



export default function BikeGrid() {
  let [open, setOpen ] = useState(false)

  const { BikeData, getData} = useGetData();
  const[selectionModel, setSelectionModel] = useState<string[]>([])


  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }
  

  

  const deleteData = () => {
    server_calls.bikes.delete(selectionModel[0]);
    getData();
    console.log(`Selection model: ${selectionModel}`)
    refreshData();
 
    
    }

  const refreshData = () => {
    getData();
  };

  
  

  return (
    <>
    <BikeModal
       id = {selectionModel}
       open = {open}
       onClose={handleClose}
       refreshData = {refreshData}
      />
      <div className='flex flex-row'>
        <div>
          <button className='p-3 m-3 rounded-lg  bg-red-800 border-2 text-white border-grey-900 hover:bg-red-500'
          onClick={()=> handleOpen()}>
            Add MotorCycle to Stock

          </button>
        </div>
        <button onClick={handleOpen} className="p-3 m-3 rounded-lg bg-red-800 border-2 border-grey-900 text-white hover:bg-red-500" >Update</button>
        <button onClick={deleteData} className="p-3 m-3 rounded-lg bg-red-800 border-2 border-grey-900 text-white hover:bg-red-500" >Delete</button>
      </div>


      <div className={open ? "hidden" : "container mx-10 my-5 flex flex-col"} style={{ height: 400, width: '90%' }}>
          <h2 className="p-3 bg-red-800 text-white my-2 rounded">Motorcycles and Dirtbikes</h2>
              <div className=' rounded bg-gray-500'>
            <Box sx={{ height: 400, width: '100%' }}>
            <DataGrid
              rows={BikeData}
              columns={columns}
              initialState={{
                pagination: {
                  paginationModel: {
                    pageSize: 5,
                  },
                },
              }}
              pageSizeOptions={[5]}
              checkboxSelection={true}
              onRowSelectionModelChange={(item: any) => {
                setSelectionModel(item);
              }}
              style={{
              color:"text-white", 
            }}
            />
            </Box>
            
          </div>
        </div>

    
    
    </>

  );
}