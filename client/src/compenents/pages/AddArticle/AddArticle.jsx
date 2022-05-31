import React from 'react'

import NavBar from '../../navBar/NavBar';
// import { useNavigate} from 'react-router-dom'
// import { ReactSession }  from 'react-client-session';
// import Axios from "axios";
import './addArticle.css'



const AddArticle = () => {


  // const uploadFn = ()=>{
  //   Axios.post('http://localhost:8000/api/addArticle',{
 
  //   }).then((response)=> {
  //     console.log(response)
  //   })
  // }

  return (
      <>
      

      <NavBar/>
      <br />
    <div className='addArticleFormContainer'>
        
        <form method='post'enctype="multipart/form-data"  action='http://localhost:8000/api/addArticle' className='artForm'>
            <label htmlFor="">article Title</label>
            <input name='artName' type="text" placeholder='article Title' />
            
            <label htmlFor="">article discription</label>
            <input name='ArtDisc' type="text" placeholder='article Discription' />
            
            <label htmlFor="artPrix">article Title</label>
            <input type="number" placeholder='Price' />

            <label htmlFor="artFile">upload photo</label>
            <input type="file" name='uploadedImg' />

            <input type="submit" value={'upload'} />
        </form>


    </div>
    </>
  )
}

export default AddArticle