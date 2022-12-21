## GraphQL issues

To make changes in the .gql file or .graphql has taken effect you need to run:

```js
react-native start --reset-cache
```

If there is a need to update `src/generated/graphql.ts`, then you need to go to `graphql.config.yaml` change `<TOKEN_CHECK_README_FOR_MORE_INFO>` to a token that can be output to the console during authentication(the authentication method is in `src/services/github-auth.ts`)

In order for the code editor hints to work in `.graphql` files and `useQuery` hooks, you need to open the `src/generated/graphql.ts` file or re-run:

```js
yarn codegen
```
