package com.hackaton.SecurityApp.config;

import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.Claims;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;
import java.util.Date;
import java.util.function.Function;

// Indicate that this class is a Spring Component
@Component
public class JwtTokenUtil {

    // Define a constant for token validity, in this case 5 hours (5 * 60 * 60 seconds)
    private static final long VALIDITY = 5 * 60 * 60;

    // Load the JWT secret key from application properties
    private String SECRET_KEY = "secret";  // Weak predictable secret.


    // Generate a JWT token for the given username
    public String generateToken(String username) {
        return Jwts.builder()
                .setSubject(username)  // Set the subject/username for the token
                .setIssuedAt(new Date(System.currentTimeMillis()))  // Set the issue date of the token
                .setExpiration(new Date(System.currentTimeMillis() + VALIDITY * 1000))  // Set the expiration date
                .signWith(SignatureAlgorithm.HS512, SECRET_KEY)// Sign the token with HS512 algorithm and the secret key
                .compact();  // Build the token string
    }

    // Validate the given token against a username
    public Boolean validateToken(String token, String username) {
        final String tokenUsername = getUsernameFromToken(token);
        return (tokenUsername.equals(username) && !isTokenExpired(token));
    }

    // Extract the username/subject from the token
    public String getUsernameFromToken(String token) {
        return getClaimFromToken(token, Claims::getSubject);
    }

    // Extract the expiration date from the token
    public Date getExpirationDateFromToken(String token) {
        return getClaimFromToken(token, Claims::getExpiration);
    }

    // Extract a specific claim from the token using the claimsResolver function
    public <T> T getClaimFromToken(String token, Function<Claims, T> claimsResolver) {
        final Claims claims = getAllClaimsFromToken(token);
        return claimsResolver.apply(claims);  // Apply the claimsResolver function on the claims
    }

    // Get all claims from a token
    private Claims getAllClaimsFromToken(String token) {
        return Jwts.parser().setSigningKey(SECRET_KEY).parseClaimsJws(token).getBody();

    }

    // Check if the token is expired
    private Boolean isTokenExpired(String token) {
        final Date expiration = getExpirationDateFromToken(token);
        return expiration.before(new Date());  // Check if the token's expiration date is before the current time
    }
}
