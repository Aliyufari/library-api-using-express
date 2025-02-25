const errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode ?? 500;
    res.status(statusCode)
        .json({
            message: err.message,
            error: err.stack
        });
}

module.exports = {
    errorHandler
};