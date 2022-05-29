import React from 'react'
import { ReactSession }  from 'react-client-session';
import {useNavigate } from 'react-router-dom'

const Home = () => {
  let navigate = useNavigate();

  const Logout = () =>{
    ReactSession.remove('token')
    navigate('/login')
  }

  if(ReactSession.get('token')){
    return (
    <div>
      {ReactSession.get('token')}

      <button onClick={Logout}>logout</button>
    </div>
  )}
  else if(!(ReactSession.get('token'))){
    navigate('/login')
    return (
     <>
     <p>no token available</p>
    </>
    )
  }
}

export default Home