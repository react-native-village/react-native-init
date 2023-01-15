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
