import {useState} from 'react';

import {PageInfo} from 'src/generated/graphql-github';

export const useGithubPagination = (
  pageInfo?: PageInfo,
  updateCursorFunc?: (cursor: string | undefined) => void,
) => {
  const [cursorHistory, setCursorHistory] = useState<string[]>([]);

  const {startCursor} = pageInfo || {};
  const {endCursor} = pageInfo || {};

  const onPrevPage = () => {
    if (startCursor) {
      if (cursorHistory.length > 1) {
        updateCursorFunc?.(cursorHistory.reverse()[0]);
      } else {
        updateCursorFunc?.(undefined);
        setCursorHistory([]);
      }
    }
  };

  const onNextPage = () => {
    if (endCursor && startCursor) {
      setCursorHistory(pr => [...pr, startCursor]);
      updateCursorFunc?.(endCursor);
    }
  };

  return {onPrevPage, onNextPage};
};
