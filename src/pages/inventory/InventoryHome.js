import React from 'react'
import CardStrip from '@/components/CardStrip'
import MyFooter from '@/components/MyFooter'
import 'bootstrap/dist/css/bootstrap.css'

export default function InventoryHome() {
  return (
    <div>
        <div className='container-fluid text-white' style={{backgroundColor:"red",height:"720px"}}>
            <center><h1>Inventory Management System</h1></center>
            <div className='row'>
                <div className='col-md-4' style={{marginTop:"60px"}}>
                    <center>
                        <h3>This is a Inventory Home.</h3>
                        <p>Add Store Items/ View Store Items/ Update Store Items Attribute ans so on..</p>
                    </center>
                </div>
                <div className='col-md text-center'>
                    <center>
                        <CardStrip name={"Add a Store Items"} />
                        <CardStrip name={"Remove a Store Items"} />
                        <CardStrip name={"Update Store Items"} />
                        <CardStrip name={"View Store Item details"} />
                        <CardStrip name={"Add a WH Items"} />
                        <CardStrip name={"Remove a WH Items"} />
                        <CardStrip name={"Update WH Items"} />
                        <CardStrip name={"View WH Item details"} />
                    </center>
                </div>
            </div>
            <MyFooter />
        </div>
    </div>
  )
}
