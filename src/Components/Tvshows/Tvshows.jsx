import React from 'react';
import { useEffect, useState } from 'react';
import './Tvshows.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import $ from 'jquery';
export default function Tvshows() {
  let [tvShows , setTvShows] = useState([]);
  let [searchTvValue,setSearchTvValue]=useState('');
  let [searchTvList,setSearchTvList] = useState([]);
  let baseUrlImage = 'https://image.tmdb.org/t/p/original/';
  let getTvShows=async()=>{
    await axios.get("https://api.themoviedb.org/3/trending/tv/week?api_key=c636ed7787cc302d96bf88ccf334e0d8")
    .then((res)=>{
      setTvShows(res.data.results);
      
    })
    .catch((err)=>console.log(err));
  }
  useEffect(()=>{
    getTvShows();
  },[])
  

  let searchTvs = async(TvName)=>{
  let {data}  = await axios.get(`https://api.themoviedb.org/3/search/tv?query=${TvName}&api_key=c636ed7787cc302d96bf88ccf334e0d8`);
    setSearchTvList(data.results);
  }

   useEffect(()=>{
    searchTvs(searchTvValue);
   },[searchTvValue]);
  return (
    <>
        <div className='container my-4' >
        <h2 className='text-center titleTv mb-3 mt-5'>" Trending Weekly Tv Shows "</h2>
        <form class="d-flex my-2 my-lg-0">
              <input class="form-control me-sm-2 mb-1" type="text" placeholder="Search Tv Shows" value={searchTvValue}
               onChange={(e)=>{setSearchTvValue(e.target.value)}} id='searchInput'/>
      </form>
        <div className='row my-4'>
          {searchTvList.length?
          searchTvList.map((tv , index)=>{
            return(
              <div key={index} className='col-md-2 my-2'>
                  <div className='movie'>
                    <img className='w-100' src={baseUrlImage+tv.poster_path} alt="" />
                      <h4 className='text-center my-2 fw-bold'>{tv.name}</h4>
                      <div className='text-center'> <button className='btnWatchnow btnColor mt-4'><Link className='text-white' to={`/tvDetails/${tv.id}`}>Watch Now</Link></button> </div>
                  </div>
            </div>)
           }):
          <>
            {tvShows.length>0?
          <> {tvShows.map((tv,index)=>{ 
            return(
              
               <div key={index} className='col-md-3 mb-4'>
                    <div className='TV'>
                    <img className='w-100'  src={baseUrlImage+tv.poster_path} alt=""  />
                    <div className='tvTitle px-4 my-1 d-flex align-items-center justify-content-between'><h4 className='text-center  my-2'>{tv.name }</h4></div>                      
                    <div className='text-center'> <button className='btnWatchnow btnColor '><Link to={`/tvDetails/${tv.id}`} className='btnColor'>Watch Now</Link></button> </div>
                    </div>
              </div>
            );
           })}</>
           :<>
           <div className='loadingPage'>
            <i className='fa fa-spinner fa-spin fa-5x'></i>
           </div></>
           }	
          </>}
        </div> 
      </div>
    </>
  );
}
