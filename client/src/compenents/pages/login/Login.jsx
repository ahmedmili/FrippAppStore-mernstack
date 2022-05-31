import React, { useState } from 'react'
 import Header from '../../header/Header';
import Footer from '../../footer/Footer';
import { useNavigate } from 'react-router';
import { ReactSession }  from 'react-client-session';
import './Login.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    Form,
    Container,
     Button,
     Alert,
    //  Row,
     Col 
} from 'react-bootstrap';
import Axios from "axios";



function Login() {
  const navigate = useNavigate();
    const [userEmail,setUserEmail]= useState('')
    const [userpassword,setPassword] = useState('');
    
    const loginFN = () => {
      Axios.post("http://localhost:8000/api/login/", {
        email: userEmail,
        password: userpassword,
      }).then((response)=>{
        if(response.data.status === 2){
          // console.log("login succes")
          ReactSession.set('token',response.data.token)
          
          console.log('token = ' +ReactSession.get("token"))
           navigate('/')
          
        }
       
      })
    };

 
  
  
  return (
    <>
    <Header/>
 
    
        <Container className='login-container col-md-6 '>
        
       
        <Alert.Heading variant="seccess">Login Panel</Alert.Heading>
       
        <Form >
  <Form.Group className="mb-3" controlId="formEmail">
    <Form.Label>Email</Form.Label>
    <Form.Control type="email" placeholder="email" onChange={(e) =>setUserEmail(e.target.value)} />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-4" controlId="formPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password"  onChange={(e) =>setPassword(e.target.value)} />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button className='btn-send'  variant="primary" onClick={loginFN} >Login</Button>
  
</Form>

        </Container>

     <Footer/>
    
    </>
  )
}

export default Login