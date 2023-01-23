import React from 'react';

import {useWalletConnect} from '@walletconnect/react-native-dapp';
import {utils} from 'ethers';

import {CreateTaskConfirmation} from 'src/components/CreateTaskConfirmation';
import {Waiting} from 'src/components/ui';
import {useIssueQuery} from 'src/generated/graphql-github';
import {useTypedNavigation, useTypedRoute} from 'src/hooks';
import {contracts} from 'src/services';

export function CreateTaskConfirmationScreen() {
  const {owner, issueNumber, repoName} =
    useTypedRoute<'createTaskConfirmation'>().params;
  const {navigate} = useTypedNavigation();
  const connector = useWalletConnect();

  const {error, data, loading} = useIssueQuery({
    variables: {
      owner,
      repoName,
      number: issueNumber,
    },
  });

  const onConfirm = async () => {
    const tx = await contracts.preparePrjTaskTx({
      ethers: '0.01',
      from: connector.accounts[0],
    });

    const signTx = await connector.signTransaction(tx);
    console.log('🚀 - signTx', signTx);

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
