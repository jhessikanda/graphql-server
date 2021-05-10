const fs = require("fs");
const { ApolloServer, gql } = require("apollo-server");

const schema = fs.readFileSync(__dirname.concat("/schema.graphql"), "utf8");
const typeDefs = gql(schema);
const resolvers = require("./resolvers");

const server = new ApolloServer({ typeDefs, resolvers });

module.exports = server;
