import React, {memo, useState} from 'react';

import {
  Image,
  StyleProp,
  StyleSheet,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';

import {Loading} from '../loading';

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
});

type sizeType = 'xLarge' | 'large' | 'medium' | 'small';

interface AvatarT {
  uri: string;
  onPress?: () => void;
  size?: sizeType;
  viewStyle?: StyleProp<ViewStyle>;
}

export const Avatar = memo<AvatarT>(
  ({uri, size = 'large', onPress, viewStyle}) => {
    const {container, small, medium, large, xLarge} = styles;

    const ava = (status: sizeType) =>
      ({
        small,
        medium,
        large,
        xLarge,
      }[status]);

    const [value, setValue] = useState<boolean>(false);

    return (
      <>
        <TouchableOpacity onPress={onPress} style={[container, viewStyle]}>
          <Image
            style={ava(size)}
            source={{uri}}
            onLoadEnd={() => setValue(true)}
          />
          <Loading type="Pulse" size={sizes[size]} animating={value} />
        </TouchableOpacity>
      </>
    );
  },
);

const sizes = {
  xLarge: 150,
  large: 90,
  medium: 60,
  small: 40,
};
