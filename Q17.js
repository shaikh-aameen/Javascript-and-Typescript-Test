const students = [
    {name: "Tom" , marks : 90},
    {name: "Harry",  marks : 70},
    {name: "Peter", marks : 50}
]

let total = 0

for(const student of students){
    total = total + students.marks
}

console.log("Total Marks: " ,total);
