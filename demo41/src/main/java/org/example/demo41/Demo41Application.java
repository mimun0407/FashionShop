package org.example.demo41;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

@SpringBootApplication
@EnableJpaAuditing
public class Demo41Application {

    public static void main(String[] args) {
        SpringApplication.run(Demo41Application.class, args);
    }

}
