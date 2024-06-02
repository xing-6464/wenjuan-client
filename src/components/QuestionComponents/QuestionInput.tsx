import React from 'react'
import styles from './QuestionInput.module.scss'

type Props = {
  fe_id: string
  props: {
    title: string
    placeholder: string
  }
}

function QuestionInput({ fe_id, props }: Props) {
  const { title, placeholder = '' } = props

  return (
    <>
      <p>{title}</p>
      <div className={styles.inputWrapper}>
        <input type="text" id={fe_id} placeholder={placeholder} />
      </div>
    </>
  )
}

export default QuestionInput
