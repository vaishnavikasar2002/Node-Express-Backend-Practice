-- command run karta na select karun run karne mg refresh karne (always) 

-- Create the instagram database
CREATE DATABASE IF NOT EXISTS instagram; 

-- Create the user table
USE instagram;

CREATE TABLE user_table (
    id INT,
    age INT,
    name VARCHAR(35) NOT NULL,
    email VARCHAR(59) UNIQUE,
    followers INT DEFAULT 0,
    following INT,
    CONSTRAINT CHECK (age >= 16 ),
    PRIMARY KEY (id)
);

-- Insert data into the user table => run kela part run kela id n email change karav lagel
INSERT INTO user
(id, age, name, email, followers, following)
VALUES 
(54, 22, 'akshu', 'akshu@gmail.com', 233, 500),
(55, 62, 'omi', 'omi@gmail.com', 23, 50),   
(56, 19, 'usha', 'usha@gmail.com', 133, 100);

-- show for table 
SHOW TABLES;

-- show all tabel data  
SELECT * FROM user; 

-- err => 0	14	20:06:28	DELETE FROM user WHERE id IN (51,52,53)	Error Code: 1451. Cannot delete or update a parent row: a foreign key constraint fails (instagram.post, CONSTRAINT post_ibfk_1 FOREIGN KEY (user_id) REFERENCES user (id))	0.016 sec
DELETE FROM post WHERE user_id IN (51, 52, 53);
DELETE FROM user WHERE id IN (51, 52, 53);

-- delete extra saved id 
DELETE FROM user
WHERE id IN (51,52,53);

-- show data for specific col 
SELECT id,name FROM user;

-- where clause
SELECT * FROM user
WHERE followers >= 100; 

-- Create the posts table with a foreign key to the user table
CREATE TABLE post (
    id INT PRIMARY KEY,
    content VARCHAR(100),
    user_id INT,
    FOREIGN KEY (user_id) REFERENCES user(id)
);

-- insert post data 
INSERT INTO post 
(id , content , user_id)
VALUES
(101 , 'Hello World' , 51), -- FK =  used user id here
(102 , 'Bye Bye' , 52),
(103 , 'Hello Vaishnavi' , 53);

-- print data
SELECT * FROM post;

-- show databse 
SHOW DATABASES;
