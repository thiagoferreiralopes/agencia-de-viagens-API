import React from "react";

import Imagem14 from "../../assets/img/buenos-aires.jpg";
import Imagem13 from "../../assets/img/buzios.jpg";
import Imagem15 from "../../assets/img/fernando-de-noronha.jpg";
import Imagem16 from "../../assets/img/rio-de-janeiro.jpg";
import Imagem17 from "../../assets/img/machu-picchu.jpg";
import Imagem18 from "../../assets/img/franca.jpeg";
import { Link } from "react-router-dom";

export default function Pacotes() {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="card card_img" style={{width: "22rem"}}>
                    <img className="card-img-top" src={Imagem14} alt="Imagem de capa do card" />
                    <div className="card-body">
                        <h5 className="card-title">Buenos Aires 5 dias</h5>
                        <p className="card-text"/>R$ 3.500,00
                        <p className="card-text"/>10X 350,00
                        <Link className="nav-link btn btn-primary" to= "/cadastro">COMPRAR</Link>
                    </div>
                </div>

                <div className="card card_img" style={{width: "22rem"}}>
                    <img className="card-img-top" src={Imagem13} alt="Imagem de capa do card" />
                    <div className="card-body">
                        <h5 className="card-title">Buzios 7 dias</h5>
                        <p className="card-text"/>R$ 2.500,00
                        <p className="card-text"/>10X 250,00
                        <Link className="nav-link btn btn-primary" to= "/cadastro">COMPRAR</Link>
                    </div>
                </div>

                <div className="card card_img" style={{width: "22rem"}}>
                    <img className="card-img-top" src={Imagem15} alt="Imagem de capa do card" />
                    <div className="card-body">
                        <h5 className="card-title">Fernando de Noronha 4 dias</h5>
                        <p className="card-text"/>R$ 5.500,00
                        <p className="card-text"/>10X 550,00
                        <Link className="nav-link btn btn-primary" to= "/cadastro">COMPRAR</Link>
                    </div>
                </div>
            </div>


            <div className="row">
                <div className="card card_img" style={{width: "22rem"}}>
                    <img className="card-img-top" src={Imagem16} alt="Imagem de capa do card" />
                    <div className="card-body">
                        <h5 className="card-title">Cidade Maravilhosa 3 dias</h5>
                        <p className="card-text"/>R$ 2.500,00
                        <p className="card-text"/>10X 250,00
                        <Link className="nav-link btn btn-primary" to= "/cadastro">COMPRAR</Link>
                    </div>
                </div>

                <div className="card card_img" style={{width: "22rem"}}>
                    <img className="card-img-top" src={Imagem17} alt="Imagem de capa do card" />
                    <div className="card-body">
                        <h5 className="card-title">Machu Picchu 4 dias</h5>
                        <p className="card-text"/>R$ 5.900,00
                        <p className="card-text"/>10X 590,00
                        <Link className="nav-link btn btn-primary" to= "/cadastro">COMPRAR</Link>
                    </div>
                </div>

                <div className="card card_img" style={{width: "22rem"}}>
                    <img className="card-img-top" src={Imagem18} alt="Imagem de capa do card" />
                    <div className="card-body">
                        <h5 className="card-title">França 7 dias</h5>
                        <p className="card-text"/>R$ 6.500,00
                        <p className="card-text"/>10X 650,00
                        <Link className="nav-link btn btn-primary" to= "/cadastro">COMPRAR</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}