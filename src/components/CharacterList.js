import React, { useEffect, useState } from "react";
import axios from "axios";

import SearchForm from './SearchForm';

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect

  const [query, setQuery] = useState("");
  const [data, setData] = useState([]);

  
  useEffect(() => {
// TODO: Add API Request here - must run in `useEffect`
//  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios
      .get(`https://cors-anywhere.herokuapp.com/https://rickandmortyapi.com/api/character/`, {
        params: {
          key: "$2a$10$1sdw09jOfZCj0ChmG9I2g.Q1uMT30My2M/aNAqc.aV3JTyNxb4f2m"
        }
      })
      .then(response => {
        // console.log("get request respone:", response);
        const characters = response.data.results.filter(character =>
          character.name.toLowerCase().includes(query.toLowerCase())
        );
        setData(characters);
      });
  }, [query]);

  const handleInputChange = event => {
    setQuery(event.target.value);
  };
  return (  
    <div className="character-list">
<SearchForm query={query} handleInputChange={handleInputChange} />
      <div className="character-list">
        {data.map(data => {
          
          return (
            <div className="character-list" key={data._id}>
                <span aria-label="RM-character" role="img">
                  <img src={data.image}/>
                </span>
              <h2>
                {data.name}
              </h2>
              <h3 className="capital">Status: {data.status}</h3>
              <h3 className="capital">Species: {data.species}</h3>
              <h3 className="capital">Gender: {data.gender}</h3>
              
              <h3 className="capital">Origin: {data.origin.name}</h3>
              <h3 className="capital">Current Location: {data.location.name}</h3>
            </div>
          );
        })}
      </div>
    </div>
  );



}
