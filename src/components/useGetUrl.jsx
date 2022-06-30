import React from 'react'
import axios from 'axios'
import { useQuery } from 'react-query'

function useGetUrl(url) {
    const { status, data } = useQuery(
        [url],
        async () => {
            const res = await axios.get(url)
            return res.data
        }
    )
  return (
    {status,data}
  )
}

export default useGetUrl