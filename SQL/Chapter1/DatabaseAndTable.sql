-- create databse 1 
CREATE DATABASE college01;

-- database madhe table create karnya sathi
USE college01;

-- create table 
CREATE TABLE student2 (
	rollno INT,
    name VARCHAR(45),
    age INT
);

-- insert data - no run again  
INSERT INTO student2
VALUES
(01,"vaishnavi",24),
(02,"rahul",15),
(03,"rohit",35);

-- show all table
SELECT * FROM student2;

-- create databse 2
CREATE DATABASE xyx;

-- Drop database(delete)
DROP DATABASE xyx;