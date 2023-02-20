import React from 'react';

import {TicketDetail} from 'src/components/TicketDetail';
import {useTypedNavigation, useTypedRoute} from 'src/hooks';

export function TicketDetailScreen() {
  const item = useTypedRoute<'ticketDetail'>().params;
  const {goBack} = useTypedNavigation();
  return <TicketDetail onBack={goBack} {...item} />;
}
