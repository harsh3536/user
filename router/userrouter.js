const app = require("express");
const { user, userlogin } = require("../controller/usercontroller");
// const app = express()
const router = app.Router()

// app.use(user)
router.post("/user", user)
router.get("/login",userlogin)

module.exports = router
