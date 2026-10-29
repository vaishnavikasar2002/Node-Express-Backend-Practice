-- create databse 
CREATE DATABASE IF NOT EXISTS facebook;
 
 -- Create the user table
USE facebook;

CREATE TABLE user (
    id INT,
    age INT,
    name VARCHAR(30) NOT NULL,
    email VARCHAR(50) UNIQUE,
    followers INT DEFAULT 0,
    following INT,
    CONSTRAINT age_check CHECK (age >= 18),
    PRIMARY KEY (id)
);

-- Insert data into the user table => run kela part run kela id n email change karav lagel
INSERT INTO user
(id, age, name, email, followers, following)
VALUES
(16, 28, 'Aditya', 'aditya16@gmail.com', 450, 230),
(17, 19, 'Kavya', 'kavya17@gmail.com', 90, 40),
(18, 30, 'Manish', 'manish18@gmail.com', 520, 310),
(19, 22, 'Isha', 'isha19@gmail.com', 175, 85),
(20, 26, 'Varun', 'varun20@gmail.com', 380, 190);


-- where clause
SELECT * FROM user
WHERE followers >= 200; 

--  where clause (operation)
SELECT name, age  
FROM user
WHERE age + 1 = 23;

-- frequently used operators 1.AND => to check for both condition to be true
SELECT name, age , following
FROM user
WHERE age > 25 AND following > 200;

-- frequently used operators 2.OR => to check for one the condition to be true
SELECT name, age , following 
FROM user
WHERE age > 35 OR following > 300;

 -- frequently used operators 3.BETWEEN => selects for a given range
SELECT name, age   
FROM user
WHERE age BETWEEN 20 AND 40;

 -- frequently used operators 4.IN => matches any value in the list
SELECT name , email 
FROM user
WHERE email IN ("mau@gmail.com" , "india@19gmail.com" , "abc@01gmail.com" , "usha@gmail.com" , 'omi2@gmail.com');

 -- frequently used operators 5.NOT => to negate the given condition 
SELECT name, age 
FROM user
WHERE age  NOT IN (22 , 33);

-- limit clause
SELECT name, age  
FROM user
WHERE age > 15 -- print 5 user data but muze 1 he user ka data chahiye so write next line 
LIMIT 3;

-- Order by clause => to sort in ascending (ASC) or descending order (DESC)
SELECT name, age , followers
FROM user 
ORDER BY followers ASC;

-- aggregate function (predefine function in sql) => count , max , mim , sum , avg ect
SELECT max(following)
FROM user; 

SELECT age, count(age)
FROM user
WHERE age = 22;

-- create user table 
INSERT INTO user 
(id, age, name, email, followers, following)
VALUES 
(66, 22, 'prachi', 'praachi@gmail.com', 563, 300);

-- group by clause => 2age same ahe tyatla max (sub) print hoil n bakiche print hotila 
SELECT age , max(followers)
FROM user 
GROUP BY age; 

-- having clause
SELECT age , max(followers)
FROM user 
GROUP BY age -- group by karav lagel  
HAVING max(followers) >=  500;

-- general order sequence (multiple order 1 kach veles)
SELECT age , max(followers)
FROM user 
WHERE age >= 30
GROUP BY age
HAVING min(followers) > 400
ORDER BY age ASC;

-- table queries => upate (to update existing rows) -- update nhi zala
UPDATE user
SET following = 600
WHERE age = 22;  -- err 1175 => code run karta na run aala tr khalchi line lihaychi 

SET SQL_SAFE_UPDATES = 0;

SELECT * FROM user; -- show all table data

-- table queries => delete (to delete existing rows)
DELETE FROM user
WHERE age = 19; -- delete age 19 kavya cha data delete zala
SELECT * FROM user; -- show all table data

-- table queries => Alter (to change the schema) 1.ADD column
ALTER TABLE user 
ADD COLUMN city VARCHAR(24) DEFAULT "Delhi";
SELECT * FROM user; -- show all table data

-- table queries => Alter (to change the schema) 2.DROP column (delete)
ALTER TABLE user 
DROP COLUMN city;
SELECT * FROM user; -- show all table data

-- table queries => Alter (to change the schema) 3.RENAME column 
ALTER TABLE user 
RENAME TO instaUser;
SELECT * FROM user; -- show all table data

-- show database
SELECT * FROM instaUser;

-- rename again 
ALTER TABLE instaUser 
RENAME TO user;

-- table queries => Alter (to change the schema) 4.CHANGE column 
ALTER TABLE user
CHANGE COLUMN subs followers INT DEFAULT 0;

-- create database (run kely id , email change karne nhi tr duplicate key create hote and err yeto)
INSERT INTO user
(id, age, name, email, following)
VALUES
(222, 27, 'Sakshi', 'saakshi21@gmail.com', 300);

SELECT * FROM user; -- show all table data

-- table queries => Alter (to change the schema) 5.Modify column --- New user data add karav lagel
ALTER TABLE user
MODIFY followers INT DEFAULT 5; -- by default follower 5 print hota

SELECT * FROM user;

-- or 
-- UPDATE user 
-- SET followers = 5
-- WHERE id = 10;

-- table queries => truncate => (to all delete tables data ) => data delete kela tr part yenar nhi
-- TRUNCATE TABLE user;

-- show all data 
SELECT * FROM user;






