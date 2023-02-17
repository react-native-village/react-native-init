import React from 'react';

import {SafeAreaView} from 'react-native-safe-area-context';

import {Background, TicketCardColumn} from 'src/components/ui';

export function HomeMarket() {
  return (
    <Background>
      <SafeAreaView>
        <TicketCardColumn {...item1Sample} />
      </SafeAreaView>
    </Background>
  );
}

const item1Sample = {
  id: '1',
  name: 'Groovy Tunes',
  tags: ['Rock', 'Funny'],
  startData: 1698231832274,
  endData: 1700231832274,
  geoPosition: 'Retro Mountain',
  imageUrl:
    'https://d1629ugb7moz2f.cloudfront.net/e/21162/cFPvQBjmRmwyo1PA0VR4hO572mDold5r664eQISO.jpg',
};
