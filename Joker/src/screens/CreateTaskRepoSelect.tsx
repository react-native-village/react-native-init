import React, {useState} from 'react';

import {
  CreateTaskRepoSelect,
  onPressRepoItemParams,
} from 'src/components/CreateTaskRepoSelect';
import {Waiting} from 'src/components/lottie';
import {useUserReposQuery} from 'src/generated/graphql-github';
import {useGithubPagination, useTypedNavigation} from 'src/hooks';

export function CreateTaskRepoSelectScreen() {
  const [cursor, setCursor] = useState<string>();
  const {navigate} = useTypedNavigation();
  const {error, data, loading} = useUserReposQuery({
    variables: {
      countToShow: 10,
      cursor,
    },
  });

  const {onNextPage, onPrevPage} = useGithubPagination(
    data?.viewer.repositories.pageInfo,
    setCursor,
  );

  const onPressItem = ({owner, repoName}: onPressRepoItemParams) => {
    navigate('createTaskIssueSelect', {owner, repoName});
  };

  if (loading) {
    return <Waiting />;
  }

  return (
    <CreateTaskRepoSelect
      onNextPage={onNextPage}
      onPrevPage={onPrevPage}
      onPressItem={onPressItem}
      pageInfo={data?.viewer.repositories.pageInfo}
      repos={data?.viewer.repositories.nodes}
      error={error}
    />
  );
}
