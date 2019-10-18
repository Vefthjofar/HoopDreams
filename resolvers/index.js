const playerResolver = require("./playerResolver");
const pickupGameResolver = require("./pickupGameResolver");
const basketBallResolver = require("./basketballFieldResolver");
const moment = require("moment");
const { GraphQLScalarType } = require("graphql");

module.exports = {
  Query: {
    ...playerResolver.queries
  },
  Mutation: {
    ...playerResolver.mutations
  }
};
