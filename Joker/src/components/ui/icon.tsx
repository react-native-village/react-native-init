import React, {useMemo} from 'react';

import {Image, ImageStyle, StyleProp, StyleSheet} from 'react-native';

import {useTheme} from 'src/hooks';
import {Color} from 'src/themeTypes';

export enum IconsName {
  address_book = 'address_book',
  arrow_back = 'arrow_back',
  arrow_forward_small = 'arrow_forward_small',
  arrow_forward = 'arrow_forward',
  arrow_receive = 'arrow_receive',
  arrow_send = 'arrow_send',
  block = 'block',
  brush = 'brush',
  check = 'check',
  circle_clear = 'circle_clear',
  circle_pattern = 'circle_pattern',
  clear = 'clear',
  close_circle = 'close_circle',
  close = 'close',
  color_flat = 'color_flat',
  color_gradient = 'color_gradient',
  copy = 'copy',
  doc = 'doc',
  deposit = 'deposit',
  flash = 'flash',
  flashlight = 'flashlight',
  global = 'global',
  governance = 'governance',
  help = 'help',
  image = 'image',
  instagram = 'instagram',
  invoice = 'invoice',
  islm = 'islm',
  language = 'language',
  list = 'list',
  lock = 'lock',
  market = 'market',
  no_proposal_voting = 'no_proposal_voting',
  paste = 'paste',
  pen = 'pen',
  ledger = 'ledger',
  logo = 'logo',
  plus_big = 'plus_big',
  plus_mid = 'plus_mid',
  providers = 'providers',
  qr_code = 'qr_code',
  qr_scanner = 'qr_scanner',
  romb_pattern = 'romb_pattern',
  search = 'search',
  servers = 'servers',
  settings = 'settings',
  shield = 'shield',
  staking = 'staking',
  star = 'star',
  swap = 'swap',
  time = 'time',
  timer_governance = 'timer_governance',
  timer = 'timer',
  trash = 'trash',
  twitter = 'twitter',
  up = 'up',
  user = 'user',
  wallet = 'wallet',
  warning = 'warning',
  discord = 'discord',
}

export type IconSize =
  | {i12: boolean}
  | {i16: boolean}
  | {i18: boolean}
  | {i22: boolean}
  | {i24: boolean}
  | {i32: boolean}
  | {i42: boolean}
  | {i72: boolean}
  | {i80: boolean}
  | {i120: boolean}
  | {};

export type IconProps = {
  name: IconsName | keyof typeof IconsName;
  color: Color;
  style?: StyleProp<ImageStyle>;
} & IconSize;

export function Icon({name, style, color, ...props}: IconProps) {
  const {colors} = useTheme();
  const container = useMemo(
    () =>
      StyleSheet.flatten([
        styles.i24Container,
        'i12' in props && styles.i12Container,
        'i16' in props && styles.i16Container,
        'i18' in props && styles.i18Container,
        'i22' in props && styles.i22Container,
        'i24' in props && styles.i24Container,
        'i32' in props && styles.i32Container,
        'i42' in props && styles.i42Container,
        'i72' in props && styles.i72Container,
        'i80' in props && styles.i80Container,
        'i120' in props && styles.i120Container,
        style,
        {tintColor: colors[color]},
      ]),
    [color, props, style],
  );
  const icon = useMemo(() => ({uri: name}), [name]);
  return <Image source={icon} style={container} />;
}

const styles = StyleSheet.create({
  i120Container: {
    width: 120,
    height: 120,
  },
  i80Container: {
    width: 80,
    height: 80,
  },
  i72Container: {
    width: 72,
    height: 72,
  },
  i42Container: {
    width: 42,
    height: 42,
  },
  i32Container: {
    width: 32,
    height: 32,
  },
  i24Container: {
    width: 24,
    height: 24,
  },
  i22Container: {
    width: 22,
    height: 22,
  },
  i18Container: {
    width: 18,
    height: 18,
  },
  i16Container: {
    width: 16,
    height: 16,
  },
  i12Container: {
    width: 12,
    height: 12,
  },
});
