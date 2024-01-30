import { useEffect, useState } from 'react'
import { server_calls } from '../api/server'

export const useGetData = () => {
    const [ BikeData, setData ] = useState<[]>([])

    async function handleDataFetch() {
        const result = await server_calls.bikes.get();
        setData(result)
    }

    useEffect( () => {
        handleDataFetch();
    }, [])



  return {BikeData, getData:handleDataFetch}
}


 