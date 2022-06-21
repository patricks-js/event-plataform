import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://api-us-west-2.graphcms.com/v2/cl4ob0vho1oiq01xih9mrb361/master",
  cache: new InMemoryCache(),
});
