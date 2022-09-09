import React, { useState } from 'react'
import { FlatList, Pressable, StyleSheet, View } from 'react-native'
import { manySelectT } from '../../../types/LessonTypes'
import { Text, ButtonSubmit, Space } from '../../'
import { nanoid } from 'nanoid/non-secure'
import { s, vs } from 'react-native-size-matters'
import { useTheme } from '@react-navigation/native'
import { green, H } from '../../../constants'
import { SafeAreaView } from 'react-native-safe-area-context'

interface selMany extends manySelectT {
  onWin: () => void
}

export function SelectMany({ correctAnswers, questionText, variants, onWin }: selMany) {
  const [choices, setChoices] = useState<string[]>([])
  const handleSubmit = () => {
    const isEqual =
      correctAnswers.length === choices.length &&
      correctAnswers.every((element, index) => {
        return choices.includes(element)
      })
    return isEqual
  }

  const onChange = (changed: string) => {
    setChoices(pr => {
      const exist = pr.includes(changed)
      const res = exist ? pr.filter(a => a !== changed) : [...pr, changed]
      return res
    })
  }

  return (
    <SafeAreaView style={mainContainer}>
      <Text h5 title={questionText} centerText />
      <FlatList
        data={variants}
        showsVerticalScrollIndicator={false}
        style={{ maxHeight: H / 2.2 }}
        nestedScrollEnabled
        contentContainerStyle={btnsList}
        keyExtractor={() => nanoid()}
        ListFooterComponent={() => <Space height={vs(25)} />}
        renderItem={({ item }) => (
          <VariantButtons changedList={choices} item={item} onChange={onChange} />
        )}
      />
      <ButtonSubmit onSubmit={handleSubmit} onWin={onWin} />
    </SafeAreaView>
  )
}

interface VariantButtonsT {
  onChange: (changed: string) => void
  item: string
  changedList: string[]
}

function VariantButtons({ item, onChange, changedList }: VariantButtonsT) {
  const isSelected = changedList.includes(item)
  const {
    colors: { card, primary }
  } = useTheme()

  return (
    <Pressable
      onPress={() => {
        onChange(item)
      }}
      style={[btnContainer, { backgroundColor: isSelected ? primary : card }]}
    >
      <Text title={item.toString()} h5 />
    </Pressable>
  )
}

const styles = StyleSheet.create({
  btnContainer: {
    flexDirection: 'row',
    borderRadius: s(10),
    paddingVertical: vs(5),
    paddingHorizontal: s(15),
    marginVertical: vs(2.5)
  },
  btnsList: {
    paddingHorizontal: s(15)
  },
  mainContainer: {
    justifyContent: 'space-between',
    flex: 1,
    paddingTop: vs(15)
  }
})
const { btnContainer, btnsList, mainContainer } = styles
