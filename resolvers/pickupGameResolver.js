const errors = require("../errors");
const basketBallFields = require("../services/basketballFieldService");

module.exports = {
  queries: {
    allPickupGames: async (parent, args, {db}) => {
      return (await db.PickupGame.find({}));
    }
  },
  mutations: {
    createPickupGame: async (parent, args,{db}) => {
        const newGame = {
            start: args.input.start.value,
            end: args.input.end.value,
            basketballFieldId: args.input.basketballFieldId,
            hostId: args.input.hostId
        }
        return await db.PickupGame.create(newGame);
      }
  },
  types: {
      PickupGame: {
          
          host: async (parent, args, {db}) =>{
              const loc = await db.Player.findById(parent.hostId);
              console.log(parent);
              return loc;
          } ,
          location: async (parent, args, {db}) => await basketBallFields.findById(parent.basketballFieldId)
      }
  }
};