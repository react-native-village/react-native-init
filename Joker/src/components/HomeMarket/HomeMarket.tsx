import React from 'react';

import {ScrollView, StyleSheet, TouchableOpacity, View} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {Background, Spacer, TicketCardColumn} from 'src/components/ui';
import {Color} from 'src/themeTypes';
import {TicketInfo} from 'src/types';

import Logo from '../../../assets/images/logo.svg';
import {Categories} from '../ui/categories';
import {HeaderList} from '../ui/headerList';

interface HomeMarketProps {
  onPressCard: (item: TicketInfo) => void;
}

export function HomeMarket({onPressCard}: HomeMarketProps) {
  const insets = useSafeAreaInsets();

  return (
    <Background
      style={{
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
      }}>
      <View style={styles.rowContainer}>
        <Logo width={38} height={38} style={styles.logo} />
        <TouchableOpacity>
          <MaterialCommunityIcons name="line-scan" style={styles.icon} />
        </TouchableOpacity>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <Categories />
          <View style={styles.flatListContainer}>
            <FlatList
              horizontal
              data={DATA}
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.contentContainer}
              renderItem={({item}) => (
                <TicketCardColumn onPress={onPressCard} {...item} />
              )}
              keyExtractor={item => item.id}
              ItemSeparatorComponent={Separator}
            />
          </View>
          <HeaderList title="Newest Events" button="See all" />
          <View style={styles.flatListContainer}>
            <FlatList
              horizontal
              data={DATA}
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.contentContainer}
              renderItem={({item}) => (
                <TicketCardColumn onPress={onPressCard} {...item} />
              )}
              keyExtractor={item => item.id}
              ItemSeparatorComponent={Separator}
            />
          </View>
          <HeaderList title="Expiring Soon" button="See all" />
          <View style={styles.flatListContainer}>
            <FlatList
              horizontal
              data={DATA}
              contentContainerStyle={styles.contentContainer}
              showsHorizontalScrollIndicator={false}
              renderItem={({item}) => (
                <TicketCardColumn onPress={onPressCard} {...item} />
              )}
              keyExtractor={item => item.id}
              ItemSeparatorComponent={Separator}
            />
          </View>
        </View>
      </ScrollView>
    </Background>
  );
}

function Separator() {
  return <Spacer width={12.5} />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
  },
  rowContainer: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    marginTop: 23,
    marginBottom: 10,
  },
  flatListContainer: {
    width: '100%',
    alignItems: 'center',
    marginBottom: 25,
  },
  icon: {
    fontSize: 24,
    color: Color.textBlue1,
  },
  logo: {
    marginLeft: 5,
  },
  contentContainer: {
    paddingHorizontal: 20,
  },
});

export const DATA: TicketInfo[] = [
  {
    id: '1',
    name: 'Groovy Tunes',
    tags: ['Rock', 'Funny'],
    startData: 1836575410,
    endData: 1672947919,
    geoPosition: 'Retro Mountain',
    price: 100000,
    currencySymbols: 'MATIC',
    imageUrl:
      'https://d1629ugb7moz2f.cloudfront.net/e/21162/cFPvQBjmRmwyo1PA0VR4hO572mDold5r664eQISO.jpg',
  },
  {
    id: '2',
    name: 'Space Nation',
    tags: ['Festival', 'Music'],
    startData: 1066608715,
    endData: 1836575410,
    geoPosition: 'London, United Kingdom',

    imageUrl:
      'https://sun9-21.userapi.com/impg/6szHtBSxhWsTpgI6DxooVNJX5a91UnSyZ7v3IA/xyuHV-esCNk.jpg?size=1728x2160&quality=96&sign=03b666b473379e25cab2aed65755971a&type=album',
  },
  {
    id: '3',
    name: 'Gravity',
    tags: ['Fair'],
    startData: 1845245027,
    endData: 1363965191,
    geoPosition: 'Berlin, Germany',
    imageUrl:
      'https://sun9-45.userapi.com/impg/lFGaAdWwVD-RiW4bXw4bKcnXsWv606YEtDVkVw/-bJyCbt3Y0A.jpg?size=1728x2160&quality=96&sign=2873a53d37fb2a0260ad8eeda276c385&type=album',
  },
  {
    id: '4',
    name: 'TechnoCon',
    tags: ['Geek', 'Funny'],
    startData: 1710507435,
    endData: 1710907435,
    geoPosition: 'Bangkok, Tailand',
    imageUrl:
      'https://sun9-16.userapi.com/impg/IM0FOwieyY1mIZnpSCjRdTwsoDjSQKULiBA8VA/FB_BmF3zLwg.jpg?size=1920x1080&quality=96&sign=642aa11f787d1a0407227250c63d4aa0&type=album',
  },
  {
    id: '5',
    name: 'Party Box',
    tags: ['Bootcamp', 'Funny'],
    startData: 1262177088,
    endData: 1449452932,
    geoPosition: 'Bom, Belgium',
    imageUrl:
      'https://sun9-10.userapi.com/impg/S7lroEi5Ox84ce1k898ZQ80OcaLt7FIocaw5sg/A5Gf6lG6UaU.jpg?size=1728x2160&quality=96&sign=36306177bc52952d06692237696078d7&type=album',
  },
  {
    id: '6',
    name: 'Slow Motion',
    tags: ['Music'],
    startData: 1301231421,
    endData: 1514295824,
    geoPosition: 'Paris, France',
    imageUrl:
      'https://sun9-69.userapi.com/impg/jDt0aw3j-fLKxhu7mgnxh952Cg9ZhYnZkwLjXg/2kD7PrezqUw.jpg?size=1728x2160&quality=96&sign=a473e5ca3b9375621f1db528ca69fdbd&type=album',
  },
];
