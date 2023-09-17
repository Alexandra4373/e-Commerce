import React from 'react';
import './App.css';
import {Routes, Route} from "react-router-dom";
import {Home, Shop, About, Contact} from './containers';


const App = () => {
  return (
    <React.Fragment>
			<Routes>
				<Route path="" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
				<Route path="/about" element={<About />} />
				<Route path="/shop" element={<Shop />} />
				<Route path="/team" element={<Contact/>} />
				
			</Routes>
		</React.Fragment>
    // <div className="App">   
    // <Home/> 
    //   <Navbar/>
    //   <Header/>
    //   <Share/>
    //   <Footer/>
    // </div>
  );
}

export default App;
