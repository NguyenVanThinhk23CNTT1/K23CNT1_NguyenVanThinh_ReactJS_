// tạo mảng mới và sử dụng cá phần tử của mảng cũ 

var oldArray = [2,5,3];
var newArray = [oldArray,4,5];

console.log("oldArray:",oldArray);
console.log("newArray:",newArray);

// spread
var oldArray = [2,5,3];
var newArray = [...oldArray,4,5];

console.log("oldArray:",oldArray);
console.log("newArray:",newArray);