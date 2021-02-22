import Head from "next/head"
import Layout from "../components/layouts/Layout"
import PageHeader from "../components/elements/headers/PageHeader"
import PrimaryButton from "../components/elements/buttons/PrimaryButton"
import Icon from "../components/elements/icons/Icon"
import SectionHeader from "../components/elements/headers/SectionHeader"

function Welcome() {
  return (
    <>
      <Head>
        <title>Maples 3rd Ward - Welcome</title>
      </Head>
      <PageHeader title="Welcome" />
      <Layout>
        <PrimaryButton type="link" className="absolute top-2 md:top-5" link={{ url: "/" }}>
          <Icon name="chevron-left" className="h-5 w-5" />
          <span className="mr-2 text-sm uppercase font-semibold">Back</span>
        </PrimaryButton>
        <SectionHeader title="Welcome to the Maples 3rd Ward" />
      </Layout>
    </>
  )
}

export default Welcome
