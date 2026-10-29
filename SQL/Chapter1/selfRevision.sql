CREATE DATABASE library;
create database company;
DROP DATABASE company;
USE library;

-- create table
CREATE TABLE librarystudent(
rollno INT,
name VARCHAR(30),
degree VARCHAR(49),
age INT
);

-- data insert  
INSERT INTO librarystudent 
VALUES
(1, "vaishnavi" , "computersci" , 24),
(2, "omkar" , "electricaleng" , 29),
(3, "gauri" , "Mcom" , 26); 

-- check data 
SELECT * FROM  librarystudent;

SHOW DATABASES;

USE facebook;
SHOW TABLES;
