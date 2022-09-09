import { useTheme } from '@react-navigation/native'
import React, { useEffect, useState } from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'
import Markdown from 'react-native-markdown-display'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { ms, s, vs } from 'react-native-size-matters'
import { useDispatch } from 'react-redux'
import { Button, LoadFailed, Loading, Space } from '../../../../components'
import { fetchText, white } from '../../../../constants'
import { getMarkdownStyle } from '../../../../markdownStyle'
import { goPrevious, incrementSection } from '../../../../slices'
import { useTypedSelector } from '../../../../store'

export function MarkdownScreen() {
  const { lessonData, currentLesson, sectionIndex } = useTypedSelector(st => st.section)
  const [markdown, setMarkdown] = useState('')
  const [loading, setLoading] = useState(true)
  const theme = useTheme()
  const dispatch = useDispatch()
  const { top, bottom } = useSafeAreaInsets()
  const { rules, styles } = getMarkdownStyle(theme)
  if (!currentLesson) return null
  const { contentUrl } = currentLesson
  const fetchMD = async () => {
    if (contentUrl) {
      setLoading(true)
      const res = await fetchText(contentUrl)
      setMarkdown(res)
      setLoading(false)
    }
  }
  useEffect(() => {
    fetchMD()
  }, [])
  const handleBack = () => {
    dispatch(goPrevious())
  }
  const handleNext = () => {
    dispatch(incrementSection())
  }
  if (!loading && markdown === '') return <LoadFailed />
  if (loading) return <Loading color={white} />
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={container}>
      <Space height={top} />
      <Markdown style={styles} rules={rules}>
        {markdown}
      </Markdown>
      <Space height={vs(20)} />
      <View style={btnContainer}>
        <Button onPress={handleBack} title="Назад" />
        <Space width={s(10)} />
        <Button onPress={handleNext} title="Далее" />
      </View>
      <Space height={bottom + vs(30)} />
    </ScrollView>
  )
}

const style = StyleSheet.create({
  container: {
    paddingHorizontal: ms(10, 0.25)
  },
  btnContainer: {
    flexDirection: 'row'
  }
})
const { container, btnContainer } = style
