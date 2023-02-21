import React from 'react';

import {View} from 'react-native';

interface SeparatorProps {
  margin?: number;
}

export function Separator({margin = 10}: SeparatorProps) {
  return <View style={{margin: margin}} />;
}
