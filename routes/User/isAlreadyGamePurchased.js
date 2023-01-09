const router = require("express").Router();
const userOrder = require("../../models/userOrder");
const { verifyToken } = require("../Auth/verify");

router.get("/check-is-in-library", verifyToken, async (req, res) => {
    try {
        const founded = await userOrder.findOne({
            $and: [
                { "gamesList.gameId": req.body.id },
                { email: req.body.email },]
        });
        if (founded) {
            res.status(200).json("You already purchased the game");
        } else {
            res.status(500).json("not in library");
        }
    }
    catch (error) {
        res.send(error)
    }
})
module.exports = router