import React, { useState, useContext, useEffect } from "react";
import { DiscogsListContext } from "./DiscogsListContext";
import Cards from "../components/Cards";

function DetailContext({ id, type }) {
  const { test } = useContext(DiscogsListContext);
  const [data, setData] = useState({});
  console.log("id", id);
  console.log("type", type);
  useEffect(() => {
    test();
    fetchData();
  }, []);

  //   const type = item.type;
  //   console.log("type", type);

  //   const idNr = item.id;
  //   console.log("idNr", idNr);

  const fetchData = async () => {
    const response = await fetch(`https://api.discogs.com/${type}s/${id}`);
    const data = await response.json();
    console.log("data", data);
    setData(data);
  };c


  return (
    <div>
      <h1>{data.uri}</h1>
      {/*       {data &&
        data(() => {
          const { id, title, cover_image } = data;
          return (
            <Cards
              key={data.id}
              id={data.id}
              cover_image={data.cover_image}
              title={data.title}
            />
          );
        })} */}
    </div>
  );
}

export default DetailContext;
