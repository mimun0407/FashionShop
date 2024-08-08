package org.example.demo41.service;

import org.example.demo41.model.Product;
import org.example.demo41.repository.ProductRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.util.FileCopyUtils;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;

@Service
public class ProductService {
    public static String UPLOAD_DIRECTORY = "/home/dang/Test111111111111111111/demo41/src/main/resources/static/";
    @Autowired
    private ProductRepo productRepo;
    public Page<Product> findAll(int page, int size) {
        Pageable sortedByPriceDesc =
                PageRequest.of(page, size, Sort.by("name").descending());
        return productRepo.findAll(sortedByPriceDesc);

    }
    public void create(Product product)  {
       product.setUpdateTime(java.time.LocalDateTime.now());
        productRepo.save(product);
    }
    public void upImage(MultipartFile file,Long id) throws IOException {
        Product product=productRepo.findById(id).get();
        product.setImage(uploadImage(file));
        productRepo.save(product);
    }
    private String uploadImage(MultipartFile file) throws IOException {
        String fileName=file.getOriginalFilename();
        FileCopyUtils.copy(file.getBytes(), new File(UPLOAD_DIRECTORY+fileName));
        return fileName;
    }
}
