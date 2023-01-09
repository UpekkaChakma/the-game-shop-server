const Game = require("../../models/Game");
const router = require("../Admin/delete");

router.get("/games", async (req, res) => {
    try {
        const gamesList = await Game.find();
        gamesList.length > 0 && res.json(gamesList)
    } catch (error) {
        res.status(500).json("failed to load games, try again!!")
    }
})

module.exports = router