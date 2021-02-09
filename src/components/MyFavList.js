import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContex";

function MyFavList() {
  const { getFavorites } = useContext(AuthContext);

  const MyList = getFavorites.favorites(() => {
    console.log("L", MyList);
  });

  return <div></div>;
}

export default MyFavList;
