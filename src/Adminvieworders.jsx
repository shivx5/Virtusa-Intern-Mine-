import React from 'react'

export default function Adminvieworders() {
  const data = [
    { userid: "Anom", orderid: 19, giftname: "Male"  ,price:100 , quantity:2},
    { userid: "Megha", orderid: 6, giftname: "Female" ,price:100 , quantity:3 },
    { userid: "Subham", orderid: 25, giftname: "Male" ,price:100 , quantity:4},
  ]
  return (
    <div className='myorder-divadmin'>
    <h2 style={{textAlign:"center"}}>Customers Orders</h2>
    <div className='totaldetailsadmin'>
    <div className='OrderBodyadmin' >
             <h2>Order Id</h2>
             <h2>User Id</h2>
             <h2>Gift Name</h2>
             <h2>Price</h2>
             <h2>Quantity</h2>
             <h2>Alter</h2>



    </div>
    <div className='orderbodydetailsadmin'>
            
            {data.map((items,index)=>
            {
              return <div  className='eachorderdivadmin' >
                <div key={index} className='singledataitemsadmin'><h3>{items.orderid}</h3><h3>{items.userid}</h3><h3>{items.giftname}</h3><h3>{items.price}</h3><h3>{items.quantity}</h3>
                 <div className='orderbuttonadmin'>         
                <button >❌</button><button>📝</button>
                </div>
              </div>
              
              </div>
            })

            }
            
    </div>
    </div>

  </div>
  )
}
