import React, { useContext } from "react";
import { DiscogsListContext } from "../context/DiscogsListContext";
import Button from "@material-ui/core/Button";

function Count() {
  const { pagination, setPagination, search } = useContext(DiscogsListContext);
  console.log("l", pagination);

  const style = {
    display: "flex",
    marginTop: "80px",
    marginRight: "50px",
    justifyContent: "flex-end",
  };

  /*   const handleResetWishList = () => {
    resetWishList()
  } */

  return (
    <div style={style}>
      <button /* onClick= {handleResetWishList()} */>Cleaer</button>
      <h3>{pagination.items} </h3>
      <h1>Alomst</h1>

    </div>
  );
}

export default Count;
