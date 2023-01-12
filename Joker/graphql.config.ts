import {CodegenConfig} from '@graphql-codegen/cli';

const defaultGenerateConfig = {
  plugins: ['typescript', 'typescript-operations', 'typescript-react-apollo'],
  config: {
    withRefetchFn: true,
  },
};

const config: CodegenConfig = {
  overwrite: true,
  generates: {
    'src/generated/graphql-github.ts': {
      documents: 'src/**/github/*.graphql',
      schema: {
        ['https://api.github.com/graphql']: {
          headers: {
            Authorization: 'Bearer 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',
          },
        },
      },
      ...defaultGenerateConfig,
    },
    'src/generated/graphql-lens.ts': {
      documents: 'src/**/lens/*.graphql',
      schema: 'https://api.lens.dev',
      ...defaultGenerateConfig,
    },
  },
};
export default config;
