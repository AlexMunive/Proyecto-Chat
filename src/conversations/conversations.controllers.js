const Conversations = require("../models/conversations.models");
const Users = require("../models/users.models");

<<<<<<< HEAD
const getAllConversation = async (userId) => {
  const data = await Conversations.findAll({
    where:{userId},
    include: [
      {
        model: Users,
        as: "user",
      },
    ],
=======
// const getAllConversation = async () => {
//   const data = await Conversations.findAll({
//     include: [
//       {
//         model: Users,
//         as: "user",
//       },
//     ],
//   });
//   return data;
// };

const getAllConversationsByUser = async (userId) => {
  const data = await Conversations.findAll({
    where: {
      userId,
    },
>>>>>>> 4a5a5eb5809f3af0b08397056606260846de7a3d
  });
  return data;
};

const getConversationById = async (userId, id) => {
  const data = await Conversations.findOne({
    where: {
      userId,
      id,
    },
  });
  return data;
};

const getConversationByName = async (title, userId) => {
  const data = await Conversations.findAll({
    where: {
      title,
      userId,
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

const updateConversation = async (userId, title ) => {
  const result = await Conversations.update(title, {
    where: {
      userId,
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
  getConversationByName,
  createConversation,
  deleteConversation,
  updateConversation,
  getConversationById,
  getAllConversationsByUser,
};
