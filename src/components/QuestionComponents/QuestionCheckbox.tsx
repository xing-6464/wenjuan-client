import React from 'react'
import styles from './QuestionCheckbox.module.scss'

type Props = {
  fe_id: string
  props: {
    title: string
    isVertical?: boolean
    list: Array<{
      value: string
      text: string
      checked: boolean
    }>
  }
}

function QuestionCheckbox({ fe_id, props }: Props) {
  const { title, isVertical, list } = props

  return (
    <>
      <p>{title}</p>
      <ul className={styles.list}>
        {list.map((item, index) => {
          const { value, text, checked } = item

          const className = isVertical ? styles.verticalItem : styles.horizontalItem

          return (
            <li key={value} className={className}>
              <label>
                <input type="checkbox" checked={checked} />
                {text}
              </label>
            </li>
          )
        })}
      </ul>
    </>
  )
}

export default QuestionCheckbox
