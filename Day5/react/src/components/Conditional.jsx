import React, { useState } from 'react'

const Conditional = () => {
    let isLoggedin=true
    const [isVisible,setIsVisible]=useState(true)
    // if(isLoggedin){
    //     return (
    //       <h1>User LoggedIn</h1>)}
    // else{return (   <h1>Please login</h1>)}
    return (
        <div>
            {(isLoggedin)?<h1>user loggedin</h1>:<h1>Please login</h1>}
            <button onClick={()=>setIsVisible(!isVisible)}>Toggle</button>
            {isVisible&& <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis, sit!
                </p>}
        </div>
    )
    
}

export default Conditional