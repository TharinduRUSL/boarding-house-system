package com.boardinghouse.backend.entity;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDate;

@Entity
@Table(name = "bookings")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Booking {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Long userId;
    private Long boardingId;

    private LocalDate bookingDate;

    private String message;

    private String status; // PENDING, APPROVED, REJECTED, CANCELLED
}