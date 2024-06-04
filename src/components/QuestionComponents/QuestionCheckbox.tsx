import React, { useEffect } from 'react'
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
  const { title, isVertical, list = [] } = props

  const [selectedValues, setSelectedValues] = React.useState<string[]>([])

  useEffect(() => {
    list.forEach(item => {
      const { value, checked } = item
      setSelectedValues(selectedVal => {
        if (checked && !selectedVal.includes(value)) {
          return selectedVal.concat(value)
        }
        return selectedVal
      })
    })
  }, [list])

  function toggleChecked(value: string) {
    if (selectedValues.includes(value)) {
      setSelectedValues(selectedValues => selectedValues.filter(v => v !== value))
    } else {
      setSelectedValues(selectedValues.concat(value))
    }
  }

  return (
    <>
      <p>{title}</p>
      <input type="hidden" name={fe_id} value={selectedValues.toString()} />
      <ul className={styles.list}>
        {list.map((item, index) => {
          const { value, text } = item

          const className = isVertical ? styles.verticalItem : styles.horizontalItem

          return (
            <li key={value} className={className}>
              <label>
                <input
                  type="checkbox"
                  checked={selectedValues.includes(value)}
                  onChange={() => toggleChecked(value)}
                />
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
