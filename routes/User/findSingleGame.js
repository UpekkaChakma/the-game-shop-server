const router = require("express").Router();
const Game = require("../../models/Game");
const { verifyToken } = require("../Auth/verify");

router.get("/game/:id", async (req, res) => {
    try {
        const data = await Game.findById(req.params.id);
        res.json(data)
    } catch (error) {
        res.status(500).json("Please, try again !!!")
    }
})

module.exports = router;