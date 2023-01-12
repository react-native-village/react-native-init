import React, {useEffect, useState} from 'react';

import {Text} from 'react-native';

export function HomeSettingsScreen() {
  const [moralisResult, setMoralisResult] = useState<any>({});
  useEffect(() => {
    fetch('http://localhost:3000/demo').then(async data => {
      setMoralisResult(await data.json());
    });
  });
  return (
    <>
      <Text>Moralis result from localhost:3000:</Text>
      <Text>{JSON.stringify(moralisResult)}</Text>
    </>
  );
}
