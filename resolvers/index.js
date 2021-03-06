const playerResolver = require("./playerResolver");
const pickupGameResolver = require("./pickupGameResolver");
const basketBallResolver = require("./basketballFieldResolver");
const moment = require("moment");
const { GraphQLScalarType } = require("graphql");

module.exports = {
    Query: {
        ...playerResolver.queries,
        ...pickupGameResolver.queries,
        ...basketBallResolver.queries
    },
    Mutation: {
        ...playerResolver.mutations,
        ...pickupGameResolver.mutations
    },
    ...pickupGameResolver.types,
    ...basketBallResolver.types,
    Moment: new GraphQLScalarType({
        name: 'Moment',
        description: 'Icelandic locale using the ‘llll’ format',
        parseValue: (value) => { return value; },
        parseLiteral: (value) => { return value; },
        serialize: (value) => {
            return moment(value).locale('is').format('llll');
        }
    })
};
