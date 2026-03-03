import React from 'react'
import { Link } from 'react-router-dom'
const Services = () => {
  const products=[
    {id:1,name:"Android",desc:"something something1"},
      {id:2,name:"apple",desc:"something something2"},
        {id:3,name:"macbook",desc:"something something3"},
  ]
  return (
    <div>
      <h1>Products</h1>
      {products.map((p)=>(
        <div key={p.id}>
          <h3 className='font-bold'>{p.name}</h3>
          <Link className='text-blue-500 hover:underline' to={`/services/${p.id}`}>view description</Link>
        
        </div>
      ))}
    </div>
  )
}

export default Services