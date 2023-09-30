package com.hackaton.SecurityApp.config;

import com.hackaton.SecurityApp.service.JwtUserDetailsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import javax.annotation.PostConstruct;

// Indicates that this class is a Spring configuration class
@Configuration
public class WebSecurityEndpoint extends WebSecurityConfigurerAdapter {

    @Autowired
    private JwtRequestFilter jwtRequestFilter;

    @Autowired
    private JwtUserDetailsService jwtUserDetailsService;

    @Autowired
    private BCryptPasswordEncoder passwordEncoder;

    @Autowired
    private AuthenticationManagerBuilder auth;

    // This method is called after the bean is constructed and performs initialization tasks
    @PostConstruct
    public void init() {
        try {
            // Configures the AuthenticationManagerBuilder with user details service and password encoder
            auth.userDetailsService(jwtUserDetailsService).passwordEncoder(passwordEncoder);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    // Defines a Spring Bean for AuthenticationManager
    @Bean
    @Override
    public AuthenticationManager authenticationManagerBean() throws Exception {
        return super.authenticationManagerBean();
    }

    // Configures HTTP security settings
    @Override
    protected void configure(HttpSecurity httpSecurity) throws Exception {

        httpSecurity.addFilterBefore(jwtRequestFilter, UsernamePasswordAuthenticationFilter.class);


        httpSecurity
                .csrf().disable() // Disables Cross-Site Request Forgery (CSRF) protection
                .authorizeRequests()
                .antMatchers("/authenticate").permitAll() // Permits all requests to "/authenticate" without authentication
                .anyRequest().authenticated(); // Requires authentication for any other requests
    }
}

