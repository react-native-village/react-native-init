import * as React from 'react';

import {LightTheme} from 'src/themes';
import {Theme} from 'src/types';

const ThemeContext = React.createContext<Theme>(LightTheme);

ThemeContext.displayName = 'ThemeContext';

export default ThemeContext;
