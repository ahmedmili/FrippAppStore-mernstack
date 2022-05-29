import React from 'react'
import './sidebar.css'
import 'bootstrap/dist/css/bootstrap.min.css'
 import { Link,useNavigate } from 'react-router-dom'


const Sidebar = () => {
  let navigate = useNavigate()
  return (
      <>
         
      <div className='lis bg-info'  >
      <ul>

          <li as={Link} to={'/upload_file'}>add article</li>
          <li>zeb</li>
          <li>ysf</li>
          <li>fik</li>
      </ul>

      </div>
   
      </>
    
  )
}

export default Sidebar