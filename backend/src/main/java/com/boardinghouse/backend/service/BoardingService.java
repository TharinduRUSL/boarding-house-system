package com.boardinghouse.backend.service;

import com.boardinghouse.backend.entity.Boarding;
import com.boardinghouse.backend.repository.BoardingRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BoardingService {

    private final BoardingRepository boardingRepository;

    public BoardingService(BoardingRepository boardingRepository) {
        this.boardingRepository = boardingRepository;
    }

    public Boarding createBoarding(Boarding boarding) {
        return boardingRepository.save(boarding);
    }

    public List<Boarding> getAllBoardings() {
        return boardingRepository.findAll();
    }

    public Boarding getBoardingById(Long id) {
        return boardingRepository.findById(id).orElse(null);
    }

    public List<Boarding> searchByLocation(String location) {
        return boardingRepository.findByLocationContainingIgnoreCase(location);
    }

    public List<Boarding> filterByGenderType(String genderType) {
        return boardingRepository.findByGenderType(genderType);
    }

    public List<Boarding> filterByMaxPrice(Double price) {
        return boardingRepository.findByMonthlyPriceLessThanEqual(price);
    }

    public Boarding updateBoarding(Long id, Boarding updatedBoarding) {
        Boarding existingBoarding = boardingRepository.findById(id).orElse(null);

        if (existingBoarding == null) {
            return null;
        }

        existingBoarding.setOwnerId(updatedBoarding.getOwnerId());
        existingBoarding.setTitle(updatedBoarding.getTitle());
        existingBoarding.setDescription(updatedBoarding.getDescription());
        existingBoarding.setLocation(updatedBoarding.getLocation());
        existingBoarding.setAddress(updatedBoarding.getAddress());
        existingBoarding.setMonthlyPrice(updatedBoarding.getMonthlyPrice());
        existingBoarding.setAdvancePayment(updatedBoarding.getAdvancePayment());
        existingBoarding.setGenderType(updatedBoarding.getGenderType());
        existingBoarding.setRoomType(updatedBoarding.getRoomType());
        existingBoarding.setAvailableRooms(updatedBoarding.getAvailableRooms());
        existingBoarding.setAvailableBeds(updatedBoarding.getAvailableBeds());
        existingBoarding.setFoodAvailable(updatedBoarding.getFoodAvailable());
        existingBoarding.setWifiAvailable(updatedBoarding.getWifiAvailable());
        existingBoarding.setParkingAvailable(updatedBoarding.getParkingAvailable());
        existingBoarding.setCctvAvailable(updatedBoarding.getCctvAvailable());
        existingBoarding.setFemaleWardenAvailable(updatedBoarding.getFemaleWardenAvailable());
        existingBoarding.setSecureGateAvailable(updatedBoarding.getSecureGateAvailable());
        existingBoarding.setKitchenAvailable(updatedBoarding.getKitchenAvailable());
        existingBoarding.setLaundryAvailable(updatedBoarding.getLaundryAvailable());
        existingBoarding.setRules(updatedBoarding.getRules());
        existingBoarding.setContactNumber(updatedBoarding.getContactNumber());
        existingBoarding.setStatus(updatedBoarding.getStatus());

        return boardingRepository.save(existingBoarding);
    }

    public void deleteBoarding(Long id) {
        boardingRepository.deleteById(id);
    }
}