/* Write a function that:

- Takes one number n as a parameter
- Adds all numbers from 0 to n. For example, if the input is 3, the output should be 0 + 1 + 2 + 3
- You should use a for loop

*/

let n = 10;

function sumTillNum(num){
	let sum = 0;
	for (let i=0; i<=num; i++){
	sum = sum +i;	
	}
	return sum
	//your code here
}

console.log("Sum from 0 to " + n + " is: " + sumTillNum(n));
