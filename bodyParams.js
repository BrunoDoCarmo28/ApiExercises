// os 3 verbos que aceitam body são POST, PUT, PATCH

const express = require('express')

const app = express()

app.listen('3000')

app.use(express.json()) //TEM QUE TER MIDDLEWARE SEMPRE QUE PUXAR BODY DE API
//aliás, este express é o primeirão

app.route('/').post((req, res) => {
    //o post, pq get não importa body

    const { nome, cidade } = req.body //req.body está sendo desmembrado, porem para isso acontecer OS NOMES DEVEM SER EXATAMENTE IGUAIS AOS IDENTIFICADORES DO JSON
    res.send(`meu nome é ${nome} e minha cidade é ${cidade}`)

    //console.log(req.body.nome) //recebendo o body DA API DENTRO DA REQ

})