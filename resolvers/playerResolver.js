const errors = require("../errors");
const db = require("../data/db");

module.exports = {
  // query AllPlayers{ allPlayers{id, name}}
  queries: {
    allPlayers: async (parent, args) => {
      return (await db.Player.find({})).filter(p => p.deleted === false);
    }
  },
  mutations: {
    /**
   mutation addPlayer{
  createPlayer(input:{name:"Elvar"}){
    id,
    name
  }
  }
     */
    createPlayer: async (parent, args) => {
      return await db.Player.create(args.input);
    }
  }
};
