let x = "sad";

function fnc(y){

if (y === "happy"){
    return "Good job, you're doing great!"
}
else if (y === "sad"){
    return "Every cloud has a silver lining"
}
else if (typeof y === "number"){
    return "Beep beep boop"
}
else {
    return "I'm sorry, I'm still learning about feelings!"
}


}
console.log (fnc(x));