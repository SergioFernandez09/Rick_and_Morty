const http = require('http');
const data = require('./utils/data');

http
.createServer((req, res) =>{
    res.setHeader('Access-Control-Allow-Origin', '*');

    if(req.url.includes('/rickandmorty/character')){
        const id = req.url.split('/').at(-1)
        
        const characterFaund = data.find((character) => character.id === +id)
        console.log(characterFaund)

        return res.writeHead(200, {"Conntent-type": "application/json"}).end(JSON.stringify(characterFaund))
    }
})
.listen(3001)