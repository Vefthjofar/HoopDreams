const errors = require("../errors");
const db = require("../data/db");

module.exports = {
  queries: {
    allPlayers: async (parent, args) => {
      return (await db.Player.find({})).filter(p => p.deleted === false);
    }
  },
  mutations: {
    createPlayer: async (parent, args) => {
      return await db.Player.create(args.input);
    }
  }
};
