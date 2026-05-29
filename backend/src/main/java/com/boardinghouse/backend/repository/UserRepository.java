package com.boardinghouse.backend.repository;

import com.boardinghouse.backend.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
}