import React, { useState, useContext } from "react";
import { DiscogsListContext } from "./DiscogsListContext";

function DetailContext() {
  const { item, setItem } = useContext(DiscogsListContext);
  const [data, setData] = useState();

  // export const DetailContext = createContext();
  // export const DetailProvider = (props) => {

  const type = item.type;
  console.log("type", type);
  const idNr = item.id;
  console.log("idNr", idNr);

  const fetchData = async () => {
    const response = await fetch(`https://api.discogs.com/${type}s/${idNr}`);
    const data = await response.json();
    console.log("da", data);
    setData(data);
  };

  return (
    <div>
      <h1>yerr{data}</h1>
    </div>
  );
}

export default DetailContext;
