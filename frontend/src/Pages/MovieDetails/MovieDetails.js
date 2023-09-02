import React, { useContext } from "react";
import Movie from "../../Components/Movie/Movie";
import NavBar from "../../Components/NavBar/NavBar";
import { useSelector } from "react-redux";
// import { AppContext } from '../../AppContext' //For using AppContext

function MovieDetails() {
  // const {user,setUser} = useContext(AppContext) //Using AppContext

  const user = useSelector((state) => state.user.user);

  return (
    <div>
      <NavBar user={{ user }} />
      <Movie />
    </div>
  );
}

export default MovieDetails;
