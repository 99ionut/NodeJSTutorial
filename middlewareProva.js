const middlewareProva = (req, res, next) =>{
    const {method, url} = req
    const time = new Date().getMinutes()
    console.log(method, url, time)
    //fa proseguire la richiesta verso il resto della funione, nel nostro caso res.send
    next()
}

module.exports = middlewareProva;