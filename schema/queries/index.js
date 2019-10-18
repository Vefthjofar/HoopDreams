module.exports = `
type Query {
  getAllPickupGames: [PickupGame!]!
  allPlayers: [Player!]!
  player(id: ID!): Player!
}
`;
