import React from 'react';

import {
  Dimensions,
  ImageBackground,
  ImageSourcePropType,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const widthDimention = Dimensions.get('window').width;

interface MarketItemProps {
  title: string;
  description: string;
  place: string;
  time: string;
  src: ImageSourcePropType;
}

export function MarketItem({
  title,
  description,
  time,
  place,
  src,
}: MarketItemProps) {
  return (
    <TouchableOpacity activeOpacity={0.7} onPress={() => {}}>
      <ImageBackground
        resizeMode={'cover'}
        style={styles.itemContainer}
        imageStyle={styles.image}
        source={src}>
        <Text style={styles.textTitle}>{title}</Text>
        <View style={styles.infoContainer}>
          <View style={styles.info}>
            <Text style={styles.infoText}>Place: {place}</Text>
            <Text style={styles.infoText}>Time: {time}</Text>
            <Text style={styles.description}>{description}</Text>
          </View>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    height: widthDimention - 20,
    width: widthDimention - 20,
    borderRadius: 40,
    alignItems: 'center',
  },
  rowContainer: {
    flexDirection: 'row',
  },
  // eslint-disable-next-line react-native/no-color-literals
  description: {
    color: 'silver',
    fontSize: 15,
    marginLeft: 10,
    marginTop: 5,
    fontWeight: '300',
  },
  infoContainer: {
    height: '100%',
    position: 'absolute',
    justifyContent: 'flex-end',
  },
  // eslint-disable-next-line react-native/no-color-literals
  info: {
    backgroundColor: 'white',
    borderBottomStartRadius: 40,
    borderBottomEndRadius: 40,
    height: widthDimention * 0.38,
    width: widthDimention - 20,
    borderBottomWidth: 1.5,
    borderEndWidth: 1.5,
    borderStartWidth: 1.5,
    borderColor: 'silver',
  },
  // eslint-disable-next-line react-native/no-color-literals
  infoText: {
    color: 'black',
    fontSize: 20,
    marginLeft: 10,
    marginTop: 5,
  },
  // eslint-disable-next-line react-native/no-color-literals
  image: {
    borderRadius: 40,
    borderColor: 'silver',
    borderWidth: 1.5,
  },
  // eslint-disable-next-line react-native/no-color-literals
  textTitle: {
    fontSize: 35,
    color: 'white',
    textShadowColor: 'white',
    textShadowRadius: 8,
  },
});
