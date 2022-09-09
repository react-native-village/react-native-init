import { nanoid } from 'nanoid/non-secure'
import React from 'react'
import { FlatList, useColorScheme, View } from 'react-native'
import { ComingSoon, LessonCard, ScrollContainer, Space } from '../../../components'
import { ts_color, ts_gradient } from '../../../constants'
import { LessonData } from '../../../types/LessonTypes'
import { TsScreenT } from './type'

export function TsScreen({ navigation, route }: TsScreenT) {
  const isDark = useColorScheme() === 'dark'
  return (
    <ComingSoon bg="ts" />
    // <ScrollContainer bgColor={!isDark ? ts_color : undefined}>
    //   {/* <FlatList
    //     data={data}
    //     ListHeaderComponent={() => <Space height={vs(20)} />}
    //     renderItem={({ item }) => (
    //       <LessonCard
    //         onPress={() => handlePressCard(item)}
    //         gradient={{ top: ts_gradient, bottom: ts_color }}
    //         leftIcon="language-typescript"
    //         title={item.cardTitle}
    //         lightText
    //       />
    //     )}
    //     keyExtractor={() => nanoid()}
    //   /> */}
    // </ScrollContainer>
  )
}
