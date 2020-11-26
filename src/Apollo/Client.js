import ApolloClient from "apollo-boost";
import { defaults, resolvers } from "./LocalState";
import dotenv from "dotenv";
dotenv.config();

const uri =
 process.env.NODE_ENV === "production"
  ? `https://www.sample.com/graphql`
  : "http://localhost:7020/graphql";

export default new ApolloClient({
 uri,
 clientState: {
  defaults: defaults,
  resolvers,
 },
});
