import React from 'react'
import { StyleSheet, useColorScheme, View } from 'react-native'
import { ComingSoon, LessonCard, ScrollContainer } from '../../../components'
import { black, handlePressCard, rn_color, rn_gradient } from '../../../constants'
import { LessonData } from '../../../types/LessonTypes'
import { RnScreenT } from './type'
import data from '../../../LocalData/Rn/Main.json'

export function RnScreen({ navigation, route }: RnScreenT) {
  const isDark = useColorScheme() === 'dark'
  return (
    <ScrollContainer bgColor={!isDark ? rn_color : undefined}>
      {/* @ts-ignore */}
      {data.map((item: LessonData) => {
        return (
          <LessonCard
            border={!isDark}
            part="rn"
            id={item.id}
            key={item.id}
            onPress={() => handlePressCard('rn', item.sections, item.cardTitle, item.id)}
            gradient={{ top: rn_gradient, bottom: rn_color }}
            cardImage={item.cardImage}
            title={item.cardTitle}
          />
        )
      })}
    </ScrollContainer>
  )
}

const styles = StyleSheet.create({})

const {} = styles
