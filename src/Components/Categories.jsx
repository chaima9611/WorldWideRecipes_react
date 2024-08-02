import {FaPizzaSlice, FaHamburger} from 'react-icons/fa';
import {GiNoodles, GiChopsticks} from 'react-icons/gi';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';


import React from 'react'

function Categories() {
  return (
    <List>
        <Slink to={'/Cuisine/Italian'}>
            <FaPizzaSlice/>
            <h4>Italian</h4>
        </Slink>

        <Slink to={'/Cuisine/American'}>
            <FaHamburger/>
            <h4>American</h4>
        </Slink>

        <Slink to={'/Cuisine/Thai'}>
            <GiNoodles/>
            <h4>Thai</h4>
        </Slink>

        <Slink to={'/Cuisine/:Japanese'}>
            <GiChopsticks/>
            <h4>Japanese</h4>
        </Slink>
        

        
    </List>
  )
}

const List= styled.div`
   display: flex; 
   justify-content:center;
   margin:1rem 0rem;
  
`;


const Slink= styled(NavLink)`
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   border-radius: 50%;
   margin-right: 2.5rem;
   text-decoration:none;
   background: linear-gradient(35deg, #494949, #313131);
   width:6rem;
   height: 6rem;
   cursor:pointer;
   transform: scale(0.8);
   transition: opacity 1s;
   transition: box-shadow 1s;
   
   h4{
    color:white;
    font-size:0.9rem;
    margin-top: 5rem;
    justify-content: center;
   }
   svg{
    position:absolute;
    color: white;
    font-size:1.9rem;
    margin-top: 0rem;
   
   }
   &.active{
    background: linear-gradient(to right, #f27121, #e94057 )
   }
   :hover{
    opacity:0.9;
    box-shadow:5px 5px 10px rgba(0, 0, 0, 0.15);
   }
   h4{
    color:white;
   }
`
export default Categories