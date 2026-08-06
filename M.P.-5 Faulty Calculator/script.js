console.log("We'll get started now")

let num1 = prompt("enter 1st number")
let num2 = prompt("enter your 2nd number")
let opr = prompt("enter your operation")
let rand = Math.random();

let obj = {
    "+" : "-",
    "*" : "+",
    "-" : "/",
    "/" : "*"
}

console.log(rand);
if(rand > 0.1){
    alert(`the result is ${eval(`${num1} ${opr} ${num2}`)}`);
}
else {
    opr = obj[opr];
     alert(`the result is ${eval(`${num1} ${opr} ${num2}`)}`);
}