import React from 'react';

import {StyleSheet, View} from 'react-native';

import {UserReposQuery} from 'src/generated/graphql-github';
import {useThemeObject} from 'src/hooks';
import {ArrayElementType, ColorTheme} from 'src/types';

import {Text} from '../ui';

export type RepoCardItemProps = {
  repo: ArrayElementType<UserReposQuery['viewer']['repositories']['nodes']>;
};

export function RepoCardItem({repo}: RepoCardItemProps) {
  const styles = useThemeObject(createStyles);
  if (!repo) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Text t5>{repo.name}</Text>
      <View style={styles.shortInfo}>
        <Text style={styles.infoItem} t8>
          stars: {repo.stargazerCount}
        </Text>
        <Text style={styles.infoItem} t8>
          issues: {repo.issues.totalCount}
        </Text>
      </View>
    </View>
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
