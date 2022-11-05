import React from "react";

import Imagem14 from "../../assets/img/buenos-aires.jpg";
import Imagem19 from "../../assets/img/taj-mahal.jpg";
import Imagem15 from "../../assets/img/fernando-de-noronha.jpg";
import Imagem16 from "../../assets/img/rio-de-janeiro.jpg";
import Imagem17 from "../../assets/img/machu-picchu.jpg";
import Imagem20 from "../../assets/img/coliseu.jpg";
import Imagem21 from "../../assets/img/estatua-da-liberdade.jpg";
import Imagem23 from "../../assets/img/arco-do-triunfo.jpg";
import Imagem24 from "../../assets/img/basilica-sao-pedro.jpg";
import Imagem25 from "../../assets/img/disney.jpg";
import Imagem26 from "../../assets/img/muralha-da-china.jpeg";
import Imagem27 from "../../assets/img/botanico.jpg";
import { Link } from "react-router-dom";

export default function Pacotes() {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="card card_img" style={{width: "22rem"}}>
                    <img className="card-img-top" src={Imagem14} alt="Imagem de capa do card" />
                    <div className="card-body">
                        <h5 className="card-title">Buenos Aires 5 dias</h5>
                        <p className="card-text"/>DE R$ 4.500,00
                        <p className="card-text"/>POR R$ 3.500,00
                        <p className="card-text"/>EM 10X 350,00 SEM JUROS!!
                        <Link className="nav-link btn btn-primary" to= "/cadastro">COMPRAR</Link>
                    </div>
                </div>

                <div className="card card_img" style={{width: "22rem"}}>
                    <img className="card-img-top" src={Imagem19} alt="Imagem de capa do card" />
                    <div className="card-body">
                        <h5 className="card-title">Taj Mahal 3 dias </h5>
                        <p className="card-text"/>DE: R$ 5.500,00
                        <p className="card-text"/>POR: R$ 4.800,00
                        <p className="card-text"/>12X DE 399,99 SEM JUROS!!
                        <Link className="nav-link btn btn-primary" to= "/cadastro">COMPRAR</Link>
                    </div>
                </div>

                <div className="card card_img" style={{width: "22rem"}}>
                    <img className="card-img-top" src={Imagem15} alt="Imagem de capa do card" />
                    <div className="card-body">
                        <h5 className="card-title">Fernando de Noronha 4 dias</h5>
                        <p className="card-text"/>DE: R$ 6.000,00
                        <p className="card-text"/>POR: R$ 5.500,00
                        <p className="card-text"/>EM: 10X 550,00 SEM JUROS!!
                        <Link className="nav-link btn btn-primary" to= "/cadastro">COMPRAR</Link>
                    </div>
                </div>
            </div>


            <div className="row">
                <div className="card card_img" style={{width: "22rem"}}>
                    <img className="card-img-top" src={Imagem16} alt="Imagem de capa do card" />
                    <div className="card-body">
                        <h5 className="card-title">Cidade Maravilhosa 3 dias</h5>
                        <p className="card-text"/>DE: R$ 3.000,00
                        <p className="card-text"/>POR: R$ 2.500,00
                        <p className="card-text"/>EM: 10X 250,00 SEM JUROS!!
                        <Link className="nav-link btn btn-primary" to= "/cadastro">COMPRAR</Link>
                    </div>
                </div>

                <div className="card card_img" style={{width: "22rem"}}>
                    <img className="card-img-top" src={Imagem17} alt="Imagem de capa do card" />
                    <div className="card-body">
                        <h5 className="card-title">Machu Picchu 4 dias</h5>
                        <p className="card-text"/>DE: R$ 6.200,00
                        <p className="card-text"/>POR: R$ 5.900,00
                        <p className="card-text"/>EM: 10X 590,00 SEM JUROS!!
                        <Link className="nav-link btn btn-primary" to= "/cadastro">COMPRAR</Link>
                    </div>
                </div>

                <div className="card card_img" style={{width: "22rem"}}>
                    <img className="card-img-top" src={Imagem23} alt="Imagem de capa do card" />
                    <div className="card-body">
                        <h5 className="card-title">Arco do Triunfo 4 dias</h5>
                        <p className="card-text"/>DE: R$ 7.000,00
                        <p className="card-text"/>POR: R$ 6.500,00
                        <p className="card-text"/>EM 10X 649,99 SEM JUROS!!
                        <Link className="nav-link btn btn-primary" to= "/cadastro">COMPRAR</Link>
                    </div>
                </div>
            </div>


            <div className="row">
                <div className="card card_img" style={{width: "22rem"}}>
                    <img className="card-img-top" src={Imagem25} alt="Imagem de capa do card" />
                    <div className="card-body">
                        <h5 className="card-title">Disney 4 dias</h5>
                        <p className="card-text"/>DE R$ 9.500,00
                        <p className="card-text"/>POR R$ 9.000,00
                        <p className="card-text"/>EM 10X 900,00 SEM JUROS!!
                        <Link className="nav-link btn btn-primary" to= "/cadastro">COMPRAR</Link>
                    </div>
                </div>

                <div className="card card_img" style={{width: "22rem"}}>
                    <img className="card-img-top" src={Imagem26} alt="Imagem de capa do card" />
                    <div className="card-body">
                        <h5 className="card-title">Muralha da China 6 dias</h5>
                        <p className="card-text"/>DE: R$ 9.999,00
                        <p className="card-text"/>POR: R$ 9.500,00
                        <p className="card-text"/>10X DE 950,00 SEM JUROS!!
                        <Link className="nav-link btn btn-primary" to= "/cadastro">COMPRAR</Link>
                    </div>
                </div>

                <div className="card card_img" style={{width: "22rem"}}>
                    <img className="card-img-top" src={Imagem27} alt="Imagem de capa do card" />
                    <div className="card-body">
                        <h5 className="card-title">Botanico Curitiba 6 dias</h5>
                        <p className="card-text"/>DE: R$ 6.000,00
                        <p className="card-text"/>POR: R$ 5.500,00
                        <p className="card-text"/>EM: 10X 550,00 SEM JUROS!!
                        <Link className="nav-link btn btn-primary" to= "/cadastro">COMPRAR</Link>
                    </div>
                </div>
            </div>


            <div className="row">
                <div className="card card_img" style={{width: "22rem"}}>
                    <img className="card-img-top" src={Imagem24} alt="Imagem de capa do card" />
                    <div className="card-body">
                    <h5 className="card-title">Basílica de São Pedro 4 dias</h5>
                        <p className="card-text"/>DE: R$ 7.000,00
                        <p className="card-text"/>POR: R$ 6.360,00
                        <p className="card-text"/>EM: 10X 636,00 SEM JUROS!!
                        <Link className="nav-link btn btn-primary" to= "/cadastro">Eu Quero</Link>
                    </div>
                </div>

                <div className="card card_img" style={{width: "22rem"}}>
                    <img className="card-img-top" src={Imagem20} alt="Imagem de capa do card" />
                    <div className="card-body">
                    <h5 className="card-title">Coliseu 4 dias</h5>
                        <p className="card-text"/>DE: R$ 6.400,00
                        <p className="card-text"/>POR: R$ 6.000,00
                        <p className="card-text"/>EM: 10X 600,00 SEM JUROS!!
                        <Link className="nav-link btn btn-primary" to= "/cadastro">Eu Quero</Link>
                    </div>
                </div>

                <div className="card card_img" style={{width: "22rem"}}>
                    <img className="card-img-top" src={Imagem21} alt="Imagem de capa do card" />
                    <div className="card-body">
                    <h5 className="card-title">Estatua da Liberdade 3 dias</h5>
                        <p className="card-text"/>DE: R$ 6.000,00
                        <p className="card-text"/>POR: R$ 5.400,00
                        <p className="card-text"/>EM: 10X 540,00 SEM JUROS!!
                        <Link className="nav-link btn btn-primary" to= "/cadastro">Eu Quero</Link>
                    </div>
                </div>
            </div>


        </div>
    )
}