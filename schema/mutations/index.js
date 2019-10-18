module.exports = `
type Mutation {
  createPickupGame(input: PickupGameInput): PickupGame!
  createPlayer(input:PlayerInput!): Player!
  updatePlayer(id:ID!,name:String!): Player!
  deletePlayer(id:ID!): Player!
  addPlayerToPickupGame(gameId:ID!,playerId:ID!): Player!
}
`;
