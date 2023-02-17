import React from 'react';

import {TicketSmall} from 'src/components/ticket';
import {Background, Spacer} from 'src/components/ui';

export function TicketsScreen() {
  return (
    <Background>
      <Spacer height={90} />
      <TicketSmall />
    </Background>
  );
}
