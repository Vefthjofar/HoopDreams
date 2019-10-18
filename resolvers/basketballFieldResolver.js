const errors = require("../errors");
const fields = require("../services/basketballFieldService")

module.exports = {
    queries: {
        allBasketballFields: async (parent, args) => {
            return await fields.basketballFields.response.body.filter(b => b.status == args.status);
        },
        basketballField: async (parent, args) => {
            const field = await fields.findById(args.id);
            if(field == null) { throw new errors.NotFoundError(); }
            else return field;
        }
    },
    types: {
        BasketballField: {
            pickupGames: async (parent, args, {db}) => (await db.PickupGame.find({})).filter(b => b.basketballFieldId === parent.id)
        }
    }
};