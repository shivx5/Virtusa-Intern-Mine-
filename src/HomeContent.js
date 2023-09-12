import React from 'react'
import { useNavigate } from 'react-router-dom'
import {HiOutlineSearch} from 'react-icons/hi'

export default function HomeContent() {
  const navigate=useNavigate();
  return (
    
      <div className="home-content">
<div className='inside-home'>
<h3>UNIQUE AND QUIRKY</h3>
<h1>Gifts</h1>
<button onClick={()=>navigate('/user/login')}>Shop Now&nbsp;&nbsp;<span> <HiOutlineSearch /> </span> </button>
</div>
</div>
   
  )
}
