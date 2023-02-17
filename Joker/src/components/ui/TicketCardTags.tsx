import React from 'react';

import {StyleSheet, View} from 'react-native';

import {TicketInfo} from 'src/types';

import {Tag} from './Tag';

interface TicketCardTagsProps {
  tags: TicketInfo['tags'];
}

export function TicketCardTags({tags}: TicketCardTagsProps) {
  return (
    <View style={styles.container}>
      {tags.map((tag, id) => {
        if (id === 1) {
          return <Tag withMarginLeft key={tag} name={`+${tags.length - 1}`} />;
        } else if (id > 1) {
          return <React.Fragment key={tag} />;
        } else {
          return <Tag key={tag} name={tag} />;
        }
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
});
