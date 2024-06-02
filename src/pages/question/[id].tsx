import Head from 'next/head'

type Props = {
  id: string
}

// pages/question/[id].tsx
// http://localhost:3000/question/12312412 // C 端 H5 的url 规则
import QuestionInput from '@/components/QuestionComponents/QuestionInput'

export default function Question(props: Props) {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>Question page</h1>
        <p>{props.id}</p>

        <form>
          <QuestionInput fe_id="c1" props={{ title: '你的姓名', placeholder: '请输入你的姓名' }} />
        </form>
      </main>
    </>
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
