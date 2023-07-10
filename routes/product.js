const express = require('express')
//const router = express.Router()
const connection = require('../db')

// router.get('/', (request, response) => {
//   const statement = `select id, title, description, price from products`
//   db.query(statement, (error, data) => {
//     if (error) {
//       response.send('error')
//     } else {
//       response.send(data)
//     }
//   })
// })

// const express = require('express');
// const config = require('config');
const appForemps = express.Router();
// const mysql = require('mysql');
// var connection = mysql.createConnection(
//     {
//         host     : config.get("host"),
//         user     : config.get("user"),
//         password : config.get("password"),
//         database : config.get("database")
//     }
// );

appForemps.get("/",(request,response)=>
{
    connection.query('select * from Book_Tb',(error,result)=>{
        if(error == null){
            var data = JSON.stringify(result);
            response.setHeader("Content-Type","application/json");
            response.write(data);
           }
           else{
            console.log(error);
            response.setHeader("Content-Type","application/json");
            response.write(error);
           }
           response.end();
    })
   
})

appForemps.post("/",(request,response)=>
{
    var query = `insert into Book_Tb(b_name,author ,book_type,price,publishedDate,language) values('${request.body.e_name}','${request.body.author}','${request.body.book_type}',${request.body.price},'${request.body.publishedDate}','${request.body.language}')`;
   
    connection.query(query,(error,result)=>{
        if(error == null){
            var data = JSON.stringify(result);
            response.setHeader("Content-Type","application/json");
            response.write(data);
           }
           else{
            console.log(error);
            response.setHeader("Content-Type","application/json");
            response.write(error);
           }
           response.end();
    })
})

appForemps.put('/:id',(request,response)=>
{
    var query = `update Book_Tb set price ='${request.body.price}',language='${request.body.language}' where id=${request.params.id}`;
    connection.query(query,(error,result)=>{
        if(error == null){
            var data = JSON.stringify(result);
            response.setHeader("Content-Type","application/json");
            response.write(data);
           }
           else{
            console.log(error);
            response.setHeader("Content-Type","application/json");
            response.write(error);
           }
           response.end();
    })
})



module.exports = appForemps;
