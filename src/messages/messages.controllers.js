const Messages = require('../models/message.models')

const uuid = require('uuid')
const Users = require('../models/users.models')
const { INTEGER } = require('sequelize')
// const Conversations = require('../models/conversations')


const getAllMessages = async() => {
    const data = await Messages.findAll({
    })
    return data
}

const getMessageById = async(id) => {
    const data = await Messages.findOne({
        where:{
            id
        }
    })
    return data

}

const createMessage = async (senderId,conversationId,message) => {
    const response = await Messages.create({
        senderId: senderId,
        conversationId: conversationId,        
        message: message
       
    })
    return response
}

module.exports = {
    getAllMessages,
    getMessageById,
    createMessage
}