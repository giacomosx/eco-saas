const notFoundError = (req, res) => {
    return res.status(404).json({message: "Route doesn't exist"})
}

module.exports = notFoundError


