import React from 'react';

import {CreateTaskConfirmation} from 'src/components/CreateTaskConfirmation';
import {Waiting} from 'src/components/ui';
import {useIssueQuery} from 'src/generated/graphql-github';
import {useTypedNavigation, useTypedRoute} from 'src/hooks';

export function CreateTaskConfirmationScreen() {
  const {owner, issueNumber, repoName} =
    useTypedRoute<'createTaskConfirmation'>().params;
  const {navigate} = useTypedNavigation();

  const {error, data, loading} = useIssueQuery({
    variables: {
      owner,
      repoName,
      number: issueNumber,
    },
  });

  const onConfirm = () => {
    const txhash = '0x' + issueNumber.toString(16);
    navigate('createTaskComplete', {
      txhash,
    });
  };

  if (loading) {
    return <Waiting />;
  }

  return (
    <CreateTaskConfirmation
      owner={owner}
      repoName={repoName}
      estimatedGasPrice={100}
      issue={data?.repository?.issue}
      link={data?.repository?.issue?.url}
      onConfirm={onConfirm}
      error={error}
    />
  );
}
