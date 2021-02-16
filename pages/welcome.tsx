import Head from "next/head"
import Layout from "../components/layout/Layout"
import PageHeader from "../components/headers/PageHeader"
import Button from "../components/buttons/Button"
import Icon from "../components/shared/Icon"
import SectionHeader from "../components/headers/SectionHeader"

function Welcome() {
  return (
    <>
      <Head>
        <title>Maples 3rd Ward - Welcome</title>
      </Head>
      <PageHeader title="Welcome" />
      <Layout>
        <Button type="link" className="absolute top-5" href={{ url: "/" }}>
          <Icon name="chevron-left" />
          <span className="mr-2 text-sm uppercase font-semibold">Back</span>
        </Button>
        <SectionHeader title="Welcome" />
      </Layout>
    </>
  )
}

export default Welcome
