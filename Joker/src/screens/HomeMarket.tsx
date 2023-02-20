import React from 'react';

import {HomeMarket} from 'src/components/HomeMarket';
import {useTypedNavigation} from 'src/hooks';
import {TicketInfo} from 'src/types';

export function HomeMarketScreen() {
  const {navigate} = useTypedNavigation();

  const onPressCard = (item: TicketInfo) => {
    navigate('ticketDetail', item);
  };

  return <HomeMarket onPressCard={onPressCard} />;
}
