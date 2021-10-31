const express = require("express")
const router = express.Router()
const todoModel = require("../model/todo")
const { taskSchema, taskvalidate } = require("../taskvalidation/validation")


const todo = async (req, res) => {
    try {
        const task = await todoModel.create(req.body)
        res.send(task)

    } catch (error) {
        res.send(error.message)
    }
}

router.post("/:_id", taskvalidate, todo)
module.exports=router