import React, { useState, useEffect } from 'react'
import { ReactSession }  from 'react-client-session';
import { useNavigate } from 'react-router-dom'
import Axios from "axios";
import './home.css'

import Login from '../login/Login'
import NavBar from '../../navBar/NavBar';
import Articl from '../../artiCart/Articl.jsx'
import {atriclsInfo} from '../../artiCart/Articl.js'
// import banner from '../../assists/banner.jpg'


const Home = () => {
  const [artsListe,setArtsListe] = useState([])
  var [loggedin,setLoggedIn] = useState(false)
  const sToken = ReactSession.get('token')
  // console.log(sToken)
  let navigate = useNavigate();
  
  // const Logout = () =>{
  //   ReactSession.remove('token')
  //   navigate('/login')
  // }

  const verifToken = (sToken) => {
    Axios.get("http://localhost:8000/", {
    headers: {
      token: sToken
    }
  }).then((response)=>{
      setLoggedIn(response.data.loggedin)
    })
  }
//   useEffect(()=>{
//     Axios.get("http://localhost:8000/getArticles",).then((response)=>{
//        fetch('http://localhost:8000/getArticles')
//        .then((res)=>{
//         console.log(res)
//         return res.json()
//        }).then((result)=>{
//         result.map (function(value) {
//           console.log(value)    
//     })
//        })
//     })
//   }
// ,[])
// 
  useEffect(()=>{
    Axios.get("http://localhost:8000/getArticles",).then((response)=>{
     setArtsListe(response.data)
    })
  }
,[])
  

  if(sToken){
    verifToken(sToken)
  }

    if(loggedin === false) {
        return(<>
          
         
          <Login/>
        </>)
    
      }
    
      else if(loggedin===true){
        return(
          <>
          
          <NavBar />

          <img src="assists/banner.jpg"alt='page banner' className='banner'/>

          <div className="articles-container">
            

         { 
         artsListe.map (function(value) {
              console.log(value.path)
              const serverBaseURI = 'http://localhost:8000'
          return( //uploadedImgs\\
              <Articl className='articels' imagee={`${serverBaseURI}/uploadedImgs\\${value.art_photo}`} 
              prix={value.art_prix}
              err={'article image not found'}
              // ownerName ={value.owner_name}
              />
          )
        })
            }

          </div>

          </>
        )
      
      }
    
}

export default Home