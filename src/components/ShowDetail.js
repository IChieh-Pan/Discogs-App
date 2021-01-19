import React, { useContext } from 'react'
import DetailScreen from "./DetailScreen"
import { DiscogsListContext } from "../context/DiscogsListContext";



function ShowDetail() {

    const [item, setItem] = useContext(DiscogsListContext);
    const [results, setResults] = useContext(DiscogsListContext);


    return (
        <div>
            {results && results.map((results)=> {
                 const { id, title, cover_image, type, label, style} = results;
            return (
            
            <DetailScreen
                cover_image={results.cover_image}
                type={results.type}
                title={results.title}
                key={results.id}
            labe={results.label}
            />
            )
            })}
        </div>
    )
}

export default ShowDetail
