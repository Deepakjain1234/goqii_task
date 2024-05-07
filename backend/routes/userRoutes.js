const router = require("express").Router()
const userController = require("../controller/userController")


router.get("/getall",userController.users);
router.get("/:id",userController.getUserById);
router.post("/createUser",userController.addUser);
router.put("/editUser",userController.editUser);
router.delete("/deleteUser",userController.deleteUser);

module.exports = router