package com.boardinghouse.backend.controller;

import com.boardinghouse.backend.entity.Booking;
import com.boardinghouse.backend.service.BookingService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/bookings")
@CrossOrigin(origins = {"http://localhost:5173", "http://localhost:5174"})
public class BookingController {

    private final BookingService bookingService;

    public BookingController(BookingService bookingService) {
        this.bookingService = bookingService;
    }

    @PostMapping
    public Booking createBooking(@RequestBody Booking booking) {
        return bookingService.createBooking(booking);
    }

    @GetMapping
    public List<Booking> getAllBookings() {
        return bookingService.getAllBookings();
    }

    @GetMapping("/{id}")
    public Booking getBookingById(@PathVariable Long id) {
        return bookingService.getBookingById(id);
    }

    @GetMapping("/user/{userId}")
    public List<Booking> getBookingsByUserId(@PathVariable Long userId) {
        return bookingService.getBookingsByUserId(userId);
    }

    @GetMapping("/boarding/{boardingId}")
    public List<Booking> getBookingsByBoardingId(@PathVariable Long boardingId) {
        return bookingService.getBookingsByBoardingId(boardingId);
    }

    @GetMapping("/status")
    public List<Booking> getBookingsByStatus(@RequestParam String status) {
        return bookingService.getBookingsByStatus(status);
    }

    @PutMapping("/{id}/status")
    public Booking updateBookingStatus(@PathVariable Long id, @RequestParam String status) {
        return bookingService.updateBookingStatus(id, status);
    }

    @DeleteMapping("/{id}")
    public String deleteBooking(@PathVariable Long id) {
        bookingService.deleteBooking(id);
        return "Booking deleted successfully";
    }
}