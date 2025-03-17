// array
var arr = [10,20,25,15];
// destructuring:
var [a,b]=arr; //=> a=10, b=20
console.log("a=",a);
console.log("b=",b);

[a,b,c] = arr;

console.log("a=",a);
console.log("b=",b);
console.log("c=",c);

// object 
const student = {
    name:"Văn Thịnh",
    age:19,
    phone:"0343666666",
    email:"vanthinh9999@gmail.com"

}

var {name,phone} = student;
// => name:"Thịnh Thịnh"; phone:"0343999999"
console.log("name;",name);
console.log("phone",phone);

