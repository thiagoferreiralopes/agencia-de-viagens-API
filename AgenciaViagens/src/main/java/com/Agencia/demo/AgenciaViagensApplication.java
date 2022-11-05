package com.Agencia.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@EntityScan(basePackages = {"com.Agencia.model"})
@EnableJpaRepositories(basePackages = {"com.Agencia.repositories"})
@ComponentScan(basePackages = {"com.Agencia.controller", "com.Agencia.serviceImpl"})
@SpringBootApplication
public class AgenciaViagensApplication {

	public static void main(String[] args) {
		SpringApplication.run(AgenciaViagensApplication.class, args);
	}

}
