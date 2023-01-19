import React from 'react';

import {ApolloError} from '@apollo/client';
import {Linking} from 'react-native';
import Markdown from 'react-native-markdown-display';

import {Button, ButtonVariant, Text} from 'src/components/ui';
import {IssueQuery} from 'src/generated/graphql-github';
import {useMarkdownProps} from 'src/hooks';

interface CreateTaskConfirmationProps {
  repoName: string;
  owner: string;
  link: string;
  estimatedGasPrice: number;
  issue?: NonNullable<IssueQuery['repository']>['issue'];
  onConfirm: () => void;
  error: ApolloError | undefined;
}

export function CreateTaskConfirmation({
  repoName,
  owner,
  link,
  estimatedGasPrice,
  onConfirm,
  issue,
  error,
}: CreateTaskConfirmationProps) {
  const onPressLink = () => {
    Linking.openURL(link);
  };
  const mdProps = useMarkdownProps(0.94, 0.94);

  if (error) {
    return <Text>{error.message}</Text>;
  }

  return (
    <>
      <Text t4>{owner + '/' + repoName}</Text>
      <Button title="View in github" onPress={onPressLink} />
      <Text t4>Estimated gas price: {estimatedGasPrice}</Text>
      <Button
        title="Confirm"
        variant={ButtonVariant.contained}
        onPress={onConfirm}
      />
      <Text t7>Task description</Text>
      <Markdown {...mdProps}>{issue?.body}</Markdown>
    </>
  );
}
