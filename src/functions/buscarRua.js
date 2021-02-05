const fetch = require('node-fetch')

module.exports = async function buscaRua(logradouro){
    const response = await fetch(`https://viacep.com.br/ws/${logradouro}/json/`)
    const json = await response.json()


    return json
}
