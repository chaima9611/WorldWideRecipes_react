import { useEffect, useState } from "react";
import styled from "styled-components";
import {Splide, SplideSlide} from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css"
import { ResetTvRounded } from "@mui/icons-material";
import {Link} from 'react-router-dom';

function Veggie() {
  const [Veggie,setVeggie] =useState([]);



    useEffect(() => {
      getVeggie();
    },[]);

  
  const getVeggie = async () => {
    const check = localStorage.getItem('veggie');
    if(check){
     setVeggie(JSON.parse(check));//to get the storage from local storage
    }else {
      const api = await fetch ('https://api.spoonacular.com/recipes/random?apiKey=cceb6cc4812b4828b414ba5a3bd7cc04&number=50&tags=vegetarian');
      const data = await api.json();
      localStorage.setItem('veggie', JSON.stringify(data.recipes));


      //console.log(data);
      setVeggie(data.recipes)
      console.log(data.recipes)

    }



    
    
  } 
  



  return (
    <div>
          <Wrapper>
           <h3> Veggies picks</h3>
            <Splide options={{
              perPage:4,
              arrows:true,
              drag:'free',
              gap :'5rem',
            }}> 
            {Veggie.map((recipe) => {
              return(
               <SplideSlide key={recipe.id}>
                 <Card>
                  <Link to={"/recipe/" + recipe.id}>
                   <p>{recipe.title}</p>
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
    p{
      position: absolute;
      z-index:10;
      left:45%;
     
      bottom:0%;
      transform:translate(-50%,0%);
      color:blue;
      width:80%;
      text-align: centre;
      font-weight:600;
      font-size:1rem;
      height:40%;
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

`

export default Veggie