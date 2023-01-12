import React from 'react';

import {ApolloError} from '@apollo/client';
import {FlatList, StyleSheet, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import {Button, Spacer, Text} from 'src/components/ui';
import {IssuesListQuery} from 'src/generated/graphql-github';
import {useThemeObject} from 'src/hooks';
import {ColorTheme} from 'src/types';

import {IssueItem} from './IssueItem';

type issueType = NonNullable<IssuesListQuery['repository']>['issues'];

interface CreateTaskIssueSelectProps {
  issues: issueType['edges'];
  pageInfo?: issueType['pageInfo'];
  error: ApolloError | undefined;
  onPrevPage?: () => void;
  onNextPage?: () => void;
}

export function CreateTaskIssueSelect({
  issues,
  pageInfo,
  error,
  onPrevPage,
  onNextPage,
}: CreateTaskIssueSelectProps) {
  const styles = useThemeObject(createStyles);
  const {bottom} = useSafeAreaInsets();
  if (error) {
    return <Text>{error.message}</Text>;
  }

  if (!issues) {
    return <Text>Empty repos</Text>;
  }

  return (
    <FlatList
      style={styles.container}
      keyExtractor={item => item?.node?.id || ''}
      renderItem={({item}) => <IssueItem issue={item?.node} />}
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
              <Button onPress={onPrevPage} title="Prev page" />
            )}
            {pageInfo?.hasNextPage && (
              <Button onPress={onNextPage} title="Next page" />
            )}
          </View>
          <Spacer height={bottom} />
        </>
      }
    />
  );
}

const createStyles = (color: ColorTheme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      paddingHorizontal: 20,
    },
    line: {
      backgroundColor: color.graphicBlue1,
      width: '90%',
      alignSelf: 'center',
      height: 2,
      borderRadius: 5,
      marginVertical: 10,
    },
  });
