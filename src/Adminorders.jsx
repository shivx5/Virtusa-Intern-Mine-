import React from 'react'
import {RiDeleteBin6Line} from 'react-icons/ri'
import './order.css'

const data = [
        { userid: "Anom", orderid: 19, giftname: "Male"  ,price:100 , quantity:2},
        { userid: "Megha", orderid: 6, giftname: "Female" ,price:100 , quantity:3 },
        { userid: "Subham", orderid: 25, giftname: "Male" ,price:100 , quantity:4},
      ]
export default function Adminorders() {
  return (
    <div className='container-md'>
 
                   <div class="table-responsive-md m-5">
                     <table class="table">
                       <thead>
                             <tr>
                                <th>order id</th>
                                <th>user id</th>
                                <th>Giftname</th>
                                <th>price</th>
                                <th>quantity</th>
                                <th>Action</th>
                             </tr>
                       </thead>
                       <tbody className='tbody'>
                              {data.map((items,index)=>
                              {
                                return <tr className=' bg-primary'>
                                        <td>{items.orderid}</td>
                                        <td>{items.userid}</td>
                                        <td>{items.giftname}</td>
                                        <td>{items.price}</td>
                                        <td>{items.quantity}</td>
                                        <div className='d-flex '>
                                                <button className=' btn btn-outline' ><RiDeleteBin6Line/> </button>
                                        </div>
                                </tr>
                              })}
                       </tbody>
                     </table>
                   </div>



    </div>
  )
}
