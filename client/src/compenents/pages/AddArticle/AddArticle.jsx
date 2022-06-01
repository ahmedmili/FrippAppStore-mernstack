import React,{useState} from 'react'
import { ReactSession }  from 'react-client-session';
import NavBar from '../../navBar/NavBar';
// import { useNavigate} from 'react-router-dom'
// import { ReactSession }  from 'react-client-session';
// import Axios from "axios";
import './addArticle.css'




const AddArticle = () => {
  const [artName,setArtName] = useState('')
  const [artDisc,setArtDisc] = useState('')
  const [artPrix,setArtPrix] = useState(0)
  const [artColor,setArtColor] = useState('')
  const [artState,setArtState] = useState('accepted')
  const [artSize,setArtSize] = useState('')
  const [uploadStatus,setUploadStatus] = useState('')
  // const [] = useState('')
const imageHandler = (event) =>{

  const file = event.targer.files[0]
  const formData = new FormData()
  formData.append('uploadedImg',file)

  fetch('http://localhost:8000/api/addArticle',{
    method : 'POST',
    body : {
      formData,
      art_name:artName,
      art_description : artDisc,
      art_state : artState,
      art_prix : artPrix,
      art_color : artColor,
      art_taille : artSize
    },
    headers : {
      'Accept' : 'multipart/form-data',
      token : ReactSession.get('token')
    },
    credentials: 'include'
  })
  .then(res => res.json())
  .then(res=>{
    setUploadStatus(res.msg)
  })
  .catch(err =>{
    console.error(err)
  })
}
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
            <input name='artName' type="text" placeholder='article Title' onChange={(e)=>setArtName(e.target.value)} />
            
            <label htmlFor="">article discription</label>
            <input name='artDisc' type="text" placeholder='article Discription'onChange={(e)=>setArtDisc(e.target.value)} />
            
            <label htmlFor="">article color</label>
            <input name='artColor' type="text" placeholder='article color'onChange={(e)=>setArtColor(e.target.value)} />
            
            
            <label htmlFor="">article size</label>
            <input name='artSize' type="text" placeholder='article size'onChange={(e)=>setArtSize(e.target.value)} />
            
            <label htmlFor="artPrix">article Price</label>
            <input type="number"name='artPrix' placeholder='Price' onChange={(e)=>setArtPrix(e.target.value)} />

            <label htmlFor="artFile">upload photo</label>
            <input type="file" accept="image/*" multiple={false} onChange={imageHandler}  name='uploadedImg' />
<h1>{uploadStatus}</h1>
            <input type="submit" value={'upload'} />
        </form>


    </div>
    </>
  )
}

export default AddArticle