import React, { useContext } from "react";
import { DiscogsListContext } from "../context/DiscogsListContext";

function Count() {
  const { pagination } = useContext(DiscogsListContext);
  // console.log("l", pagination);

  const style = {
    display: "flex",
    marginTop: "40px",
    marginLeft: "25px",
    justifycontent: "flex-start",
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
