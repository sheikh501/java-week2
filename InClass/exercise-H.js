function exponential(number) {
  return number * number;
}
// console.log(exponential(6));
// console.log(exponential(8));
// console.log(exponential(10));
for (let i =1; 1<20; i++){
  console.log("The exponential" + i +" is " + exponential(i));
}

function isEven(number) {
  return number % 2 === 0;
}
console.log(isEven(2));