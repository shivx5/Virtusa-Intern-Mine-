import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'


export default function Login(props) {
  const[url,SetUrl]=useState('/');
        const navigate=useNavigate();
        const[windowPath,SetWindowpath]=useState()
        // console.log(window.location.pathname)
        useEffect(()=>
        {          
            SetWindowpath(window.location.pathname)
           
        },[window.location.pathname])


  const[CurrentUrl,SetCurrentUrl]=useState("http://localhost:8081");
  const[LoginDetails,SetLoginDetails]=useState({email:"",password:""})


  function getLoginDetails(event)
  {
    const{name,value}=event.target;
    SetLoginDetails((pre)=>
    {
      return{
            ...pre,
            [name]:value
      }
    })
  }

  
  function handleloginDetails(event) // important
  {
        // props.loginlogout();

        event.preventDefault();

      
          // (axios.post(CurrentUrl+windowPath,LoginDetails)).then((res)=>
          // {
          //   console.log(res);
          //    if(res.data==="user" && windowPath==='/user/login')
          //    {
          //     console.log("user response"+res);

          //     props.loginlogout();
          //     // console.log("navigate url"+url)
          //     navigate('/user/getallthemes');
          //     // navigate({url});

          //    }
          //   else if(res.data==="admin" && windowPath==='/admin/login')
          //    {
          //     console.log("Admin response"+res);

          //     props.loginlogout();
          //     // console.log("navigate url"+url)
          //     props.handleAdmin();
          //     navigate('/admin/gifts');
          //     // navigate({url});

          //    }
          //    else{
          //     navigate('/')
          //    }

          //   })
          // }
            
     
        
        
        if(LoginDetails.email==="admin") // check admin or   => || user/login
        {
          props.loginlogout();
               props.handleAdmin();

               navigate('/admin/gifts')

        }
        else {        
          props.loginlogout();                                          // || admin/login
               navigate('/user/getallthemes');
         }
      
        }
   
  return (
        <div className='login-details-form'>
      {/* <img src='https://gallery.yopriceville.com/var/albums/Free-Clipart-Pictures/Gifts-and-Chocolates-PNG-/Transparent_Christmas_Red_Gift_Boxes.png?m=1399672800'></img> */}
      <form className='Login-User' onSubmit={handleloginDetails}>
      <p>Email</p>
      <input type='text' className='details'  placeholder='email' name='email' id='email'  onChange={getLoginDetails} />
      <p>Password</p>
      <input type='text' className='details'  placeholder='password' name='password' id='password' onChange={getLoginDetails} />
      <input type='submit' className='submitbutton' id='loginbutton'  value='login'/>
      <label>Don't have an Account?</label>
    
      <Link to='/user/signin'>signup</Link>

    </form>
        </div>
  )
}
