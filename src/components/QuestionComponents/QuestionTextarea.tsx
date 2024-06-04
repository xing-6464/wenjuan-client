import React from 'react'
import styles from './QuestionTextarea.module.scss'

type Props = {
  fe_id: string
  props: {
    title: string
    placeholder: string
  }
}

function QuestionTextarea({ fe_id, props }: Props) {
  const { title, placeholder = '' } = props || {}

  return (
    <>
      <p>{title}</p>
      <div className={styles.textareaWrapper}>
        <textarea name={fe_id} placeholder={placeholder} />
      </div>
    </>
  )
}

export default QuestionTextarea
