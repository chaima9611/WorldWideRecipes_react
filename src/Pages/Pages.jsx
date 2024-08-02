import Home from './Home'
import {Route,Routes, useLocation} from 'react-router-dom'
import Cuisine from "../Components/Cuisine";
import Searched from '../Components/Searched';
import Recipe from './Recipe';
import {AnimatePresence} from 'framer-motion';




function Pages() {
  const location = useLocation();
  return (
    <AnimatePresence exitBeforeEnter>
      
         <Routes location={location} key={location.pathname}>
              <Route path="/" element={<Home/>} exact />
              <Route path="/cuisine/:type" element={<Cuisine/>} exact />
              <Route path="/searched/:search" element={<Searched/>} exact />
              <Route path="/recipe/:name" element={<Recipe />} exact />
          </Routes>
      
        
    </AnimatePresence>
  )
}

export default Pages