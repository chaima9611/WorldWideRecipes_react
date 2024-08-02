import  Pages  from './Pages/Pages';
import Categories from './Components/Categories';
import {BrowserRouter} from 'react-router-dom'
import Search from './Components/Search';
import styled from 'styled-components';
import {Link} from'react-router-dom';
import{GiKnifeFork} from 'react-icons/gi'



function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav>
        <GiKnifeFork />
        <Logo to={'/'}>delicious</Logo>
      </Nav>
        <Search />
        <Categories />
        <Pages /> 
     </BrowserRouter>
    </div>
  );
}
const Logo= styled(Link)`
  
   text-decoration:none;
   font-size:1rem;
   font-weight:400;
   font-family:'Lobster Two', cursive;
   
   
`
const Nav= styled.div`
  margin-top: 10px;
  padding:1rem 1rem;
  display: flex;
  justify-content:flex-start;
  alighn-item:center;
  svg{
    font-size:2rem;

  }
  :hover{
    opacity:0.5;
    
   }

`





export default App;
