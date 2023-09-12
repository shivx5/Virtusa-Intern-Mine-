import axios from 'axios';
import React, { useState,useEffect } from 'react'
import { Link ,useNavigate} from 'react-router-dom'

export default function Signup(props) {
  const[CurrentUrl,SetcurrentUrl]=useState("http://localhost:8081")
  const[url,setUrl]=useState('/user/login');
  const[windowPath,SetWindowpath]=useState()

        const navigate=useNavigate();
//   const navigate=useNavigate();
  const[UserSignDetails,SetUserSignDetails]=useState({email:"",username:"",mobileNumber:"",password:"",userRole:""})
  const[U2,SetU2]=useState({email:"",username:"",mobileNumber:"",password:"",userRole:""})

  const[AdminSignDetails,SetAdminSignDetails]=useState({email:"",mobileNumber:"",password:"",userRole:""})



  useEffect(()=>
  {
    // console.log("from effecf"+url);
      SetWindowpath(window.location.pathname);
  },[window.location.pathname])


function EnteringUsersigninDetails(event)
{
   const{name,value}=event.target;
   
    SetUserSignDetails((pre)=>
    {
     return{
       ...pre,
       [name]:value
     }
    })
   
   
  if( name!=='username')
  {
    SetAdminSignDetails((pre)=>
    {
     return {
       ...pre,
       [name]:value
     } } 
        )
  }
  SetU2((pre)=>
  {
    return{
      ...pre,
      [name]:value
    }
  })
    
   
   

}



function NewUserDate(event) 
{
  event.preventDefault();
  console.log(U2+"from U2");
  console.log("user sign in"+JSON.stringify(UserSignDetails));
  console.log("Admin sign in"+AdminSignDetails);

  console.log("signin..."+windowPath);
  // console.log("user sign in"+UserSignDetails);

  if(windowPath==='/user/signin')
  {
    axios.post(CurrentUrl+windowPath,UserSignDetails).then((res)=>
    {
      console.log(res);
    })

  }
    // axios.post(CurrentUrl+'/admin/signin',AdminSignDetails);

  if(windowPath==='/admin/signin')
  {
    // console.log(AdminSignDetails);

    axios.post(CurrentUrl+windowPath,U2).then(res=>{
      console.log(res);
    })
  }
  navigate(url);

 
}

  return (
    
      <div className='Sign-details-form'>
      <img src='https://gallery.yopriceville.com/var/albums/Free-Clipart-Pictures/Gifts-and-Chocolates-PNG-/Transparent_Christmas_Red_Gift_Boxes.png?m=1399672800'></img>
    <form onSubmit={NewUserDate} className='Sign-User'>
    <select name='userRole' className='selectbutton' id='admin/user' onChange={(event)=>
        {
          // console.log(event.target.value);
          const{name,value}=event.target;
          SetUserSignDetails((pre)=>
          {
               return{
                ...pre,
                [name]:value
               }
          })
          
          SetAdminSignDetails((pre)=>
          {
           return{
             ...pre,
             [name]:value
           }
          })

          SetU2((pre)=>
          {
            return{
              ...pre,
              [name]:value
            }
          })
            

                  if((event.target.value)==='Admin')
                {
                  
                  navigate('/admin/signin')
                
                 setUrl('/admin/login')
                //  console.log(url)
                }
                else
                {
                      
                        navigate('/user/signin');
                        setUrl('/user/login')
                        // console.log(url);
                }
        }               
       }>
      <option >User</option>
      <option >Admin</option>
      </select>  
      <input  className='details' type="text" placeholder='enter email'  id='email' name='email' onChange={EnteringUsersigninDetails} required/>
      <input className='details' type="text" placeholder='enter username' id='username' name='username' onChange={EnteringUsersigninDetails} required/>
      <input className='details' type="text" placeholder='enter mobile' id='mobileNumber' name='mobileNumber' onChange={EnteringUsersigninDetails} required/>
      <input className='details' type="text" placeholder='enter password' id='password' name='password' onChange={EnteringUsersigninDetails} required/>
      <input className='details' type="text" placeholder='enter confirm password' id='confirmPassword'   required/>
      <input className='submitbutton' type='submit' value='submit' id='submitButton'/>
      <label>already  have an account ?</label>
      <Link to={url} id='signinLink'>login</Link><br></br>
      </form>
      </div>
    
  )
}
