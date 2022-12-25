const router = require('express').Router();
const { userHome, getUser, postUser, putUser, deleteUser } = require('../controllers/user.controller');

router.get("/", userHome);
router.get("/users", getUser);
router.post("/users", postUser);
router.put("/users/:id", putUser);
router.delete("/users/:id", deleteUser);

module.exports = router;