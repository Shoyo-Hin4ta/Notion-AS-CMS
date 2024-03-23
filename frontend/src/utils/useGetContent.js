import { useEffect, useState } from 'react'
import { BASE_URL } from './constants'
import axios from 'axios'

const useGetContent = (pageID) => {

    const [pageJSON, setPageJSON] = useState(null);

    const getPageData = async() => {
        console.log(BASE_URL+"page/"+pageID);

        const response = await axios.get(BASE_URL+"page/"+pageID);
        
        // console.log(response.data.results);

        setPageJSON(response.data.results);

    }
  
    useEffect(() => {
        getPageData();
    }, [])

    return pageJSON;
}

export default useGetContent