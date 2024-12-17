const Rfq = require('../models/rfq');

const createRfq = async (req, res) => {
    const rfq = req.body;

    try {
        const newRfq = await new Rfq(rfq);
        newRfq.save()

        return res.status(201).json(newRfq);
    } catch (error) {
        console.error(error);
        res.status(500).json({message: error.message});
    }
}

const readAllRfq = async (req, res) => {

    try {
        const allRfq = await Rfq.find().limit(5);

        return res.status(200).json(allRfq);
    } catch (error) {
        console.error(error);
        res.status(500).json({message: error.message});
    }
}

const changeRfqStatus = async (req, res) => {
    const {id} = req.params;
    const {status} = req.body;

    try {
        const rfq = await Rfq.findByIdAndUpdate(id, {
            status,
        }, { new: true });

        return res.status(200).json(rfq);

    } catch (e) {
        console.error(e);
        res.status(500).json({message: error.message});
    }
}

module.exports = {
    createRfq,
    readAllRfq,
    changeRfqStatus,
};