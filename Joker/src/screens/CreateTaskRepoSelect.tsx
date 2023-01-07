import React, {useState} from 'react';

import {CreateTaskRepoSelect} from 'src/components/CreateTaskRepoSelect';
import {Waiting} from 'src/components/lottie';
import {useUserReposQuery} from 'src/generated/graphql-github';

export function CreateTaskRepoSelectScreen() {
  const [cursor, setCursor] = useState<string>();
  const [cursorHistory, setCursorHistory] = useState<string[]>([]);

  const {error, data, loading} = useUserReposQuery({
    variables: {
      countToShow: 10,
      cursor,
    },
  });
  const {startCursor} = data?.viewer.repositories.pageInfo || {};
  const {endCursor} = data?.viewer.repositories.pageInfo || {};

  const onPrevPage = () => {
    if (startCursor) {
      if (cursorHistory.length > 1) {
        setCursor(cursorHistory.reverse()[0]);
      } else {
        setCursor(undefined);
        setCursorHistory([]);
      }
    }
  };

  const onNextPage = () => {
    if (endCursor && startCursor) {
      setCursorHistory(pr => [...pr, startCursor]);
      setCursor(endCursor);
    }
  };

  if (loading) {
    return <Waiting />;
  }

  return (
    <CreateTaskRepoSelect
      onNextPage={onNextPage}
      onPrevPage={onPrevPage}
      pageInfo={data?.viewer.repositories.pageInfo}
      repos={data?.viewer.repositories.nodes}
      error={error}
    />
  );
}
