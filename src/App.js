import LandingPage from "./LandingPage";
import {Route,Routes,Link, Navigate, useNavigate} from 'react-router-dom'
import { redirect } from "react-router-dom";
import {HiHome} from 'react-icons/hi'
import {TfiGift} from 'react-icons/tfi'
import {FaFeather} from 'react-icons/fa'
import {BiCart} from 'react-icons/bi'
import AppLayout from "./AppLayout";
import Protect from "./Protect";
import { useState } from "react";
import HomePage from "./HomePage";
import Myorder from "./Myorder";
// import './App.css';
import PlaceOrder from "./PlaceOrder";
import Login from "./Login";
import Signup from "./Signup";
import Admingifts from "./Admingifts";
import Adminvieworders from "./Adminvieworders";
import AdminThemes from "./Adminthemes";
import HomeContent from "./HomeContent";
import {TiThMenu} from 'react-icons/ti'
import {CgClose} from 'react-icons/cg'
import Adminorders from "./Adminorders";
function App() {
  const navigate=useNavigate();
  const [execute,SetExecute]=useState(false);
  const[UserAdmin,SetUserAdmin]=useState(false);
  const[admin,setAdmin]=useState(false);
  const[sidebar,setSidebar]=useState(false);
  // const[content,homeContent]=useState(true);
  function handleAdmin()
  {
    setAdmin(true);
  }
  function handleLoginLogout()
  {
    // console.log(execute);
    SetExecute(!execute);
  }
  function handleUserAdmin()
  {
    SetUserAdmin(true);
  }
  function CreateSideNavBar()
  {
    setSidebar(!sidebar);
  }
  
  return (

    
  <div className="App" >
    
  <header>
    <div className="Navbar-login">
     

     {!sidebar && <div className="hoverbuton"><button onClick={CreateSideNavBar}><TiThMenu/></button></div>}
    </div>
    <div className="main-text">
    <p>SHOPCIRCUIT</p>
    </div>
    <div >
    {execute?(admin ? <div className="MenuBar-Allignment">
      <div className="group-links"><Link className="group-links" to='/admin/gifts' element={<Admingifts/>}>  <TfiGift/></Link></div>
      <div className="group-links"><Link className="group-links" to='/admin/allthemes' element={<AdminThemes/>}> <FaFeather/></Link></div>
      <div className="group-links"><Link className="group-links" to='/admin/order' element={<Adminvieworders/>}><BiCart/></Link></div>
      </div>:<div className="MenuBar-Allignment">
      <div className="group-links"><Link className="group-links" to='/user/getallthemes' element={<HomePage/>}><HiHome/> </Link></div>
      <div className="group-links"><Link className="group-links" to='/user/myorder' element={<HomePage/>}><BiCart/> </Link></div>
      </div>):null}
      
    </div>
    </header>

   {/* {content &&  <div className="home-content">

      <h3>Your Inspiration</h3>
      <h1>For You</h1>
      <button onClick={()=>{navigate('/user/login');homeContent(false)}}>Shop Now </button>

    </div> }
      */}
    
    

      
      {/* {<div className="MenuBar-Allignment">
      <div className="group-links"><Link className="group-links" to='/user/app' element={<AppLayout/>}>  Layout</Link></div>
      <div className="group-links"><Link className="group-links" to='/user/landing' element={<LandingPage/>}> Landing</Link></div>
      <div className="group-links"><Link className="group-links" to='/user/home' element={<HomePage/>}>Home</Link></div>
      <div className="group-links"><Link className="group-links" to='/user/myorder' element={<HomePage/>}>order</Link></div>
      <button onClick={handleLoginLogout}>Logout</button> </div>} */}
       
      {/* {<div className="MenuBar-Allignment">
      <div className="group-links"><Link className="group-links" to='/admin/gifts' element={<Admingifts/>}>  gifts</Link></div>
      <div className="group-links"><Link className="group-links" to='/admin/allthemes' element={<AdminThemes/>}> themes</Link></div>
      <div className="group-links"><Link className="group-links" to='/admin/order' element={<Adminvieworders/>}>orders</Link></div>
      <button onClick={handleLoginLogout}>Logout</button> </div>} */}

{sidebar && <div className="Navbar-login-body">
      
                <div className="nav-items">
                   <h2 onClick={()=>navigate('/user/login')}>Login</h2>
                   {execute && <button onClick={()=>{handleLoginLogout();navigate('/user/login')}}>Logout</button>} 
                   <h2>About</h2>
                </div>  
                <div><button onClick={CreateSideNavBar} style={{color:"red",marginTop:"45px"}}><CgClose/></button></div> 
                
          </div> }

    
      <Routes>
        {/* <Route exact path="/"><Navigate to="/user/login" /></Route> */}
        <Route path="/user/login" element={<Login loginlogout={handleLoginLogout} handleAdmin={handleAdmin} />}></Route>
        <Route path="/admin/login" element={<Login loginlogout={handleLoginLogout} handleAdmin={handleAdmin}/>}></Route>
        <Route path="/user/signin" element={<Signup/>}></Route>
        <Route path="/admin/signin" element={<Signup/>}></Route>


    {!execute && <Route path="/"  element={<HomeContent />}></Route>}
         
          <Route path='/user' element={<Protect handleExecute={execute}/>}>
         
            <Route path='app'element={<AppLayout/>}></Route>
            <Route path='landing' element={<LandingPage/>}></Route>
            <Route path="getallthemes" element={<HomePage/>}></Route>
            <Route path="placeorder/:id" element={<PlaceOrder/>}></Route>
            <Route path="myorder" element={<Myorder/>}></Route>
          
          </Route>
         
          <Route path='/admin' element={<Protect handleExecute={execute}/>}>      
          <Route path='gifts'element={<Admingifts/>}></Route>
          <Route path='allthemes' element={<AdminThemes/>}></Route>
          <Route path="order" element={<Adminorders/>}></Route>
          
          </Route>
          <Route path="*" element={<Login/>}/>
      </Routes>


      {/* { !execute && <button onClick={handleLoginLogout}>Perform Login</button>} */}

    
    </div>
    
  );
}

export default App;

