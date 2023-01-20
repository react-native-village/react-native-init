import React from 'react';

import {StyleSheet, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';

import {Background, Text} from 'src/components/ui';
import {useExploreProfilesQuery} from 'src/generated/graphql-lens';
import {LIGHT_TEXT_RED_1} from 'src/variables';

export function HomeProfileScreen() {
  const {loading, error, data} = useExploreProfilesQuery({
    context: {clientName: 'lenLink'},
  });
  console.log(loading, error);
  console.log(data?.exploreProfiles.items[0].bio);

  return (
    <Background>
      <ScrollView>
        {data?.exploreProfiles.items.map(item => {
          return (
            <>
              <Text>{item.name}</Text>
              <View style={styles.line} />
            </>
          );
        })}
      </ScrollView>
    </Background>
  );
}

const styles = StyleSheet.create({
  line: {
    width: '100%',
    height: 3,
    backgroundColor: LIGHT_TEXT_RED_1,
  },
});
