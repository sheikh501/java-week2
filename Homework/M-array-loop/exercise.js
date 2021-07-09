/*
	Write a function that receives an array of string, and console.log all strings that start with letter 'T'
	https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/startsWith
*/


const daysOfWeek = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];
function startsWithT(arr){
  const startsWithT = [];
  for (let x = 0; x <arr.length; x++){
    if(arr[x][0]==="T"){
      startsWithT.push(arr[x])
    }
  }
  return startsWithT;
}
console.log(startsWithT(daysOfWeek))