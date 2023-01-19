const router = require("express").Router();
const jwt = require("jsonwebtoken");
const User = require("../../models/User");

router.post("/get-token", (req, res) => {
    try {
        const accessToken = jwt.sign(
            {
                email: req.body.email
            },
            process.env.JWT_SECRET,
            { expiresIn: "3d" }
        );
        res.status(201).json(accessToken)
    } catch (error) {
        res.status(500).json(error)
    }
}
)

module.exports = router;
