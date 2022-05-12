import { useParams } from "react-router-dom";
import { BASE_URL } from "../../global-context";
import { useEffect } from 'react';
import axios from "axios";

function LongUrl() {
    let { unique_code } = useParams();
    
    useEffect(() => {
        axios.get(BASE_URL+'url/get/'+unique_code).then((response) => {
            console.log(response.data[0].original_url);
            window.location.href = response.data[0].original_url;
        }).catch((error) => {   
            console.log(error);
        });
    },[]);


    return ( <></> );
}

export default LongUrl;