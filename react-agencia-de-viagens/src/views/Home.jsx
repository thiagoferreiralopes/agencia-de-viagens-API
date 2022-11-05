import React, { useState, useEffect } from "react";
import { useNavigate, Link, useParams } from "react-router-dom";
import axios from "axios";

export default function Home() {

  //Listagem
  const [cliente, setCliente] = useState([]);

  const listarClientes = async () => {
    try {
      await axios.get("http://localhost:8080/api/cliente")
        .then((response) => {
          setCliente(response.data)
        })
    } catch (erro) {
      alert(erro.mensage);
    }
  };

  useEffect(() => {
    listarClientes();
  }, [])

  //Deletar
  const { id } = useParams();

  const deleteCliente = async(id) => {
    try {
      await axios.delete(`http://localhost:8080/apicliente/${id}`)
        .then((response) => {
          alert("Cliente excluido!")
          listarClientes();
        })
    } catch (erro) {
      alert(erro.message)
    }
  }

  return (
    <div className="container">
      <div clasName="py-4">
        <table className="table table-striped border shadow">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Nome</th>
              <th scope="col">Sobrenome</th>
              <th scope="col">Email</th>
              <th scope="col"> - </th>
            </tr>
          </thead>
          <tbody>
            {cliente.map((cliente, key) => (
              <tr>
                <th scope="row" key={key}>{key + 1}</th>
                <td>{cliente.primeiroNome}</td>
                <td>{cliente.ultimoNome}</td>
                <td>{cliente.email}</td>
                <td>
                  <Link to={`/view/${cliente.id}`} className="btn btn-outline-success mx-2">
                    Ver
                  </Link>
                  <Link to={`/edite/${cliente.id}`} className="btn btn-success mx-2">
                    Editar
                  </Link>
                  <button className="btn btn-danger mx-2" onClick={() => deleteCliente(cliente.id)}>
                    Excluir
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}