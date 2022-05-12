import { useEffect, useState } from 'react';
import './short_url.style.css';
import { BASE_URL } from '../../global-context';
import { SHORT_URL } from '../../global-context';
import axios from 'axios';

function ShortUrl() {
    const [longUrl, setLongUrl] = useState("");
    const [shortUrl, setShortUrl] = useState("");
    const [loading, setLoading] = useState(false);
    const [submit, setSubmit] = useState(false);

    const generateURL = () => {
        if(longUrl == "") return alert("Please enter valid URL");
        setLoading(!loading);
        setSubmit(true);
    };

    useEffect(() => {
        if(submit == true){
            axios.post(BASE_URL+'url/create', {
                original_url: longUrl
              })
              .then(function (response) {
                setLoading(!loading);
                setSubmit(false);
                setShortUrl(SHORT_URL+response.data.unique_code);
              })
              .catch(function (error) {
                setLoading(!loading);
                setSubmit(false);
              });
        }
    },[submit]);
   

    return ( 
        <>
            <div className='container'>
                <h1>Generate Short URL</h1>
                <div className='row'>
                    <input className='form-control' name='long_url' value={longUrl} onChange={(e) => setLongUrl(e.target.value)} />
                    <button className='btn' type='button' onClick={generateURL}> Generate Short URL </button>
                </div>
                <div className='row'>
                    {
                        loading && <div className='short_url'>Loading...</div>
                    }
                    {
                        shortUrl && <div className='short_url'>{shortUrl}</div>
                    }
                </div>
            </div>


        </>
     );
}

export default ShortUrl;