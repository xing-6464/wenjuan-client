import Head from 'next/head'
import styles from '@/styles/Question.module.scss'
import PageWrapper from '@/components/PageWrapper'

type Props = {
  errno: number
  data?: {
    id: string
    title: string
    desc?: string
    js?: string
    css?: string
    isPublished: boolean
    isDeleted: boolean
    componentList: Array<any>
  }
  msg?: string
}

// pages/question/[id].tsx
// http://localhost:3000/question/12312412 // C 端 H5 的url 规则
import QuestionInput from '@/components/QuestionComponents/QuestionInput'
import QuestionRadio from '@/components/QuestionComponents/QuestionRadio'
import { getQuestionById } from '@/services/question'

export default function Question(props: Props) {
  const { errno, data, msg } = props

  // 获取数据出错
  if (errno !== 0) {
    return (
      <PageWrapper title="错误">
        <h1>错误</h1>
        <p>{msg}</p>
      </PageWrapper>
    )
  }

  const { id, title = '', desc = '', isDeleted, isPublished, componentList = [] } = data || {}

  // 问卷已删除
  if (isDeleted) {
    return (
      <PageWrapper title="错误">
        <h1>{title}</h1>
        <p>该问卷已被删除</p>
      </PageWrapper>
    )
  }

  // 问卷未发布
  if (!isPublished) {
    return (
      <PageWrapper title={title} desc={desc}>
        <h1>{title}</h1>
        <p>该问卷未发布</p>
      </PageWrapper>
    )
  }

  return (
    <PageWrapper title={title} desc={desc}>
      <form action="/api/answer" method="post">
        <input type="hidden" name="questionId" value={id} />
        <div className={styles.componentWrapper}>
          <QuestionInput fe_id="c1" props={{ title: '你的姓名', placeholder: '请输入你的姓名' }} />
        </div>
        <div className={styles.componentWrapper}>
          <QuestionRadio
            fe_id="c2"
            props={{
              title: '你的性别',
              options: [
                { value: 'male', text: '男' },
                { value: 'female', text: '女' },
              ],
              value: 'female',
              isVertical: false,
            }}
          />
        </div>
        <div className={styles.submitBtnContainer}>
          <button type="submit">提交</button>
        </div>
      </form>
    </PageWrapper>
  )
}

// 获取动态路由id
export async function getServerSideProps(context: any) {
  const { id = '' } = context.params

  // 根据 id await 获取问卷数据
  const data = await getQuestionById(id)

  return {
    props: data,
  }
}
