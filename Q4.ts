abstract class Person {

    abstract getDetails(name:string,id : number):void
    abstract getRole(role:string):void
}

class Student extends Person{
    getDetails(name:string,id : number): void {
        console.log("Name: " + name);
        console.log("ID: " + id );
    }
    getRole(role:string): void {
       console.log("Role: " + role);
       
    }

}

class Teacher extends Person{
    getDetails(name:string,id : number): void {
        console.log("Name: " + name );
        console.log("ID: " + id );
    }
    getRole(role:string): void {
       console.log("Role: " + role);
    }

}

const s = new Student()
const t = new Teacher()
s.getDetails("Peter",1)
s.getRole("Student")
t.getDetails("Pedro",2)
t.getRole("Teacher")