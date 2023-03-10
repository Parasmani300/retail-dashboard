import React from 'react'
import CardStrip from '@/components/CardStrip'
import MyFooter from '@/components/MyFooter'
import 'bootstrap/dist/css/bootstrap.css'

export default function OrderHome() {
  return (
    <div>
        <div className='container-fluid text-white' style={{backgroundColor:"red",height:"720px"}}>
            <center><h1>Order Management System</h1></center>
            <div className='row'>
                <div className='col-md-4' style={{marginTop:"60px"}}>
                    <center>
                        <h3>This is a Order Home.</h3>
                        <p>Add Orders/ View Orders/ Update Orders Attribute ans so on..</p>
                    </center>
                </div>
                <div className='col-md text-center'>
                    <center>
                        <CardStrip name={"Add a Order"} />
                        <CardStrip name={"Remove a Order"} />
                        <CardStrip name={"Update Order"} />
                        <CardStrip name={"View Order details"} />
                    </center>
                </div>
            </div>
            <MyFooter />
        </div>
    </div>
  )
}
