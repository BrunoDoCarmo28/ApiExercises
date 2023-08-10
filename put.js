const express = require('express')
const app = express()
app.listen('3000')
app.use(express.json()) //SEMPRE após o listen
let author = "Mentor"
app.route('/').get((req, res) => res.send(author))
// a rota principal, que é a /, ta pegando req e res. O send, ta send pro res o valor de author.
//essa linha só mostra o valor do author antes da alteração, é só dar um GET no insomnia que da pra ver.

app.route('/').put((req, res) => {
    //req e res vai SEMPRE junto com o route

    author = req.body.author // pra ele pegar SOMENTE o author e não toda a estrutura
    res.send(author)

}) // o put serve para alterar alguma coisa. No exemplo acima, alteramos o valor da variavel author colocando o body da requisição





