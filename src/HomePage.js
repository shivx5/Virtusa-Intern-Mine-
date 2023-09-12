import React, { useEffect, useState } from 'react'
import { Link, Outlet ,useNavigate} from 'react-router-dom'
import ProductEx from './ProductEx'
import {FiSearch} from 'react-icons/fi'
import axios from 'axios';
export default function HomePage() {
  const[Allgifts,setAllgifts]=useState([]);
        const navigate=useNavigate();
        const [CurrentUrl,SetCurrentUrl]=useState("http://localhost:8006/getallthemes");
        // useEffect(()=>
        // {
        //         axios.get(CurrentUrl).then(res=>
        //           {
        //             setAllthems(res.data);
        //           })
        // },[CurrentUrl])
  return (
    <div className='overall-home-container'>
      <div className='search-bar'>

      <h2 >Funky And Child Gifts Online - Unique & Cool Gifts</h2>
      <div className='search-icon'>
      <input placeholder='type to search '/><p><FiSearch/></p>
      </div>
      </div>
             
    
    <div className='scroll-order-items'>
{Allgifts.map}
    {ProductEx.map((items,index)=>      // || /user/getallthemes
           {
                return(
                  <div className='singleitems'>
                      <div className='items' key={index} >
                      <img src={items.image} onClick={()=> navigate(`/user/placeorder/${items.id}`) }></img>
                      <h5>{items.name}</h5>
                      <p>{items.price}</p>
                      </div>
                      </div>
                      )
           })}
                 
     </div>
     </div>
     
  )
}
