import React, { useEffect, useState } from "react";
// import { AppContext } from "./AppContext";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { login } from "./Redux/user/userSlice";

import "./App.css";
import Auth from "./Pages/Auth/Auth";
import HomePage from "./Pages/Home/HomePage";
import FilterSearch from "./Pages/FilterSearch/FilterSearch";
import MovieDetails from "./Pages/MovieDetails/MovieDetails";

function App() {
  const dispatch = useDispatch();

  /* Data of Logged User */

  // const [user, setUser] = useState(""); // For AppContext
  const user = useSelector((state) => state.user.user);

  const userToken = localStorage.getItem("token");
  useEffect(() => {
    if (userToken) {
      axios
        .post(
          "http://localhost:3001/users/auth",
          {},
          {
            headers: {
              Authorization: `Bearer ${userToken}`,
            },
          }
        )
        .then((response) => {
          // setUser(response.data); // For AppContext
          dispatch(login(response.data));
        })
        .catch((err) => console.log(err.response));
    }
    reduxIntializer();
  }, [userToken]);

  /* Intializing User with Redux */
  const reduxIntializer = () => {
    dispatch(login(user));
  };

  return (
    <div>
      {/* <AppContext.Provider value={{ user: user, setUser }}> */}
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/auth/register" element={<Auth />}></Route>
          <Route path="/search" element={<FilterSearch />}></Route>
          <Route path="/movie/:id" element={<MovieDetails />}></Route>
        </Routes>
      </Router>
      {/* </AppContext.Provider> */}
    </div>
  );
}

export default App;
