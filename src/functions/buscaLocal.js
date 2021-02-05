const fetch = require('node-fetch')

module.exports = async function buscaLocal(localidade){
    const response = await fetch(`httphttps://api.hgbrasil.com/${localidade}/`)
    const json = await response.json()


    return json
}