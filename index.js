const { ApolloServer } = require("apollo-server");
const typeDefs = require("./schema");
const resolvers = require("./resolvers");
const HoopDreamsDb = require("./data/db");

const server = new ApolloServer({
  /*
        Add typeDefs
        Add resolvers
    */
  typeDefs,
  resolvers,
  context: async () => ({
    db: HoopDreamsDb
  })
});

server
  .listen()
  .then(({ url }) => console.log(`GraphQL Service is running on ${url}`));
