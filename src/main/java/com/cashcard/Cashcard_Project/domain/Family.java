package com.cashcard.Cashcard_Project.domain;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class Family {

    private Long famId;
    private String name;
    private List<User> users;
    private List<CashCard> cashCards;
}
