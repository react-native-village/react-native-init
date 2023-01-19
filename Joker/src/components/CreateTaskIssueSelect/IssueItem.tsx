import React from 'react';

import {Pressable, StyleSheet} from 'react-native';

import {IssuesListQuery} from 'src/generated/graphql-github';
import {useThemeObject} from 'src/hooks';
import {ArrayElementType, ColorTheme} from 'src/types';

import {Text} from '../ui';

export type IssueItemProps = {
  issue: NonNullable<
    ArrayElementType<
      NonNullable<IssuesListQuery['repository']>['issues']['edges']
    >
  >['node'];
  onPress?: (issueId: number) => void;
};

export function IssueItem({issue, onPress}: IssueItemProps) {
  const styles = useThemeObject(createStyles);
  if (!issue) {
    return null;
  }

  const handlePress = () => {
    onPress?.(issue.number);
  };

  return (
    <Pressable onPress={handlePress} style={styles.container}>
      <Text t5>{issue?.title}</Text>
      {/* <Text style={styles.infoItem} t8>
        stars: {issue?.body}
      </Text> */}
      {issue?.labels?.edges?.map(node => {
        return (
          <Text key={node?.node?.id} style={styles.infoItem} t8>
            {node?.node?.name}
          </Text>
        );
      })}
    </Pressable>
  );
}

export const createStyles = (color: ColorTheme) =>
  StyleSheet.create({
    container: {
      width: '100%',
      backgroundColor: color.bg1,
      padding: 10,
      marginVertical: 5,
      borderRadius: 5,
    },
    shortInfo: {
      flexDirection: 'row',
    },
    infoItem: {
      flex: 1,
    },
  });
