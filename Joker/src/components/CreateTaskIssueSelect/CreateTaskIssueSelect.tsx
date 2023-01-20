import React, {useRef, useState} from 'react';

import {ApolloError} from '@apollo/client';
import {FlatList, StyleSheet, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import {Background, Button, Spacer, Text} from 'src/components/ui';
import {IssuesListQuery} from 'src/generated/graphql-github';
import {useThematicStyles} from 'src/hooks';
import {Color} from 'src/themeTypes';

import {IssueItem} from './IssueItem';

type issueType = NonNullable<IssuesListQuery['repository']>['issues'];

interface CreateTaskIssueSelectProps {
  issues: issueType['edges'];
  pageInfo?: issueType['pageInfo'];
  error: ApolloError | undefined;
  onRefresh?: () => Promise<any>;
  onPrevPage?: () => void;
  onNextPage?: () => void;
  onSelectIssue?: (issueId: number) => void;
}

export function CreateTaskIssueSelect({
  issues,
  pageInfo,
  error,
  onRefresh,
  onPrevPage,
  onNextPage,
  onSelectIssue,
}: CreateTaskIssueSelectProps) {
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

  if (!issues) {
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
        keyExtractor={item => item?.node?.id || ''}
        renderItem={({item}) => (
          <IssueItem onPress={onSelectIssue} issue={item?.node} />
        )}
        data={issues.filter(el => el !== null)}
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
    backgroundColor: Color.graphicGreen2,
    width: '90%',
    alignSelf: 'center',
    height: 2,
    borderRadius: 5,
    marginVertical: 10,
  },
});
