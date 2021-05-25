let students = [
    { id: 44, name : "azaira"},
    { id: 33, name : "gazaira"},
    { id: 52, name : "bazaira"}
]

let studentName = (object) => object.name;
console.log(students.map(studentName));

let OneId = (object) => object.id> 40;
console.log(students.filter(OneId));