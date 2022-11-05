import React from "react";

import Imagem1 from "../../assets/img/porto-de-galinhas.jpg";
import Imagem2 from "../../assets/img/fernando-de-noronha.jpg";
import Imagem3 from "../../assets/img/rio-de-janeiro.jpg";
import Imagem4 from "../../assets/img/buenos-aires.jpg";
import { Link } from "react-router-dom";


export default function Principal() {
    return (
        <main>
            <div className="container-fluid">
                <div id="mainSlider" className="carousel slide" data-ride="carousel">

                    <ol className="carousel-indicators">
                        <li data-target="#mainSlider" data-slide-to="0" className="active"></li>
                        <li data-target="#mainSlider" data-slide-to="1"></li>
                        <li data-target="#mainSlider" data-slide-to="2"></li>
                        <li data-target="#mainSlider" data-slide-to="3"></li>
                    </ol>

                    <div className="carousel-inner ">
                        <div className="carousel-item active">
                            <img src={Imagem1} className="d-block w-100" alt="Porto de Galinhas" />
                            <div className="carousel-caption d-none d-md-block">
                                <h2>Porto de Galinhas em 12x</h2>
                                <Link className="nav-link" to="/promocoes"><b>Confira</b></Link>
                            </div>
                        </div>

                        <div className="carousel-item ">
                            <img src={Imagem2} className="d-block w-100" alt="Fernando de Noronha" />
                            <div className="carousel-caption d-none d-md-block">
                                <h2>Fernando de Noronha + Aéreo </h2>
                                <Link className="nav-link" to="/promocoes"><b>Confira</b></Link>
                            </div>
                        </div>

                        <div className="carousel-item ">
                            <img src={Imagem3} className="d-block w-100" alt="Rio de Janeiro" />
                            <div className="carousel-caption d-none d-md-block">
                                <h2>Cidade Maravilhosa 5 dias </h2>
                                <Link className="nav-link" to="/promocoes"><b>Confira</b></Link>
                            </div>

                        </div>

                        <div className="carousel-item ">
                            <img src={Imagem4} className="d-block w-100" alt="Buenos Aires" />
                            <div className="carousel-caption d-none d-md-block">
                                <h2>Buenos Aires </h2>
                                <Link className="nav-link" to="/promocoes"><b>Confira</b></Link>
                            </div>

                        </div>

                    </div>
                    <a href="#mainSlider" className="carousel-control-prev" role="button" data-slide="prev" />
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only"> Previous </span>
                    <a href="#mainSlider" className="carousel-control-next" role="button" data-slide="next" />
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only"> Next </span>
                </div>
            </div>

        </main>
    )
}