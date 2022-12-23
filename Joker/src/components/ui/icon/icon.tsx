import React, {useMemo} from 'react';

import {Image, ImageStyle, StyleProp, StyleSheet} from 'react-native';

import {Color} from 'src/colors';

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
  color_flat = 'color_flat',
  color_gradient = 'color_gradient',
  copy = 'copy',
  doc = 'doc',
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
  | {i24: boolean}
  | {i32: boolean}
  | {i42: boolean}
  | {i72: boolean}
  | {i120: boolean}
  | {};

export type IconProps = {
  name: IconsName | keyof typeof IconsName;
  color: string | Color;
  style?: StyleProp<ImageStyle>;
} & IconSize;

export function Icon({name, style, color, ...props}: IconProps) {
  const container = useMemo(
    () =>
      StyleSheet.flatten([
        styles.i24Container,
        'i12' in props && styles.i12Container,
        'i16' in props && styles.i16Container,
        'i24' in props && styles.i24Container,
        'i32' in props && styles.i32Container,
        'i42' in props && styles.i42Container,
        'i72' in props && styles.i72Container,
        'i120' in props && styles.i120Container,
        style,
        {tintColor: color as Color},
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
  i16Container: {
    width: 16,
    height: 16,
  },
  i12Container: {
    width: 12,
    height: 12,
  },
});
