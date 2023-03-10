import React, { useEffect, useState } from 'react'
import CardStrip from '@/components/CardStrip'
import MyFooter from '@/components/MyFooter'
import 'bootstrap/dist/css/bootstrap.css'
import axios from 'axios';
import Link from 'next/link';

export default function ViewProduct() {
  const [products,setProducts] = useState([]);
  const [pageNo,setPageNo] = useState(0)
  const snapShot = async(pageNo=0,pageSize=1) => {
    if(pageNo < 0)
      return; 
    const url  = `http://localhost:8084/api/products/getAll?pageNo=${pageNo}&pageSize=${pageSize}`;
    const snap = await axios.get(url);
    const data = await snap.data;
    setProducts(data);
    setPageNo(pageNo);
    console.log(data);
  }

  useEffect(()=>{
    snapShot(0,10);
  },[]);

  return (
    <div className='container-fluid' style={{backgroundColor:"red",height:"1080px"}}>
      <h1 className='text-center text-white'>View Product</h1>
      <div className='container'>
        <table className='table table-striped' style={{color:"white"}}>
              <thead>
              <tr>
                  <th scope="col">#</th>
                  <th scope="col">SKU</th>
                  <th scope="col">UPC</th>
                  <th scope="col">Short Desc.</th>
                  <th scope="col">View Details</th>
                  <th scope="col">View Details</th>
                  <th scope="col">Edit</th>
              </tr>
              </thead>
              <tbody>
                {products?.map((product,id) =><tr key={product.sku}>
                  <th scope="row">{id}</th>
                  <td>{product.sku}</td>
                  <td>{product.upc}</td>
                  <td>{product.shortDesc}</td>
                  <td><Link href={`../products/${product.sku}`}>View</Link></td>
                  <td><Link href={`../products/update/${product.sku}`}>Edit</Link></td>
                </tr>)}
              </tbody>
        </table>
        {products.length === 0?<p>No Item Left browse back</p>:<p></p>}
        <nav aria-label="Page navigation example">
        <ul className="pagination justify-content-end">
          <li className="page-item">
            <a className="page-link" href="#" tabIndex="-1" onClick={()=>snapShot(pageNo-1,10)} >Previous</a>
          </li>
          <li className="page-item"><a className="page-link" href="#" onClick={()=>snapShot(0,10)}>1</a></li>
          <li className="page-item"><a className="page-link" href="#" onClick={()=>snapShot(1,10)}>2</a></li>
          <li className="page-item"><a className="page-link" href="#" onClick={()=>snapShot(2,10)}>3</a></li>
          <li className="page-item">
            <a className="page-link" href="#" onClick={()=>snapShot(pageNo+1,10)}>Next</a>
          </li>
        </ul>
      </nav>
      </div>
      <MyFooter />
    </div>
  )
}
