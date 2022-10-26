const participantsControllers = require('./participants.controllers')

const getAllParticipants = (req, res) => {
    participantsControllers.getAllParticipant()
        .then(data => {
            res.status(200).json(data)
        })
        .catch(err => {
            res.status(400).json({ message: err.message })
        })
}

const getParticipantById = (req, res) => {
    const id = req.params.id;
    participantsControllers
        .getParticipantById(id)
        .then((data) => {
            res.status(200).json(data);
        })
        .catch((err) => {
            res.status(404).json({ message: err.message });
        });
};


const createParticipant = (req, res) => {
    const userId = req.user.id;
    const conversationId = req.user.id
    if (id) {
        participantsControllers
            .createParticipant({ userId, conversationId })
            .then((data) => {
                res.status(201).json(data);
            })
            .catch((err) => {
                res.status(400).json(err.message);
            });
    } else {
        res.status(400).json({
            message: "missing data",
        });
    }
};



module.exports = {
    getAllParticipants,
    getParticipantById,
    createParticipant
}
