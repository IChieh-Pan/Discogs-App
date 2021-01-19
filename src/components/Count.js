import React, { useContext } from "react";
import { DiscogsListContext } from "../context/DiscogsListContext";

function Count() {
  const {
    pagination,
    setPagination,
  } = useContext(DiscogsListContext);
    console.log("l",pagination)

  return (
    <div>
      <h1>total results: {pagination.items}</h1>
    </div>
  );
}

export default Count;
