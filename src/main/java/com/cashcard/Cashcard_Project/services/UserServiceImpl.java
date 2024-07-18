package com.cashcard.Cashcard_Project.services;

import com.cashcard.Cashcard_Project.domain.User;
import org.springframework.stereotype.Service;


import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.atomic.AtomicLong;

@Service
public class UserServiceImpl implements UserService{
    private List<User> users = new ArrayList<>();
    private AtomicLong counter = new AtomicLong();

    @Override
    public User createUser(User user) {
        users = getAllUsers();
        for (User usu : users) {
            if (usu.getEmail().equals(user.getEmail()) ||
                    usu.getPassword().equals(user.getPassword()) ||
                    usu.getPhoneNumber().equals(user.getPhoneNumber())) {
                System.out.println("Cannot create user");
                return null;
            }
        }
        user.setUserId(counter.incrementAndGet());
        users.add(user);
        return user;
    }

    @Override
    public List<User> getAllUsers() {
        return new ArrayList<>(users);
    }
}
