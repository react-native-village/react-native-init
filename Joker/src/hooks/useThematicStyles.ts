import {createTheme} from 'src/helpers';
import {useTheme} from 'src/hooks/useTheme';
import {NamedStyles} from 'src/themeTypes';

export const useThematicStyles = <T extends {}>(
  stylesObj: T | NamedStyles<T>,
) => {
  const {colors} = useTheme();
  const styles = createTheme(stylesObj, colors);
  return {styles, colors};
};
