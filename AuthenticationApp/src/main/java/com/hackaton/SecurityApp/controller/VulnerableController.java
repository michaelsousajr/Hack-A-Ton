package com.hackaton.SecurityApp.controller;

        import com.hackaton.SecurityApp.model.User;
        import org.springframework.beans.factory.annotation.Autowired;
        import org.springframework.web.bind.annotation.*;

        import javax.persistence.EntityManager;
        import java.util.List;

@RestController
@RequestMapping("/api/vulnerable")
public class VulnerableController {

    @Autowired
    private EntityManager entityManager;

    @GetMapping("/search")
    public List<User> searchUsers(@RequestParam String query) {
        return entityManager.createNativeQuery("SELECT * FROM user WHERE name LIKE '%" + query + "%'", User.class).getResultList();
    }
}
