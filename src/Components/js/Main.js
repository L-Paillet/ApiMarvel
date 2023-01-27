import React, { useEffect, useState } from 'react';
import Card from './Card';
import axios from 'axios';
import '../css/Main.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function Main() {
    const [url, setUrl] = useState("https://gateway.marvel.com:443/v1/public/characters?&ts=1&apikey=def123424e6b91ff5a4bfaf48f28c695&hash=825d13ee454c86ec1f3226a6aa14aae5")
    const [item,setItem]=useState();
    const [search, setSearch] = useState("");
    // console.error(url, setUrl)
    
  useEffect(()=>{
    const fetch=async()=>{
      const res=await axios.get(url)
      setItem(res.data.data.results);
        console.log(res.data.data.results)
    }
    fetch();
  },[url])
  
  const searchMarvel=()=>{
    setUrl(`https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=${search}&ts=1&apikey=def123424e6b91ff5a4bfaf48f28c695&hash=825d13ee454c86ec1f3226a6aa14aae5`)
  }

    return (
      <>
        <div className='header'>
            <div className='searchBar'>
                <img src='./Assets/indexMarvel.png' alt='api_marvel'></img>
                <div className='sizeWidth'>
                    <div className='adjustSearch'>
                        <input type="search" placeholder='' className='searchInput'
                        onChange={e=>setSearch(e.target.value)}
                        onKeyDown={searchMarvel} />
                        {/* <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" /> */}
                        
                      {/* <div className="snowflake">✶</div>
                      <div className="snowflake">✶</div>
                      <div className="snowflake">✶</div>
                      <div className="snowflake">✶</div> */}
                    </div>
                </div>
            </div>
        </div>

      <div className='content'>
        {
          (!item)?<p>Not Found</p>:<Card data={item}/>
        }
      </div>
    </>
  )
}

export default Main