import {CodegenConfig} from '@graphql-codegen/cli';

import {githubApiGraphQL, lensApiGraphQL} from './src/variables';

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
        [githubApiGraphQL]: {
          headers: {
            Authorization: 'Bearer <TOKEN_CHECK_README_FOR_MORE_INFO>',
          },
        },
      },
      ...defaultGenerateConfig,
    },
    'src/generated/graphql-lens.ts': {
      documents: 'src/**/lens/*.graphql',
      schema: lensApiGraphQL,
      ...defaultGenerateConfig,
    },
  },
};
export default config;
