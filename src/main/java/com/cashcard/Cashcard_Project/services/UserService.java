package com.cashcard.Cashcard_Project.services;
import com.cashcard.Cashcard_Project.domain.User;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface UserService {
    User createUser(User user);
    List<User> getAllUsers();
}
