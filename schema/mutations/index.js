module.exports = `
type Mutation {
  createPickupGames(start: Moment! end: Moment! location: PickupGameInput! registeredPlayers: [PlayerInput!]! host: PlayerInput!): PickupGame!
  createPlayer(input:PlayerInput!): Player!
}
`;
