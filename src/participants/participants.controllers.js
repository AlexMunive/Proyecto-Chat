const Participants = require("../models/participants.models");
const Users = require("../models/users.models");

const getAllParticipant = async () => {
    const data = await Participants.findAll();
    return data;
  };
  
  const getParticipantById= async (id) => {
    const data = await Participants.findOne({
      where: {
        id
      },
    });
    return data;
  };

  const createParticipant = async (data) => {
    const response = await Participants.create({
      conversationId: data.conversationId,
      userId: data.userId,
    });
    return response;
  };

 

module.exports= {
    getAllParticipant,
    getParticipantById,
    createParticipant
}
