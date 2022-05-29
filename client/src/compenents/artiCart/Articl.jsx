import React from 'react'
import './Articl.css'


const Articl = (props) => {
    
  return (
     
    <div>
        <div className="art">
            <img src={props.imagee} alt={props.err}  className='article-img'/>
            <span className='article-prix'> Prix {props.prix} dt</span>
            <span>  pseudo:  {props.ownerName}</span>
            <span className="article-button">read more info</span>
            <span className="article-button">add panie</span>

        </div>
    </div>
  )
}

export default Articl