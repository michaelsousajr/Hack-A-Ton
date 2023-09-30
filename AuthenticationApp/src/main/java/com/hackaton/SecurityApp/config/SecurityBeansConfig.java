package com.hackaton.SecurityApp.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

// Indicate that this class is a Spring configuration class
@Configuration
public class SecurityBeansConfig {

    // Define a Spring Bean for BCryptPasswordEncoder
    @Bean
    public BCryptPasswordEncoder passwordEncoder() {
        // Create and configure an instance of BCryptPasswordEncoder
        return new BCryptPasswordEncoder();
    }
}
