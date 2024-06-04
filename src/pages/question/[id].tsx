import Head from 'next/head'
import styles from '@/styles/Question.module.scss'
import PageWrapper from '@/components/PageWrapper'

type Props = {
  id: string
}

// pages/question/[id].tsx
// http://localhost:3000/question/12312412 // C 端 H5 的url 规则
import QuestionInput from '@/components/QuestionComponents/QuestionInput'
import QuestionRadio from '@/components/QuestionComponents/QuestionRadio'

export default function Question(props: Props) {
  return (
    <PageWrapper title="question">
      <form action="/api/answer" method="post">
        <input type="hidden" name="questionId" value={props.id} />
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

  return {
    props: {
      id,
    },
  }
}
