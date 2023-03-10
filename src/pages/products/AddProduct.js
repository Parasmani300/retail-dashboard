import React, { useEffect, useState } from 'react'
import CardStrip from '@/components/CardStrip'
import MyFooter from '@/components/MyFooter'
import 'bootstrap/dist/css/bootstrap.css'
import axios from 'axios';

export default function AddProduct() {
    const [color,setColor] = useState("");
    const [size,setSize] = useState("");
    const [costPrice,setCostPrice] = useState("");
    const [upc,setUpc] = useState("");
    const [countryOfOrigin,setCountryOfOrigin] = useState("");
    const [name,setName] = useState("");
    const [shortDesc,setShortDesc] = useState("");
    const [longDesc,setLongDesc] = useState("");

    const addData = async() => {
        const url = `http://localhost:8084/api/products/add`;
        const payload = {
            color,
            size,
            costPrice,
            upc,
            countryOfOrigin,
            name,
            shortDesc,
            longDesc
        }
        const snap = await axios.post(url,payload);
        const status = await snap.status;
        console.log(status);
    };

    useEffect(()=>{
        
    },[]);

  return (
    <div className='container-fluid' style={{backgroundColor:"red",height:"1080px"}}>
        <center>
        <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
            <li className="breadcrumb-item"><a href="#">Home</a></li>
            <li className="breadcrumb-item active" aria-current="page">Library</li>
        </ol>
        </nav>
          <h1 className='text-white'>Add a Product</h1>
        </center>
        <div className='container'>
            <div className='form-group'>
                <label className='text-white'>UPC</label>
                <input type={"text"} name="UPC" className='form-control' onChange={(e)=>setUpc(e.target.value)} />
            </div>
            <div className='form-group'>
                <label className='text-white'>Name</label>
                <input type={"text"} name="Name" className='form-control' onChange={(e)=>setName(e.target.value)} />
            </div>
            <div className='form-group'>
                <label className='text-white'>Short Description</label>
                <input type={"text"} name="shortDesc" className='form-control' onChange={(e)=>setShortDesc(e.target.value)} />
            </div>
            <div className='form-group'>
                <label className='text-white'>Long Description</label>
                <textarea rows={4} className="form-control" onChange={(e)=>setLongDesc(e.target.value)} ></textarea>
            </div>
            <div className='form-group'>
                <label className='text-white'>Color</label>
                <input type={"text"} name="color" className='form-control' onChange={(e)=>setColor(e.target.value)} />
            </div>
            <div className='form-group'>
                <label className='text-white'>Cost Price</label>
                <input type={"text"} name="costPrice" className='form-control' onChange={(e)=>setCostPrice(e.target.value)} />
            </div>
            <div className='form-group'>
                <label className='text-white'>Country of Origin</label>
                <input type={"text"} name="countryOfOrigin" className='form-control' onChange={(e)=>setCountryOfOrigin(e.target.value)} />
            </div>
            <div className='form-group'>
                <label className='text-white'>Size</label>
                <input type={"text"} name="size" className='form-control' onChange={(e)=>setSize(e.target.value)} />
            </div>
            <div className='form-group mt-3'>
                <button className='btn btn-success form-control' onClick={()=>addData()}>Add Product</button>
            </div>
        </div>
        <MyFooter />
    </div>
  )
}
