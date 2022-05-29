import React from 'react'
import Login from '../login/Login';
import Register from '../login/Register';
import Header from '../../header/Header';
import {Routes,Route} from 'react-router-dom'
const Home = () => {
  // var currentLocation = window.location.href;
  // console.log(currentLocation.href )
  // ="http://localhost:3000/main/Home.jsx"
  if ( (window.location.href === "http://localhost:3000/home/login" ) || (window.location.href === "http://localhost:3000/home/register" )) {
    return (
      <div> 
          <Header/>
        { <Routes>
              <Route path="/login" element={<Login />}/> 
              <Route path="/register" element={<Register />}/> 
          </Routes> }
      </div>
    )
  }else{
    return(
      <>
      hello
      </>
    )
  }
  // return (
  //   <div> 
  //     { <Routes>
  //           <Route path="/login" element={<Login />}/> 
  //           <Route path="/register" element={<Register />}/> 
  //       </Routes> }
  //   </div>
  // )
}

export default Home