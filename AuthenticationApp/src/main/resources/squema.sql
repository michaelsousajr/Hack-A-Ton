-- Create the 'security_app' database
CREATE DATABASE security_app;
USE security_app;

-- Create the 'user' table
CREATE TABLE user (
                      id BIGINT PRIMARY KEY AUTO_INCREMENT,
                      username VARCHAR(255) NOT NULL UNIQUE,
                      password VARCHAR(255) NOT NULL,
                      name VARCHAR(255),
                      email VARCHAR(255)
);

-- Insert sample users with bcrypt encrypted passwords
INSERT INTO user (username, password, name, email)
VALUES
    ('user', '$2a$12$4OgQ0PMAOwDJt4D1hu7sCOJcL50mmzoXEOMhFDPhYXOkvj9Lx9Sia', 'User Name', 'user@email.com'),
    ('admin', '$2a$12$IskpjBGo4Nx7rka9R2o70OioJrjs5VdPGDqJcozi3x.v4DA3Y.jdm', 'Admin Name', 'admin@email.com'),
    ('alice', '$2a$12$qE/l9nNZhhsvimdkju3kyObgJ3cHvTWxpXSKxA/MX8ojwj.N2xFE2', 'Alice Name', 'alice@email.com');