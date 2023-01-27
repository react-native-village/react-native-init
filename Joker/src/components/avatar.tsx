import React, {memo, useState} from 'react';

import {
  Image,
  StyleProp,
  StyleSheet,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';

import {Loading} from './loading';

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
  },
  xLarge: {
    marginLeft: 1,
    width: 130,
    height: 130,
    borderRadius: 130 / 2,
  },
  large: {
    marginLeft: 1,
    width: 75,
    height: 75,
    borderRadius: 75 / 2,
  },
  medium: {
    width: 50,
    height: 50,
    borderRadius: 50 / 2,
  },
  small: {
    width: 36,
    height: 36,
    borderRadius: 36 / 2,
  },
  pinkXLarge: {
    width: 130,
    height: 132,
    borderRadius: 130 / 2,
  },
  pinkLarge: {
    width: 75,
    height: 77,
    borderRadius: 130 / 2,
  },
  pinkMedium: {
    width: 50,
    height: 52,
    borderRadius: 50 / 2,
  },
  pinkSmall: {
    width: 36,
    height: 37,
    borderRadius: 36 / 2,
  },
  blueXLarge: {
    width: 132,
    height: 129,
    borderRadius: 130 / 2,
  },
  blueLarge: {
    width: 77,
    height: 75,
    borderRadius: 77 / 2,
  },
  blueMedium: {
    width: 51,
    height: 50,
    borderRadius: 50 / 2,
  },
  blueSmall: {
    width: 37,
    height: 35,
    borderRadius: 36 / 2,
  },
});

type sizeType = 'xLarge' | 'large' | 'medium' | 'small';

interface AvatarT {
  uri: string;
  onPress?: () => void;
  size?: sizeType;
  viewStyle?: StyleProp<ViewStyle>;
}

const shadowColor = '#FF06F4';
const aquaShadow = '#62F5D4';

export const Avatar = memo<AvatarT>(
  ({uri, size = 'large', onPress, viewStyle}) => {
    const {
      container,
      small,
      medium,
      large,
      xLarge,
      pinkSmall,
      pinkMedium,
      pinkLarge,
      pinkXLarge,
      blueSmall,
      blueMedium,
      blueLarge,
      blueXLarge,
    } = styles;

    const ava = (status: sizeType) =>
      ({
        small,
        medium,
        large,
        xLarge,
      }[status]);

    const pink = (status: sizeType) =>
      ({
        small: pinkSmall,
        medium: pinkMedium,
        large: pinkLarge,
        xLarge: pinkXLarge,
      }[status]);

    const blue = (status: sizeType) =>
      ({
        small: blueSmall,
        medium: blueMedium,
        large: blueLarge,
        xLarge: blueXLarge,
      }[status]);

    const [value, setValue] = useState<boolean>(false);

    const getSize = (x: sizeType) =>
      ({
        xLarge: 150,
        large: 90,
        medium: 60,
        small: 40,
      }[x]);

    return (
      <>
        <TouchableOpacity onPress={onPress} style={[container, viewStyle]}>
          <View style={[pink(size), {backgroundColor: shadowColor}]}>
            <View style={[blue(size), {backgroundColor: aquaShadow}]}>
              <Image
                style={ava(size)}
                source={{uri}}
                onLoadEnd={() => setValue(true)}
              />
              <Loading type="Pulse" size={getSize(size)} animating={value} />
            </View>
          </View>
        </TouchableOpacity>
      </>
    );
  },
);
