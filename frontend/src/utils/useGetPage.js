import axios from 'axios';
import { useEffect, useState } from 'react'
import { BASE_URL } from './constants';

const useGetPage = (name) => {

    const [pages, setPages] = useState([]);
    console.log(name)

    const getAllPages = async() => {
        const response = await axios.get(BASE_URL+"getpages/"+name);
        console.log(response.data)
        setPages(response.data.results)
    }

    useEffect(() => {
        getAllPages();
    },[]);

    return pages
}

export default useGetPage