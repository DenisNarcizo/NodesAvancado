const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const buscaCep = require('./src/functions/buscarCep')
const buscaLocal = require('./src/functions/buscaLocal')
const buscarRua = require('./src/functions/buscarRua')


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.set('view engine','ejs')
app.set('views', './src/views')

app.get('/', (req, res)=>{
    res.render('index')
})

app.post('/envia-cep', async(req,res)=>{
    const {cep} = req.body
    const resultado = await buscaCep(cep)

    res.render('resultado', {dado: resultado})
})

app.post('/envia-cep', async(req,res)=>{
    const {localidade} = req.body
    const resultado = await buscaLocal(localidade)

    res.render('resultado', {dado: resultado})
})

app.post('/envia-cep', async(req,res)=>{
    const {logradouro} = req.body
    const resultado = await buscarRua(logradouro)

    res.render('resultado', {dado: resultado})
})

app.listen(8080)


