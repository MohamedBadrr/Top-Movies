

import * as React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "./Components/App/App";
import Home from './Components/Home/Home';
import Movies from "./Components/Movies/Movies";
import Tvshows from "./Components/Tvshows/Tvshows";
import People from "./Components/People/People";
import Notfound from "./Components/Notfound/Notfound";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
import Test from "./Components/Test/Test";
import MovieDetails from "./Components/MovieDetails/MovieDetails";
import TvDetails from "./Components/TvDetails/TvDetails";
import Footer from "./Components/Footer/Footer";
export const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children:[
        {
            path: "/",
            element:<Home />
        },
        {
            path: "movies",
            element:<Movies />
        },
        {
            path: "tvshows",
            element:<Tvshows />
        },
        {
            path: "people",
            element:<People />
        },
        {
            path: "*",
            element:<Home />
        },
        {
            path: "login",
            element:<Login />
        },
        {
            path: "register",
            element:<Register />
        },
        {
            path: "test",
            element:<Test />
        },
        {
            path:"movieDetails/:id",
            element:<MovieDetails/>
        },
        {
            path:"tvDetails/:id",
            element:<TvDetails /> 
        },
       
        
      ]
    }
    
  ]);
