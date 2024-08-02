import { useEffect, useState } from "react";
import styled from "styled-components";
import {Splide, SplideSlide} from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css"
import {Link} from 'react-router-dom';




function Popular() {
  const [popular,setPopular] =useState([]);



    useEffect(() => {
      getPopular();
    },[]);

  
  const getPopular = async () => {
    const check = localStorage.getItem('popular');
    if(check){
      setPopular(JSON.parse(check));//to get the storage from local storage
    }else {
      const api = await fetch (`https://api.spoonacular.com/recipes/random?apiKey=cceb6cc4812b4828b414ba5a3bd7cc04&number=50`);
      const data = await api.json();
      localStorage.setItem('popular', JSON.stringify(data.recipes));


      console.log(data);
      setPopular(data.recipes)
      console.log(data.recipes)

    }



    
    
  } 
  




  return (
    <div>
          <Wrapper>
           <h3> Popular picks</h3>
            <Splide options={{
              perPage:3,
              arrows:true,
              drag:'free',
              gap :'5rem',
              
            }}> 
            {popular.map((recipe) => {
              return(
               <SplideSlide key={recipe.id}>
                 <Card>
                   <Link to={"/recipe/" + recipe.id}>
                   <h1>{recipe.title}</h1>
                   <img src={recipe.image} alt={recipe.title}/>
                   <Gradiant />
                   </Link>
                 </Card>
              </SplideSlide>
              )
              }) }

            </Splide>
          </Wrapper>
          

        
     
    </div>
  )
}
const Wrapper = styled.div `
    margin : 4rem 0rem ;



    `;
   
    
const Card = styled.div `
    min-height:15rem;
    min-width:15rem;
    border-radius:2rem;
    overflow: hidden;
    position: relative;

    img{
      border-radius:2rem;
      position: absolute;
      left:0;
      width:90%;
      height:90%;
      object-fit:cover;
    }
    h1{
      position: absolute;
      z-index:10;
      left:45%;
     
      bottom:0%;
      transform:translate(-50%,0%);
      color:white;
      width:80%;
      text-align: centre;
      font-weight:700;
      font-size:1.2rem;
      height:50%;
      display:flex;
      justify-conent:centre;
      align-item:centre;

    }
`;

const Gradiant= styled.div`
  z-index:3;
  position: absolute;
  width: 100%;
  height:100%;
  background: linear-gradient( rgba(255, 99, 71, 0.5)),rgba(255, 99, 71, 0.5));

`;


export default Popular