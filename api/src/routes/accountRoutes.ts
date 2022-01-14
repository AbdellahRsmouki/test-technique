const Router = require("express");
const userController = require("../controllers/accountsControllers.ts");

const userRouter = Router();

userRouter.route("/accounts")
  .get(userController.fetchAccounts)

exports.userRouter = userRouter;

