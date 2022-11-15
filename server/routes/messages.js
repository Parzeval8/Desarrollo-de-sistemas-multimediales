const { addMessage, getMessages } = require("../controllers/messageController");
const router = require("express").Router();
// const upload = require ('../libs/storage')

router.post("/addmsg/", addMessage);
router.post("/getmsg/", getMessages);
// router.post("/getimg")
module.exports = router;
