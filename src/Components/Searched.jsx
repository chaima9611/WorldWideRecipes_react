
import React, { useState, useEffect } from 'react';
import {useParams} from 'react-router-dom';
import styled from "styled-components";
import{Link} from'react-router-dom';

function Searched() {
    const [searchedRecipes, setsearchedRecipes] = useState([]); 
    let params= useParams();


    const getSearchedRecipes= async (name) => {
        const data = await fetch (`https://api.spoonacular.com/recipes/complexSearch?apiKey=cceb6cc4812b4828b414ba5a3bd7cc04&query=${name}`);
        const recipes = await data.json();
        console.log(recipes);
        setsearchedRecipes(recipes.results);
    
      }

      useEffect (()=>{
        getSearchedRecipes(params.search);
      },[params.search])


  return (
    <Grid>
        
        {searchedRecipes.map((item)=>{

            return(
                   
                <Card key={item.id}>
                   <Link to={'/recipe/' +item.id}>
                   <img src={item.image} alt='' />
                   <h4>{item.title}</h4>
                   </Link>
                </Card>
            )


        })}
        </Grid>
  )
}

const Grid=styled.div`
  display:grid;
  grid-template-columns: repeat(auto-fit,minmax(20rem,1fr));
  grid-gap:5rem;
`;

const Card =styled.div`
  img {
    width:80%;
    border-radius:2rem;
    
   }
  a{
    text-decoraion:none;
  }
  h4{
    text-align:center;
    padding:0.5rem;
    margin:0px;
  }
`;

export default Searched