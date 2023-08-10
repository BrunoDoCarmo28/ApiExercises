const express = require('express')

const app = express()

app.listen('3000')

//o passo abaixo se chama middlewere, passar do insomnia pra cá

app.use(express.json()) //metodo para literalmente usar
//esse express é o primeiro, NÃO o inicializada com função

app.route('/').post((req, res) => res.send(req.body)) // ta enviando o que ta dentro do corpo da requisição para a resposta ao site

// tudo enviado dentro do post é recebido pelo req



