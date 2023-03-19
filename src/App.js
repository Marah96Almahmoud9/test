import React, {Component}from 'react';
import { BrowserRouter , Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About  from './components/About';
import Nav from './components/Nav';
  class App extends Component{
   render() 
   {
     return(
 
      <BrowserRouter>
      <div className='App' >
        <Nav />
   <Routes>
    <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
   </Routes>
        </div>
     </BrowserRouter>  
     )
   }
  }
export default App;
