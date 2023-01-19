import React, {useMemo} from 'react';

import {Theme, useTheme} from '@react-navigation/native';
// @ts-ignore
import blockEmbedPlugin from 'markdown-it-block-embed';
import {StyleProp, StyleSheet, TextStyle} from 'react-native';
import {RenderRules} from 'react-native-markdown-display';
import {MarkdownIt} from 'react-native-markdown-display';
import {ms, mvs, s, vs} from 'react-native-size-matters';

import {Img} from 'src/components/ui';

const markdownItInstance = MarkdownIt({typographer: true, breaks: true}).use(
  blockEmbedPlugin,
  {
    containerClassName: 'video-embed',
  },
);

const factor = 0.3;
const bodyText = {
  fontSize: ms(14, factor),
  fontFamily: 'Montserrat',
  lineHeight: ms(22, factor),
};

export const useMarkdownProps = (
  YouTubeContainerWidthCoefficient?: number,
  ImageWidthCoefficient?: number,
) => {
  const theme = useTheme();
  const props = useMemo(
    () =>
      getMarkdownStyle(
        theme,
        YouTubeContainerWidthCoefficient,
        ImageWidthCoefficient,
      ),
    [theme, YouTubeContainerWidthCoefficient],
  );
  return {...props, markdownit: markdownItInstance};
};

export const getMarkdownStyle = (
  theme: Theme,
  YTwPercent?: number,
  IMGwPercent?: number,
) => {
  const {
    colors: {text, border, primary, card, background},
  } = theme;
  const paragraph: StyleProp<TextStyle> = {
    flexWrap: 'wrap',
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    width: '100%',
    ...bodyText,
    color: text,

    letterSpacing: ms(0.2, factor),
  };
  const style = StyleSheet.create({
    body: {},
    // Headings
    heading1: {
      flexDirection: 'row',
      fontFamily: 'Montserrat',
      fontSize: ms(28, factor),
      marginTop: vs(10),
      marginBottom: vs(10),
      alignSelf: 'center',
      color: text,
    },
    heading2: {
      flexDirection: 'row',
      fontFamily: 'Montserrat',
      color: text,
      fontSize: ms(22, factor),
      marginTop: vs(8),
      marginBottom: vs(8),
      marginLeft: ms(8, factor),
    },
    heading3: {
      flexDirection: 'row',
      fontFamily: 'Montserrat',
      color: text,
      fontSize: ms(20, factor),
      marginTop: vs(6),
      marginBottom: vs(6),
      marginLeft: ms(8, factor),
    },
    heading4: {
      flexDirection: 'row',
      fontFamily: 'Montserrat',
      color: text,
      fontSize: ms(18, factor),
      marginTop: vs(6),
      marginBottom: vs(4),
      marginLeft: ms(8, factor),
    },
    heading5: {
      flexDirection: 'row',
      fontFamily: 'Montserrat',
      color: text,
      fontSize: ms(16, factor),
      marginTop: vs(4),
      marginBottom: vs(2),
      marginLeft: ms(8, factor),
    },
    heading6: {
      flexDirection: 'row',
      fontFamily: 'Montserrat',
      color: text,
      fontSize: ms(14, factor),
      marginTop: vs(4),
      marginLeft: ms(8, factor),
    },

    // Text Output
    text: {},
    textgroup: {},
    paragraph: {
      ...paragraph,
    },
    hardbreak: {},
    softbreak: {},

    // Emphasis
    strong: {
      fontFamily: 'Montserrat',
    },
    em: {
      fontFamily: 'Montserrat',
      fontStyle: 'italic',
    },
    // не знаю что это
    s: {
      textDecorationLine: 'line-through',
    },
    // Links
    link: {
      textDecorationLine: 'underline',
      color: primary,
      fontFamily: 'Montserrat',
    },
    blocklink: {
      flex: 1,
      borderColor: border,
      borderBottomWidth: 1,
    },
    // Blockquotes
    blockquote: {
      backgroundColor: background,
      borderColor: border,
      borderLeftWidth: s(1),
      paddingLeft: ms(10, factor),
      paddingBottom: vs(4),
    },
    // Code
    code_inline: {
      // `code`
      backgroundColor: card,
    },
    code_block: {
      backgroundColor: card,
      paddingVertical: s(10),
      paddingHorizontal: s(5),
      borderRadius: s(5),
    },
    fence: {
      // ```code```
      backgroundColor: card,
      paddingVertical: s(10),
      paddingHorizontal: s(5),
      borderRadius: s(10),
    },
    list_item: {
      ...paragraph,
      flexDirection: 'row',
      justifyContent: 'flex-start',
      marginBottom: mvs(10, factor),
    },
    // Images
    image: {},
    // Tables
    table: {
      borderWidth: 0,
      borderColor: border,
      borderRadius: s(5),
    },
    thead: {
      color: text,
      fontFamily: 'Montserrat',
      fontSize: ms(15, factor),
      flex: 1,
      borderColor: border,
      borderTopWidth: s(1),
    },
    tbody: {
      color: text,
      ...bodyText,
    },
    th: {
      borderRightWidth: s(1),
      borderColor: border,
      flex: 1,
      padding: s(5),
    },
    tr: {
      borderLeftWidth: s(1),
      borderColor: border,
      flexDirection: 'row',
    },
    td: {
      borderRightWidth: s(1),
      borderColor: border,
      flex: 1,
      padding: s(5),
    },
  });
  const rules: RenderRules = {
    // video: (node, children, parent, styles) => {
    //   const {videoID, serviceName} = (node as any).sourceInfo;
    //   switch (serviceName) {
    //     case 'youtube':
    //       return (
    //         <YouTubePlayer
    //           widthCoefficient={YTwPercent}
    //           key={node.key}
    //           videoId={videoID}
    //         />
    //       );
    //     default:
    //       return <></>;
    //   }
    // },
    image: node => {
      const {src} = node.attributes;
      return <Img widthCoefficient={IMGwPercent} key={node.key} uri={src} />;
    },
    // fence: a => {
    //   // console.log('fence:', a)
    //   // @ts-expect-error
    //   return <CodeHighlighter key={nanoid()} type={a.sourceInfo} codeText={a.content} />
    // },
    // code_inline: a => {
    //   // console.log('code_inline:', a)
    //   return <CodeHighlighter key={nanoid()} type={'js'} codeText={a.content} />
    // }
  };
  return {
    style,
    rules,
  };
};
