const router = require("express").Router();
const Game = require("../../models/Game");
const { verifyTokenAndAdmin } = require("../Auth/verify");

router.put("/update/:id", verifyTokenAndAdmin, async (req, res) => {
    try {
        const updatedProduct = await Game.findByIdAndUpdate(
            req.params.id,
            {
                $set: req.body
            },
            { new: true }
        );
        updatedProduct && res.status(200).json("update successful")
    } catch (error) {
        res.status(500).json("please try again")
    }
})

module.exports = router;