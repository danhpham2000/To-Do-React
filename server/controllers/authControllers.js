const User = require("../models/user");
const Task = require("../models/task");


module.exports.postSignup = async (req, res) => {
    const {name, email, password, confirmedPassword} = req.body;

    try {
        const user = new User({
            name: name,
            email: email,
            password: password
        })
    }
    

}