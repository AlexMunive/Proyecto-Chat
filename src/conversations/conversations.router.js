const router = require("express").Router();
const conversationServices = require("./conversations.services");

router.get("/", conversationServices.getAllConversation);

router.post("/", conversationServices.createConversation);

router
  .route("/:id")
  .get(conversationServices.getConversationByName)
  .patch(conversationServices.patchConversation)
  .delete(conversationServices.deleteConversation);

module.exports = router;
