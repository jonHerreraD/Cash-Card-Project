package com.cashcard.Cashcard_Project.controllers;
import com.cashcard.Cashcard_Project.domain.User;
import com.cashcard.Cashcard_Project.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/users")
public class UserController {
/*
    private final UserRepository userRepository;

    private UserController(UserRepository userRepository) {
        this.userRepository = userRepository;
    }


*/
@Autowired
private UserService userService;

@CrossOrigin("http://localhost:63342")
@PostMapping
private ResponseEntity<User> createUser(@RequestBody  User user){
    User usu = userService.createUser(user);
    return ResponseEntity.ok(usu);
}

    @GetMapping
    public ResponseEntity<List<User>> getAllUsers() {
        List<User> users = userService.getAllUsers();
        return ResponseEntity.ok(users);
    }

}
