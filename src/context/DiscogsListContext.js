import React, { useState, createContext, useEffect } from "react";

export const DiscogsListContext = createContext();

export const DiscogsProvider = (props) => {
  //   const [data, setData] = useState({});
  const [item, setItem] = useState([]);
  const [results, setResults] = useState([]);
  const [pagination, setPagination] = useState({});
  const [loading, setLoading] = useState(false);
  const [type, setType] = useState("artist");

  useEffect(() => {
    fetchData("");
  }, [null]);

  const fetchData = async (search) => {
    try {
      setLoading(true);
      const response = await fetch(
        `https://api.discogs.com//database/search?q=${search}&key=VQHnrRzlIkrymNpfRKaL&secret=KSDPUvXXFANxhBAjuHJAlXUMIFhMbite`
      );
      const data = await response.json();
      setLoading(false);

      // console.log("data", data);
      const pagination = data.pagination;
      // console.log("p", pagination);

      const results = data.results;
      // console.log("resultsperpage", results);

      setResults(results);
      setPagination(pagination);
      setItem(item);
    } catch (err) {
      alert(err);
    }
  };

  const value = {
    results,
    setResults,
    item,
    setItem,
    pagination,
    setPagination,
    fetchData,
    loading,
    setLoading,
    type,
    setType,
  };

  return (
    <DiscogsListContext.Provider value={value}>
      {props.children}
    </DiscogsListContext.Provider>
  );
};
