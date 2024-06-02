// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { postAnswer } from '@/services/answer'

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

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.status(200).json({ errno: -1, msg: '请求方式错误' })
  }

  // 解析请求参数
  const answerInfo = genAnswerInfo(req.body)
  try {
    // 调用服务端接口
    const resData = await postAnswer(answerInfo)
    console.log(resData)

    if (resData.errno === 0) {
      // 提交成功
      res.redirect('/success')
    } else {
      // 提交失败
      res.redirect('/fail')
    }
  } catch (e) {
    res.redirect('/fail')
  }
}
