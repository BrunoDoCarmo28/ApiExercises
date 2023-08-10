const express = require('express')
const axios = require('axios') //importando a biblioteca axios

const app = express()

app.listen('3000')

app.route('/').get((req, res) => {
    axios.get('https://api.github.com/users/maykbrito')
        //.then(result => res.send(result.data.avatar_url))//este result, é uma variável. O resultado sempre tras varios dados, mas a resposta em geral está no .data, porem pode trazer headers e results
        .then(result => res.send(`<img src ="${result.data.avatar_url}"/>`)) // template strings. esta linha serve para apresentar a foto como foto e não código. CUIDAR A SINTAXE
        .catch(error => console.error(error)) // caso de erro, o console vai apresentar o erro
    //O axios trabalha com promises, logo, tem que ter .then e .catch
})