import React, {useCallback} from 'react';

import {StyleSheet, TouchableOpacity} from 'react-native';
import Svg, {Circle, Path} from 'react-native-svg';

import {useTheme} from 'src/hooks';

function CheckboxEmpty({color}: {color: string}) {
  return (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" color={color}>
      <Circle cx="12" cy="12" r="11.5" stroke="currentColor" />
    </Svg>
  );
}

function CheckboxFilled({color}: {color: string}) {
  return (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" color={color}>
      <Circle cx="12" cy="12" r="12" fill="currentColor" />
      <Path
        d="M11.1471 17.267L18.7071 9.70701C19.0981 9.31601 19.0981 8.68401 18.7071 8.29301C18.3161 7.90201 17.6841 7.90201 17.2931 8.29301L10.4401 15.146L7.69407 12.4C7.30307 12.009 6.67107 12.009 6.28007 12.4C5.88907 12.791 5.88907 13.423 6.28007 13.814L9.73307 17.267C9.92007 17.455 10.1751 17.56 10.4401 17.56C10.7051 17.56 10.9591 17.455 11.1471 17.267Z"
        fill="white"
      />
    </Svg>
  );
}

export type CheckboxProps = {
  value: boolean;
  onPress: (value: boolean) => void;
  children: React.ReactNode;
};

export function Checkbox({value, onPress, children}: CheckboxProps) {
  const {color} = useTheme();
  const onPressCheckbox = useCallback(() => {
    onPress(!value);
  }, [value, onPress]);
  return (
    <TouchableOpacity onPress={onPressCheckbox} style={page.container}>
      {value ? (
        <CheckboxFilled color={color.graphicGreen1} />
      ) : (
        <CheckboxEmpty color={color.graphicBase2} />
      )}
      {children}
    </TouchableOpacity>
  );
}

const page = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    height: 40,
  },
});
