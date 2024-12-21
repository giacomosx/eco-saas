const generalErrorsHandler = (err, req, res, next) => {
    const error = err
    if (error.status_code === 400) {
        res.status(400).json(error.errors)
    }
    if (error.status_code === 404) {
        res.status(404).json(error.errors)
    }

    next()
}

module.exports = generalErrorsHandler