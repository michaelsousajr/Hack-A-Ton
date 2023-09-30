package com.hackaton.SecurityApp.model;

import javax.validation.constraints.NotEmpty;

// This class represents a request for JWT (JSON Web Token) authentication
public class JwtRequest {

    // Annotating 'username' field with validation to ensure it's not empty
    @NotEmpty(message = "Username cannot be empty")
    private String username;

    // Annotating 'password' field with validation to ensure it's not empty
    @NotEmpty(message = "Password cannot be empty")
    private String password;

    // Constructor for creating a JwtRequest object with username and password
    public JwtRequest(String username, String password) {
        this.username = username;
        this.password = password;
    }

    // Getter method for retrieving the username
    public String getUsername() {
        return username;
    }

    // Getter method for retrieving the password
    public String getPassword() {
        return password;
    }

    // Setter method for setting the username
    public void setUsername(String username) {
        this.username = username;
    }

    // Setter method for setting the password
    public void setPassword(String password) {
        this.password = password;
    }
}
