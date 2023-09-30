package com.hackaton.SecurityApp.model;

// This class represents a response containing a JWT (JSON Web Token)
public class JwtResponse {

    // Private field to store the JWT token
    private final String token;

    // Constructor for creating a JwtResponse object with a token
    public JwtResponse(String token) {
        this.token = token;
    }

    // Getter method for retrieving the JWT token
    public String getToken() {
        return token;
    }
}
