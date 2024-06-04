import React from 'react'
import QuestionInput from './QuestionInput'
import QuestionRadio from './QuestionRadio'

type ComponentInfoType = {
  fe_id: string
  type: string
  // title: string
  isHidden: boolean
  props: any
}

export function getComponent(comp: ComponentInfoType) {
  const { fe_id, type, isHidden, props = {} } = comp

  if (isHidden) return null

  if (type === 'questionInput') return <QuestionInput fe_id={fe_id} props={props} />

  if (type === 'questionRadio') return <QuestionRadio fe_id={fe_id} props={props} />

  return null
}
