//middleware, before reaching the router with request
//next calls the next function in the middleware stack
const logger = (req, res, next) => {
    console.log(`the req is: ${req.method} ${req.protocol}://${req.get('host')}${req.originalUrl} `);
    next();
}

module.exports = logger;