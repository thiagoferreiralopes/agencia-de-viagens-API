package com.Agencia.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Data;

@Entity
@Data
@Table (name="cliente")
public class Cliente {

	//Variáveis
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	
	@Column(name = "primeiro_nome", nullable = false)
	private String primeiroNome;
	
	@Column(name= "ultimo_nome")
	private String ultimoNome;
	
	@Column(name = "email", nullable = false)
	private String email;
	
	
	
}
