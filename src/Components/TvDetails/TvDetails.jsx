import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './TvDetails.css';
import { Link, useParams } from 'react-router-dom';

export default function TvDetails() {

  let baseUrlImage = 'https://image.tmdb.org/t/p/original/';
    let{id}=useParams();
    let [tvData,setTvData]=useState({
        name:'',
        overview:'',
        poster_path:'',
        first_air_date:'',
        vote_average:0,
        vote_count:'',
    });

    let getTvData=async(tvMovie)=>{
      await axios.get(`https://api.themoviedb.org/3/tv/${tvMovie}?api_key=c636ed7787cc302d96bf88ccf334e0d8`)
      .then((res)=>{
        setTvData(res.data);
      }).catch((err)=>{
        console.log(err);
      })  
    }

    useEffect(()=>{
      getTvData(id);     
    },[])
    
    function watch(){
    alert(" ro77 et5ragg 3la EgyBest ya brooo 😂♥");  
    }
    
  return (
    <>
       <div className='container'>
            <div className='row tvDetailsContainer'>
                <div className='col-md-5 tvDetailsImg'>
                    <img src={baseUrlImage+tvData.poster_path} className='w-100 me-5'  alt="" />
                </div>
                <div className='col-md-7 mt-2 ps-5 TvDetailsCaption'>
                   <div>
                   <div className='headerTv'>
                   <h1 className='detailTvTitle'>{tvData.name}</h1>
                   <Link to={"/tvShows"} className='text-white'><i className='fa-solid fa-xmark fa-2x tvshowCloseIcon'></i></Link>
                   </div>
                   <p>Vote : {tvData.vote_average} </p>
                   <p>Vote Count : {tvData.vote_count}</p>
                   <p>First Air Date : {tvData.first_air_date}</p>
                   <h4>Overview :</h4>
                   <h5>{tvData.overview}</h5>
                   </div>
                    <div className='buttons'>
                    <div className=''> <button className='btnWatchnow btnColor mt-4 px-5 h5' onClick={watch}>watch</button> </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  );
}
