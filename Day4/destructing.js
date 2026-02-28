let student={
    name:'prabhu',
    age:24,
    city:'chennai'
}
const {name,age}=student
console.log(name,age);
//spread operator
let arr1=[1,2,3,4,5]
let arr2=[...arr1,6,7,8]
console.log(arr2);

let a1=[1,2,3]
let a2=[4,5,6]
let a3=[...a1,...a2]
console.log(a3);

let car={
    brand:'bmw',
    model:'x5',
    year:2020
}
let newcar={...car,year:2021}
console.log(newcar);
console.log(car);

