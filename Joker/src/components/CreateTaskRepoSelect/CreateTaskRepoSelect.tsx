import React, {useRef, useState} from 'react';

import {ApolloError} from '@apollo/client';
import {FlatList, StyleSheet, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import {Background, Button, Spacer, Text} from 'src/components/ui';
import {UserReposQuery} from 'src/generated/graphql-github';
import {useThematicStyles} from 'src/hooks';
import {Color} from 'src/themeTypes';

import {RepoItem} from './RepoItem';

export type onPressRepoItemParams = {
  owner: string;
  repoName: string;
  openedIssueCount: number;
};

interface CreateTaskRepoSelectProps {
  repos: UserReposQuery['viewer']['repositories']['nodes'];
  pageInfo?: UserReposQuery['viewer']['repositories']['pageInfo'];
  onRefresh?: () => Promise<any>;
  onPressItem: (arg: onPressRepoItemParams) => void;
  error: ApolloError | undefined;
  onPrevPage?: () => void;
  onNextPage?: () => void;
}

export function CreateTaskRepoSelect({
  repos,
  pageInfo,
  error,
  onRefresh,
  onPrevPage,
  onNextPage,
  onPressItem,
}: CreateTaskRepoSelectProps) {
  const {styles} = useThematicStyles(rawStyles);
  const {bottom} = useSafeAreaInsets();

  const ref = useRef<FlatList>(null);

  const [refrshing, setRefrshing] = useState(false);
  const handleRefresh = async () => {
    setRefrshing(true);
    await onRefresh?.();
    setRefrshing(false);
  };

  if (error) {
    return <Text>{error.message}</Text>;
  }

  if (!repos) {
    return <Text>Empty repos</Text>;
  }

  const handlePrevPage = () => {
    ref.current?.scrollToOffset({offset: 0, animated: true});
    onPrevPage?.();
  };

  const handleNextPage = () => {
    ref.current?.scrollToOffset({offset: 0, animated: true});
    onNextPage?.();
  };

  return (
    <Background>
      <FlatList
        refreshing={refrshing}
        onRefresh={handleRefresh}
        ref={ref}
        style={styles.container}
        keyExtractor={item => item?.url || ''}
        renderItem={({item}) => <RepoItem onPress={onPressItem} repo={item} />}
        data={repos.filter(el => el !== null)}
        ListHeaderComponent={
          <>
            <Spacer height={10} />
            <Text t2>Choose a repo</Text>
          </>
        }
        ListFooterComponent={
          <>
            <View style={styles.line} />
            <View>
              {pageInfo?.hasPreviousPage && (
                <Button onPress={handlePrevPage} title="Prev page" />
              )}
              {pageInfo?.hasNextPage && (
                <Button onPress={handleNextPage} title="Next page" />
              )}
            </View>
            <Spacer height={bottom} />
          </>
        }
      />
    </Background>
  );
}

const rawStyles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  line: {
    backgroundColor: Color.graphicGreen1,
    width: '90%',
    alignSelf: 'center',
    height: 2,
    borderRadius: 5,
    marginVertical: 10,
  },
});
