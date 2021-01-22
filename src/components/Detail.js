import React, { useState, useContext, useEffect } from "react";
import { DiscogsListContext } from "../context/DiscogsListContext";
import Cards from "./Cards";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubheader from "@material-ui/core/ListSubheader";
import StarBorder from "@material-ui/icons/StarBorder";

function Detail({ id, type }) {
  const { test } = useContext(DiscogsListContext);
  const [data, setData] = useState({});
  const [hasTrackList, setHasTrackList] = useState(false);
  const [hasProfile, setHasProfile] = useState(false);
  console.log("id", id);
  console.log("type", type);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch(`https://api.discogs.com/${type}s/${id}`);
    const data = await response.json();
    console.log("data2", data);
    setData(data);
    if ("tracklist" in data) {
      setHasTrackList(true);
    } else if ("profile" in data) {
      setHasProfile(true)
    }
  };
  // const listName = data.map(item=>Object.keys(item))

  return (
    <div>
      {hasTrackList && (
        <ol>
          {data.tracklist.map((track, index) => (
            <li key={index}>
              {" "}
              {track.title}, {track.duration}{" "}
            </li>
          ))}
        </ol>
      )}
      {hasProfile && (
        <p>{data.profile}</p>
      )}
      <h1>{data.uri}</h1>
    </div>
  );
}

export default Detail;
