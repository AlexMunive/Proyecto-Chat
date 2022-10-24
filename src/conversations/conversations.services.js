const conversationControllers = require("./conversations.controllers");

// const getAllConversation = (req, res) => {
//   conversationControllers
//     .getAllConversation()
//     .then((response) => {
//       res.status(200).json(response);
//     })
//     .catch((err) => {
//       res.status(400).json({ message: err.message });
//     });
// };

const getMyConversations = (req, res) => {
  const id = req.user.id;
  conversationControllers
    .getConversationById(id)
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(400).json({ message: err.message });
    });
};

const getConversationByName = (req, res) => {
  const title = req.params.title;
  const userId = req.user.id;
  conversationControllers
    .getConversationByName(title, userId)
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(404).json({ message: err.message });
    });
};

const getConversationById = (req, res) => {
  const id = req.params.id;
  const userId = req.user.id;

  conversationControllers
    .getConversationById(userId, id)
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(404).json({ message: err.message });
    });
};

const createConversation = (req, res) => {
  const userId = req.user.id;
  const { title, imageUrl } = req.body;
  if (title) {
    conversationControllers
      .createConversation({ title, imageUrl, userId })
      .then((data) => {
        res.status(201).json(data);
      })
      .catch((err) => {
        res.status(400).json(err.message);
      });
  } else {
    res.status(400).json({
      message: "missing data",
      fields: {
        title: "string",
      },
      optional: {
        imageUrl: "string",
      },
    });
  }
};

const patchConversation = (req, res) => {
  const id = req.params.id;
  const userId = req.user.id;
  const title = req.body;
  conversationControllers
    .updateConversation(userId, title)
    .then((data) => {
      if (data[0]) {
        res.status(200).json({ message: `Edited succefully` });
      } else {
        res.status(404).json({ message: "Invalid ID" });
      }
    })
    .catch((err) => {
      res.status(400).json({ message: err.message });
    });
};

const deleteConversation = (req, res) => {
  const id = req.params.id;
  conversationControllers
    .deleteConversation(id)
    .then((data) => {
      if (data) {
        res.status(204).json();
      } else {
        res.status(404).json({ message: "Invalid ID" });
      }
    })
    .catch((err) => {
      res.status(400).json({ message: err.message });
    });
};

const getConversationByUser = (req, res) => {
  const userId = req.user.id;
  conversationControllers
    .getAllConversationsByUser(userId)
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(400).json({ message: err.message });
    });
};

module.exports = {
  getConversationByName,
  createConversation,
  patchConversation,
  deleteConversation,
  getMyConversations,
  getConversationByUser,
  getConversationById,
};
