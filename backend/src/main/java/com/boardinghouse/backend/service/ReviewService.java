package com.boardinghouse.backend.service;

import com.boardinghouse.backend.entity.Review;
import com.boardinghouse.backend.repository.ReviewRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ReviewService {

    private final ReviewRepository reviewRepository;

    public ReviewService(ReviewRepository reviewRepository) {
        this.reviewRepository = reviewRepository;
    }

    public Review createReview(Review review) {
        return reviewRepository.save(review);
    }

    public List<Review> getAllReviews() {
        return reviewRepository.findAll();
    }

    public Review getReviewById(Long id) {
        return reviewRepository.findById(id).orElse(null);
    }

    public List<Review> getReviewsByBoardingId(Long boardingId) {
        return reviewRepository.findByBoardingId(boardingId);
    }

    public List<Review> getReviewsByUserId(Long userId) {
        return reviewRepository.findByUserId(userId);
    }

    public void deleteReview(Long id) {
        reviewRepository.deleteById(id);
    }
}