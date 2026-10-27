"use strict";
class Person {
}
class Student extends Person {
    getDetails(name, id) {
        console.log("Name: " + name);
        console.log("ID: " + id);
    }
    getRole(role) {
        console.log("Role: " + role);
    }
}
class Teacher extends Person {
    getDetails(name, id) {
        console.log("Name: " + name);
        console.log("ID: " + id);
    }
    getRole(role) {
        console.log("Role: " + role);
    }
}
const s = new Student();
const t = new Teacher();
s.getDetails("Peter", 1);
s.getRole("Student");
t.getDetails("Pedro", 2);
t.getRole("Teacher");
