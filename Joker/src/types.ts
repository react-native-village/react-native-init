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

export interface ColorTheme {
  transparent: string;
  textBase1: string;
  textBase2: string;
  textBase3: string;
  textSecond1: string;
  textSecond2: string;
  textGreen1: string;
  textRed1: string;
  textYellow1: string;
  textBlue1: string;
  bg1: string;
  bg2: string;
  bg3: string;
  bg4: string;
  bg5: string;
  bg6: string;
  bg7: string;
  bg8: string;
  bg9: string;
  bg10: string;
  graphicBase1: string;
  graphicBase2: string;
  graphicBase3: string;
  graphicBlue1: string;
  graphicRed1: string;
  graphicGreen1: string;
  graphicGreen2: string;
  graphicSecond1: string;
  graphicSecond2: string;
  graphicSecond3: string;
  graphicSecond4: string;
}

export type RoleType = 'performer' | 'employer';

export type ArrayElementType<
  ArrayType extends readonly unknown[] | null | undefined,
> = ArrayType extends readonly (infer ElementType)[] ? ElementType : never;
