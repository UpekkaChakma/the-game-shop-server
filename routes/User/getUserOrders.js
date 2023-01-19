const Game = require("../../models/Game");
const userOrder = require("../../models/userOrder");
const router = require("../Admin/delete");
const { verifyToken } = require("../Auth/verify");

router.post("/user-orders", verifyToken, async (req, res) => {
    try {
        const userOrders = await userOrder.findOne({ email: req.body.email });

        if (userOrders.gamesList.length > 0) {
            const ordersList = userOrders.gamesList.map(async (game) => {
                const foundedGame = await Game.findById(game.gameId);
                return foundedGame
            })

            const finalOrdersList = await Promise.all(ordersList);
            res.status(200).json(finalOrdersList)

        } else {
            res.status(200).json("No game purchased")
        }

    } catch (error) {
        res.status(500).json(error)
    }
})

module.exports = router