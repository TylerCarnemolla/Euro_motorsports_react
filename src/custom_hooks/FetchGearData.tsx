import { useEffect, useState } from 'react'
import { server_calls } from '../api/server'

export const useGetData = () => {
    const [ GearData, setData ] = useState<[]>([])

    async function handleDataFetch() {
        const result = await server_calls.gear.get();
        setData(result)
    }

    useEffect( () => {
        handleDataFetch();
    }, [])



  return {GearData, getData:handleDataFetch}
}


 