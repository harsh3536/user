const User = require("../model/usermodel");

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
    else{
        console.log("Error");
    }
}

// app.use(User)