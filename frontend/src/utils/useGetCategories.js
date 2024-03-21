import { useEffect, useState } from "react"
import axios from "axios";
import { BASE_URL } from "./constants";

const useGetCategories = () => {

    const [categories, setCategories] = useState([]);

    const getCategories = async() => {
        const response = await axios.get(BASE_URL+"database")
        // console.log(response.data);
        setCategories(response.data)
    }
    
    useEffect(() => {
        getCategories();
    }, [])

    return categories;
}

export default useGetCategories