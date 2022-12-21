//import {app} from 'src/services';
import {useColorScheme} from 'react-native';

import {
  DARK_BG_1,
  DARK_BG_10,
  DARK_BG_2,
  DARK_BG_3,
  DARK_BG_4,
  DARK_BG_5,
  DARK_BG_6,
  DARK_BG_7,
  DARK_BG_8,
  DARK_BG_9,
  DARK_GRAPHIC_BASE_1,
  DARK_GRAPHIC_BASE_2,
  DARK_GRAPHIC_BASE_3,
  DARK_GRAPHIC_GREEN_1,
  DARK_GRAPHIC_GREEN_2,
  DARK_GRAPHIC_RED_1,
  DARK_GRAPHIC_SECOND_1,
  DARK_GRAPHIC_SECOND_2,
  DARK_GRAPHIC_SECOND_3,
  DARK_GRAPHIC_SECOND_4,
  DARK_TEXT_BASE_1,
  DARK_TEXT_BASE_2,
  DARK_TEXT_BASE_3,
  DARK_TEXT_BLUE_1,
  DARK_TEXT_GREEN_1,
  DARK_TEXT_RED_1,
  DARK_TEXT_SECOND_1,
  DARK_TEXT_SECOND_2,
  DARK_TEXT_YELLOW_1,
  LIGHT_BG_1,
  LIGHT_BG_10,
  LIGHT_BG_2,
  LIGHT_BG_3,
  LIGHT_BG_4,
  LIGHT_BG_5,
  LIGHT_BG_6,
  LIGHT_BG_7,
  LIGHT_BG_8,
  LIGHT_BG_9,
  LIGHT_GRAPHIC_BASE_1,
  LIGHT_GRAPHIC_BASE_2,
  LIGHT_GRAPHIC_BASE_3,
  LIGHT_GRAPHIC_GREEN_1,
  LIGHT_GRAPHIC_GREEN_2,
  LIGHT_GRAPHIC_RED_1,
  LIGHT_GRAPHIC_SECOND_1,
  LIGHT_GRAPHIC_SECOND_2,
  LIGHT_GRAPHIC_SECOND_3,
  LIGHT_GRAPHIC_SECOND_4,
  LIGHT_TEXT_BASE_1,
  LIGHT_TEXT_BASE_2,
  LIGHT_TEXT_BASE_3,
  LIGHT_TEXT_BLUE_1,
  LIGHT_TEXT_GREEN_1,
  LIGHT_TEXT_RED_1,
  LIGHT_TEXT_SECOND_1,
  LIGHT_TEXT_SECOND_2,
  LIGHT_TEXT_YELLOW_1,
  TRANSPARENT,
} from 'src/variables';

export enum Color {
  transparent = 'transparent',
  textBase1 = 'textBase1',
  textBase2 = 'textBase2',
  textBase3 = 'textBase3',
  textSecond1 = 'textSecond1',
  textSecond2 = 'textSecond2',
  textGreen1 = 'textGreen1',
  textRed1 = 'textRed1',
  textYellow1 = 'textYellow1',
  textBlue1 = 'textBlue1',
  bg1 = 'bg1',
  bg2 = 'bg2',
  bg3 = 'bg3',
  bg4 = 'bg4',
  bg5 = 'bg5',
  bg6 = 'bg6',
  bg7 = 'bg7',
  bg8 = 'bg8',
  bg9 = 'bg9',
  bg10 = 'bg10',
  graphicBase1 = 'graphicBase1',
  graphicBase2 = 'graphicBase2',
  graphicBase3 = 'graphicBase3',
  graphicRed1 = 'graphicRed1',
  graphicGreen1 = 'graphicGreen1',
  graphicGreen2 = 'graphicGreen2',
  graphicSecond1 = 'graphicSecond1',
  graphicSecond2 = 'graphicSecond2',
  graphicSecond3 = 'graphicSecond3',
  graphicSecond4 = 'graphicSecond4',
}
//Will be implemented with a dark theme
const styled = new Set(Object.keys(Color));

export function GetColor(key: Color) {
  const theme = useColorScheme();
  if (!styled.has(key)) {
    return key;
  }
  switch (theme) {
    case 'dark':
      return dark[key];
    case 'light':
      return light[key];
    default:
      return light[key];
  }
}

