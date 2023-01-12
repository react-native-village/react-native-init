import React, {useState} from 'react';

import {CreateTaskIssueSelect} from 'src/components/CreateTaskIssueSelect';
import {Waiting} from 'src/components/lottie';
import {useIssuesListQuery} from 'src/generated/graphql-github';
import {useGithubPagination, useTypedRoute} from 'src/hooks';

export function CreateTaskIssueSelectScreen() {
  const [cursor, setCursor] = useState<string>();
  const {owner, repoName} = useTypedRoute<'createTaskIssueSelect'>().params;

  const {error, data, loading} = useIssuesListQuery({
    variables: {
      owner,
      repoName,
      cursor,
    },
  });

  const {onNextPage, onPrevPage} = useGithubPagination(
    data?.repository?.issues.pageInfo,
    setCursor,
  );

  if (loading) {
    return <Waiting />;
  }

  return (
    <CreateTaskIssueSelect
      onNextPage={onNextPage}
      onPrevPage={onPrevPage}
      pageInfo={data?.repository?.issues.pageInfo}
      issues={data?.repository?.issues?.edges}
      error={error}
    />
  );
}