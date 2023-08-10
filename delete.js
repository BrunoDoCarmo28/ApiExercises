const express = require('express')

const app = express()

app.listen('3000')

let author = "Bruno"

app.route('/:identificador').delete((req, res) => {

    res.send(req.params.identificador)

})
//vai apagar o valor de author, precisa das chaves pra funcionar
// O : depois da / é para criar uma nova variavel, que é chamada pelo params e lançada dentro do req
// no caso, o identificador vai receber o valor teste de dentro da API (localhost:3000/teste)

