package com.luis.baccredomaticdepartmentstore.repository;

import com.luis.baccredomaticdepartmentstore.model.ProductCategory;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProductCategoryRepository extends JpaRepository<ProductCategory, Long> {
}
