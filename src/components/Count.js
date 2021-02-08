import React, { useContext } from "react";
import { DiscogsListContext } from "../context/DiscogsListContext";
import Button from "@material-ui/core/Button";

function Count() {
  const { pagination, setPagination, search } = useContext(DiscogsListContext);
  console.log("l", pagination);

  const style = {
    display: "flex",
    marginTop: "65px",
    marginLeft: "50px",
    justifyContent: "flex-start",
  };

  /*   const handleResetWishList = () => {
    resetWishList()
  } */

  return (
    <div style={style}>
      {/* <button onClick= {handleResetWishList()}>Cleaer</button> */}
      <h3>Results:{pagination.items} </h3>
      {/* <h3>Alomst</h3> */}
    </div>
  );
}

export default Count;
