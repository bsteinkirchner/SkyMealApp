import React, { useState, useEffect } from 'react';
import {useParams} from "react-router-dom";
import styled from "styled-components";
import {Link} from "react-router-dom";

function SearchByIngredients() {
    
    const [searchIngredients, setSearchIngredients] = useState([]);
    let params = useParams();
    
    const getSearchIngredients = async (name) => {
    const data = await fetch(`https://api.spoonacular.com/recipes/findByIngredients?apiKey=f8f47a129e804d5cab904cbc372d4f3b&ingredients=${name}`);
    const recipes = await data.json();
    setSearchIngredients(recipes.results);
  };

  useEffect(() => {
    getSearchIngredients(params.search)
  }, [params.search]);

  return (
    <Grid>
      {searchIngredients.map((item) => {
        return (<Card key={item.id}>
          <Link to={"/recipe/" +item.id}>
            <img src={item.image} alt="" />
            <h4>{item.title}</h4>
          </Link>
        </Card>
        );
      })}
    </Grid>
  );
}

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  grid-gap: 3rem;
`;
const Card = styled.div`
  img{
    width: 100%;
    border-radius: 2rem;
  }
  a{
    text-decoration: none;
  }
  h4{
    text-align: center;
    padding: 1rem;
  }
  h3{
    text-align: left;
  }
`;

export default SearchByIngredients;