import React from 'react';

import {Button, Text, View} from 'react-native';

import {useUser_Info_QueryQuery} from 'src/generated/graphql';

export function TabScreen5() {
  const {data, refetch, error, loading} = useUser_Info_QueryQuery();

  const onPressRefresh = () => {
    refetch();
  };

  return (
    <View>
      <Text>Request tests</Text>
      <Button onPress={onPressRefresh} title="Refresh" />
      <Text>{error ? 'Error...' : ''}</Text>
      <Text>{loading ? 'Loading...' : ''}</Text>
      <Text>{JSON.stringify(data)}</Text>
    </View>
  );
}
