import React, { useEffect, useState } from 'react'
import { ExamIndicator, LessonCard, Loading, ScrollContainer } from '../../../components'
import {
  en_color,
  en_gradient,
  fetchJson,
  handleError,
  handlePressCard
} from '../../../constants'
import { EnScreenT } from './type'
import { LessonData } from '../../../types/LessonTypes'
import { useColorScheme } from 'react-native'
import { changeCourseLength } from '../../../slices'
import { useTypedDispatch } from '../../../store'

export function EnScreen({ navigation, route }: EnScreenT) {
  const [data, setData] = useState([])
  const [examData, setExamData] = useState([])
  const [load, setLoad] = useState(true)
  const isDark = useColorScheme() === 'dark'
  const dispatch = useTypedDispatch()
  useEffect(() => {
    if (data.length > 0) {
      dispatch(changeCourseLength({ part: 'en', length: data.length }))
    }
  }, [data])
  const fetchData = async () => {
    setLoad(true)
    const res = await fetchJson(
      'https://s3.eu-central-1.wasabisys.com/jscamp/EnForKids/Main.json'
    )
    const resExam = await fetchJson(
      'https://s3.eu-central-1.wasabisys.com/jscamp/EnForKids/examData/examEn.json'
    )
    setData(res)
    setExamData(resExam)
    setLoad(false)
  }
  useEffect(() => {
    fetchData()
  }, [])

  return load ? (
    <Loading color={en_color} />
  ) : (
    <ScrollContainer bgColor={!isDark ? en_color : undefined}>
      {/* @ts-ignore */}
      <ExamIndicator questions={examData} part="en" />
      {/* @ts-ignore */}
      {data.map((item: LessonData) => {
        return (
          <LessonCard
            border={!isDark}
            part="en"
            id={item.id}
            key={item.id}
            onPress={() => handlePressCard('en', item.sections, item.cardTitle, item.id)}
            gradient={{ top: en_gradient, bottom: en_color }}
            cardImage={item.cardImage}
            title={item.cardTitle}
          />
        )
      })}
    </ScrollContainer>
  )
}
