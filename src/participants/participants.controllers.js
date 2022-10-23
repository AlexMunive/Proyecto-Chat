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


  //* profe como seria para añadir al participante por id?
  
//   const addParticipant = async (data) => {
//     const response = await Participants.findOne({
//         userId: data.userId,
//         id: uuid.v4(),
//     });
//     return response;
//   };
  

module.exports= {
    getAllParticipant,
    getParticipantById
}