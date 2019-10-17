/*const playerSchema = require("../schema/mongodb/player");
const pickupGameSchema = require("../schema/mongodb/pickupGame");
const signupPlayerSchema = require("../schema/mongodb/signupPlayer");*/
const mongoose = require('mongoose');

var connection = mongoose.createConnection(
      "mongodb+srv://admin:1234@hoopdreamsdbcluster-82jnz.mongodb.net/hoopdreamsdbcluster",
  { useNewUrlParser: true,
unsUnifiedTopology:true }
);

/*module.exports = {
  Player: connection.model("Player", playerSchema),
  PickupGame: connection.model("PickupGame", pickupGameSchema),
  SignupPlayer: connection.model("SignupPlayer", signupPlayerSchema),
  connection
}*/