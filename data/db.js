const playerSchema = require("../models/Player");
const pickupGameSchema = require("../models/PickupGame");
const signupPlayerSchema = require("../models/SignupPlayer");
const basketballFieldSchema = require("../models/BasketballField");
const mongoose = require("mongoose");

var connection = mongoose.createConnection(
  "mongodb+srv://admin:1234@hoopdreamsdbcluster-82jnz.mongodb.net/hoopdreamsdbcluster",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);

module.exports = {
  Player: connection.model("Player", playerSchema),
  PickupGame: connection.model("PickupGame", pickupGameSchema),
  SignupPlayer: connection.model("SignupPlayer", signupPlayerSchema),
  BasketballField: connection.model("BasketballField", basketballFieldSchema)
};
