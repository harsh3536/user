const app = require("express");
const { user, userlogin, userupdate, userdelete, getData } = require("../controller/usercontroller");
// const app = express()
const router = app.Router()

// app.use(user)
router.post("/user", user)
router.get("/login",userlogin)
router.put("/update",userupdate)
router.delete("/delete",userdelete)
router.get("/getdata",getData)

module.exports = router
