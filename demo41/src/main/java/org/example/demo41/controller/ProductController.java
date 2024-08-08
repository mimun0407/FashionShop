package org.example.demo41.controller;

import org.example.demo41.model.Product;
import org.example.demo41.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import java.io.IOException;
import java.util.List;

@RestController
public class ProductController {
    @Autowired
    private ProductService productService;

    @GetMapping("/adminuser/getAllProduct/{id}")
    public ResponseEntity<?> findAll(@RequestParam(defaultValue = "0") int page, @RequestParam(defaultValue = "2") int size) {
        return ResponseEntity.ok(productService.findAll(page,size));
    }
    @PostMapping("/admin/createProduct")
    public ResponseEntity<Product> create(@RequestBody Product product)   {
        productService.create(product);
        return ResponseEntity.ok(product);
    }
    @PostMapping("/admin/ImageProduct/{id}")
    public ResponseEntity<?>UploadImage(@RequestParam("file") MultipartFile file,@PathVariable Long id) throws IOException {
        productService.upImage(file,id);
        return ResponseEntity.ok().build();
    }

}