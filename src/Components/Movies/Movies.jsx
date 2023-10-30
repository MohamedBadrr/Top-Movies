import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './Movies.css'
import { Link } from 'react-router-dom';
export default function Movies() {
  let [moviesToday , setMoviesToday] = useState([]);
  let baseUrlImage = 'https://image.tmdb.org/t/p/original/';
  let getMoviesToday=async()=>{
    await axios.get("https://api.themoviedb.org/3/trending/movie/day?api_key=c636ed7787cc302d96bf88ccf334e0d8")
    .then((res)=>{
      setMoviesToday(res.data.results);
    })
    .catch((err)=>console.log(err));
  }
  useEffect(()=>{
    getMoviesToday();
  },[])
  
  return (
    <>
      <div className='container my-4 moviesfix' >
        <h2 className='text-center titleMovies'>" Our Trending Movies Today "</h2>
        <div className='moviesbrdr'></div>
        <div className='row my-4'>
          {moviesToday.length>0?
          <> {moviesToday.map((movie,index)=>{
            return(
              
               <div key={index} className='col-md-3 mb-4 mediaMovie'>
                    <div className='MOVIE p-3'>
                      <img className='w-100'  src={baseUrlImage+movie.poster_path} alt=""  />
                      <h4>{movie.title}</h4>
                      {/* <div className='text-center'> <button className='btnWatchnow btnColor'>Watch Now</button> </div>   */}
                      <div className='text-center'> <button className='btnWatchnow btnColor '><Link to={`/movieDetails/${movie.id}`} className='btnColor'>Watch Now</Link></button> </div>
                      </div>
              </div>
              
            );
           })}</>
           :<>
           <div className='loadingPage'>
            <i className='fa fa-spinner fa-spin fa-5x'></i>
           </div></>
           }
        </div>
      </div>
    </>
  );
}
