const app = require("express");
const { user } = require("../controller/usercontroller");
// const app = express()
const router = app.Router()

// app.use(user)
router.post("/user", user)

module.exports = router
