-- practices Que 1
-- create data 
CREATE DATABASE IF NOT EXISTS college; 

-- create table 
USE college;

-- insert table
CREATE TABLE teacher (
	id INT PRIMARY KEY,
    name VARCHAR(20),
    subject VARCHAR(30),
    salary INT
);

-- insert data  
INSERT INTO teacher
( id , name , subject , salary )
VALUES 
( 1 , 'ajay' , 'math' , 50000 ),
( 2 , 'bharat' , 'english' , 60000),
( 3 , 'chetan' , 'chemistry' , 45000 ),
( 4 , 'divya' , 'physics' , 75000 );

SELECT * FROM teacher;

-- select teacher whose salary is more than 55k 
SELECT * FROM teacher
WHERE salary > 55000;

-- show all data 
SELECT * FROM teacher;

-- reaname the salary column of teacher table to ctc
ALTER  TABLE teacher
CHANGE COLUMN salary ctc INT;

SELECT * FROM teacher;

-- update salary of all teachers by giving them an increment of 25%
 UPDATE teacher 
 SET ctc = ctc + ctc * 0.25;
 
 SET SQL_SAFE_UPDATES = 0;
 
 SELECT * FROM teacher;
 
  -- Add a new column for teacher called city the default city should be "Gurgaon" 
 ALTER TABLE teacher
 ADD COLUMN city VARCHAR(30) DEFAULT "Gurgaon";
 
 SELECT * FROM teacher;
 
 -- Delete the salary column for teacher table (ctc table delete hoto) (me nhi delete kela)

ALTER TABLE teacher 
DROP COLUMN ctc;

 


