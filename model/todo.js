const mongoose = require("mongoose")

const TodoSchema = new mongoose.Schema({
    title:{
        type:String,required:true
    },
    createdBy:{
        type:objectId(),
                required:true
    },
    updatedBy:{
        type:ObjectId(),
        require:true
    },
    description:{
        type:String,required:true
    },
}, {timestamps: true})

module.exports =mongoose.model("user",TodoSchema)