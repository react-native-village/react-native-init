import React from 'react'
import { TextInput, StyleSheet, StyleProp, View, ViewStyle } from 'react-native'
import { s, ScaledSheet, vs } from 'react-native-size-matters'
import { W } from '../../constants'
import { useController, useFormContext } from 'react-hook-form'
import { TextInputProps as RNTextInputProps } from 'react-native'
import { UseControllerProps } from 'react-hook-form'
import { useTheme } from '@react-navigation/native'
import { TextError } from '../TextComponents'

export interface TextInputProps extends RNTextInputProps, UseControllerProps {
  type?: 'underline' | 'fullFill'
  defaultValue?: string
  additionalStyle?: StyleProp<ViewStyle>
  showError?: boolean
}

const Input: React.FC<TextInputProps> = ({
  name,
  type = 'fullFill',
  rules,
  defaultValue,
  additionalStyle,
  showError = true,
  style,
  onBlur,
  ...inputProps
}) => {
  const formContext = useFormContext()

  if (!formContext || !name) {
    const msg = !formContext
      ? 'TextInput должен быть обернут в FormProvider'
      : 'Имя должно быть определено(Input)'
    console.error(msg)
    return null
  }

  const { formState } = formContext
  const { field } = useController({ name, rules, defaultValue })
  const hasError = Boolean(formState?.errors[name])
  const {
    colors: { text, border, primary }
  } = useTheme()
  const inputStyle = StyleSheet.create([
    type === 'fullFill' ? (inputProps.multiline ? bigInput : smallInput) : underlineInput,
    {
      color: text,
      borderColor: hasError ? primary : border
    }
  ])

  return (
    <View style={additionalStyle}>
      <TextInput
        style={[style, inputStyle]}
        onChangeText={field.onChange}
        onBlur={e => {
          field.onBlur()
          onBlur && onBlur(e)
        }}
        ref={field.ref}
        value={field.value}
        {...inputProps}
      />
      {showError && (
        <>
          {hasError ? (
            <TextError title={formState.errors[name].message} />
          ) : (
            <TextError title=" " />
          )}
        </>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  errorStyle: {},
  smallInput: {
    fontSize: s(16),
    width: '95%',
    borderWidth: s(2),
    alignSelf: 'center'
  },
  bigInput: {
    fontSize: s(16),
    width: '95%',
    borderWidth: s(1.5),
    height: vs(120),
    textAlignVertical: 'top',
    paddingHorizontal: s(10),
    borderRadius: s(10)
  },
  underlineInput: {
    fontSize: s(16),
    width: '95%',
    borderBottomWidth: s(2),
    alignSelf: 'center'
  }
})
const { errorStyle, smallInput, bigInput, underlineInput } = styles

export { Input }
