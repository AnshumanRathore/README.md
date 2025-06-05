const name="Anshuman"
const company="S.K ltd."
let count=50
///CONCATENATION with `` of strings
console.log(`Hello my name is ${name} chairman of ${company} with ${count} years.`)


///STRING functions 
const gameName=new String(`Anshu`)
console.log(gameName[0]);
console.log(gameName.length);
console.log(gameName.toLowerCase());

//replace
const url="https://github.com/Anshuman%20Rathore"
console.log(url.replace('%20',''));
console.log(url.includes('Anshu'));
console.log(url.split('.')); //splites
