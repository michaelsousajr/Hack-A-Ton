package com.hackaton.SecurityApp;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

// for those not using Intellij


//Run the application Spring Boot first with this commnad:
//mvn spring-boot:run

//Then run in the "frontend" directory:
//npm start


@SpringBootApplication
public class AuthenticationAppApplication {

	public static void main(String[] args) {
		SpringApplication.run(AuthenticationAppApplication.class, args);
	}

}
