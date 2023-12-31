const express = require("express");
const { buildSchema } = require("graphql");
const { graphqlHTTP } = require("express-graphql");
const app = express();
const schema = buildSchema(`
type Query {
    description: String
    price: Float
}`);

const root = {
  description: "black shoes",
  price: 24.2,
};

app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
  })
);

app.listen(2024, () => {
  console.log(`App running on port 2024`);
});
