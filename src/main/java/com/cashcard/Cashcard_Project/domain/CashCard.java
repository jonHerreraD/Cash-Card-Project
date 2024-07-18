package com.cashcard.Cashcard_Project.domain;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class CashCard {

    private Long cardId;
    private String name;
    private Double mount;
    private User owner;
    private Family family;
}
