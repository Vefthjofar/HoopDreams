module.exports = `
type Mutation {
  createPickupGames(start: Moment! end: Moment! location: BasketballField! registeredPlayers: [Player!]! host: Player!): PickupGame
}
`;
