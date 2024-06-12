package com.example.demo.Entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import lombok.Data;

@Entity
@Data
public class Products {
    @Id
    @GeneratedValue()
    private int Id;

    @Column(length = 40)
    private String productName;

    @Column(length = 40)
    private String productInfor;
    private Long price;

    public Products(String productName, String productInfor, Long price) {
        this.productName = productName;
        this.productInfor = productInfor;
        this.price = price;
    }
}
