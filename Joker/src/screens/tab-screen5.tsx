import React from 'react';

import {useQuery} from '@apollo/client';
import {Button, Text, View} from 'react-native';

import {USER_INFO_QUERY} from 'src/graphql/user-info.graphql';

export function TabScreen5() {
  const {data, refetch} = useQuery(USER_INFO_QUERY);

  const onPressRefresh = () => {
    refetch();
  };

  return (
    <View>
      <Text>Request tests</Text>
      <Button onPress={onPressRefresh} title="Refresh" />
      <Text>{JSON.stringify(data)}</Text>
    </View>
  );
}
