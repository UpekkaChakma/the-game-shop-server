const router = require("express").Router();
const jwt = require("jsonwebtoken");
const User = require("../../models/User")


const verifyToken = (req, res, next) => {
    const header = req.headers.authorization;
    if (header) {
        const token = header.split(" ")[1];
        jwt.verify(token, process.env.JWT_SECRET, (error, data) => {
            if (error) {
                return res.status(401).json("token is not valid or expired, please log in again.");
            };
            req.user = data;
            next();
        })
    } else {
        res.status(401).json("You are not authenticated. log in and get a TOKEN")
    }
}

const verifyTokenAndAdmin = (req, res, next) => {
    verifyToken(req, res, async () => {
        const foundedUser = await User.findOne({ email: req.user.email });
        if (foundedUser.isAdmin) {
            next();
        } else {
            res.status(403).json("You are not allowed to do that!");
        }
    })
}

module.exports = { verifyToken, verifyTokenAndAdmin }