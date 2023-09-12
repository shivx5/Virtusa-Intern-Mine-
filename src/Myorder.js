import React from 'react'
import './custom.css';
import {RiDeleteBin6Line} from 'react-icons/ri'
const data = [
  { name: "wood", quantity: 19 ,price: 100 },
  { name: "iron", quantity: 2, price: 2000 },
  { name: "lap", quantity: 5, price: 399},
]
export default function Myorder() {
  // const[data,setData]=useState([]);
  function DeteleData(key)
  {
    console.log(key)
    // data(preval=>
    //   {
    //    return preval.filter((val,key)=>
    //     {
    //       console.log(key);
    //       return key;
    //     })
    //   })
    // console.log(key);
  }
 
  return (
  //   <div className='myorder-div'>
  //     <h2 style={{textAlign:"center"}}>Your Orders</h2>
  //     <div className='totaldetails'>
  //     <div className='OrderBody' >
  //              <h2>Gift Name</h2>
  //              <h2>Price</h2>
  //              <h2>Quantity</h2>
  //              <h2>Alter</h2>

  //     </div>
  //     <div className='orderbodydetails'>
              
  //             {data.map((items,index)=>
  //             {
  //               return <div  className='eachorderdiv' >
  //                 <div key={index} className='singledataitems'><h3>{items.name}</h3><h3>{items.gender}</h3><h3>{items.age}</h3>
  //                  <div className='orderbutton'>         
  //                 <button onClick={()=>DeteleData(index)}>❌</button><button>📝</button>
  //                 </div>
  //               </div>
                
  //               </div>
  //             })

  //             }
              
  //     </div>
  //     </div>

  //   </div>
  <div className='container-sm text-center'>
    {/* <table className='table table-bordered  border-2'>

      <tr className='p-5'>
        <th>GiftName</th>
        <th>Price</th>
        <th>Quantity</th>
        <th>Edit</th>
      </tr>
      {data.map((items,index)=>
      {
        return(
          <tr className='m-2'>
            <td >{items.name}</td>
            <td>{items.price}</td>
            <td>{items.quantity}</td>
            <button onClick={()=>DeteleData(index)}>❌</button><button>📝</button>
          </tr>
        )
      })}
    </table> */}
    <table class="table table-hover table-scripted ">
  <thead>
    <tr>


      {/* <th scope="col">Image</th> */}
      <th scope="col">GiftName</th>
      <th scope="col">price</th>
      <th scope="col">Quantity</th>
      
    </tr>
  </thead>
  <tbody>
  {data.map((items,index)=>
      {
        return(
          <tr >
            {/* <td ><img className='img-fluid ' src='https://tse1.mm.bing.net/th?id=OIP.67lby9G8JNBzTlPcpo-w6QHaG7&pid=Api&P=0&h=180'></img></td> */}
            <td >{items.name}</td>
            <td>{items.price}</td>
            <td>{items.quantity}</td>
            <div className='d-flex '><button className=' btn btn-outline' onClick={()=>DeteleData(index)}><RiDeleteBin6Line/> </button>
              <button className=' btn btn-outline'  onClick={()=>DeteleData(index)}>📝</button>
      
            </div>
          
          
          
          
          </tr>
        )
      })}

  </tbody>
</table>
  </div>
   )
}
{/* <table>
<tbody>
<tr>
  <th>Gift</th>
  <th>Price</th>
  <th>Quantity</th>
  <th>Edit</th>
</tr>
{data.map((val, key) => {
  return (
    <div className='tablerow'>
    <tr  key={key}>
      <td>{val.name}</td>
      <td>{val.age}</td>
      <td>{val.gender}</td>     
      <td><button onClick={()=>DeteleData(key)}>❌</button><button>📝</button></td>
    </tr>
    </div>
  )
})}
</tbody>
</table> */}