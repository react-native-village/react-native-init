import React from 'react';

import {Pressable, StyleSheet, View} from 'react-native';

import {Text} from 'src/components/ui';
import {UserReposQuery} from 'src/generated/graphql-github';
import {useThemeObject} from 'src/hooks';
import {ArrayElementType, ColorTheme} from 'src/types';

import {onPressRepoItemParams} from './CreateTaskRepoSelect';

export type RepoItemProps = {
  repo: ArrayElementType<UserReposQuery['viewer']['repositories']['nodes']>;
  onPress: (args: onPressRepoItemParams) => void;
};

export function RepoItem({repo, onPress}: RepoItemProps) {
  const styles = useThemeObject(createStyles);
  if (!repo) {
    return null;
  }

  const handlePress = () => {
    onPress({
      owner: repo.owner.login,
      repoName: repo.name,
      openedIssueCount: repo.issues.totalCount,
    });
  };

  return (
    <Pressable onPress={handlePress} style={styles.container}>
      <Text t5>{repo.name}</Text>
      <View style={styles.shortInfo}>
        <Text style={styles.infoItem} t8>
          stars: {repo.stargazerCount}
        </Text>
        <Text style={styles.infoItem} t8>
          issues: {repo.issues.totalCount}
        </Text>
      </View>
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
