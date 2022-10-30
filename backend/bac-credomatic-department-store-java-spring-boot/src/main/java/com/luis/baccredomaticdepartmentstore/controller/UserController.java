package com.luis.baccredomaticdepartmentstore.controller;

import com.luis.baccredomaticdepartmentstore.model.User;
import com.luis.baccredomaticdepartmentstore.repository.UserRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/user")
public class UserController {

    private final UserRepository userRepository;

    public UserController(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @GetMapping
    public ResponseEntity getAllUsers() {
        return ResponseEntity.ok(this.userRepository.findAll());
    }

    @GetMapping("{id}")
    public ResponseEntity getOneUser(@PathVariable Long id) {
        return ResponseEntity.ok(this.userRepository.findById(id).get());
    }

    @PostMapping
    public ResponseEntity createUser(@RequestBody User user) {
        return ResponseEntity.status(201).body(this.userRepository.save(user));
    }

    @PutMapping("{id}")
    public ResponseEntity updateUser(@PathVariable Long id, @RequestBody User user) {

        User userToUpdate = this.userRepository.findById(id).get();

        userToUpdate.setName(user.getName());
        userToUpdate.setEmail(user.getEmail());
        userToUpdate.setPassword(user.getPassword());

        return ResponseEntity.ok(this.userRepository.save(userToUpdate));
    }

    @DeleteMapping("{id}")
    public ResponseEntity delteUser(@PathVariable Long id) {

        User user = this.userRepository.findById(id).get();

        this.userRepository.deleteById(id);

        return ResponseEntity.ok(user);
    }
}
