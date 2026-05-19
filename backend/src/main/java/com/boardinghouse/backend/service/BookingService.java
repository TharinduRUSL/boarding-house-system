package com.boardinghouse.backend.service;

import com.boardinghouse.backend.entity.Booking;
import com.boardinghouse.backend.repository.BookingRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BookingService {

    private final BookingRepository bookingRepository;

    public BookingService(BookingRepository bookingRepository) {
        this.bookingRepository = bookingRepository;
    }

    public Booking createBooking(Booking booking) {
        return bookingRepository.save(booking);
    }

    public List<Booking> getAllBookings() {
        return bookingRepository.findAll();
    }

    public Booking getBookingById(Long id) {
        return bookingRepository.findById(id).orElse(null);
    }

    public List<Booking> getBookingsByUserId(Long userId) {
        return bookingRepository.findByUserId(userId);
    }

    public List<Booking> getBookingsByBoardingId(Long boardingId) {
        return bookingRepository.findByBoardingId(boardingId);
    }

    public List<Booking> getBookingsByStatus(String status) {
        return bookingRepository.findByStatus(status);
    }

    public Booking updateBookingStatus(Long id, String status) {
        Booking existingBooking = bookingRepository.findById(id).orElse(null);

        if (existingBooking == null) {
            return null;
        }

        existingBooking.setStatus(status);
        return bookingRepository.save(existingBooking);
    }

    public void deleteBooking(Long id) {
        bookingRepository.deleteById(id);
    }
}