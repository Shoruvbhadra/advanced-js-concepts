const names = [4,4,6,3,6,2,4,6];
const result = names.map(function(element){
    return element * element;
})
console.log(result);

const squareIt = (item) => item * item;
console.log(names.map(squareIt));


let biggiBoy = (item) => item>4 ;
console.log(names.filter(biggiBoy)); // 6,6,6

let onlyBigBoy = item => item>4;
console.log(names.find(onlyBigBoy)); // only 6