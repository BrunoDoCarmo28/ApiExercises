// Query params é o modo de enviar infos através de variáveis criadas diretamente na requisição DENTRO INSOMNIA

const express = require('express')

const app = express()

app.listen('3000')

app.route('/').get ((req, res) => res.send(req.query.nome))
app.route('/about/user').get ((req, res) => res.send(req.query))
