double equal doesnot conpare variable types

let num = 2;
let num2 = "2";
if (num == num2) {
    console.log("true")
}else{
    console.log("false");
}

triple variable compares variable types these are called strict comparison.
 
let value = 0;
let value2 = false;
if (value === value2) {
    console.log("same type variable");
} else{
    console.log("different type variable");
}