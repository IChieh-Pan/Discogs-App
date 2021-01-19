import React, { useState, useContext } from "react";
import { DiscogsListContext } from "./DiscogsListContext";

function DetailContext() {
    
    const [results, setResults] = useContext(DiscogsListContext);
    
    // export const DetailContext = createContext();
    // export const DetailProvider = (props) => {

const fetchData = async () => {
    const response = await fetch(
      `https://api.discogs.com/${type}/${id}`
    );



    }


    return (
        <div>
            
        </div>
    )
}

export default DetailContext
