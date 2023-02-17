import React from 'react';

import {StyleProp, ViewStyle} from 'react-native';
import Svg, {ClipPath, Defs, G, Path, SvgProps} from 'react-native-svg';

import {useTheme} from 'src/hooks';

export type CheckmarkProps = {
  isFilled?: boolean;
  style?: StyleProp<ViewStyle>;
};

export function Checkmark({isFilled, style}: CheckmarkProps) {
  const {colors} = useTheme();
  return isFilled ? (
    <CheckboxFilled style={style} width={28} color={colors.primary} />
  ) : (
    <CheckboxEmpty style={style} width={28} color={colors.primary} />
  );
}

// const styles = StyleSheet.create({
//   container: {},
// });

function CheckboxEmpty({color, ...props}: SvgProps) {
  return (
    <Svg viewBox="0 0 28 28" fill="none" {...props}>
      <G clipPath="url(#a)" fill={color}>
        <Path d="M14 .438c7.492 0 13.563 6.07 13.563 13.562 0 7.492-6.07 13.563-13.563 13.563C6.508 27.563.437 21.492.437 14 .438 6.508 6.508.437 14 .437Zm0 24.5c6.043 0 10.938-4.895 10.938-10.938 0-6.043-4.895-10.938-10.938-10.938C7.957 3.063 3.062 7.957 3.062 14c0 6.043 4.895 10.938 10.938 10.938Z" />
        <Path d="M14 1.077c7.139 0 12.923 5.784 12.923 12.923S21.139 26.923 14 26.923C6.86 26.923 1.077 21.14 1.077 14S6.86 1.077 14 1.077Zm0 23.345A10.419 10.419 0 0 0 24.422 14 10.419 10.419 0 0 0 14 3.578 10.419 10.419 0 0 0 3.578 14 10.419 10.419 0 0 0 14 24.422Z" />
      </G>
      <Defs>
        <ClipPath id="a">
          <Path
            fill="#fff"
            transform="matrix(-1 0 0 1 28 0)"
            d="M0 0h28v28H0z"
          />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

function CheckboxFilled({color, ...props}: SvgProps) {
  return (
    <Svg viewBox="0 0 28 28" fill="none" {...props}>
      <G clipPath="url(#a)">
        <Path
          d="M14.5.453C6.742.453.453 6.743.453 14.5c0 7.758 6.29 14.047 14.047 14.047 7.758 0 14.047-6.29 14.047-14.047C28.547 6.742 22.257.453 14.5.453Zm0 2.719c6.26 0 11.328 5.066 11.328 11.328 0 6.26-5.066 11.328-11.328 11.328A11.322 11.322 0 0 1 3.172 14.5c0-6.26 5.066-11.328 11.328-11.328Zm7.941 7.378-1.276-1.286a.68.68 0 0 0-.961-.004l-8.007 7.942-3.386-3.415a.68.68 0 0 0-.962-.003L6.563 15.06a.68.68 0 0 0-.004.961l5.142 5.184a.68.68 0 0 0 .96.004l9.776-9.697a.68.68 0 0 0 .004-.962Z"
          fill={color}
        />
      </G>
      <Defs>
        <ClipPath id="a">
          <Path fill="#fff" d="M0 0h29v29H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}
