// SCREEN FOR DEVELOPER, NOT PRODUCTION

import React, {useState} from 'react';

import {useNavigation} from '@react-navigation/native';
import {Image, SafeAreaView, ScrollView, StyleSheet} from 'react-native';

import {Button, ButtonVariant, Text} from 'src/components/ui';
import {NftsArrayItem, contracts} from 'src/services';

export default function NftTestsNftTests() {
  const [data, setData] = useState<NftsArrayItem[]>([]);
  const {goBack} = useNavigation();
  const onPress = async () => {
    const res = await contracts.getImageNftsByAddress(
      '0x00000000219ab540356cbb839cbe05303d7705fa',
    );
    if (res) {
      console.log('🚀 - res', res);
      setData(res);
    } else {
      console.warn('🚀 - undefined nfts');
    }
  };

  return (
    <SafeAreaView style={styles.flexOne}>
      <Button onPress={goBack} title="Go back button" />
      <Text t5>NFT Test Screen</Text>
      <Button
        title="TEST"
        variant={ButtonVariant.contained}
        onPress={onPress}
      />
      <ScrollView
        contentContainerStyle={styles.nftsContainer}
        style={styles.flexOne}>
        {data.map(item => {
          return (
            <React.Fragment key={item.id}>
              <Text t12>{item.name}</Text>
              <Image style={styles.image} source={{uri: item.uri}} />
            </React.Fragment>
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 200,
    height: 200,
    borderRadius: 10,
    margin: 10,
  },
  flexOne: {
    flex: 1,
  },
  nftsContainer: {
    alignItems: 'center',
  },
});
