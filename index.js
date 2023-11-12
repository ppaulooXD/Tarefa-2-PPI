import express from 'express';

const porta = 3000;
const host = '0.0.0.0';

const app = express();

app.use(express.static('./páginas'));

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
                            background-color: blue;
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

app.listen(porta, host, () => {
    console.log(`Servidor rodando na url http://${host}:${porta}`);
});