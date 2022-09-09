import React, { useEffect, useState } from 'react'
import { StyleSheet, useColorScheme } from 'react-native'
import { ExamIndicator, LessonCard, Loading, ScrollContainer } from '../../../components'
import {
  fetchJson,
  handleError,
  handlePressCard,
  js_color,
  js_gradient
} from '../../../constants'
import { LessonData } from '../../../types/LessonTypes'
import { JsScreenT } from './type'
import { changeCourseLength } from '../../../slices'
import { useTypedDispatch } from '../../../store'
//import data from '../../../LocalData/Js/Main.json'

export function JsScreen({ navigation, route }: JsScreenT) {
  const [load, setLoad] = useState(true)
  const dispatch = useTypedDispatch()

  const [data, setData] = useState([])
  const fetchData = async () => {
    try {
      setLoad(true)
      const res = await fetchJson(
        'https://s3.eu-central-1.wasabisys.com/jscamp/JSForKids/Main.json'
      )
      setData(res)
      setLoad(false)
    } catch (error) {
      handleError(error)
    }
  }
  useEffect(() => {
    fetchData()
  }, [])

  useEffect(() => {
    if (data.length > 0) {
      dispatch(changeCourseLength({ part: 'js', length: data.length }))
    }
  }, [data])

  const isDark = useColorScheme() === 'dark'
  return load ? (
    <Loading color={js_color} />
  ) : (
    <ScrollContainer bgColor={!isDark ? js_color : undefined}>
      {/* <ExamIndicator part="js" /> */}
      {/* @ts-ignore */}
      {data.map((item: LessonData) => {
        return (
          <LessonCard
            part="js"
            id={item.id}
            border={!isDark}
            key={item.id}
            onPress={() => handlePressCard('js', item.sections, item.cardTitle, item.id)}
            gradient={{ top: js_gradient, bottom: js_color }}
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
