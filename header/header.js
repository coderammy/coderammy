const express = require("express");
const jwt = require("jsonwebtoken");
const secreateToken = "ftfu";

const JWTauthenticate = async (req, res, next) => {
    try {
        const authorization = req.headers.authorization;
        const token = jwt.verify(authorization, "ftfu")
        req.user = token                                                                                                                                                                                                                                                        
        next()
    } catch (error) {
        return res.sendStatus(401)
    }
};

module.exports = { JWTauthenticate };