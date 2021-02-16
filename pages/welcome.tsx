import Head from "next/head"
import Layout from "../components/layout/Layout"
import PageHeader from "../components/headers/PageHeader"

function Welcome() {
  return (
    <>
      <Head>
        <title>Maples 3rd Ward - Welcome</title>
      </Head>
      <PageHeader title="Welcome" />
      <Layout>
        <div>Welcome</div>
      </Layout>
    </>
  )
}

export default Welcome
