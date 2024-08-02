
import styled from 'styled-components';
import {useState} from 'react';
import {FaSearch} from "react-icons/fa";
import {useNavigate} from 'react-router-dom';

function Search() {
  const [input, setInput] = useState('');
  const navigate = useNavigate();

  const submitat = (e) =>{
    console.log('hey');
    e.preventDefault();
    navigate('./searched/' + input);
  };


  return (
    <FormStyle onSubmit={submitat}>
      <div>
       <FaSearch></FaSearch>
        <input onChange={(e) => setInput(e.target.value)} type ="text" value={input} />
      </div>
      
    </FormStyle>
  )
}


const FormStyle = styled.form`
   margin:0rem 20rem;
   width:100%;
  
   
   margin : 1rem 19rem ;
  
   div{
    width:100%;
    position: relative;
    height: 5rem;
    
   }
   input{
    border:none;
    background: linear-gradient(35deg, #494949, #313131);
    font-size:1.5rem;
    color:white;
    padding:1rem 3rem;
    border:none;
    border-radius:1rem;
    outline: none;
     width:55%;
     height:55%;
    
     }

     svg{
      position:absolute;
      top:25%;
      left:0%;
      transform: translate(100%, -50%);
      color: white;

   }
   

`

export default Search