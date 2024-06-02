// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

function genAnswerInfo(reqBody: any) {
  const answerList: any = []

  Object.keys(reqBody).forEach(key => {
    if (key === 'questionId') return
    answerList.push({
      componentId: key,
      value: reqBody[key],
    })
  })

  return {
    questionId: reqBody.questionId || '',
    answerList,
  }
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.status(200).json({ errno: -1, msg: '请求方式错误' })
  }

  const answerInfo = genAnswerInfo(req.body)
  try {
    // 提交成功
    res.redirect('/success')

    // 提交失败
    // res.redirect('/fail')
  } catch (e) {}
  // res.status(200).json({ errno: 0, msg: '提交成功' })
}
