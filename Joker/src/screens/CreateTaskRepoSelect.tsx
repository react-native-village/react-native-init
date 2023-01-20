import React, {useCallback, useState} from 'react';

import {Alert} from 'react-native';

import {
  CreateTaskRepoSelect,
  onPressRepoItemParams,
} from 'src/components/CreateTaskRepoSelect';
import {Waiting} from 'src/components/ui';
import {useUserReposQuery} from 'src/generated/graphql-github';
import {useGithubPagination, useTypedNavigation} from 'src/hooks';

export function CreateTaskRepoSelectScreen() {
  const [cursor, setCursor] = useState<string>();
  const {navigate} = useTypedNavigation();
  const {error, data, loading, refetch} = useUserReposQuery({
    variables: {
      countToShow: 100,
      cursor,
    },
  });

  const {onNextPage, onPrevPage} = useGithubPagination(
    data?.viewer.repositories.pageInfo,
    setCursor,
  );

  // обязательно useCallback, иначе будет обновляться элементы списка при каждом ре-рендере
  const onPressItem = useCallback(
    ({owner, repoName, openedIssueCount}: onPressRepoItemParams) => {
      if (openedIssueCount <= 0) {
        Alert.alert(
          'There are no issues in the repository',
          'The repository must have issues in order to write them in a smart contract.',
          [
            {
              text: 'OK',
              style: 'default',
            },
          ],
        );
        return;
      }
      navigate('createTaskIssueSelect', {owner, repoName});
    },
    [],
  );

  if (loading) {
    return <Waiting />;
  }

  return (
    <CreateTaskRepoSelect
      onRefresh={refetch}
      onNextPage={onNextPage}
      onPrevPage={onPrevPage}
      onPressItem={onPressItem}
      pageInfo={data?.viewer.repositories.pageInfo}
      repos={data?.viewer.repositories.nodes}
      error={error}
    />
  );
}
