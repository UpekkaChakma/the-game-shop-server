const router = require("express").Router();
const Game = require("../../models/Game");
const { verifyTokenAndAdmin } = require("../Auth/verify");

router.delete("/delete/:id", verifyTokenAndAdmin, async (req, res) => {
    try {
        await Game.findByIdAndDelete(req.params.id);
        res.status(200).json("delete successful")
    } catch (error) {
        res.status(500).json("Please, try again !!!")
    }
})

module.exports = router;