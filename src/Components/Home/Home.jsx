import React, { useEffect, useState } from 'react';
import axios from "axios";
import './Home.css';
import { Link } from 'react-router-dom';
export default function Home() {
 
  let [trendingMovies , setTrendingMovies] = useState([]);
  let [trendingTvShows , setTrendingTvShows] = useState([]);
  let [searchValue,setSearchValue]=useState('');
  let [searchMoviesList,setSearchMoviesList] = useState([]);
  let baseUrlImage = 'https://image.tmdb.org/t/p/original/';
  let getTrendingItems=async(mediaType,callback)=>{

    await axios.get(`https://api.themoviedb.org/3/trending/${mediaType}/week?api_key=c636ed7787cc302d96bf88ccf334e0d8`)
    .then((res)=>{
      callback(res.data.results);
    }).catch((err=>{
      console.log(err);
    }));

  }
  useEffect(()=>{
    getTrendingItems("movie",setTrendingMovies);
    getTrendingItems("tv",setTrendingTvShows);
  },[]);


  let searchMovies= async(movieName)=>{
    let {data} = await axios.get(`https://api.themoviedb.org/3/search/movie?query=${movieName}&api_key=c636ed7787cc302d96bf88ccf334e0d8`);
    setSearchMoviesList(data.results);
  }

   useEffect(()=>{
    searchMovies(searchValue);
   },[searchValue]);

  return (
    <>
     <div className='container my-2 '>
     <form class="d-flex my-2 my-lg-0 mt-5 testinput">
              <input class="form-control me-sm-2 mb-1 " type="text" placeholder="Search Movies" value={searchValue}
               onChange={(e)=>{setSearchValue(e.target.value)}} id='searchInput'/>
      </form>
     </div>
      <div className='container'>
          <div className='row mb-3 mt-2 moviess'>
             {searchMoviesList.length ? searchMoviesList.map((movie , index)=>{
              return(
                <div key={index} className='col-md-2 my-2'>
                    <div className='movie'>
                      <img className='w-100' src={baseUrlImage+movie.poster_path} alt="" />
                        <h4 className='text-center my-2 fw-bold'>{movie.title}</h4>
                        <div className='text-center'> <button className='btnWatchnow btnColor mt-4'><Link to={`movieDetails/${movie.id}`}>Watch Now</Link></button> </div>
                    </div>
              </div>)
             }):<>
                {trendingMovies.length >0 ? <>
                  <div className='col-md-4 mb-4 show'>
               <div className=' w-100 texting'>
                    <div className='brdr mt-2 mb-4 w-25'></div>
                    <div className='caption'>
                      <h2>Trending</h2>
                      <h2>Movies</h2>
                      <h2>To Watch Now</h2>
                      <p className='mt-3 secondColor'>
                          Most wathed Movies This Week
                      </p>
                    </div>
                    <div className='brdr w-100'></div>
                </div>
            </div>
             {trendingMovies.map((movie , index)=>{
              return(
                <div key={index} className='col-md-2 my-3 px-4'>
                    <div className='movie pb-2'>
                      <img className='w-100' src={baseUrlImage+movie.poster_path} alt="" />
                        <h4 className='text-center my-2 fw-bold'>{movie.title}</h4>
                        <div className='text-center'><button className='btnWatchnow'><Link className='btnWatchnow' to={`movieDetails/${movie.id}`}>Watch Now</Link></button></div>
                    </div>
              </div>)
              }) }
             <div className='row mt-5 '>
             <h2 className='text-center tvshowsTitle TV_SHOW'>" Our Trending TV Shows "</h2>

          <div className='col-md-4 show '>
            
          <div className=' w-100'>
              <div className='brdr mb-4 w-25'></div>
                    <div className='caption'>
                      <h2>Trending</h2>
                      <h2>Tv Shows</h2>
                      <h2>To Watch Now</h2>
                      <p className='mt-3 secondColor'>
                          Most wathed Movies This Week
                      </p>
                    </div>
                    <div className='brdr w-100'></div>
                </div>
            </div>
             {trendingTvShows.map((tv , index)=>{
              return(
                <div key={index} className='col-md-2 my-3 TV_SHOW'>
                    <div className='movie p-2'>
                      <img className='w-100' src={baseUrlImage + tv.poster_path} alt="" />
                        <div className='my-1 d-flex align-items-center justify-content-between moviesmallcard'><h4 className='text-center my-2'>{tv.name }</h4></div>
                        <div className='  text-center'><button className='w-100 btnWatchnow'><Link className='btnWatchnow' to={`tvDetails/${tv.id}`}>Watch Now</Link></button> </div>
                    </div>
              </div>)
             })}
            </div>
                </>:
                <>
                <div className='homeLoadingPage'>
                   <i className='fa fa-spinner fa-spin fa-5x'></i>
                 </div></>
                 
                }
            </> 
            }
          </div>

          

          
      </div>
    </>
  );
}
