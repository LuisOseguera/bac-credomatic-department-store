package com.luis.baccredomaticdepartmentstore.repository;

import com.luis.baccredomaticdepartmentstore.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
}
