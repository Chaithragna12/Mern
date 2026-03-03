import React from 'react'
import { useParams } from 'react-router-dom'
const ProductDetails = () => {
    const {id}=useParams();
    const products=[
        {id:1,name:"Android",desc:"something something1"},
        {id:2,name:"apple",desc:"something something2"},
        {id:3,name:"macbook",desc:"something something3"},
    ]
    const product=products.find((p)=>p.id===Number(id))
  return (
    <div>
        <h1>Product details</h1>
      <h3>Name:{product?.name}</h3>
      <p>Description:{product?.desc}</p>
    </div>
  )
}

export default ProductDetails