import React, { useContext } from "react";
import { DiscogsListContext } from "../context/DiscogsListContext";

function Count() {
  const {
    data,
    setData,
    results,
    setResults,
    item,
    setItem,
    pagination,
    setPagination,
  } = useContext(DiscogsListContext);

  return (
    <div>
      <h1>{pagination}</h1>
    </div>
  );
}

export default Count;
