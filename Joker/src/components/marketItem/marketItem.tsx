import React, {useState} from 'react';

import {
  Dimensions,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import {InfoModal} from '../itemInfoModal';

const widthDimention = Dimensions.get('window').width;

interface MarketItemProps {
  item: {
    id: string;
    title: string;
    description: string;
    place: string;
    date: string;
    time: string;
    src: any;
  };
}

export function MarketItem({item}: MarketItemProps) {
  const [isVisible, setIsVisible] = useState(false);
  const toggle = () => setIsVisible(!isVisible);
  return (
    <TouchableOpacity activeOpacity={0.7} onPress={toggle}>
      <ImageBackground
        resizeMode={'cover'}
        style={styles.itemContainer}
        imageStyle={styles.image}
        source={item.src}>
        <Text style={styles.textTitle}>{item.title}</Text>
        <View style={styles.infoContainer}>
          <View style={styles.info}>
            <Text style={styles.infoText}>Place: {item.place}</Text>
            <Text style={styles.infoText}>Time: {item.time}</Text>
            <Text style={styles.infoText}>Date: {item.date}</Text>
            <Text style={styles.description}>{item.description}</Text>
          </View>
        </View>
      </ImageBackground>
      <InfoModal visible={isVisible} toggle={toggle} item={item} />
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
    fontSize: 18,
    marginLeft: 10,
    marginTop: 3,
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
