const errors = require("../errors");
const basketBallFields = require("../services/basketballFieldService");

module.exports = {
  queries: {
    allPickupGames: async (parent, args, { db }) => {
      return await db.PickupGame.find({});
    }
  },
  mutations: {
    createPickupGame: async (parent, args, { db }) => {
      const field = await basketBallFields.findById(
        args.input.basketballFieldId
      );
      if (field.status == "CLOSED") {
        throw new errors.BasketballFieldClosedError();
      }
      const newGame = {
        start: args.input.start.value,
        end: args.input.end.value,
        basketballFieldId: args.input.basketballFieldId,
        hostId: args.input.hostId
      };
      return await db.PickupGame.create(newGame);
    },
    deletePickupGame: async (parent, args, { db }) => {
      const gameCheck = await db.PickupGame.findById(args.id);
      if (gameCheck != null) {
        const gameToRemove = await db.PickupGame.findByIdAndUpdate(
          args.id,
          { deleted: true },
          { new: true }
        );
        return true;
      } else {
        throw new errors.NotFoundError();
      }
    },
    addPlayerToPickupGame: async (parent, args, { db }) => {
      const player = await db.Player.findById(args.input.playerId);
      const game = await db.PickupGame.findById(args.input.pickupGameId);
      if (player == null) {
        throw new errors.NotFoundError();
      } else if (game == null) {
        throw new errors.NotFoundError();
      } else {
        const updatedgame = await db.PickupGame.findByIdAndUpdate(
          args.input.pickupGameId,
          { $push: { registeredPlayers: args.input.playerId } },
          { new: true }
        );
        const updatedPlayer = await db.Player.findByIdAndUpdate(
          args.input.playerId,
          { $push: { playedGames: args.input.pickupGameId } },
          { new: true }
        );
        return updatedgame;
      }
    },
    removePlayerFromPickupGame: async (parent, args, { db }) => {
      const player = await db.Player.findById(args.input.playerId);
      const game = await db.PickupGame.findById(args.input.pickupGameId);
      if (player == null) {
        throw new errors.NotFoundError();
      } else if (game == null) {
        throw new errors.NotFoundError();
      } else {
        const game = await db.PickupGame.findByIdAndUpdate(
          args.input.pickupGameId,
          { $pull: { registeredPlayers: args.input.playerId } },
          { new: true }
        );
        // Þarf datecheck fyrir þennan badboi
        const updatedPlayer = await db.Player.findByIdAndUpdate(
          args.input.playerId,
          { $pull: { playedGames: args.input.pickupGameId } },
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
      host: async (parent, args, { db }) =>
        await db.Player.findById(parent.hostId),
      registeredPlayers: async (parent, args, { db }) => {
        console.log(parent);
        const playerList = [];
        const players = await db.Player.find({});
        players.forEach(player => {
          if (parent.registeredPlayers.includes(player.id)) {
            playerList.push(player);
          }
        });
        return playerList;
      }
    }
  }
};
