module.exports = `
type Mutation {
  createPickupGame(input: PickupGameInput): PickupGame!
  createPlayer(input:PlayerInput!): Player!
}
`;
