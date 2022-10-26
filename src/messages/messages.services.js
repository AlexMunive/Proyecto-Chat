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
    //? Este es el id del usuario loggeado
    const senderId = req.user.id
    const conversationId= req.params.id
    const { message } = req.body
    if(conversationId && senderId && message){
        messageControllers.createMessage(conversationId,senderId, message)
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