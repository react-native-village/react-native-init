import * as React from 'react';
import {useCallback, useMemo} from 'react';

import {StyleSheet, TouchableOpacity, ViewProps} from 'react-native';

export type IconButtonProps = ViewProps & {
  onPress: () => void | Promise<void>;
  disabled?: boolean;
};

export function IconButton({
  style,
  children,
  disabled,
  onPress,
  ...props
}: IconButtonProps) {
  const containerStyle = useMemo(
    () => [page.container, style, disabled && page.disabled],
    [style, disabled],
  );

  const onPressButton = useCallback(() => {
    if (!disabled) {
      onPress();
    }
  }, [disabled, onPress]);

  return (
    <TouchableOpacity style={containerStyle} {...props} onPress={onPressButton}>
      {children}
    </TouchableOpacity>
  );
}

const page = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  disabled: {
    opacity: 0.5,
  },
});
