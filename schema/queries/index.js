module.exports = `
type Query {
  allPickupGames: [PickupGame!]!
  allPlayers: [Player!]!
  player(id: ID!): Player!
  allBasketballFields(status: BasketballFieldStatus): [BasketballField!]!
  basketballField(id: ID!): BasketballField!
  pickupGame(id: ID!): PickupGame!
}
`;
