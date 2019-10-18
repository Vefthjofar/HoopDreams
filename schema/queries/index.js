module.exports = `
type Query {
  getAllPickupGames: [PickupGame!]!
  allPlayers: [Player!]!
  player(id: ID!): Player!
  allBasketballFields(status: BasketballFieldStatus): [BasketballField!]!
  basketballField(id: ID!): BasketballField!
}
`;
