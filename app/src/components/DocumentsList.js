import React from 'react'
import {
    useQuery,
} from "react-query";
import axios from "axios";

const response = {
    ok: true, data: ['Mock 1', 'Mock 2']
}

function useDocumentsList() {
    return useQuery("documentsList", async () => {
        const res = await axios.get("http://localhost:5000/get_file");

        return res.statusText === 'OK' && res.data ? res.data : response.data;
    });

}

export const DocumentsList = () => {
    const {data, isLoading} = useDocumentsList()


    if (isLoading) {
        return <p>...Loading</p>
    }
    if (data == null) {
        return <p className='error'>Error getting data</p>
    }

    return <div className='container'>{data?.map((documentName) => {
        return <p key={documentName}>{documentName}</p>
    })}</div>
}