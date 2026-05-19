package com.boardinghouse.backend.repository;

import com.boardinghouse.backend.entity.Boarding;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface BoardingRepository extends JpaRepository<Boarding, Long> {

    List<Boarding> findByLocationContainingIgnoreCase(String location);

    List<Boarding> findByGenderType(String genderType);

    List<Boarding> findByMonthlyPriceLessThanEqual(Double monthlyPrice);
}