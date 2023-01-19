import {EventEmitter} from 'events';

import {GIT_HUB_AUTH_CLIENT_ID, GIT_HUB_AUTH_CLIENT_SECRET} from '@env';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  AuthConfiguration,
  authorize,
  prefetchConfiguration,
  revoke,
} from 'react-native-app-auth';

import {captureException} from 'src/helpers';

export const configGitHubAuth: AuthConfiguration = {
  issuer: 'https://api.github.com/user',
  redirectUrl: 'dapp.joker://',
  clientId: GIT_HUB_AUTH_CLIENT_ID ?? '',
  clientSecret: GIT_HUB_AUTH_CLIENT_SECRET,
  scopes: [
    'admin',
    'write:packages',
    'workflow',
    'user:email',
    'read:repo',
    'read:project',
    'read:org',
    'user:read',
  ],
  additionalHeaders: {Accept: 'application/json'},
  serviceConfiguration: {
    authorizationEndpoint: 'https://github.com/login/oauth/authorize',
    tokenEndpoint: 'https://github.com/login/oauth/access_token',
    revocationEndpoint: `https://github.com/settings/connections/applications/${GIT_HUB_AUTH_CLIENT_ID}`,
  },
};
prefetchConfiguration(configGitHubAuth);

export const githubTokenStorageKey = 'auth-github-access-token';

export class GitHubAuth extends EventEmitter {
  access_token: string | undefined;

  constructor() {
    super();
    const onChangeEvent = (newToken: string | undefined) => {
      this.access_token = newToken;
    };
    this.on('gh-auth-change-token', onChangeEvent);
    return;
  }

  async authenticate() {
    this.emit('gh-auth-start');
    try {
      const {accessToken} = await authorize(configGitHubAuth);

      this.emit('gh-auth-change-token', accessToken);
      this.emit('gh-auth-end', {error: false, accessToken});

      await AsyncStorage.setItem(githubTokenStorageKey, accessToken);
    } catch (error) {
      captureException(error);
      this.emit('gh-auth-end', {error: true, errorMess: error});
    }
  }

  async checkExistToken() {
    try {
      const accessToken = await AsyncStorage.getItem(githubTokenStorageKey);

      if (accessToken === null) {
        this.emit('auth-check-token-error', 'No token found');
      } else {
        this.emit('auth-change-token', accessToken);
        this.emit('auth-check-token-success', accessToken);
      }
    } catch (error) {
      captureException(error);
      this.emit('auth-check-token-error', error);
    }
  }

  async logout() {
    try {
      this.emit('auth-logout-start');

      const result = await revoke(configGitHubAuth, {
        tokenToRevoke: this.access_token ?? '',
        includeBasicAuth: false,
        sendClientId: true,
      });

      console.log('🚀 - result', result);
      this.emit('auth-logout-success');
    } catch (error) {
      captureException(error);
      this.emit('auth-logout-error', error);
    }
  }
}

export const githubAuth = new GitHubAuth();

export type ghAuthEndResponse = {
  error: boolean;
  accessToken?: string;
  errorMess?: any;
};
