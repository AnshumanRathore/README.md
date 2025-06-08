const arr1=["mukesh","geo","lunes"]

const arr2=["martes","domingo","cinco"]
//PUSH one array into another
// arr1.push(arr2);
// console.log("ACCESS", arr1[3][1]);


//CONCATENATION
// const both_arr=arr1.concat(arr2);
// console.log("Concat",both_arr);

//SPREAD
// const all_arr=[...arr1,...arr2];
// console.log(all_arr);

//FLAT
// const arrN=["Concert","fiesta",[1,2,3,4],["a","s","d","f"]];
// const each_arrN=arrN.flat(Infinity);
// console.log(each_arrN);

//to check is this array 
// console.log(Array.isArray("ANSHUMAN"));
//to make it array using "from"
// console.log(Array.from("ANSHUMAN"));


//interresting case (keys: "values"): gives empty array []
console.log(Array.from({name: "ANSHUMAN"})); 


//"of" : returns a new array from set of elements
let score1=100
let score2=200
let score3=300
console.log(Array.of(score1,score2,score3));

