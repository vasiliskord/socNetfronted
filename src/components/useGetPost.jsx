import React from 'react'
import {useQuery} from 'react-query'
import axios from 'axios'

function useGetPost(id) {
  const {status,data}= useQuery(
    ['post',id],
    async () => {
      const res = await axios.get(`/api/posts/${id}`)
      return res.data
    }
  )
  return {status,data}

}

export default useGetPost