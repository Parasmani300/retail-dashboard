import CardStrip from '@/components/CardStrip'
import MyFooter from '@/components/MyFooter'
import 'bootstrap/dist/css/bootstrap.css'
import Link from 'next/link'
import React from 'react'

export default function ProductHome() {
  return (
    <div>
        <div className='container-fluid text-white' style={{backgroundColor:"red",height:"720px"}}>
            <center><h1>Product Management System</h1></center>
            <div className='row'>
                <div className='col-md-4' style={{marginTop:"60px"}}>
                    <center>
                        <h3>This is a Product Home.</h3>
                        <p>Add product/ View Product/ Update Product Attribute ans so on..</p>
                    </center>
                </div>
                <div className='col-md text-center'>
                    <center>
                        <Link href={"../products/AddProduct"} style={{textDecoration:"none"}}>
                            <CardStrip name={"Add a product"} />
                        </Link>
                        <Link href={"../products/ViewProduct"} style={{textDecoration:"none"}}>
                            <CardStrip name={"View/Update/Delete"} />
                        </Link>
                    </center>
                </div>
            </div>
            <MyFooter />
        </div>
    </div>
  )
}
