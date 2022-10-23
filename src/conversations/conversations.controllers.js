const Conversations = require("../models/conversations.models");

const getAllConversation = async () => {
  const data = await Conversations.findAll();
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
    createdBy: data.createdBy,
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
};
