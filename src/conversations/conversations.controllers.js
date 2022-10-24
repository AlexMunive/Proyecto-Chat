const Conversations = require("../models/conversations.models");
const Users = require("../models/users.models");

const getAllConversation = async (userId) => {
  const data = await Conversations.findAll({
    where:{userId},
    include: [
      {
        model: Users,
        as: "user",
      },
    ],
  });
  return data;
};

const getConversationById = async (id) => {
  const data = await Users.findOne({
    where: {
      id,
    },
  });
  return data;
};

const getConversationByName = async (title) => {
  const data = await Conversations.findOne({
    where: {
      title,
    },
  });
  return data;
};

const createConversation = async (data) => {
  const response = await Conversations.create({
    title: data.title,
    imageUrl: data.imageUrl,
    userId: data.userId,
  });
  return response;
};

const updateConversation = async (title, data) => {
  const result = await Conversations.update(data, {
    where: {
      title,
    },
  });
  return result;
};

const deleteConversation = async (title) => {
  const data = await Conversations.destroy({
    where: {
      title,
    },
  });
};



module.exports = {
  getAllConversation,
  getConversationByName,
  createConversation,
  deleteConversation,
  updateConversation,
  getConversationById,
};
