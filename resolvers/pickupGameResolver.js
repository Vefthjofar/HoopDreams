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
    },
    addPlayerToPickupGame: async (parent, args, {db}) => {
      const player = await db.Player.findById(args.input.playerId);
      const game = await db.PickupGame.findById(args.input.pickupGameId);
      if (player == null) { throw new errors.NotFoundError(); }
      else if (game == null) { throw new errors.NotFoundError(); }
      else {
        const updatedgame = await db.PickupGame.findByIdAndUpdate(
          args.input.pickupGameId,
          { $push: { registeredPlayers: args.input.playerId }},
          { new: true }
        );
        return updatedgame;
      }
    },
    removePlayerFromPickupGame: async (parent, args, {db}) => {
      const player = await db.Player.findById(args.input.playerId);
      const game = await db.PickupGame.findById(args.input.pickupGameId);
      if (player == null) { throw new errors.NotFoundError(); }
      else if (game == null) { throw new errors.NotFoundError(); }
      else {
        const game = await db.PickupGame.findByIdAndUpdate(
          args.input.pickupGameId,
          { $pull: { registeredPlayers: args.input.playerId }},
          { new: true }
        );
        return true;
      }
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
