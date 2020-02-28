import React from "react";
import styled from "styled-components";

const SearchFormStyles = styled.section`
border: 5px #dbd7d7 solid;
width: fit-content;
border-radius: 15px;
margin-bottom: 1%
padding: .5%;
`;


export default function SearchForm({query, handleInputChange}) {
 
  return (
    <SearchFormStyles className="search-form">
           <form className="search">
        <input
          type="text"
          onChange={handleInputChange}
          value={query}
          name="name"
          tabIndex="0"
          className="prompt search-name"
          placeholder="search by name"
          autoComplete="off"
        />
      </form>
    </SearchFormStyles>
  );
}
