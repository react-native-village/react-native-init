import React, { useEffect, useState } from 'react'
import { useColorScheme } from 'react-native'
import { LessonCard, Loading, ScrollContainer } from '../../../components'
import {
  aws_color,
  aws_gradient,
  fetchJson,
  handleError,
  handlePressCard
} from '../../../constants'
import { AwsScreenT } from './type'
import { LessonData } from '../../../types/LessonTypes'
import { changeCourseLength } from '../../../slices'
import { useTypedDispatch } from '../../../store'

export function AwsScreen({ navigation, route }: AwsScreenT) {
  const isDark = useColorScheme() === 'dark'
  const [data, setData] = useState([])
  const [load, setLoad] = useState(true)
  const dispatch = useTypedDispatch()
  useEffect(() => {
    if (data.length > 0) {
      dispatch(changeCourseLength({ part: 'aws', length: data.length }))
    }
  }, [data])
  const fetchData = async () => {
    try {
      setLoad(true)
      const res = await fetchJson(
        'https://s3.eu-central-1.wasabisys.com/jscamp/AWSForKids/Main.json'
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
  return load ? (
    <Loading color={aws_color} />
  ) : (
    <ScrollContainer bgColor={!isDark ? aws_color : undefined}>
      {/* @ts-ignore */}
      {data.map((item: LessonData) => {
        return (
          <LessonCard
            border={!isDark}
            part="aws"
            id={item.id}
            key={item.id}
            darkText
            onPress={() => handlePressCard('aws', item.sections, item.cardTitle, item.id)}
            gradient={{ top: aws_gradient, bottom: aws_color }}
            cardImage={item.cardImage}
            title={item.cardTitle}
          />
        )
      })}
    </ScrollContainer>
  )
}
