package com.cashcard.Cashcard_Project.services;

import com.cashcard.Cashcard_Project.domain.User;
import org.springframework.context.annotation.Primary;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@Primarycd
public class UserDbServiceImpl implements UserService{

    @Override
    public User createUser(User user) {
        return null;
    }

    @Override
    public List<User> getAllUsers() {
        return null;
    }
}
