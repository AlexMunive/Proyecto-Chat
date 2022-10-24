const router = require("express").Router();
const passport = require("passport");
const conversationServices = require("./conversations.services");

router
  .route("/")
  .get(
    passport.authenticate("jwt", { session: false }),
    conversationServices.getAllConversation
  )
  .post(
    passport.authenticate("jwt", { session: false }),
    conversationServices.createConversation
  );

router
  .route("/me")
  .get(
    passport.authenticate("jwt", { session: false }),
    conversationServices.getMyConversations
  );

router
  .route("/:id")
  .get(conversationServices.getConversationByName)
  .patch(conversationServices.patchConversation)
  .delete(conversationServices.deleteConversation);

module.exports = router;
