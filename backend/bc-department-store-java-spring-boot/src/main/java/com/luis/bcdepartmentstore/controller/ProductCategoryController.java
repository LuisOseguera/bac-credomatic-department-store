package com.luis.bcdepartmentstore.controller;

import com.luis.bcdepartmentstore.model.ProductCategory;
import com.luis.bcdepartmentstore.repository.ProductCategoryRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/product-category")
public class ProductCategoryController {

    private final ProductCategoryRepository productCategoryRepository;

    public ProductCategoryController(ProductCategoryRepository productCategoryRepository) {
        this.productCategoryRepository = productCategoryRepository;
    }

    @GetMapping
    public ResponseEntity getAllProductCategories() {
        return ResponseEntity.ok(this.productCategoryRepository.findAll());
    }

    @GetMapping("{id}")
    public ResponseEntity getOneProductCategory(@PathVariable Long id) {
        return ResponseEntity.ok(this.productCategoryRepository.findById(id).get());
    }

    @PostMapping
    public ResponseEntity createProductCategory(@RequestBody ProductCategory productCategory) {
        return ResponseEntity.status(201).body(this.productCategoryRepository.save(productCategory));
    }

    @PutMapping("{id}")
    public ResponseEntity updateProductCategory(@PathVariable Long id, @RequestBody ProductCategory productCategory) {

        ProductCategory productCategoryToUpdate = this.productCategoryRepository.findById(id).get();

        productCategoryToUpdate.setName(productCategory.getName());
        productCategoryToUpdate.setDescription(productCategory.getDescription());

        return ResponseEntity.ok(this.productCategoryRepository.save(productCategoryToUpdate));
    }

    @DeleteMapping("{id}")
    public ResponseEntity deleteProductCategory(@PathVariable Long id) {

        ProductCategory productCategory = this.productCategoryRepository.findById(id).get();

        this.productCategoryRepository.deleteById(id);

        return ResponseEntity.ok(productCategory);
    }
}
