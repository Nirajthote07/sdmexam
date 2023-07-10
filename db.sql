create database dac2023;

use dac2023;

create table Book_Tb(
    id INTEGER PRIMARY KEY auto_increment,
    b_name VARCHAR(100),
    author VARCHAR(1024),
    book_type VARCHAR(50),
    price INTEGER,
    publishedDate date,
    language VARCHAR(50)
);

insert into Book_Tb(b_name,author ,book_type,price,dname,publishedDate,language) values ('b1', 'a1','t1',1001,'2015-05-05','english');
