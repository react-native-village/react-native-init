import {Dimensions, Platform} from 'react-native';
import {Easing} from 'react-native-reanimated';
export const TRANSPARENT = 'transparent';

export const LIGHT_TEXT_BASE_1 = '#2E312D';
export const DARK_TEXT_BASE_1 = '#FFFFFF';

export const LIGHT_TEXT_BASE_2 = '#8E8E8E';
export const DARK_TEXT_BASE_2 = '#8E8E8E';

export const LIGHT_TEXT_BASE_3 = '#FFFFFF';
export const DARK_TEXT_BASE_3 = '#FFFFFF';

export const LIGHT_TEXT_SECOND_1 = '#B2B4BB';
export const DARK_TEXT_SECOND_1 = '#5E6061';

export const LIGHT_TEXT_SECOND_2 = 'rgba(255, 255, 255, 0.8)';
export const DARK_TEXT_SECOND_2 = 'rgba(255, 255, 255, 0.8)';

export const LIGHT_TEXT_GREEN_1 = '#01B26E';
export const DARK_TEXT_GREEN_1 = '#01B26E';

export const LIGHT_TEXT_RED_1 = '#E16363';
export const DARK_TEXT_RED_1 = '#E16363';

export const LIGHT_TEXT_YELLOW_1 = '#B26F1D';
export const DARK_TEXT_YELLOW_1 = '#EB9226';

export const LIGHT_TEXT_BLUE_1 = '#007AFF';
export const DARK_TEXT_BLUE_1 = '#007AFF';

export const LIGHT_GRAPHIC_BASE_1 = '#2F2F2F';
export const DARK_GRAPHIC_BASE_1 = '#FFFFFF';

export const LIGHT_GRAPHIC_BASE_2 = '#8E8E8E';
export const DARK_GRAPHIC_BASE_2 = '#8E8E8E';

export const LIGHT_GRAPHIC_BASE_3 = '#FFFFFF';
export const DARK_GRAPHIC_BASE_3 = '#FFFFFF';

export const LIGHT_GRAPHIC_RED_1 = '#E16363';
export const DARK_GRAPHIC_RED_1 = '#E16363';

export const LIGHT_GRAPHIC_GREEN_1 = '#01B26E';
export const DARK_GRAPHIC_GREEN_1 = '#01B26E';

export const LIGHT_GRAPHIC_GREEN_2 = '#04D484';
export const DARK_GRAPHIC_GREEN_2 = '#04D484';

export const LIGHT_GRAPHIC_SECOND_1 = '#EFEFEF';
export const DARK_GRAPHIC_SECOND_1 = '#2C3231';

export const LIGHT_GRAPHIC_SECOND_2 = '#CFD1DB';
export const DARK_GRAPHIC_SECOND_2 = '#56575C';

export const LIGHT_GRAPHIC_SECOND_3 = '#CCCDD2';
export const DARK_GRAPHIC_SECOND_3 = '#454647';

export const LIGHT_GRAPHIC_SECOND_4 = '#AAABB2';
export const DARK_GRAPHIC_SECOND_4 = '#616266';

export const LIGHT_BG_1 = '#FFFFFF';
export const DARK_BG_1 = '#181C1A';

export const LIGHT_BG_2 = '#EEF9F5';
export const DARK_BG_2 = '#25332E';

export const LIGHT_BG_3 = '#F4F8F8';
export const DARK_BG_3 = '#212624';

export const LIGHT_BG_4 = 'rgba(4, 212, 132, 0.5)';
export const DARK_BG_4 = 'rgba(4, 212, 132, 0.5)';

export const LIGHT_BG_5 = 'rgba(225, 99, 99, 0.8)';
export const DARK_BG_5 = 'rgba(225, 99, 99, 0.8)';

export const LIGHT_BG_6 = '#FCEDCE';
export const DARK_BG_6 = '#48361B';

export const LIGHT_BG_7 = '#F9EEEE';
export const DARK_BG_7 = '#F9EEEE';

export const LIGHT_BG_8 = '#F4F5F8';
export const DARK_BG_8 = '#292E2D';

export const LIGHT_BG_9 = 'rgba(0, 0, 0, 0.6)';
export const DARK_BG_9 = 'rgba(0, 0, 0, 0.6)';

export const LIGHT_BG_10 = '#181C1A';
export const DARK_BG_10 = '#181C1A';

export const LIGHT_GRAPHIC_BLUE_1 = '#0489D4';
export const DARK_GRAPHIC_BLUE_1 = '#0489D4';

export const IS_ANDROID = Platform.OS === 'android';
export const IS_IOS = Platform.OS === 'ios';

export const DEFAULT_HITSLOP = {top: 10, bottom: 10, left: 10, right: 10};

export const ANIMATION_DURATION = 300;
export const ANIMATION_TYPE = Easing.bezierFn(0.42, 0, 0.58, 0);

export const WINDOW_WIDTH = Dimensions.get('window').width;
export const WINDOW_HEIGHT = Dimensions.get('window').height;

export const githubApiGraphQL = 'https://api.github.com/graphql';
export const lensApiGraphQL = 'https://api.lens.dev';
