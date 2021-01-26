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
      <h2>Underground Resistance: {pagination.items}</h2>
    </div>
  );
}

export default Count;
