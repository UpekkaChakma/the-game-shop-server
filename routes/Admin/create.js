const { verifyTokenAndAdmin } = require("../Auth/verify");
const router = require("express").Router();
const Game = require("../../models/Game");


router.post("/create", verifyTokenAndAdmin, async (req, res) => {
    const newGame = new Game(req.body);
    try {
        const savedGame = await newGame.save();
        console.log(savedGame)
        savedGame && res.status(200).json("Added to database")
    } catch (error) {
        if (error.code === 11000) {
            res.status(501).json("Can not add. This game already exits")
            return
        }
        res.status(500).json("please, try again!!!")
    }
})

module.exports = router;