import React, { useState, useEffect } from "react";
import ListDisplay from "./ListDisplay.js";
let nextId = 0;

const Main = () => {
  const [name, setName] = useState("");
  const [artist, setArtist] = useState([]);


  const handleSubmit = () => {
        setArtist([
          ...artist,
          { id: nextId++, name: name }
        ])
        setName('');
  };

  const handleDelete=(id)=>{
    setArtist(
      artist.filter(a =>
        a.id !== id
      ))
      }
  console.log(artist)
  return (
    <>
      <h1>Inspiring sculptors:</h1>
      <input
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <button onClick={handleSubmit}>Add</button>
    
      <ListDisplay artist={artist} handleDelete={handleDelete} />
    </>
  );
};

export default Main;
