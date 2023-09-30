package com.hackaton.SecurityApp.service;

import com.hackaton.SecurityApp.model.User;
import com.hackaton.SecurityApp.repository.UserRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.ArrayList;

@Service
public class JwtUserDetailsService implements UserDetailsService {

    @Autowired
    private UserRepository userRepository;

    // Implementation of the UserDetailsService interface method to load a user by username
    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        User appUser = userRepository.findByUsername(username);
        if (appUser != null) {
            // For authentication, you mainly need username and password.
            return new org.springframework.security.core.userdetails.User(appUser.getUsername(), appUser.getPassword(), new ArrayList<>());
        } else {
            throw new UsernameNotFoundException("User not found with username: " + username);
        }
    }

}
