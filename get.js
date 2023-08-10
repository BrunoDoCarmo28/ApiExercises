//npm i express = instala o framework express

//node . = vai rodar o index QUE ESTIVER ESCRITO ESCRITO NO MAIN, DENTRO DO ARQUIVO PACKAGE,JSON

//node nome_do_arquivo = vai rodar o arquivo pelo seu nome

const express = require('express') // chamando o express framework e guardando na constante

const app = express() //inicializando a constante e chamando na variavel app

app.listen('3000') //o listen fica "ouvindo" o navegador, e quando entra na porta x, ele aparece certinho

app.route('/').get((req, res) => res.send("hello")) // aqui o route vai ser uma função DO PROPRIO EXPRESS que trabalha com rotas

//req de requisição, e res de response. req é o que vem na rota e a resposta é o que vamos responder

app.route('/sobre').get((req, res) => res.send("hello sobre"))

// a barra é uma rota e o get SEMPRE tem que ter um arrow function. 