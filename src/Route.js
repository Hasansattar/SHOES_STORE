import React from 'react';
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Product from './components/Product'
import ProductItems from './components/ProductItems'

import { BrowserRouter as Router,Switch,Route } from "react-router-dom";
  
import Navbar from './components/Navbar'

function routeConfig() {
  return (<>
    <div >
     <Router>
            <Navbar/>
         <Switch>
               <Route exact path="/" component={Home}/>
               <Route path="/about" component={About}/>
               <Route path="/contact" component={Contact}/>
               <Route exact path="/product" component={Product}/>
               <Route path="/product/:id" component={ProductItems}/> 
               <Route path="*" component={()=>
                   <h1>404 No Data Found</h1>
               }/> 
         </Switch>
     </Router>
    </div>
 </> );
}

export default routeConfig;
