module.exports = `
type Mutation {
  createPickupGames(start: Moment! end: Moment! location: PickupGameInput! registeredPlayers: [PlayerInput!]! host: PlayerInput!): PickupGame!
  createPlayer(input:PlayerInput!): Player!
  updatePlayer(id:ID!,name:String!): Player!
  deletePlayer(id:ID!): Player!
}
`;
