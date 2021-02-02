import React, { useContext } from "react";
import { DiscogsListContext } from "../context/DiscogsListContext";

function Count() {
  const { pagination, setPagination, search } = useContext(DiscogsListContext);
  console.log("l", pagination);

  
  const style = {
    display: "flex",
    marginTop: "80px",
    marginRight: "50px",
    justifyContent: "flex-end",
  };

  const handleResetWishList = () => {
    resetWishList()
  }


  return (
    <div style={style}>
      <button onClick= {handleResetWishList()}>Cleaer</button>
      <h3>{pagination.items} </h3>
      <h6>search results</h6>
    </div>
  );
}

export default Count;
