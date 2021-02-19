import Head from "next/head"
import Layout from "../components/layout/Layout"
import PageHeader from "../components/headers/PageHeader"
import PrimaryButton from "../components/buttons/PrimaryButton"
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
        <PrimaryButton type="link" className="absolute top-2 md:top-5" link={{ url: "/" }}>
          <Icon name="chevron-left" />
          <span className="mr-2 text-sm uppercase font-semibold">Back</span>
        </PrimaryButton>
        <SectionHeader title="Welcome to the Maples 3rd Ward" />
      </Layout>
    </>
  )
}

export default Welcome
