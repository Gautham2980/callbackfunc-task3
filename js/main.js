let a=parseInt(prompt("enter the first number"));
let b=parseInt(prompt("enter the second number"));

let sum=(x,y,add)=>{
    add(x,y)
}

add=(x,y)=>{
    c=x+y;
    document.write(`The sum of two number is ${c}`)
}


sum(a,b,add)