const light = {
  [Color.transparent]: TRANSPARENT,
  [Color.textBase1]: LIGHT_TEXT_BASE_1,
  [Color.textBase2]: LIGHT_TEXT_BASE_2,
  [Color.textBase3]: LIGHT_TEXT_BASE_3,
  [Color.textSecond1]: LIGHT_TEXT_SECOND_1,
  [Color.textSecond2]: LIGHT_TEXT_SECOND_2,
  [Color.textGreen1]: LIGHT_TEXT_GREEN_1,
  [Color.textRed1]: LIGHT_TEXT_RED_1,
  [Color.textYellow1]: LIGHT_TEXT_YELLOW_1,
  [Color.textBlue1]: LIGHT_TEXT_BLUE_1,
  [Color.bg1]: LIGHT_BG_1,
  [Color.bg2]: LIGHT_BG_2,
  [Color.bg3]: LIGHT_BG_3,
  [Color.bg4]: LIGHT_BG_4,
  [Color.bg5]: LIGHT_BG_5,
  [Color.bg6]: LIGHT_BG_6,
  [Color.bg7]: LIGHT_BG_7,
  [Color.bg8]: LIGHT_BG_8,
  [Color.bg9]: LIGHT_BG_9,
  [Color.bg10]: LIGHT_BG_10,
  [Color.graphicBase1]: LIGHT_GRAPHIC_BASE_1,
  [Color.graphicBase2]: LIGHT_GRAPHIC_BASE_2,
  [Color.graphicBase3]: LIGHT_GRAPHIC_BASE_3,
  [Color.graphicRed1]: LIGHT_GRAPHIC_RED_1,
  [Color.graphicGreen1]: LIGHT_GRAPHIC_GREEN_1,
  [Color.graphicGreen2]: LIGHT_GRAPHIC_GREEN_2,
  [Color.graphicSecond1]: LIGHT_GRAPHIC_SECOND_1,
  [Color.graphicSecond2]: LIGHT_GRAPHIC_SECOND_2,
  [Color.graphicSecond3]: LIGHT_GRAPHIC_SECOND_3,
  [Color.graphicSecond4]: LIGHT_GRAPHIC_SECOND_4,
};

const dark = {
  [Color.transparent]: TRANSPARENT,
  [Color.textBase1]: DARK_TEXT_BASE_1,
  [Color.textBase2]: DARK_TEXT_BASE_2,
  [Color.textBase3]: DARK_TEXT_BASE_3,
  [Color.textSecond1]: DARK_TEXT_SECOND_1,
  [Color.textSecond2]: DARK_TEXT_SECOND_2,
  [Color.textGreen1]: DARK_TEXT_GREEN_1,
  [Color.textRed1]: DARK_TEXT_RED_1,
  [Color.textYellow1]: DARK_TEXT_YELLOW_1,
  [Color.textBlue1]: DARK_TEXT_BLUE_1,
  [Color.bg1]: DARK_BG_1,
  [Color.bg2]: DARK_BG_2,
  [Color.bg3]: DARK_BG_3,
  [Color.bg4]: DARK_BG_4,
  [Color.bg5]: DARK_BG_5,
  [Color.bg6]: DARK_BG_6,
  [Color.bg7]: DARK_BG_7,
  [Color.bg8]: DARK_BG_8,
  [Color.bg9]: DARK_BG_9,
  [Color.bg10]: DARK_BG_10,
  [Color.graphicBase1]: DARK_GRAPHIC_BASE_1,
  [Color.graphicBase2]: DARK_GRAPHIC_BASE_2,
  [Color.graphicBase3]: DARK_GRAPHIC_BASE_3,
  [Color.graphicRed1]: DARK_GRAPHIC_RED_1,
  [Color.graphicGreen1]: DARK_GRAPHIC_GREEN_1,
  [Color.graphicGreen2]: DARK_GRAPHIC_GREEN_2,
  [Color.graphicSecond1]: DARK_GRAPHIC_SECOND_1,
  [Color.graphicSecond2]: DARK_GRAPHIC_SECOND_2,
  [Color.graphicSecond3]: DARK_GRAPHIC_SECOND_3,
  [Color.graphicSecond4]: DARK_GRAPHIC_SECOND_4,
};
