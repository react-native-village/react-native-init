import React from 'react';

import {HomeTaskExplorer} from 'src/components/HomeTaskExplorer';
import {useTypedNavigation} from 'src/hooks';

export function HomeTaskExplorerScreen() {
  const {navigate} = useTypedNavigation();
  const onCreateTask = () => {
    navigate('createTaskRepoSelect');
  };

  return <HomeTaskExplorer onCreateTask={onCreateTask} />;
}
