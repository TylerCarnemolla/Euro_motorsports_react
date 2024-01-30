import { useEffect, useState } from 'react'
import { server_calls } from '../api/server'

export const useGetData = () => {
    const [ HelmetData, setData ] = useState<[]>([])

    async function handleDataFetch() {
        const result = await server_calls.helmets.get();
        setData(result)
    }

    useEffect( () => {
        handleDataFetch();
    }, [])



  return {HelmetData, getData:handleDataFetch}
}


 