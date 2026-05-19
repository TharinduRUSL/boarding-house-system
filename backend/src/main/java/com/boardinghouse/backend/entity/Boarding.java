package com.boardinghouse.backend.entity;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "boardings")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Boarding {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Long ownerId;

    private String title;
    private String description;
    private String location;
    private String address;

    private Double monthlyPrice;
    private Double advancePayment;

    private String genderType; // BOYS_ONLY, GIRLS_ONLY, BOYS_AND_GIRLS, ANY
    private String roomType;   // SINGLE, SHARED, DOUBLE, DORMITORY

    private Integer availableRooms;
    private Integer availableBeds;

    private Boolean foodAvailable;
    private Boolean wifiAvailable;
    private Boolean parkingAvailable;
    private Boolean cctvAvailable;
    private Boolean femaleWardenAvailable;
    private Boolean secureGateAvailable;
    private Boolean kitchenAvailable;
    private Boolean laundryAvailable;

    private String rules;
    private String contactNumber;
    private String status; // PENDING, APPROVED, REJECTED
}