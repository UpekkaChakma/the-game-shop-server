const mongoose = require("mongoose");

const GameSchema = new mongoose.Schema(
    {
        title: { type: String, required: true, unique: true },
        description: { type: String, required: true, },
        img: { type: String, required: true },
        genre: { type: String, required: true },
        developer: { type: String, required: true },
        price: { type: Number, required: true },

    },
    { timestamps: true }
);

module.exports = mongoose.model("Game", GameSchema);