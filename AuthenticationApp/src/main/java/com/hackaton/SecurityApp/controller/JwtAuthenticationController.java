package com.hackaton.SecurityApp.controller;

import com.hackaton.SecurityApp.config.JwtTokenUtil;
import com.hackaton.SecurityApp.model.JwtRequest;
import com.hackaton.SecurityApp.model.JwtResponse;
import com.hackaton.SecurityApp.service.JwtUserDetailsService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
public class JwtAuthenticationController {

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private JwtTokenUtil jwtTokenUtil;

    @Autowired
    private JwtUserDetailsService userDetailsService;

    // Defines a request mapping for "/authenticate" endpoint with HTTP POST method
    @RequestMapping(value = "/authenticate", method = RequestMethod.POST)
    public ResponseEntity<?> createAuthenticationToken(@RequestBody JwtRequest authenticationRequest) throws Exception {
        try {
            // Check if the user exists by loading user details by username
            UserDetails userDetails = userDetailsService.loadUserByUsername(authenticationRequest.getUsername());

            // Check if the provided password matches the stored password
            if (!new BCryptPasswordEncoder().matches(authenticationRequest.getPassword(), userDetails.getPassword())) {
                throw new BadCredentialsException("Invalid credentials");
            }

            // Generate a JWT token for the authenticated user
            final String token = jwtTokenUtil.generateToken(authenticationRequest.getUsername());

            // Return the JWT token in a response entity
            return ResponseEntity.ok(new JwtResponse(token));
        } catch (Exception e) {
            e.printStackTrace();
            throw e; // Rethrow the exception after printing
        }
    }
}
