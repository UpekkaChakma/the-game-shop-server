const router = require("express").Router();
const userOrder = require("../../models/userOrder");
const { verifyToken } = require("../Auth/verify");

router.patch("/add-order", verifyToken, async (req, res) => {
    try {
        const founded = await userOrder.findOne({
            $and: [
                { "gamesList.gameId": req.body.id },
                { email: req.body.email },]
        });
        if (founded) {
            res.status(500).json("You already purchased the game");
            return
        }

        const updatedOrder = await userOrder.updateOne(
            { email: req.body.email },
            {
                $addToSet: {
                    gamesList: { gameId: req.body.id }
                }
            },
            { upsert: true }
        )
        updatedOrder && res.status(200).json("order placed successfully")
    }
    catch (error) {
        res.status(500).send("failed to purchase")
    }
})
module.exports = router