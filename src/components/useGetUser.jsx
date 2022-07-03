import React from 'react'
import { useQuery } from "react-query";
import axios from "axios";

function useGetUser(id) {
    const { status, data } = useQuery(
        ["user", id],
        async () => {
            const res = await axios.get(`/api/users/${id}`);
            return res.data;
        }
    );
    return { status, data };
}

export default useGetUser