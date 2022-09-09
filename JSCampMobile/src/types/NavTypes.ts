import { NavigatorScreenParams } from '@react-navigation/native'
import { allPartsT, questionsT, sectionT } from './LessonTypes'

export type RootStackParamList = {
  UI: undefined
  BOTTOM_TABS?: NavigatorScreenParams<RootBottomTabParamList>
  // Lesson
  LESSON_SCREEN: undefined
  EXAM_SCREEN: {
    questions: questionsT[]
    part: allPartsT
  }
}
interface lessonDetail extends sectionT {
  header: string
}

export type RootBottomTabParamList = {
  TOP_TABS?: NavigatorScreenParams<RootTopTabParamList>
  QR_SCREEN: undefined
}

export type RootTopTabParamList = {
  EN_SCREEN: undefined
  JS_SCREEN: undefined
  RN_SCREEN: undefined
  TS_SCREEN: undefined
  AWS_SCREEN: undefined
}
