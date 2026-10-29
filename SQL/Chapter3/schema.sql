-- create a database using sql files


-- Create the 'temp' table
CREATE TABLE temp (
    id VARCHAR(40) PRIMARY KEY,
    username VARCHAR(50) UNIQUE,
    email VARCHAR(50) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL
);

-- To check all the tables in your database, use the SHOW TABLES command separately
SHOW TABLES;