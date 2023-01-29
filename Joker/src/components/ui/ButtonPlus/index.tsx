import React, {memo} from 'react';

import {useTheme} from '@react-navigation/native';
import {Image, StyleSheet, TouchableOpacity} from 'react-native';

const size = 50;

const styles = StyleSheet.create({
  container: {
    width: size,
    height: size,
  },
  img: {
    width: size,
    height: size,
    alignSelf: 'center',
  },
});

interface ButtonPlusT {
  onPress?: () => void;
}

const ButtonPlus = memo<ButtonPlusT>(({onPress}) => {
  const {container, img} = styles;
  const {dark} = useTheme();

  const icon = dark
    ? require('./images/PlusB.png')
    : require('./images/PlusW.png');

  return (
    <>
      <TouchableOpacity style={container} onPress={onPress}>
        <Image source={icon} style={[img]} />
      </TouchableOpacity>
    </>
  );
});

export {ButtonPlus};
