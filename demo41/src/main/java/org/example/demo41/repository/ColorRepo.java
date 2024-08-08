package org.example.demo41.repository;

import org.example.demo41.model.Color;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ColorRepo extends JpaRepository<Color, Integer> {
}
