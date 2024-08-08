package org.example.demo41.repository;

import org.example.demo41.model.Collection;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CollectionRepo extends JpaRepository<Collection, Long> {
}
