const Joi = require("joi")

const taskSchema = Joi.object({
  title:Joi.string().min(2).required(),
  
})
const taskvalidate = async(req,res,next)=>{
  await taskSchema.validateAsync(req.body)
  .then(()=> next())
  .catch((error)=>res.send(error.message))
}

module.exports={taskSchema,taskvalidate}