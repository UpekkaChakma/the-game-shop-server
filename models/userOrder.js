const mongoose = require("mongoose");

const userOrderSchema = new mongoose.Schema(
    {
        email: { type: String, required: true },
        gamesList: [
            {
                status: { type: String, default: "pending" },
                gameId: {
                    type: String,
                    required: true,
                }
            },
        ],
    },
    { timestamps: true }
);

module.exports = mongoose.model("userOrder", userOrderSchema);