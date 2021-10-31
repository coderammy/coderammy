const userModel = require("../model/user")
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const register = async (req, res) => {
    try {
        const salt = await bcrypt.genSalt(10)
        req.body.password = await bcrypt.hash(req.body.password, salt);
        const user = await userModel.create(req.body);
        res.send(user);
    } catch (error) {
        res.send(error.message)
    }
};

const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await userModel.findOne({ email })
        const validPassword = await bcrypt.compare(password, user.password);
        if (!validPassword) { 
            throw new Error("Wrong Password!😒")
        };
        const token = jwt.sign({ user_id: user._id, email }, "ftfu", { expiresIn: "4h" })
        res.send(token);
    } catch (error) {
        res.send(error.message)
    }
};

const getuser = async (req, res) => {
    try {
        const { user_id } = req.user
        const user = await userModel.findOne({ _id: user_id });
        res.send(user)
    } catch (error) {
        res.send(error.message)
    }
};

const updateuser = async (req, res) => {
    try {
        const { _id } = req.params
        const { userdata } = req.body
        const updateuser = await userModel.findByIdAndUpdate(_id, { $set: userdata },
            { new: true }
        )
        res.send(updateuser)
    } catch (error) {
        res.send(error.message)
    }
}

const deleteuser = async (req, res) => {
    try {
        const { user_id } = req.user

        const response = await userModel.deleteOne({ _id: user_id })

        res.send(response)

    } catch (error) {
        res.send(error.message)
    }
}

module.exports = {
    register,
    login,
    getuser,
    updateuser,
    deleteuser
};;