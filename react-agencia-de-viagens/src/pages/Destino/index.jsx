import React from "react";

import Imagem19 from "../../assets/img/taj-mahal.jpg";
import Imagem20 from "../../assets/img/coliseu.jpg";
import Imagem21 from "../../assets/img/estatua-da-liberdade.jpg";
import Imagem22 from "../../assets/img/cristo-redentor.jpeg";
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
                    <img className="card-img-top" src={Imagem19} alt="Imagem de capa do card" />
                    <div className="card-body">
                        <h3 className="card-title">Taj Mahal </h3>
                        <p className="card-text"/>12X DE 399,99 SEM JUROS
                        <Link className="nav-link btn btn-primary" to= "/promocoes">Mais Detalhes</Link>
                    </div>
                </div>

                <div className="card card_img" style={{width: "22rem"}}>
                    <img className="card-img-top" src={Imagem20} alt="Imagem de capa do card" />
                    <div className="card-body">
                        <h3 className="card-title">Coliseu</h3>
                        <p className="card-text"/>12x 499,99 SEM JUROS
                        <Link className="nav-link btn btn-primary" to= "/promocoes">Mais Detalhes</Link>
                    </div>
                </div>

                <div className="card card_img" style={{width: "22rem"}}>
                    <img className="card-img-top" src={Imagem21} alt="Imagem de capa do card" />
                    <div className="card-body">
                        <h3 className="card-title">Estatua da Liberdade</h3>
                        <p className="card-text"/>12X 449,99 SEM JUROS!!
                        <Link className="nav-link btn btn-primary" to= "/promocoes">Mais Detalhes</Link>
                    </div>
                </div>
            </div>


            <div className="row">
                <div className="card card_img" style={{width: "22rem"}}>
                    <img className="card-img-top" src={Imagem22} alt="Imagem de capa do card" />
                    <div className="card-body">
                        <h3 className="card-title">Cristo Redentor</h3>
                        <p className="card-text"/>12X 119,99 SEM JUROS!!
                        <Link className="nav-link btn btn-primary" to= "/promocoes">Mais Detalhes</Link>
                    </div>
                </div>

                <div className="card card_img" style={{width: "22rem"}}>
                    <img className="card-img-top" src={Imagem23} alt="Imagem de capa do card" />
                    <div className="card-body">
                        <h3 className="card-title">Arco do Triunfo</h3>
                        <p className="card-text"/>12X 649,99 SEM JUROS
                        <Link className="nav-link btn btn-primary" to= "/promocoes">Mais Detalhes</Link>
                    </div>
                </div>

                <div className="card card_img" style={{width: "22rem"}}>
                    <img className="card-img-top" src={Imagem24} alt="Imagem de capa do card" />
                    <div className="card-body">
                        <h3 className="card-title">Basílica de São Pedro</h3>
                        <p className="card-text"/>12X 529,99 SEM JUROS!!
                        <Link className="nav-link btn btn-primary" to= "/promocoes">Mais Detalhes</Link>
                    </div>
                </div>
            </div>


            <div className="row">
                <div className="card card_img" style={{width: "22rem"}}>
                    <img className="card-img-top" src={Imagem25} alt="Imagem de capa do card" />
                    <div className="card-body">
                        <h3 className="card-title">Disney </h3>
                        <p className="card-text"/>EM 10X 900,00 SEM JUROS!!
                        <Link className="nav-link btn btn-primary" to= "/promocoes">Mais Detalhes</Link>
                    </div>
                </div>

                <div className="card card_img" style={{width: "22rem"}}>
                    <img className="card-img-top" src={Imagem26} alt="Imagem de capa do card" />
                    <div className="card-body">
                        <h3 className="card-title">Muralha da China</h3>
                        <p className="card-text"/>10X DE 950,00 SEM JUROS!!
                        <Link className="nav-link btn btn-primary" to= "/promocoes">Mais Detalhes</Link>
                    </div>
                </div>

                <div className="card card_img" style={{width: "22rem"}}>
                    <img className="card-img-top" src={Imagem27} alt="Imagem de capa do card" />
                    <div className="card-body">
                        <h3 className="card-title">Botanico Curitiba</h3>
                        <p className="card-text"/>EM: 10X 550,00 SEM JUROS!!
                        <Link className="nav-link btn btn-primary" to= "/promocoes">Mais Detalhes</Link>
                    </div>
                </div>
            </div>


        </div>
    )
}