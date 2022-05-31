import React, { useState } from 'react'
import Header from '../../header/Header';
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
import { useNavigate } from 'react-router';


function Register() {
  let navigate = useNavigate();
    const [FirstName,setFirstName]= useState('')
    const [LastName, setLastName] = useState('');
    const [userpassword,setPassword] = useState('');
    const [userMail,setUserMail] = useState('');
    const [userPhone,setUserPhone] = useState('');
    const [userCity,setUserCity] = useState('');
    const [userPhoto,setUserPhoto] = useState('');

    const [errorNameMessage, setErrorNameMessage] = useState('');
    const [errorMailMessage, setErrorMailMessage] = useState(' We\'ll never share your email with anyone else.');
    
    const [usersList, setUsersList] = useState([]);   
    
    const addUsers = () => {
      // if (validerString(FirstName)&&(ValidateEmail())){
        Axios.post("http://localhost:8000/api/add", {
        first_name: FirstName,
        last_name: LastName,
        password: userpassword,
        phone_num:userPhone,
        adress:userCity,  
        email:userMail,
      })
      .then((response)=>{
        // console.log(Response.status)
        if (response.status === 200){
          // window.location.replace('http://localhost:3000/home')
          navigate('/login')
        }
      })
    // }
    };

  const getUsers = () => {
    Axios.get("http://localhost:8000/api/affiche").then((response) => {
      setUsersList(response.data);
    });
  };
  // functon to test alphabetique string
  function isAlphaOrParen(str) {
    return /^[a-zA-Z()]+$/.test(str);
  }
// this block will validate the name 
  // function validerString(str) {
  //   if(str === "") {
  //     setErrorNameMessage("* obligatoir")
  //     return false
  //   }
  //   else if(!isAlphaOrParen(str)){
  //     setErrorNameMessage("* invalide name")
  //     return false
  //   }
  //   else if((str.length>10 ) || (str.length<4)){
  //     setErrorNameMessage("*name must be between 4 and 10 character")
  //     return false
  //   }
  //   else {
  //  return true
  //   }
  // }

  // function ValidateEmail(mail)
  // {
  // var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  // if(mail.match(mailformat))
  // {return true;}
  // else
  // {
  //   setErrorMailMessage('inalide mail')
  // return false;
  // }
  // }
  
  return (
    <>
    <Header/>
        <Container className='login-container col-md-6 '>
        
       <Col>
        <Alert.Heading variant="seccess">Register Panel</Alert.Heading>
        </Col>
        <Col>
        <Form >
  <Form.Group className="mb-3" controlId="formFirstName">
    <Form.Label>user name</Form.Label>
    <Form.Control type="text" placeholder="Enter votre nom" onChange={(e) =>setFirstName(e.target.value)} />
    <Form.Text className="text-muted nameMessageText">
      {errorNameMessage}
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formLastName">
    <Form.Label>Last name</Form.Label>
    <Form.Control type="text" placeholder="Enter votre prenom" onChange={(e) =>setLastName(e.target.value)} />
    <Form.Text className="text-muted">
     {errorMailMessage}
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formEmail">
    <Form.Label>your mail</Form.Label>
    <Form.Control type="email" placeholder="your mail" onChange={(e) =>setUserMail(e.target.value)} />
    <Form.Text className="text-muted">
     {errorMailMessage}
    </Form.Text>
  </Form.Group>
  
  <Form.Group className="mb-3" controlId="formVille">
    <Form.Label>your city</Form.Label>
    <Form.Control type="text" placeholder="your city" onChange={(e) =>setUserCity(e.target.value)} />
    <Form.Text className="text-muted">
     {errorMailMessage}
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password"  onChange={(e) =>setPassword(e.target.value)} />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formPhone">
    <Form.Label>phone number</Form.Label>
    <Form.Control type="text" placeholder="phone number pls"  onChange={(e) =>setUserPhone(e.target.value)} />
  </Form.Group>
  
  <Form.Group className="mb-3" controlId="formImage">
    <Form.Label>profile photo</Form.Label>
    <Form.Control type="file"   onChange={(e) =>setPassword(e.target.value)} />
  </Form.Group>


  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button className='btn-send'  variant="primary" onClick={addUsers} >register</Button>
  {/* <Button className='btn-send'  variant="primary" onClick={getUsers} >affiche</Button> */}
  
</Form>
</Col>
        </Container>

        
        {usersList.map((val, key) => {
          return (
            <div className="employee">
              <div>
                <table>
                  <tr>
                    <td>First Name: {val.Fname}</td>
                    <td>Last Name{val.Lname}</td>
                    <td>Password: {val.password}</td>
                  </tr>
                </table>
  
                </div>
              </div>
      
            )
          }
        )}
    
    </>
  )
}

export default Register