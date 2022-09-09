import React from 'react'
import { View, StyleSheet, ScrollView } from 'react-native'
import { s, vs } from 'react-native-size-matters'
import Markdown from 'react-native-markdown-display'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { Space } from './components'
//import example from './TestData/example.md'
import { useTheme } from '@react-navigation/native'
import { getMarkdownStyle } from './markdownStyle'
const example = `
| Номер | Название | Цена |
| ----: | :------: | ---: |
|     1 |   шило   |   10 |
|     2 |   мыло   |   20 |
|     3 | веревка  |   40 |
![](https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/5eeea355389655.59822ff824b72.gif)
 `
export function UI() {
  const { top } = useSafeAreaInsets()
  const theme = useTheme()
  const mdStyle = getMarkdownStyle(theme)
  return (
    <ScrollView style={container}>
      <Space height={top} />
      <Markdown style={mdStyle.styles} rules={mdStyle.rules}>
        {example}
      </Markdown>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: s(5)
  }
})

const { container } = styles
