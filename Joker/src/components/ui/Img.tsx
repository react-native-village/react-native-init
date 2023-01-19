import React, {memo} from 'react';

import {Image, StyleSheet, View, useWindowDimensions} from 'react-native';
import {s} from 'react-native-size-matters';

import {useImageAspect} from 'src/hooks';

interface ImgT {
  maxHeight?: number;
  uri: string;
  widthCoefficient?: number;
}

export const Img = memo<ImgT>(
  ({maxHeight = 370, uri = '', widthCoefficient = 1}) => {
    const aspect = useImageAspect(uri);
    const {width: W} = useWindowDimensions();

    let width = W * widthCoefficient;
    const height = width / aspect;

    if (maxHeight && height > maxHeight) {
      width = maxHeight * aspect;
    }

    return (
      <View style={[mainBlock, {maxHeight}]}>
        <Image
          style={[
            img,
            {
              width,
              height,
              maxHeight,
            },
          ]}
          resizeMode="contain"
          source={{uri}}
        />
      </View>
    );
  },
);

const styles = StyleSheet.create({
  img: {
    borderRadius: s(12),
    overflow: 'hidden',
  },
  mainBlock: {
    width: '100%',
    alignItems: 'center',
  },
});

const {img, mainBlock} = styles;
