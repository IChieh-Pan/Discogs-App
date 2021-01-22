import React, { useState, createContext, useEffect } from "react";

export const DiscogsListContext = createContext();


export const DiscogsProvider = (props) => {
  //   const [data, setData] = useState({});
  const [item, setItem] = useState([]);
  const [results, setResults] = useState([]);
  const [pagination, setPagination] = useState({});
  const [search, setSearch] = useState("underground-resistance");

  useEffect(() => {
    fetchData();
  }, [null]);

  const fetchData = async () => {
    const response = await fetch(
      `https://api.discogs.com//database/search?q=${search}&key=bsJCAGTsbOBTVFHLLILq&secret=fWchXQtBWETnYKeYagJLnBTqmWaaUokV`
    );
    const data = await response.json();
    // setData(data);

    console.log("data", data);

    const pagination = data.pagination;
    console.log("p", pagination);

    const results = data.results;
    console.log("resultsperpage", results);

    const item = results[12];
    console.log("item", item);
    console.log("type", item.type);

    setResults(results);
    setPagination(pagination);
    setItem(item);
  };

  const value = {
    /*    data,
        setData, */
    results,
    setResults,
    item,
    setItem,
    pagination,
    setPagination,
  };

  return (
    <DiscogsListContext.Provider value={value}>
      {props.children}
    </DiscogsListContext.Provider>
  );
};


