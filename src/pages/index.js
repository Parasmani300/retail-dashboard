import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import CardStrip from '@/components/CardStrip'
import Link from 'next/link'

export default function index() {
  return (
    <div className='container bg-grey'>
        <center>
          <h1 style={{marginBottom:"20px"}}>Retail Management System</h1>
          <Link href={"/products/ProductHome"} style={{textDecoration:"none"}}>
            <CardStrip
              name={"Product"}
            />
          </Link>
          <Link href={"/orders/OrderHome"} style={{textDecoration:"none"}}>
              <CardStrip name={"Orders"} />
          </Link>
          <Link href={"/inventory/InventoryHome"} style={{textDecoration:"none"}}>
              <CardStrip name={"Invemtory"} />
          </Link>
        </center>
    </div>
  )
}
