import React from 'react'

type Props = {
  text: string
  isCenter?: boolean
}

function QuestionParagraph({ text, isCenter }: Props) {
  const style: React.CSSProperties = {}
  if (isCenter) style.textAlign = 'center'

  // 换行
  const textList = text.split('\n')

  return (
    <p>
      {textList.map((item, index) => (
        <span key={index}>
          {index > 0 && <br />}
          {item}
        </span>
      ))}
    </p>
  )
}

export default QuestionParagraph
