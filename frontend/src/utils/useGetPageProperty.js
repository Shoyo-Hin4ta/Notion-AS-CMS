import { useState, useEffect } from "react";
import { BASE_URL } from "./constants";
import axios from "axios";
import dateTime from "date-time";

const useGetPageProperty = (pageID) => {
    const [pageProperty, setPageProperty] = useState(null);

    const getPageData = async() => {
        // console.log(BASE_URL+"page/"+pageID);

        const response = await axios.get(BASE_URL+"getpageproperty/"+pageID);
        
        const timestamp = response.data.created_time;
        const dateObj = new Date(timestamp);
        const formattedDate = dateObj.toLocaleDateString('en-US', {
            month: 'long',
            day: 'numeric',
            year: 'numeric'
        });

        const img_url = (response.data.properties['Files & media'].files.length !== 0 &&
        response.data.properties['Files & media'].files[0].external &&
        response.data.properties['Files & media'].files[0].external.url) ||
      (response.data.properties['Files & media'].files[0]?.file?.url) ||
      "/placeholder.svg"

        // console.log(formattedDate);
        setPageProperty({
            "pageTitle" : response.data.properties.Name.title[0].plain_text,
            "created_at" : formattedDate,
            "img_url" : img_url
        });

        // console.log(pageProperty);
        }

  
    useEffect(() => {
        getPageData();
    }, [])

    return pageProperty;
}

export default useGetPageProperty