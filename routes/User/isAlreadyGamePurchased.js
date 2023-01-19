const router = require("express").Router();
const userOrder = require("../../models/userOrder");
const { verifyToken } = require("../Auth/verify");

router.post("/check-is-in-library", verifyToken, async (req, res) => {
    try {
        const founded = await userOrder.findOne({
            $and: [
                { "gamesList.gameId": req.body.id },
                { email: req.body.email },]
        });
        founded && res.status(200).json("You already purchased the game");
    }
    catch (error) {
        res.status(500).json("not in library");
    }
})
module.exports = router