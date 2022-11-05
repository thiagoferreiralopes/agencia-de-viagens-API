import React from "react";

export default function FaleConosco() {
    return (
        <form>
            <div class="container ">
                <div class="form-group">
                    <label for="exampleInputEmail1">Nome</label>
                    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                        placeholder="Seu Nome" />

                </div>

                <div class="form-group">
                    <label for="exampleInputEmail1">Endereço de email</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                        placeholder="Seu email" />
                    <small id="emailHelp" class="form-text text-muted">Nunca vamos compartilhar seu email, com
                        ninguém.</small>
                </div>

                <div class="form-group">

                    <label for="exampleFormControlTextarea1" class="form-label">Mensagem</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="4"
                        placeholder="Escreva Sua Mensagem Aqui"></textarea>
                </div>


                <div class="form-group form-check">
                    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                    <label class="form-check-label" for="exampleCheck1">Não sou Robô</label>
                </div>
                <button type="submit" class="btn btn-primary">Enviar</button>
            </div>
        </form>
    )
}