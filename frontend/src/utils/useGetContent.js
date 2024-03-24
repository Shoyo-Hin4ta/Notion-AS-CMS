import { useEffect, useState } from 'react'
import { BASE_URL } from './constants'
import axios from 'axios'

const useGetContent = (pageID) => {

    const [pageJSON, setPageJSON] = useState(null);

    const getPageData = async() => {
        const response = await axios.get(BASE_URL+"page/"+pageID);
        setPageJSON(response.data.results);

    }
  
    useEffect(() => {
        getPageData();
    }, [])

    return pageJSON;
}

export default useGetContent