import {NavigatorScreenParams} from '@react-navigation/native';
import {StackNavigationOptions} from '@react-navigation/stack';
import {ImageStyle, TextStyle, ViewStyle} from 'react-native';

export type TabParamList = {
  homeTaskExplorer: undefined;
  homeProfile: undefined;
  homeSettings: undefined;
};
export type RootStackParamList = {
  home?: NavigatorScreenParams<TabParamList>;
  authentication: {
    role: RoleType;
  };
  authenticationSuccess: undefined;
  welcome: undefined;
  createTaskRepoSelect: undefined;
  createTaskIssueSelect: {
    owner: string;
    repoName: string;
  };
  createTaskConfirmation: {
    owner: string;
    issueNumber: number;
    repoName: string;
  };
  createTaskComplete: {
    txhash: string;
  };
  devTests: undefined;
};

export interface ScreenOptionType extends StackNavigationOptions {
  tab?: boolean;
  headerBackVisible?: boolean;
  headerBackHidden?: boolean | string;
}

export type FontT = TextStyle | ViewStyle | ImageStyle | undefined;

export type RoleType = 'performer' | 'employer';

export type ArrayElementType<
  ArrayType extends readonly unknown[] | null | undefined,
> = ArrayType extends readonly (infer ElementType)[] ? ElementType : never;
