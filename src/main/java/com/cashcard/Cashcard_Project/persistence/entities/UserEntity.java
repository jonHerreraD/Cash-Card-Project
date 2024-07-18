package com.cashcard.Cashcard_Project.persistence.entities;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;

@Entity(name = "user")
@Data
public class UserEntity {
    @Id
    @GeneratedValue(strategy=GenerationType.SEQUENCE)
    private Long userId;
    private String firstName;
    private String lastName;
    private String phoneNumber;
    private String email;
    private String password;
    private String birthDate;
}
