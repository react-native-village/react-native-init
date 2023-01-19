import {useContext} from 'react';

import {ThemeContext} from 'src/contexts/ThemeContext';

export const useTheme = () => useContext(ThemeContext);
