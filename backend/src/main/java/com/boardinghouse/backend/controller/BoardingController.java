package com.boardinghouse.backend.controller;

import com.boardinghouse.backend.entity.Boarding;
import com.boardinghouse.backend.service.BoardingService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/boardings")
@CrossOrigin(origins = {"http://localhost:5173", "http://localhost:5174"})
public class BoardingController {

    private final BoardingService boardingService;

    public BoardingController(BoardingService boardingService) {
        this.boardingService = boardingService;
    }

    @PostMapping
    public Boarding createBoarding(@RequestBody Boarding boarding) {
        return boardingService.createBoarding(boarding);
    }

    @GetMapping
    public List<Boarding> getAllBoardings() {
        return boardingService.getAllBoardings();
    }

    @GetMapping("/{id}")
    public Boarding getBoardingById(@PathVariable Long id) {
        return boardingService.getBoardingById(id);
    }

    @GetMapping("/search/location")
    public List<Boarding> searchByLocation(@RequestParam String location) {
        return boardingService.searchByLocation(location);
    }

    @GetMapping("/filter/gender")
    public List<Boarding> filterByGenderType(@RequestParam String genderType) {
        return boardingService.filterByGenderType(genderType);
    }

    @GetMapping("/filter/price")
    public List<Boarding> filterByMaxPrice(@RequestParam Double price) {
        return boardingService.filterByMaxPrice(price);
    }

    @PutMapping("/{id}")
    public Boarding updateBoarding(@PathVariable Long id, @RequestBody Boarding boarding) {
        return boardingService.updateBoarding(id, boarding);
    }

    @DeleteMapping("/{id}")
    public String deleteBoarding(@PathVariable Long id) {
        boardingService.deleteBoarding(id);
        return "Boarding deleted successfully";
    }
}