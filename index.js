import express from 'express';
import path from 'path';

const porta = 3000;
const host = '0.0.0.0';

var usuarios= [];

function listausuarios(requisicao, resposta){
    const usuario = {
        nome: requisicao.query.nome,
        sobrenome: requisicao.query.sobrenome,
        username: requisicao.query.username
    }
    usuarios.push(usuario);

    let contresposta =`
                <!DOCTYPE html>
                <html lang="pt-br">
                <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <title>Lista de usuários</title>
                    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">    
                </head>
                <body>
                <h1>Lista de usuários</h1>
                <table class="table table-dark table-striped">
                    <thead>
                        <tr>
                        <th scope="col">Nome</th>
                        <th scope="col">Sobrenome</th>
                        <th scope="col">Username</th>
                        </tr>
                    </thead>
                    <tbody>                      
    `;
    for(const usuario of usuarios)
    {
        contresposta += `
            <tr>    
                <td>${usuario.nome}</td>
                <td>${usuario.sobrenome}</td>
                <td>${usuario.username}</td>
            </tr>
        `
    }
    contresposta += `
                    </tbody>
                </table>
                <a class="btn btn-light" href="/" role="button">Voltar ao menu</a>
                <a class="btn btn-success" href="/cadastro.html" role="button">Cadastrar</a>
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
                </body>
                </html>`;

    resposta.send(contresposta);
                
}

const app = express();

app.use(express.static(path.join(process.cwd(), 'páginas')));

app.get('/', (requisicao, resposta) => {
    resposta.end(`
                <!DOCTYPE html>
                <html lang="pt-br">
                <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <title>Menu de escolha</title>
                    <style>
                        * {
                            font-family: Verdana;
                        }
                        .container {
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            flex-direction: column;
                            width: 350px;
                            height: 350px;
                            border: 1px solid black;
                            position: absolute;
                            top: 50%;
                            left: 50%;
                            transform: translate(-50%, -50%);
                            border-radius: 5px;
                        }
                        .a {
                            text-decoration: none;
                            background-color: black;
                            color: white;
                            border-radius: 5px;
                            padding: 10px;
                        }
                    </style>
                </head>
                <body>
                    <div class="container">
                        <h1>Menu</h1><br>
                        <a class= "a" href="/cadastro.html">Cadastrar</a>
                    </div>
                </body>
                </html>       
    `);
})


app.get('/cadastro', listausuarios);

app.listen(porta, host, () => {
    console.log(`Servidor rodando na url http://${host}:${porta}`);
});