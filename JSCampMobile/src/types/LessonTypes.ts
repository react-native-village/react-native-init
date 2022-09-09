export type allPartsT = 'en' | 'rn' | 'aws' | 'ts' | 'js'

export interface LessonData {
  id: number
  cardTitle: string
  cardImage: string
  sections: sectionT[]
}

export type sectionT = {
  type: 'markdown' | 'video' | 'quest' | 'emojiLearn' | 'learn' | 'win' // 'win' no json
  poster?: string // if "video"
  contentUrl?: string // if "video" or "markdown" or "emojiLearn" or 'learn'
  question?: questionsT // if  any
  header?: string
}

export type questionsT = {
  // выборать одно, ввести текст ответа, перенести в области кубики, выборка,
  // соединить варианты между собой, дополнить текст
  type:
    | 'oneChoice'
    | 'input'
    | 'drag'
    | 'manySelect'
    | 'joinVariants'
    | 'supplement'
    | 'emoji'
  oneChoice?: oneSelectT
  input?: inputAnswerT
  drag?: DragVariantT
  manySelect?: manySelectT
  joinVariants?: joinVariantsT
  supplement?: supplementT
  emoji?: emojiTestT
}

export type oneSelectT = {
  questionText: string
  variants: string[]
  correctAnswer: string
}

export type inputAnswerT = {
  questionText: string
  correctAnswer: string
}

export type DragVariantT = {
  questionText: string // с помощью regExp можно вырезать слова,
  // заключеные в какой либо символ и по порядку занести в массив,
  // а затем сравнить порядок слов которые ввел пользователь
  fakeWords: string[]
}

export type manySelectT = {
  questionText: string
  correctAnswers: string[]
  variants: string[]
}

export type emojiTestT = {
  dataUrl: string
}

export type emojiT = {
  id: string | number
  name: string
  title: string
  url: string
  ru?: string
}

export type joinVariantsT = {
  questionText: string
  left: string[]
  right: string[]
  correctCouples: string[][]
}

export type supplementT = {
  questionText: string
}
