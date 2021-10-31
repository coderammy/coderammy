const express = require("express");
const router = express.Router();
const { register, login, getuser,updateuser,deleteuser} = require("../controller/user");
const { authSchema, authValidate } = require("../Validation/validateuser");
const { JWTauthenticate } = require("../header/header")

router.post("/", authValidate, register);
router.post("/login", login);
router.get("/get", JWTauthenticate, getuser);
router.put("/update/:_id",JWTauthenticate,updateuser)
router.delete("/delete", JWTauthenticate, deleteuser)

module.exports = router;