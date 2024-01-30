import { useEffect, useState } from 'react'
import { server_calls } from '../api/server'

export const useGetData = () => {
    const [ ATVData, setData ] = useState<[]>([])

    async function handleDataFetch() {
        const result = await server_calls.atvs.get();
        setData(result)
    }

    useEffect( () => {
        handleDataFetch();
    }, [])



  return {ATVData, getData:handleDataFetch}
}


 