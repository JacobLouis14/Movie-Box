import React, { useContext } from "react";
import NavBar from "../../Components/NavBar/NavBar";
import FilterPosts from "../../Components/FilterPosts/FilterPosts";
import { useSelector } from "react-redux";
// import { AppContext } from '../../AppContext'

function FilterSearch() {
  // const {user,setUser} = useContext(AppContext) // For Using AppContext
  const user = useSelector((state) => state.user.user);

  return (
    <div>
      <NavBar user={{ user }} />
      <FilterPosts user={{ user }} />
    </div>
  );
}

export default FilterSearch;
