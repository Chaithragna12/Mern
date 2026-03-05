import React, { use, useEffect, useState } from 'react'
import axios from 'axios'
const Contact = () => {
  const [users,setUsers]=useState([])
  const fetchData=async()=>{
    try{
      const res= await axios.get("https://jsonplaceholder.typicode.com/users")
      setUsers(res.data)
    } catch (error) {
      console.error("Error fetching users:", error)
    }
  }
  useEffect(()=>{
    fetchData()
  },[])
  return (
    <div>
      <h1>Contact</h1>
      {users.map((u)=>{
        return (
          <div key={u.id}>
            <h4>Name:{u.name}</h4>
            <h4>Email:{u.email}</h4>
          </div>
        )
      })}
    </div>
  )
}

export default Contact