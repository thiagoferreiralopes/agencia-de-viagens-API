package com.Agencia.serviceImpl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.Agencia.exception.ResourceNotFoundException;
import com.Agencia.model.Cliente;
import com.Agencia.repositories.ClienteRepository;
import com.Agencia.service.ClienteService;

@Service
public class ClienteServiceImpl implements ClienteService{
	
	@Autowired
	private ClienteRepository clienteRepository;

	
	@Override
	public Cliente saveCliente(Cliente cliente) {
		return clienteRepository.save(cliente);
	}
	@Override
	public List <Cliente> getAllCliente(){
		return clienteRepository.findAll();
	}
	
	@Override
	public Cliente getClienteById(long id) {
		return clienteRepository.findById(id). orElseThrow(() ->
		new ResourceNotFoundException("Cliente", "id", id));		
		
	}
	@Override
	public Cliente updateCliente(Cliente cliente, long id) {
		Cliente  clienteExistente = clienteRepository.findById(id). orElseThrow(
				() -> new ResourceNotFoundException("Cliente", "id", id));
		clienteExistente.setPrimeiroNome(cliente.getPrimeiroNome());
		clienteExistente.setUltimoNome(cliente.getUltimoNome());
		clienteExistente.setEmail(cliente.getEmail());
		
		clienteRepository.save(clienteExistente);
		return clienteExistente;
	}
	@Override
	public void deleteCliente(long id) {
	clienteRepository.findById(id).orElseThrow(() ->
	new ResourceNotFoundException ("Cliente", "id", id));
	
	clienteRepository.deleteById(id);
	}
}
