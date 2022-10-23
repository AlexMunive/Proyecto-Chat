const Messages = require('../models/message.models')

const uuid = require('uuid')
const Users = require('../models/users.models')
// const Conversations = require('../models/conversations')


const getAllMessages = async() => {
    const data = await Messages.findAll({
        // attributes: {
        //     exclude: ['userId','createdAt', 'updatedAt', 'categoryId']
        // },
        // include:[
        //     {
        //         model: Users,
        //         as: 'user',
        //         attributes: ['id','firstName', 'lastName', 'email']
        //     },
        //     {
        //         model: Categories,
        //         as: 'category',
        //         // attributes: {
        //         //     exclude: ['id']
        //         // }
        //     }
        // ]
    })
    return data
}

const getMessageById = async(id) => {
    const data = await Messages.findOne({
        where:{
            id
        },
        // attributes: {
        //     exclude: ['userId','createdAt', 'updatedAt', 'categoryId']
        // },
        // include:[
        //     {
        //         model: Users,
        //         as: 'user',
        //         attributes: ['id','firstName', 'lastName', 'email']
        //     },
        //     {
        //         model: Categories,
        //         as: 'category',
        //     }
        // ]
    })
    return data

}

const createMessage = async (data) => {
    const response = await Messages.create({
        id: uuid.v4(),
        senderId: uuid.v4(),
        conversationId: uuid.v4(),
        message: data.message,
       
    })
    return response
}

module.exports = {
    getAllMessages,
    getMessageById,
    createMessage
}