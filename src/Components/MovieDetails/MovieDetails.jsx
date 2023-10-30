

import React, { useEffect, useState } from 'react';
import './MovieDetails.css'
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

export default function MovieDetails() {
    let baseUrlImage = 'https://image.tmdb.org/t/p/original/';
    let{id}=useParams();
    let [movieData,setMovieData]=useState({
        title:'',
        overview:'',
        poster_path:'',
        tagline:'',
        genres:[{
            id:'',
            name:'',
        }],
        release_date:'',
        voteCount:0,
        vote_count:'',
    });
    
    let getMovieData=async(idMovie)=>{
      await axios.get(`https://api.themoviedb.org/3/movie/${idMovie}?api_key=c636ed7787cc302d96bf88ccf334e0d8`)
      .then((res)=>{
        setMovieData(res.data);
      }).catch((err)=>{
        console.log(err);
      })  
    }

    useEffect(()=>{
    getMovieData(id);     
    },[])
    
    function watch(){
    alert(" ro77 et5ragg 3la EgyBest ya brooo 😂♥");  
    }
  return (
    <>
        <div className='container'>
            <div className='row movieDetailsContainer '>
                <div className='col-md-5 movieDetailsImg'>
                    <img src={baseUrlImage+movieData.poster_path} className='w-100 me-5'  alt="" />
                </div>
                <div className='col-md-7 mt-2 ps-5 movieDetailsmedia'>
                   <div>
                   <div className='headerMovie'>
                   <h1 className='detailMovieTitle'>{movieData.title}</h1>
                   <Link to={"/"} className='text-white'><i className='fa-solid fa-xmark fa-2x closeMovie'></i></Link>
                   </div>
                   <h5>{movieData.tagline}</h5>
                    <h3 className='my-3'>{movieData.genres[0].name}</h3>
                   <p>Vote : {movieData.vote_average} </p>
                   <p>Vote Count : {movieData.vote_count}</p>
                   <p>Release Date : {movieData.release_date}</p>
                   <h4>Overview :</h4>
                   <h5>{movieData.overview}</h5>
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
