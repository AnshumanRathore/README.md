const arr1 =[0,1,2,3,4,5,6]
console.log("Slice",arr1.slice(2,4));

console.log("Splice",arr1.splice(2,4));
console.log("Array Left",arr1);


const arr2=[9,8,7,6,5,4,3]
console.log("Arr2",arr2);
// console.log("Arr2",arr2.unshift(88));
arr2.unshift(990);
console.log("Arr2 after unshift :",arr2);
 
arr2.shift();
console.log("Arr2 after shift :",arr2);
