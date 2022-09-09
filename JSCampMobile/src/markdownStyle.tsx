import React from 'react'
import { Theme } from '@react-navigation/native'
import { Image, ScrollView, StyleProp, StyleSheet, TextStyle, View } from 'react-native'
import { RenderRules } from 'react-native-markdown-display'
import { s, vs, ms, mvs } from 'react-native-size-matters'
import { CodeHighlighter, Text } from './components'
import { secondary, W } from './constants'
import { nanoid } from 'nanoid/non-secure'

const factor = 0.3
const bodyText = {
  fontSize: ms(14, factor),
  fontFamily: 'Spectral-Medium',
  lineHeight: ms(22, factor)
}

export const getMarkdownStyle = (theme: Theme) => {
  const {
    colors: { text, border, primary, notification, background, card }
  } = theme
  const paragraph: StyleProp<TextStyle> = {
    flexWrap: 'wrap',
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    width: '100%',
    ...bodyText,
    color: border,
    letterSpacing: ms(0.2, factor)
  }
  const styles = StyleSheet.create({
    body: {},
    // Headings
    heading1: {
      flexDirection: 'row',
      fontFamily: 'Spectral-Bold',
      fontSize: ms(28, factor),
      marginTop: vs(10),
      marginBottom: vs(10),
      alignSelf: 'center',
      color: text
    },
    heading2: {
      flexDirection: 'row',
      fontFamily: 'Spectral-Bold',
      color: text,
      fontSize: ms(26, factor),
      marginTop: vs(8),
      marginBottom: vs(8),
      marginLeft: ms(8, factor)
    },
    heading3: {
      flexDirection: 'row',
      fontFamily: 'Spectral-Bold',
      color: text,
      fontSize: ms(24, factor),
      marginTop: vs(6),
      marginBottom: vs(6),
      marginLeft: ms(8, factor)
    },
    heading4: {
      flexDirection: 'row',
      fontFamily: 'Spectral-Bold',
      color: text,
      fontSize: ms(22, factor),
      marginTop: vs(6),
      marginBottom: vs(4),
      marginLeft: ms(8, factor)
    },
    heading5: {
      flexDirection: 'row',
      fontFamily: 'Spectral-Bold',
      color: text,
      fontSize: ms(20, factor),
      marginTop: vs(4),
      marginBottom: vs(2),
      marginLeft: ms(8, factor)
    },
    heading6: {
      flexDirection: 'row',
      fontFamily: 'Spectral-Bold',
      color: text,
      fontSize: ms(18, factor),
      marginTop: vs(4),
      marginLeft: ms(8, factor)
    },

    // Text Output
    text: {},
    textgroup: {},
    paragraph: {
      ...paragraph,
      marginVertical: vs(6)
    },
    hardbreak: {
      width: '100%',
      height: 1
    },
    softbreak: {},

    // Emphasis
    strong: {
      fontFamily: 'Spectral-Bold'
    },
    em: {
      fontFamily: 'Spectral-MediumItalic'
    },
    s: {
      // не знаю что это
      textDecorationLine: 'line-through'
    },
    // Links
    link: {
      textDecorationLine: 'underline',
      color: primary,
      fontFamily: 'Spectral-Bold'
    },
    blocklink: {
      flex: 1,
      borderColor: '#000000',
      borderBottomWidth: 1
    },
    // Blockquotes
    blockquote: {
      backgroundColor: 'rgba(139, 139, 139, 0.1)',
      borderColor: secondary,
      borderLeftWidth: s(1),
      paddingLeft: ms(10, factor),
      paddingBottom: vs(4)
    },
    // Code
    code_inline: {
      // `code`
      backgroundColor: card
    },
    code_block: {
      backgroundColor: card,
      paddingVertical: s(10),
      paddingHorizontal: s(5),
      borderRadius: s(5)
    },
    fence: {
      // ```code```
      backgroundColor: card,
      paddingVertical: s(10),
      paddingHorizontal: s(5),
      borderRadius: s(10)
    },
    list_item: {
      ...paragraph,
      flexDirection: 'row',
      justifyContent: 'flex-start',
      marginBottom: mvs(10, factor)
    },
    // Images
    image: {
      flex: 1,
      borderRadius: s(12),
      overflow: 'hidden',
      marginBottom: mvs(20, factor)
    },
    // Tables
    table: {
      borderWidth: 0,
      borderColor: border,
      borderRadius: s(5)
    },
    thead: {
      color: text,
      fontFamily: 'Spectral-Bold',
      fontSize: ms(15, factor),
      flex: 1,
      borderColor: border,
      borderTopWidth: s(1)
    },
    tbody: {
      color: text,
      ...bodyText
    },
    th: {
      borderRightWidth: s(1),
      borderColor: border,
      flex: 1,
      padding: s(5)
    },
    tr: {
      borderLeftWidth: s(1),
      borderColor: border,
      flexDirection: 'row'
    },
    td: {
      borderRightWidth: s(1),
      borderColor: border,
      flex: 1,
      padding: s(5)
    }
  })
  const rules: RenderRules = {
    fence: a => {
      // console.log('fence:', a)
      // @ts-expect-error
      return <CodeHighlighter key={nanoid()} type={a.sourceInfo} codeText={a.content} />
    },
    code_inline: a => {
      // console.log('code_inline:', a)
      return <CodeHighlighter key={nanoid()} type={'js'} codeText={a.content} />
    }
  }
  return {
    styles,
    rules
  }
}

const markdownStyle = StyleSheet.create({
  body: {},

  // Horizontal Rule
  hr: {
    backgroundColor: '#000000',
    height: 1
  },

  // Lists
  bullet_list: {},
  ordered_list: {},
  list_item: {
    flexDirection: 'row',
    justifyContent: 'flex-start'
  },
  // @pseudo class, does not have a unique render rule
  bullet_list_icon: {
    marginLeft: s(5),
    marginRight: s(8),
    color: 'blue',
    fontSize: s(20)
  },
  // @pseudo class, does not have a unique render rule
  bullet_list_content: {
    flex: 1
  },
  // @pseudo class, does not have a unique render rule
  ordered_list_icon: {
    marginLeft: 10,
    marginRight: 10
  },
  // @pseudo class, does not have a unique render rule
  ordered_list_content: {
    flex: 1
  },

  // Code

  // Links
  link: {
    textDecorationLine: 'underline'
  },
  blocklink: {
    flex: 1,
    borderColor: '#000000',
    borderBottomWidth: 1
  },
  hardbreak: {
    width: '100%',
    height: 1
  },
  softbreak: {},

  // Believe these are never used but retained for completeness
  pre: {},
  inline: {},
  span: {}
})
