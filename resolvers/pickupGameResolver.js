const errors = require("../errors");
const db = require("../data/db");
const basketBallFields = require("../services/basketballFieldService");

module.exports = {
  queries: {
    allPickupGames: async (parent, args) => {
      return (await db.PickupGame.find({}));
    }
  },
  mutations: {
    createPickupGame: async (parent, args) => {
      const newGame = {
          start: args.input.start.value,
          end: args.input.end.value,
          location: args.input.basketballFieldId,
          host: args.input.hostId
      }
      return await db.PickupGame.create(newGame);
    },
    addPlayerToPickupGame: async (parent, args, {db}) => {
      return await db.Player.findByIdAndUpdate(
        args.id,
        { name: args.name },
        { new: true }
      );
    },

  },
  types: {
      PickupGame: {
          location: async (parent, args) => await basketBallFields.findById(parent.basketballFieldId),
          host: async (parent, args) => await db.Player.findById(parent.hostId),
      }
  }
};