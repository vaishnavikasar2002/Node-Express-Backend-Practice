-- Create the database if it doesn't exist
CREATE DATABASE IF NOT EXISTS delta_app;

-- Use the database
USE delta_app;

-- Drop the user table if it exists (optional but helpful during testing)
DROP TABLE IF EXISTS user;

-- Create the 'user' table
CREATE TABLE user (
    id VARCHAR(40) PRIMARY KEY,
    username VARCHAR(50) UNIQUE,
    email VARCHAR(50) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL
);

-- Optional: Show all tables to verify
SHOW TABLES;

