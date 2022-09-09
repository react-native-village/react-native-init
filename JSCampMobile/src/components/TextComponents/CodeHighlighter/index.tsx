import React, { useEffect, useState } from 'react'
import SyntaxHighlighter from 'react-native-syntax-highlighter'
import { dark, tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { StyleSheet, useColorScheme, View } from 'react-native'
import { s, vs } from 'react-native-size-matters'
import { Space } from '../../Space'
import Clipboard from '@react-native-clipboard/clipboard'
import { ButtonVectorIcon } from '../../'
import { green } from '../../../constants'

interface CodeHighlighterT {
  type?: string
  codeText: string
}

export function CodeHighlighter({ type = 'jsx', codeText }: CodeHighlighterT) {
  const [isCopy, setIsCopy] = useState<boolean>(false)

  useEffect(() => {
    if (isCopy === true) {
      setTimeout(() => setIsCopy(false), 2000)
    }
  }, [isCopy])

  const isDark = useColorScheme() === 'dark'
  const lines = codeText.trim().split(/\r?\n/)
  const lastIndex = lines.length - 1
  const TextWithPadding = lines.reduce((pr, cur, id) => {
    const isEnd = lastIndex === id
    const suffix = isEnd ? '        ' : '        \n'
    return pr + cur + suffix
  }, '')

  const handleCopy = () => {
    Clipboard.setString(codeText)
    setIsCopy(true)
  }

  return (
    <View>
      <SyntaxHighlighter
        fontFamily={'Hack-Regular'}
        highlighter={'prism'}
        fontSize={s(13)}
        style={isDark ? tomorrow : undefined}
        language={'jsx'}
        customStyle={highlighter}
      >
        {TextWithPadding}
      </SyntaxHighlighter>
      <ButtonVectorIcon
        onPress={handleCopy}
        size={s(22)}
        color={isCopy ? green : undefined}
        viewStyle={btnStyle}
        name={isCopy ? 'check' : 'content-copy'}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  highlighter: {
    borderRadius: s(5),
    paddingVertical: s(10),
    paddingRight: 0,
    paddingLeft: s(10)
  },
  btnStyle: {
    position: 'absolute',
    right: s(13),
    top: s(13)
  }
})
const { highlighter, btnStyle } = styles
