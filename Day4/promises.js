/* promises has - pending state
            - resolved state => sucessfully completed
            - rejected state => failed
*/
const promise=new Promise((resolve,reject)=>{
    let success=true
    if(success)
        resolve("successfully completed")
    else
        reject("failed")
})
promise.then((msg)=> console.log(msg)).catch((e)=>console.log(e))



//async function
async function fetchData(){
    try{
        let response=await fetch('https://jsonplaceholder.typicode.com/users')
        let data=await response.json()
        // console.log(data)
        data.map((user)=>{
            console.log(user.email)
        })
        data.map((u)=>{
            console.log(u.address.city);
            
        })
    } catch(e){
        console.log(e)
    }       
}
fetchData()