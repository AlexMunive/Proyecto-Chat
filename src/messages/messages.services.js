const messageControllers = require('./messages.controllers')

const getAllMessages = (req, res) => {
    messageControllers.getAllMessages()
        .then(data => {
            res.status(200).json(data)
        })
        .catch(err => {
            res.status(400).json({message: err.message})
        })
}

const createMessage = (req, res) => {

    const senderId = req.user.id 
    const { conversationId, message } = req.body
    if(senderId && conversationId && message){
        messageControllers.createMessage({ conversationId, message})
            .then(data => {
                res.status(201).json(data)
            })
            .catch(err => {
                res.status(400).json(err.message)
            })
    } else {
        res.status(400).json({
            message: 'Missing Data',
            fields: {
                conversationId: 'uuid',
                message: 'string'
            }
        })
    }

}

//* conectado con conversations

// const getMessagesByConversations = (req, res) => {
//     const categoryId = req.params.id 
//     postControllers.getPostsByCategory(categoryId)
//         .then(data => {
//             res.status(200).json(data)
//         })
//         .catch(err => {
//             res.status(400).json({message: err.message})
//         })
// }



module.exports = {
    getAllMessages,
    createMessage
}