package com.hackaton.SecurityApp.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1")
@CrossOrigin(origins = "http://localhost:3000")
public class LearningController {

    @GetMapping("/learn-opensource")
    public String learnOpenSource() {
        return "Welcome to OpenSource!";
    }

    @GetMapping("/learn-cybersecurity")
    public String learnCybersecurity() {
        return "Welcome to Cybersecurity!";
    }
}
