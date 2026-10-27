const mysql = require('mysql2');
const { error } = require('node:console');

const db = mysql.createConnection({
    host : "localhost",
    user : "root",
    password : "root",
    database : "db"
})

db.connect((err)=>{
    if (err) {
        throw err
    } else {
       console.log("Connected success...");
        
    }
})

function InsertPerson(name,salary,dept) {
    const sql = "insert into employee(name,salary,dept) values(?,?,?)"
    db.query(sql,[name,salary,dept],(err,result)=>{
        if (err) {
            throw err
        } else {
            console.log("Inserted successfully");
            
        }
    })
}

InsertPerson("Tom",10000,"IT")

function UpdatePerson(salary,name){
    const sql = "update employee set salary = ? where name = ?"
    db.query(sql,[salary,name],(err,result)=>{
        if (err) {
            throw err
        } else {
            console.log("Updated sucess");
            
        }
    })
}

UpdatePerson(100,"Tom")

function deletePerson(id){
    const sql = "delete from employee where id = ?"
    db.query(sql,[id],(err,result)=>{
        if (err) {
            throw err
        } else {
            console.log("Deleted...");
            
        }
    })
}

deletePerson(1)

function show(){
    const sql = "select * from employee"
    db.query(sql,(err,result)=>{
        if (err) {
            throw err
        } else {
            console.log(result);
            
        }
    })
}\

