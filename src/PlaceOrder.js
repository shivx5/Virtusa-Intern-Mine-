import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import ProductEx from './ProductEx'
import {Multiselect} from 'multiselect-react-dropdown'
import axios from 'axios';
let themedetails=[
  {themeId: 1, themeName: "Abstract", themeDetails: 'Apply some abstract design', themePrice: 50},
  {themeId: 2, themeName: 'Nature', themeDetails: 'Get along with Nature', themePrice: 30},
  {themeId: 16, themeName: 'Artistic', themeDetails: 'Digital Art', themePrice: 60}]
export default function PlaceOrder() {

  const{id}=useParams();
  const[CurrentUrl,SetCurrentUrl]=useState("http://localhost:8081")
  const [Orderdetails,SetOrderdetails]=useState({orderName:"",orderDate:"",orderAddress:"",orderPhone:"",orderEmail:"",orderProduct:"",orderDescription:"",thememodel:{}})
  const[multiSel,Setmultiselect]=useState([]);
  const[Exform,setExForm]=useState(false);
  let themefromDb=[];

  // const[themefromDb,setThemefromDb]=useState([]);
  // let multisinglearray=multiSel[0];
  let names=['siva','sri','raj','saku'];
  Object.assign(Orderdetails.thememodel,multiSel);

  const Singleproduct=ProductEx.find(pro=>
    {
      return pro.id===parseInt(id);
    })

    useEffect(()=>
    {
               axios.get(CurrentUrl+'/user/getAllTheme').then((res)=>
               {
               res.data.map((val)=>
               {
                themefromDb.push(val.themeName);
                console.log(val.themeName);
               })
                // console.log("from all themes"+res);
                
               })
    },[CurrentUrl])

    function submitOrderDetails(event)
  {
    event.preventDefault();
    setExForm(!Exform);
    // console.log(multiSel);
    Orderdetails.orderProduct=(document.getElementById('entername').value);
    // Orderdetails.orderProduct=Singleproduct.name;
    console.log(Orderdetails);
    // console.log(themefromDb);
    // axios.post(CurrentUrl+'/user/addOrder',Orderdetails);
  
  }
  function handleThemeSelection(event)
  {
    console.log(document.getElementById('selectevent').value)
    console.log(event);
    console.log("executed")
  }

  function handleOrderDetails(event)
  {
    // console.log("changing");
    const{name,value}=event.target;
     SetOrderdetails((pre)=>
     {
       return{
        
         ...pre,[name]:value
       }
     })
  //  SetOrderdetails((pre)=>
  //  {
  //   return{
  //     ...pre,multiSel
  //   }
  //  })
  }
  function selectEvent(event)
  {
    // console.log(event);
    Setmultiselect(()=>
    {
      return{
        ...event
      }
    })
  }
  return (
    <div className='placeorder-details' >

        <div className='singleitemsimg'>

           <img src={Singleproduct.image}></img>

        </div>
        <div className='singleitemsdetails'>
        <h3 style={{fontSize:"20px",color:"green"}}>{Singleproduct.price}</h3>
        <h2 >{Singleproduct.name}</h2>
        
        <h3>{Singleproduct.details}</h3>
        <p>Cutest of all is our Product .This design is always in high demand among loves and the product is a rich quality and precious . Bright colors on this makes it more attractive and a perfect gift for couples.</p>
       <ul>
        <li>Delivery: 3-5 Days</li>
        <li>Product: `${Singleproduct.name}`</li>
        <li>Material: BestQuality</li>
        <li>Capacity: Approx 250 ml</li>
        <li>Style: Awesome</li>
       </ul>
       <p><strong>Personalized Message:</strong> There are emotions attached to every gift and we promise to deliver the product with such emotions. Please send in your message to be included with the product @9821088795 via Whatsapp.</p>

       <button className='buynow' onClick={()=>setExForm(!Exform)}>Buy Now</button>

        </div>
      
        
         {Exform && <><div className='overlay-styles' onClick={()=>setExForm(!Exform)}></div>
         <form onSubmit={submitOrderDetails} className='order-details-form'>
         <input className='allforminputs' type='text' placeholder='enter Your Name' id='enterName' name='orderName'  onChange={handleOrderDetails}/>
         <input className='allforminputs' type='date' placeholder='enter Your order date' id='enterDetails' name='orderDate'  onChange={handleOrderDetails}/>
         <input className='allforminputs' type='text' placeholder='enter Your Address' id='enterAddress' name='orderAddress'  onChange={handleOrderDetails}/>
         <input className='allforminputs' type='number' placeholder='enter Your Phone Number' id='enterPhoneNo' name='orderPhone'  onChange={handleOrderDetails}/>
         <input className='allforminputs' type='email' placeholder='enter Your Email id' id='enterEmailNo' name='orderEmail'  onChange={handleOrderDetails}/>
         <input className='allforminputs'  placeholder={`Order price : Rs ${Singleproduct.price}`} id='orderPrice'  readOnly/>
         <input className='allforminputs'  placeholder={`Gift model : ${Singleproduct.name}`} id='entername' value={Singleproduct.name} name='orderProduct'  readOnly/>
         <input className='allforminputs'  placeholder='enter Description' id='enter' name='orderDescription'  onChange={handleOrderDetails}  />
         {/* <h2 className='formthemetext' >Select themes you want</h2> */}
         
         <select name="themes" id="themes">
            {themedetails.map((item)=>
            {
              return <option id='selectevent' onClick={(event)=>console.log(event.target.value)} value={item.themeId}>{item.themeName+" ₹"+item.themePrice}</option>
            })}
           </select>
      </form>
     </>}
    </div>
  )
}
