import React, {memo, useCallback, useEffect, useRef, useState} from 'react';

import {
  LayoutChangeEvent,
  NativeSyntheticEvent,
  Pressable,
  StyleSheet,
  TextInput,
  TextInputContentSizeChangeEventData,
  TextInputFocusEventData,
  TextInputProps,
  View,
} from 'react-native';
import Animated, {
  Easing,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

import {Spacer, Text, TextProps} from 'src/components/ui';
import {useThematicStyles} from 'src/hooks';
import {Color} from 'src/themeTypes';
import {IS_IOS} from 'src/variables';

type Props = Omit<TextInputProps, 'placeholder'> & {
  label: string;
  placeholder: string;
  hint?: string | undefined;
  errorText?: TextProps['children'] | undefined;
  /* errorTextI18n?: TextProps['i18n'] | undefined; */
  error?: boolean;
  rightAction?: React.ReactNode;
  multiline?: boolean;
  lines?: number;
};

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

export const TextField: React.FC<Props> = memo(
  ({
    autoFocus = false,
    lines = 1,
    label,
    hint,
    error,
    errorText,
    value,
    style,
    onBlur,
    onFocus,
    placeholder,
    rightAction,
    multiline,
    ...restOfProps
  }) => {
    const {styles} = useThematicStyles(rawStyles);
    const [isFocused, setIsFocused] = useState(false);
    const inputRef = useRef<TextInput>(null);
    const left = useSharedValue(40);
    const height = useSharedValue(lines * 22 + 36);
    const focusAnim = useSharedValue(!value || autoFocus ? 0 : 1);

    const onLayout = useCallback(
      (e: LayoutChangeEvent) => {
        const l = e.nativeEvent.layout.width - 32;
        left.value = ((l * 1.33 - l) / 2) * 0.75;
      },
      [left],
    );

    const onLabel = useCallback(() => {
      if (inputRef.current) {
        inputRef.current.focus();
      }
    }, [inputRef]);

    const onBlurEvent = useCallback(
      (event: NativeSyntheticEvent<TextInputFocusEventData>) => {
        setIsFocused(false);
        onBlur?.(event);
      },
      [onBlur],
    );

    const onFocusEvent = useCallback(
      (event: NativeSyntheticEvent<TextInputFocusEventData>) => {
        setIsFocused(true);
        onFocus?.(event);
      },
      [onFocus],
    );

    const contentSizeChangeEvent = useCallback(
      (e: NativeSyntheticEvent<TextInputContentSizeChangeEventData>) => {
        height.value =
          Math.max(Math.ceil(e.nativeEvent.contentSize.height), lines * 22) +
          36;
      },
      [lines, height],
    );

    useEffect(() => {
      focusAnim.value = withTiming(isFocused || !!value ? 0 : 1, {
        duration: 150,
        easing: Easing.bezier(0.4, 0, 0.2, 1),
      });
    }, [value, focusAnim, isFocused]);

    let textColor = error ? Color.textRed1 : Color.textBase2;

    const labelAnimStyle = useAnimatedStyle(
      () => ({
        transform: [
          {
            scale: interpolate(focusAnim.value, [0, 1], [1, 1.33]),
          },
          {
            translateY: interpolate(focusAnim.value, [0, 1], [0, 10]),
          },
          {
            translateX: interpolate(focusAnim.value, [0, 1], [0, left.value]),
          },
        ],
      }),
      [left],
    );

    const inputAnimStyle = useAnimatedStyle(() => ({
      height: height.value,
    }));

    return (
      <View onLayout={onLayout} style={style}>
        <Animated.View
          style={[
            styles.container,
            error && styles.containerError,
            inputAnimStyle,
          ]}>
          <View style={styles.inputContainer}>
            <AnimatedPressable style={labelAnimStyle} onPress={onLabel}>
              <Text t14 color={textColor}>
                {label}
              </Text>
            </AnimatedPressable>
            {!value && isFocused && (
              <Text t11 color={Color.textBase2} style={styles.placeholder}>
                {placeholder}
              </Text>
            )}
            <TextInput
              selectionColor={Color.primary}
              allowFontScaling={false}
              style={styles.input}
              ref={inputRef}
              placeholderTextColor={Color.textBase2}
              {...restOfProps}
              value={value}
              multiline={multiline}
              onContentSizeChange={contentSizeChangeEvent}
              onBlur={onBlurEvent}
              onFocus={onFocusEvent}
              autoFocus={autoFocus}
            />
          </View>
          {rightAction && <View style={styles.sub}>{rightAction}</View>}
        </Animated.View>
        {!!error && errorText && (
          <>
            <Spacer height={8} />
            <Text t14 color={Color.textRed1} style={styles.error}>
              {errorText}
            </Text>
          </>
        )}
        {!error && hint && (
          <>
            <Spacer height={8} />
            <Text t14 style={styles.error}>
              hint
            </Text>
          </>
        )}
      </View>
    );
  },
);

const rawStyles = StyleSheet.create({
  container: {
    minHeight: 58,
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 16,
    backgroundColor: Color.bg8,
    flexDirection: 'row',
    flex: 0,
  },
  containerError: {
    backgroundColor: Color.bg7,
  },
  inputContainer: {
    flex: 1,
  },
  input: {
    fontFamily: 'SF Pro Display',
    fontWeight: '400',
    color: Color.textBase1,
    fontSize: 16,
    minHeight: 28,
    paddingTop: 0,
    paddingBottom: 0,
    textAlignVertical: 'center',
    right: IS_IOS ? 0 : 4.5,
    flex: 1,
  },
  error: {
    marginLeft: 4,
  },
  sub: {
    justifyContent: 'center',
    alignSelf: 'center',
  },
  placeholder: {
    position: 'absolute',
    height: 28,
    top: 18,
  },
});
