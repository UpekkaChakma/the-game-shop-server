const Game = require("../../models/Game");
const userOrder = require("../../models/userOrder");
const router = require("../Admin/delete");
const { verifyToken } = require("../Auth/verify");

router.get("/findMyOrders", verifyToken, async (req, res) => {
    try {
        const myOrders = await userOrder.findOne({ email: req.body.email });
        if (myOrders.gamesList.length > 0) {
            const ordersList = myOrders.gamesList.map(async (game) => {
                const foundedGame = await Game.findById(game.gameId);
                return foundedGame
            })
            res.status(200).json(ordersList)
            console.log(ordersList)
        } else {
            res.status(200).json("No game purchased")
        }

    } catch (error) {
        res.status(500).json(error)
    }
})

module.exports = router