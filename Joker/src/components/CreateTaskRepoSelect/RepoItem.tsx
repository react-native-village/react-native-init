import React from 'react';

import {Pressable, StyleSheet, View} from 'react-native';

import {Text} from 'src/components/ui';
import {UserReposQuery} from 'src/generated/graphql-github';
import {useThematicStyles} from 'src/hooks';
import {Color} from 'src/themeTypes';
import {ArrayElementType} from 'src/types';

import {onPressRepoItemParams} from './CreateTaskRepoSelect';

export type RepoItemProps = {
  repo: ArrayElementType<UserReposQuery['viewer']['repositories']['nodes']>;
  onPress: (args: onPressRepoItemParams) => void;
};

export function RepoItem({repo, onPress}: RepoItemProps) {
  const {styles} = useThematicStyles(rawStyles);
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

export const rawStyles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: Color.bg1,
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
