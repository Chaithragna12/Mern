let arr=[1,2,3,4,5,6]
const add=(num)=>{
    return num+1;
}
//map function
let res=arr.map(add)
console.log(res);

let double=arr.map((num)=>num*2)
console.log(double);
//array of objects
let products=[
    {id:1,name:'chaitra',age:20},
    {id:2,name:'yuva',age:18},
    {id:3,name:'savitha',age:32}
]
let productName=products.map((p)=> {console.log(p.name)})
let productage=products.map((p)=> console.log(p.age))

//filter function
let b=arr.filter((n)=>n>3)
console.log(b);
let c=arr.filter((n)=>n%2==0)
console.log(c);

let d=products.filter((p)=>p.age>18)
console.log(d);

//reduce function
let arr2=[1,2,3,4,5,6]
let sum=arr2.reduce((total,curr)=>{return total+curr},0)
console.log(sum);

let totalage=products.reduce((total,curr)=>{return total+curr.age},0)
console.log(totalage);

let array=[11,22,33,44,55]
let [x,,f]=array
console.log(f);
