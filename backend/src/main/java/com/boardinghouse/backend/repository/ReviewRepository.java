package com.boardinghouse.backend.repository;

import com.boardinghouse.backend.entity.Review;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ReviewRepository extends JpaRepository<Review, Long> {

    List<Review> findByBoardingId(Long boardingId);

    List<Review> findByUserId(Long userId);
}