// Route params é o modo de enviar infos através da rota

const express = require('express')

const app = express()

app.listen('3000')

app.route('/').get((req, res) => res.send("Not found")) // tem que ter uma rota só com a barra pra caso ele não ache nada
app.route('/:nome').get((req, res) => res.send(req.params.nome))
//la dentro do insomnia, tudo que vir depois da barra do localhost:3000/ irá para o valor da variável nome.
app.route('/identidade/:nome').get((req, res) => res.send(req.params.nome))
// uma 3° rota, onde se escrever la insomnia, localhost:3000/identidade/ o que vier depois pode ser qualquer coisa
// OBS: OLHO NA SEMÂNTICA, OS : VÃO NA ULTIMA BARRA