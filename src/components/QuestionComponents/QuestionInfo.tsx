import React from 'react'

type Props = {
  title: string
  desc?: string
}

function QuestionInfo({ title, desc }: Props) {
  return (
    <div style={{ textAlign: 'center' }}>
      <h1>{title}</h1>
      <p>{desc}</p>
    </div>
  )
}

export default QuestionInfo
