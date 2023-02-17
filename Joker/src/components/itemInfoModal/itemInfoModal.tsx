import React from 'react';

import {
  Dimensions,
  Image,
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import {Background} from '../ui';

const widthDimention = Dimensions.get('window').width;

interface InfoModalProps {
  visible: boolean;
  toggle: () => void;
  item: {
    id: string;
    title: string;
    description: string;
    place: string;
    time: string;
    date: string;
    src: any;
  };
}

export function InfoModal({visible, toggle, item}: InfoModalProps) {
  return (
    <Modal
      visible={visible}
      animationType={'slide'}
      hardwareAccelerated
      transparent
      onRequestClose={toggle}>
      <Background style={styles.container}>
        <ScrollView
          style={styles.scroll}
          contentContainerStyle={styles.scrollContainer}>
          <View style={{marginBottom: 10}}>
            <Image source={item.src} style={styles.image} />
            <View style={styles.onImageContainer}>
              <Text style={styles.titleText}>{item.title}</Text>
              <View style={styles.info}>
                <Text style={styles.infoText}>Date: {item.date}</Text>
              </View>
            </View>
            <View style={styles.titleTestContainer}>
              <Text style={styles.titleTest}>
                {'<-----Можно сделайть слайд-шоу с фото места----->'}
              </Text>
            </View>
          </View>
          <View style={styles.rowContainer}>
            <View style={styles.info}>
              <Text style={styles.infoText}>Place: {item.place}</Text>
            </View>
            <View style={styles.info}>
              <Text style={styles.infoText}>Time: {item.time}</Text>
            </View>
          </View>
          <Text style={styles.description}>
            Тут будет вся инфа от организаторов, которую они предоставят
          </Text>
        </ScrollView>
        <View style={styles.preBuy}>
          <TouchableOpacity
            style={styles.buy}
            activeOpacity={0.2}
            onPress={() => {
              console.log('tuk!');
            }}>
            <Text>BUY TICKETS</Text>
          </TouchableOpacity>
        </View>
      </Background>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scroll: {
    flex: 1,
  },
  scrollContainer: {
    justifyContent: 'flex-start',
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  image: {
    width: widthDimention,
    height: widthDimention * 1.5,
    resizeMode: 'cover',
  },
  titleContainer: {
    height: '100%',
    position: 'absolute',
    justifyContent: 'flex-end',
  },
  onImageContainer: {
    height: '100%',
    position: 'absolute',
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-around',
    alignItems: 'flex-end',
    top: -10,
  },
  titleTestContainer: {
    height: '100%',
    width: '100%',
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
  },
  // eslint-disable-next-line react-native/no-color-literals
  titleText: {
    fontSize: 35,
    color: 'white',
    marginBottom: 6,
    textShadowColor: 'white',
    textShadowRadius: 8,
  },
  // eslint-disable-next-line react-native/no-color-literals
  titleTest: {
    fontSize: 15,
    color: 'white',
    textShadowColor: 'black',
    textShadowRadius: 8,
  },
  // eslint-disable-next-line react-native/no-color-literals
  description: {
    alignSelf: 'center',
    color: 'silver',
    fontSize: 15,
    marginLeft: 10,
    marginTop: 5,
    fontWeight: '300',
    height: 500,
  },
  // eslint-disable-next-line react-native/no-color-literals
  info: {
    width: 170,
    height: 55,
    backgroundColor: 'orange',
    borderRadius: 150,
    alignItems: 'center',
    justifyContent: 'center',
  },
  // eslint-disable-next-line react-native/no-color-literals
  infoText: {
    fontSize: 18,
    textAlign: 'center',
    color: 'white',
    textShadowColor: 'white',
    textShadowRadius: 8,
  },
  // eslint-disable-next-line react-native/no-color-literals
  buy: {
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    width: 200,
    height: 50,
    borderRadius: 100,
    backgroundColor: '#1761FF',
    marginBottom: 15,
  },
  preBuy: {
    position: 'absolute',
    justifyContent: 'flex-end',
    height: '100%',
    width: '100%',
    alignItems: 'center',
  },
});
