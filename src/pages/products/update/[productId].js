import React, { useEffect, useState } from 'react'
import CardStrip from '@/components/CardStrip'
import MyFooter from '@/components/MyFooter'
import 'bootstrap/dist/css/bootstrap.css'
import axios from 'axios'
import { useRouter } from 'next/router'

export default function UpdateProduct() {
    const router = useRouter();
    const {productId} = router.query;
    const [product,setProduct] = useState({})

    const [color,setColor] = useState("");
    const [size,setSize] = useState("");
    const [costPrice,setCostPrice] = useState("");
    const [upc,setUpc] = useState("");
    const [countryOfOrigin,setCountryOfOrigin] = useState("");
    const [name,setName] = useState("");
    const [shortDesc,setShortDesc] = useState("");
    const [longDesc,setLongDesc] = useState("");


    const snapShot = async() => {
        console.log(productId)
      const url = `http://localhost:8084/api/products/get/${productId}`;
      const snap = await axios.get(url);
      const data = await snap.data;
      setProduct(data);
      setSize(data.size);
      setColor(data.color);
      setCostPrice(data.costPrice);
      setUpc(data.upc);
      setCountryOfOrigin(data.countryOfOrigin);
      setName(data.name);
      setShortDesc(data.shortDesc);
      setLongDesc(data.longDesc);
      console.log(data);
    }

    const updateDetails = async() => {
        const url = `http://localhost:8084/api/products/update/${productId}`;
        let payload =  [
            {
                "key":"name",
                "value": name
            },
            {
                "key":"color",
                "value":color
            },
            {
                "key":"upc",
                "value":upc
            },
            {
                "key":"shortDesc",
                "value":shortDesc
            },
            {
                "key":"longDesc",
                "value":longDesc
            },
            {
                "key":"costPrice",
                "value":costPrice.toString()
            },
            {
                "key":"countryOfOrigin",
                "value":countryOfOrigin
            },
            {
                "key":"size",
                "value":size.toString()
            }
            ]
        const snap = await axios.put(url,payload);
        const status = await snap.status;
        console.log(status);
    }

    useEffect(()=>{
        snapShot();
    },[]);
  
  return (
    <div className='container-fluid' style={{backgroundColor:"red",height:"1080px"}}>
        <center>
          <h1 className='text-white'>Update your Product</h1>
        </center>
        <div className='container'>
                                                                   
            <div className='form-group'>
                <label className='text-white'>SKU</label>
                <input type={"text"} name="SKU" className='form-control' disabled={true} value={product?product.sku:""}/>
            </div>
            <div className='form-group'>
                <label className='text-white'>UPC</label>
                <input type={"text"} name="UPC" className='form-control' 
                    defaultValue={product?product.upc:""}
                    onChange={(e)=>setUpc(e.target.value)}  
            />
            </div>
            <div className='form-group'>
                <label className='text-white'>Name</label>
                <input type={"text"} name="Name" className='form-control'
                     defaultValue={product?product.name:""} 
                     onChange={(e)=>setName(e.target.value)}
                />
            </div>
            <div className='form-group'>
                <label className='text-white'>Short Description</label>
                <input type={"text"} name="shortDesc" className='form-control' 
                    defaultValue={product?product.shortDesc:""}
                    onChange={(e)=>setShortDesc(e.target.value)}
                 />
            </div>
            <div className='form-group'>
                <label className='text-white'>Long Description</label>
                <textarea rows={4} className="form-control" 
                    defaultValue={product?product.longDesc:""} 
                    onChange={(e)=>setLongDesc(e.target.value)}
                ></textarea>
            </div>
            <div className='form-group'>
                <label className='text-white'>Color</label>
                <input type={"text"} name="Color" className='form-control' 
                    defaultValue={product?product.color:""} 
                    onChange={(e)=>setColor(e.target.value)}
                />
            </div>
            <div className='form-group'>
                <label className='text-white'>Cost Price</label>
                <input type={"text"} name="costPrice" className='form-control' 
                    defaultValue={product?product.costPrice:""} 
                    onChange={(e)=>setCostPrice(e.target.value)}
                />
            </div>
            <div className='form-group'>
                <label className='text-white'>Country of Origin</label>
                <input type={"text"} name="countryOfOrigin" className='form-control' 
                    defaultValue={product?product.countryOfOrigin:""} 
                    onChange={(e)=>setCountryOfOrigin(e.target.value)}
                />
            </div>
            <div className='form-group'>
                <label className='text-white'>Size</label>
                <input type={"text"} name="size" className='form-control' 
                    defaultValue={product?product.size:""} 
                    onChange={(e)=>setSize(e.target.value)}
                />
            </div>
            <div className='form-group mt-3'>
                <button className='btn btn-success form-control' onClick={()=>updateDetails()}>Update Product</button>
            </div>
        </div>
        <MyFooter />
    </div>
  )
}
