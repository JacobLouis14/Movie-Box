import React, { useContext } from "react";
import NavBar from "../../Components/NavBar/NavBar";
import Banner from "../../Components/Banner/Banner";
import RowPosts from "../../Components/RowPosts/RowPosts";
import {
  action,
  comedy,
  documentries,
  horror,
  originals,
  romantic,
} from "../../urls";
// import { AppContext } from "../../AppContext";
import { useSelector } from "react-redux";

function HomePage() {
  /*Passing User Value */
  // const { user, setUser } = useContext(AppContext);
  const user = useSelector((state) => state.user.user);
  return (
    <div>
      <NavBar user={{ user }} />
      <Banner user={{ user }} />
      <RowPosts url={originals} title="Top Rated" />
      <RowPosts url={action} title="Action" isSmall />
      <RowPosts url={comedy} title="Comedy" isSmall />
      <RowPosts url={horror} title="Horror" isSmall />
      <RowPosts url={romantic} title="Romantic" isSmall />
      <RowPosts url={documentries} title="Documentries" isSmall />
    </div>
  );
}

export default HomePage;
