import MyFooter from '@/components/MyFooter';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

export default function MyProduct() {
  const router = useRouter();
  const {productId} = router.query;
  const [product,setProduct] = useState({})

  const snapShot = async() => {
    const url = `http://localhost:8084/api/products/get/${productId}`;
    const snap = await axios.get(url);
    const data = await snap.data;
    setProduct(data);
    console.log(data);
  }

  useEffect(()=>{
    snapShot()
  },[])
  
  return (
    <div className='container-fluid' style={{backgroundColor:"red",height:"1080px"}}>
      <h1 className='text-center text-white'>View Product</h1>
      <div className='container'>
          <div className='row'>
              <div className='col-md-6'>
                  <img src='https://images.pexels.com/photos/13817353/pexels-photo-13817353.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' />
              </div>
              <div className='col-md-6'>
                  <ul>
                    <li>SKU: {product?.sku}</li>
                    <li>UPC: {product?.upc}</li>
                    <li>SIZE: {product?.size}</li>
                    <li>Short Description: {product?.shortDesc}</li>
                    <li>Name: {product?.name}</li>
                    <li>Long Description: {product?.longDesc}</li>
                    <li>Country of Origin: {product?.countryOfOrigin}</li>
                    <li>Cost Price: {product?.costPrice}</li>
                    <li>Color: {product?.color}</li>
                  </ul>
              </div>
          </div>
      </div>
      <MyFooter />
    </div>
  )
}
