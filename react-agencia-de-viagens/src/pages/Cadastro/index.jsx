import React from "react";

export default function Cadastro(){
    return(
        <form>
        <div class="container">
            <div class="form-group">
                <label for="exampleInputEmail1">Nome</label>
                <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                placeholder="Seu Nome"/>
                
            </div>

            <div class="form-group">
                <label for="exampleInputEmail1">Endereço de email</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                placeholder="Seu email"/>
                <small id="emailHelp" class="form-text text-muted">Nunca vamos compartilhar seu email, com
                ninguém.</small>
            </div>

            <div class="form-group">
                <label for="exampleInputEmail1">Telefone</label>
                <input type="number" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                placeholder="Seu Telefone"/>
                
            </div>

            <div class="form-group">
                <label for="exampleInputPassword1">Senha</label>
                <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Senha"/>
            </div>

            <div class="form-group">
                <label for="exampleInputPassword1">Confirme sua Senha</label>
                <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Confirme sua Senha"/>
            </div>
            <div class="form-group form-check">
                <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                <label class="form-check-label" for="exampleCheck1">Não sou Robô</label>
            </div>
            <button type="submit" class="btn btn-primary">Enviar</button>
        </div>
    </form>
    )
}