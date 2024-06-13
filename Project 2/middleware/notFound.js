const notFound = (req, res, next)=>{
    const error = new Error("generic error not foundddddd");
    error.status = 404;
    next(error);
}

module.exports = notFound;