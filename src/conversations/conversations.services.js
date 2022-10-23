const conversationControllers = require("./conversations.controllers");

const getAllConversation = (req, res) => {
  const id = req.user.id;
  conversationControllers
    .getAllConversation()
    .then((response) => {
      res.status(200).json(response);
    })
    .catch((err) => {
      res.status(400).json({ message: err.message });
    });
};

const getConversationByName = (req, res) => {
  const title = req.params.title;
  conversationControllers
    .getConversationByName(title)
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
  const { title, imageUrl } = req.body;
  conversationControllers
    .getConversationByName(id, {
      title,
      imageUrl,
    })
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

module.exports = {
  getAllConversation,
  getConversationByName,
  createConversation,
  patchConversation,
  deleteConversation,
};
