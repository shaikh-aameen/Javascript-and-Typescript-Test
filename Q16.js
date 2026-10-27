const students = [
    {name: "Tom" , marks : 90},
    {name: "Harry",  marks : 70},
    {name: "Peter", marks : 50}
]

const result = students.filter(students=> students.marks > 80)

console.log(result);
