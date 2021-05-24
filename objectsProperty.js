let students = [
    {id: 21 , name: "shoruv"},
    {id: 31, name: "vodro"},
    {id: 40, name: "azaira"}
];
let newName = [];
for ( let i = 0; i< students.length; i++){
    let elements = students[i];
    let studentName = elements.name;
    newName.push(studentName);
}
console.log(newName);

const names = students.map(element => element.name);
console.log(names);