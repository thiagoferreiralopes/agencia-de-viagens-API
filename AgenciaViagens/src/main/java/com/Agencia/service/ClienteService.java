package com.Agencia.service;

import java.util.List;

import com.Agencia.model.Cliente;

public interface ClienteService {
Cliente saveCliente(Cliente cliente);
List<Cliente>getAllCliente();
Cliente getClienteById(long id);
Cliente updateCliente(Cliente cliente, long id);
void deleteCliente(long id);

}
