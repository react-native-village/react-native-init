import React, {useState} from 'react';

import {Image, Pressable, StyleSheet, View} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {useThematicStyles} from 'src/hooks';
import {Color} from 'src/themeTypes';

import {Tag} from '../tag';
import {Spacer, Text} from '../ui';

export function TicketSmall() {
  const [isActive, setActive] = useState(false);
  const heartActive = isActive ? 'heart' : 'heart-outline';
  const {styles} = useThematicStyles(rawStyles);
  return (
    <View style={styles.container}>
      <Image
        style={styles.imageStyle}
        source={
          require('./afisha.jpg')
          // {uri: 'src/components/ticket/afisha.jpg'}
        }
      />
      <Text children={'Groovy Tunes'} t6 style={styles.textStyle} />
      <View style={styles.rowStyle}>
        <View style={styles.tagsContainer}>
          <Tag children={'Music'} />
          <Spacer width={5} />
          <Tag children={'2+'} />
        </View>
        <Text children={'70 XTZ'} t8 color={Color.graphicRed1} />
      </View>
      <View style={styles.iconWithTextContainer}>
        <MaterialCommunityIcons
          name={'map-marker-outline'}
          size={30}
          style={styles.iconStyle}
        />
        <View style={styles.textContainer}>
          <Text children={'Retro Mountain'} t14 />
        </View>
      </View>
      <Spacer height={8} />
      <View style={styles.heartContainer2}>
        <View style={styles.iconWithTextContainer}>
          <MaterialCommunityIcons
            name={'ticket-confirmation-outline'}
            size={30}
            style={styles.iconStyle}
          />
          <View style={styles.textContainer}>
            <Text children={'One time usage'} t14 />
          </View>
        </View>
        <View style={styles.heartContainer}>
          <Pressable onPressOut={() => setActive(pr => !pr)}>
            <MaterialCommunityIcons
              name={heartActive}
              size={30}
              style={styles.heartStyle}
            />
          </Pressable>
        </View>
      </View>
    </View>
  );
}

const rawStyles = StyleSheet.create({
  container: {
    width: 220,
    height: 388,
    borderRadius: 15,
    alignSelf: 'center',
    backgroundColor: Color.bg1,
    borderWidth: 1,
    borderColor: Color.bg8,
  },
  iconStyle: {
    color: Color.textSecond1,
    fontSize: 25,
  },
  heartStyle: {
    color: Color.graphicRed1,
    fontSize: 25,
    marginBottom: 3,
  },
  imageStyle: {
    width: 220,
    height: 220,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    borderColor: Color.bg1,
    borderWidth: 1,
  },
  textStyle: {
    marginLeft: 15,
    marginTop: 15,
    maxHeight: 20,
    maxWidth: 220,
  },
  rowStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginRight: 15,
    marginLeft: 15,
    marginTop: 10,
    marginBottom: 10,
    alignItems: 'center',
  },
  iconWithTextContainer: {
    flexDirection: 'row',
    marginRight: 15,
    marginLeft: 10,
  },
  textContainer: {
    justifyContent: 'center',
    marginLeft: 3,
  },
  heartContainer: {
    alignSelf: 'flex-end',
  },
  heartContainer2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginRight: 15,
    alignItems: 'center',
  },
  tagsContainer: {
    flexDirection: 'row',
  },
});
