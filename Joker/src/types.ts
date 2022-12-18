
import { NavigatorScreenParams } from '@react-navigation/native';

export type TabParamList = {
  tab1: undefined;
  tab2: undefined;
  tab3: undefined;
  tab4: undefined;
  tab5: undefined;
}
export type RootStackParamList = {
  home: NavigatorScreenParams<TabParamList>;
  firstScreen: undefined;
};
