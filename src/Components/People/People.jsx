import axios from 'axios';
import React, { useState } from 'react';
import './People.css';

export default function People() {
  
  let [trendingPeople , setTrendingPeople] = useState([]);
  let baseUrlImage = 'https://image.tmdb.org/t/p/original/';
  let getPeople = async()=>{
    await axios.get(`https://api.themoviedb.org/3/trending/person/week?api_key=c636ed7787cc302d96bf88ccf334e0d8`)
    .then((res)=>{
      setTrendingPeople(res.data.results);
    }).catch((err=>{
      console.log(err);
    })); 
  }
  getPeople();
  return (
    <>
      <div className='container my-4'>
      <h2 className='text-center titleMovies'>" The Most famous Actors in The World "</h2>
        <div className='moviesbrdr'></div>

          <div className='row my-5 allPersons'>

            {trendingPeople.length>0?
            <>
            {trendingPeople.map((person)=>{
              return(
                <div className='col-md-4 PERSON'>
                  <div className='row my-4'>
                      <div className='col-md-6 personImg'>
                        <img src={baseUrlImage+person.profile_path} alt="photo"  className='w-100 personImg'/>
                      </div>
                      <div className='col-md-6 personInfo'>
                        <h2 className='mb-5 namePerson'>{person.name}</h2>
                        <h5 className='fw-bold'>Some of his Works :</h5>
                        <ul className='workss'>
                          <li>
                            {person.known_for[0].title}
                          </li>
                          <li>
                            {person.known_for[1].title}
                          </li>
                        </ul>
                      </div>

                  </div>

                </div>
              )
            })}
            </>:
            <>
          <div className='loadingPage'>
            <i className='fa fa-spinner fa-spin fa-5x'></i>
          </div>
            </>}

          </div>


      </div>
    </>
  );
}
