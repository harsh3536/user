const User = require ("../model/usermodel");

exports.user = async (req, res, next) => {
    const { name, email, password, age } = req.body;
    const user = await User.create({
        name,
        email,
        password,
        age
    })

    if (user) {
        res.status(200).json({ message: "Registration Successful", usercontroller: user })
    }
    else {
        console.log("Error");
    }
}

// app.use(User)
exports.userlogin = async (req, res, next) => {
    const { email, password } = req.body;
    const userlogin = await User.findOne({
        email,
        password
    })

    if (userlogin) {
        res.status(200).json({ message: "Login Successful", userlogincontroller: userlogin })
    }
    else {
        if (email) {
            res.status(404).json({ message: "Email not Valid" })
        }else if (password) {
            res.status(404).json({ message: "Password not Valid" })
        } else if (email && password) {
            res.status(404).json({ message: "Email And Password not Valid" })
        }else {
            res.status(404).json({ message: "Login UnSuccessful" })
        }
    }
}

