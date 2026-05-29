package com.boardinghouse.backend.repository;

import com.boardinghouse.backend.entity.Booking;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface BookingRepository extends JpaRepository<Booking, Long> {

    List<Booking> findByUserId(Long userId);

    List<Booking> findByBoardingId(Long boardingId);

    List<Booking> findByStatus(String status);
}