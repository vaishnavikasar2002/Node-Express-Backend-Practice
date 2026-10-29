-- Practices Qs 2
-- create data 
CREATE DATABASE IF NOT EXISTS newstudent; 

-- create table 
USE newstudent;

CREATE TABLE newstudent(
	rollno INT PRIMARY KEY,
    name VARCHAR (30),
    city VARCHAR (30),
    marks INT
);

-- insert data (run kela tr part roll no change karne bec primary key ahe)
INSERT INTO newstudent 
(rollno , name , city , marks)
VALUES 
( 00011, 'akshada' , 'nashik' , 95),
( 00021, 'manik' , 'pune' , 65),
( 00031, 'chetan' , 'yeola' , 55),
( 00041 , 'divya' , 'physics' , 50 );

-- show all data 
SELECT * FROM newstudent;

-- select all student who scored 75+ // run = select query = ctrl+enter
 SELECT * FROM newstudent 
 WHERE marks > 75;
 
 SELECT name, marks FROM newstudent;
 
 -- find names of all cities where student are from 
 SELECT DISTINCT city 
 FROM newstudent;
 
 -- or
--  SELECT city FROM student
--  GROUP BY city;

-- Find the maximum marks of student from each city
 SELECT city, max(marks)
 FROM student
 GROUP BY city;
 
 SELECT * FROM newstudent;

 -- find the average of the class 
 SELECT  avg(marks)
 FROM newstudent;  -- run = select query = ctrl+enter
 
 
 SELECT * FROM newstudent;
 
 -- add anew col grade , assign grade such that: marks > 80 , grade = O ,  marks >70-80 , grade = A , marks >60-70 , grade =  B
 -- 1 da run keli part run karu nhi nhi grade name change karne (run karaych baki err yetoy)

 ALTER TABLE newstudent
 ADD COLUMN gdee VARCHAR(9);

 UPDATE newstudent
 SET gdee = "O"
 WHERE marks >= 80;
 
 UPDATE newstudent
 SET gdee = "A"
 WHERE marks >= 70 AND marks < 80;
 
 UPDATE newstudent
 SET gdee = "B"
 WHERE marks >= 60 AND marks < 70;
 
 SELECT * FROM newstudent;
