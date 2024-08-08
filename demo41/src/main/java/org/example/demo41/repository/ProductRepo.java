package org.example.demo41.repository;

import org.example.demo41.model.Product;
import org.springframework.data.domain.Page;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ProductRepo extends JpaRepository<Product, Long> {
    List<Product> findAllByOrderByUpdateTimeDesc();

}
