import {Routes,Route} from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Navbar';
import Cart from './Cart/Cart';
import ProductList from './ProductList';
import Details from './Details';
import Default from './Default';
import React from 'react';
import Modal from './Modal';


function App() {
  
  return(
    <React.Fragment>
      <Navbar/>
      <Routes>
          <Route path='/' element={<ProductList/>}/>
          <Route path='/Details' element={<Details/>}  />
          <Route path='/Cart' element={<Cart/>}  />
          <Route path='/*' element={<Default/>}/>
      </Routes>
      <Modal/>
    </React.Fragment>
  )
}

export default App;
