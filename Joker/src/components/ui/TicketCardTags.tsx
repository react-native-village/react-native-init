import React from 'react';

import {TicketInfo} from 'src/types';

interface TicketCardTagsProps {
  tags: TicketInfo['tags'];
}

export function TicketCardTags({tags}: TicketCardTagsProps) {
  return (
    <>
      {tags.map((tag, id) => {
        if (id === 1) {
          return <Tag key={tag} name={`+${tags.length - 1}`} />;
        } else if (id > 1) {
          return <React.Fragment key={tag} />;
        } else {
          return <Tag key={tag} name={tag} />;
        }
      })}
    </>
  );
}
