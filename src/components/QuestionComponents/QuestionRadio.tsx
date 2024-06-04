import React, { useState } from 'react'
import styles from './QuestionRadio.module.scss'

type Props = {
  fe_id: string
  props: {
    title: string
    options: Array<{ value: string; text: string }>
    value: string
    isVertical: boolean
  }
}

function QuestionRadio({ fe_id, props }: Props) {
  const { title, options = [], value, isVertical } = props || {}

  return (
    <>
      <p>{title}</p>
      <ul className={styles.list}>
        {options.map(opt => {
          const { value: val, text } = opt
          const listClassName = isVertical ? styles.verticalItem : styles.horizontalItem

          return (
            <li key={val} className={listClassName}>
              <label>
                <input type="radio" name={fe_id} value={val} defaultChecked={val === value} />
                {text}
              </label>
            </li>
          )
        })}
      </ul>
    </>
  )
}

export default QuestionRadio
