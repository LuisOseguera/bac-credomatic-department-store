package com.luis.baccredomaticdepartmentstore.repository;

import com.luis.baccredomaticdepartmentstore.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProductRepository extends JpaRepository<Product, Long> {
}
