import React, { useState, createContext, useEffect } from "react";

export const DiscogsListContext = createContext();

export const DiscogsProvider = (props) => {
  const [data, setData] = useState({});
  const [item, setItem] = useState([]);
  const [results, setResults] = useState([]);
//   const [pagination, setPagination] = useState({});
  const [search, setSearch] = useState("underground-resistance");

  useEffect(() => {
    fetchData();
  }, [null]);

  const fetchData = async () => {
    const response = await fetch(
      `https://api.discogs.com//database/search?q=${search}&key=bsJCAGTsbOBTVFHLLILq&secret=fWchXQtBWETnYKeYagJLnBTqmWaaUokV`
    );
    const data = await response.json();
    setData(data);

    console.log("data", data);

    const dataValue = Object.values(data);
    console.log("dataValue", dataValue);
    const pagination = dataValue[0];
    console.log("p", pagination);
    const results = dataValue[1];
    console.log("resultsperpage", results);

    const item = results[22];
    console.log("item", item);
    setResults(results);
    // setItem(item);
  };

  return (
    <DiscogsListContext.Provider value={[results, setResults]}>
      {props.children}
    </DiscogsListContext.Provider>
  );
};
