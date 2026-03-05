import { useEffect, useState } from "react";

export const State = () => {
  const [like,setLike]=useState(0)
  useEffect(()=>{
    console.log("useEffect called")
  },[like])
  return (
    <div>
      <h1>useState example</h1>
      <h1>Like Count: {like}</h1>
      <button onClick={()=>{setLike(count=>count+1)}}>👍</button>
      <button onClick={()=>{setLike(count=>count-1)}}>👎</button>
    </div>
  );
};