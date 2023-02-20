import React from 'react';

import {FlatList, StyleSheet, View} from 'react-native';

import {TicketInfo} from 'src/types';

import {Tag} from '../Tag';

interface TicketCardTagsProps {
  tags: TicketInfo['tags'];
}

function Separator() {
  return <View style={styles.separator} />;
}

export function EventTags({tags}: TicketCardTagsProps) {
  return (
    <View>
      <FlatList
        horizontal
        data={tags}
        renderItem={({item}) => <Tag name={item} />}
        keyExtractor={item => item}
        ItemSeparatorComponent={Separator}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  separator: {
    marginHorizontal: 4,
  },
});
