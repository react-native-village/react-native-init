import React from 'react';

import {Button, ScrollView} from 'react-native';

import {useTypedNavigation} from 'src/hooks';

export function TabScreen5() {
  const {navigate} = useTypedNavigation();
  const onPressCreateTaskScreen = () => {
    navigate('createTaskRepoSelect');
  };

  return (
    <ScrollView>
      <Button onPress={onPressCreateTaskScreen} title="Create task screens" />
    </ScrollView>
  );
}
