
const errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode ? res.statusCode : 500;

    res.status(statusCode);

    

    const stack = process.env.NODE_ENV === 'production' ? null : err.stack;
    
    res.json({
        message : err.message,
        stack :   stack,
    })
};

// console.log(process.env.NODE_ENV);

module.exports = {
    errorHandler
};