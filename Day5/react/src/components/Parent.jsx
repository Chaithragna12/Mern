const Parent = () => {
    const getData=(data)=(
        console.log("Recevied from child:",data)
    )
    return (
        <div>
            <Child send={getData}/>
        </div>
    ) 
}
export default Parent