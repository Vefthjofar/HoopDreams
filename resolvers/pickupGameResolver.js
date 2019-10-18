const errors = require("../errors");
const db = require("../data/db");
const basketBallFields = require("../services/basketballFieldService");

module.exports = {
  queries: {
    allPickupGames: async (parent, args) => {
      return await db.PickupGame.find({});
    }
  },
  mutations: {
    createPickupGame: async (parent, args) => {
      const newGame = {
        start: args.input.start.value,
        end: args.input.end.value,
        location: args.input.basketballFieldId,
        host: args.input.hostId
      };
      return await db.PickupGame.create(newGame);
    },
    deletePickupGame: async (parent, args) => {
      const gameToRemove = await db.PickupGame.findByIdAndUpdate(
        args.id,
        { deleted: true },
        { new: true }
      );
      return true;
    }
  },
  types: {
    PickupGame: {
      location: async (parent, args) =>
        await basketBallFields.findById(parent.basketballFieldId),
      host: async (parent, args) => await db.Player.findById(parent.hostId)
    }
  }
};
