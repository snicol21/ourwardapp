import Head from "next/head"
import Layout from "../components/layout/Layout"
import PageHeader from "../components/headers/PageHeader"
import PrimaryButton from "../components/buttons/PrimaryButton"
import Icon from "../components/shared/Icon"
import SectionHeader from "../components/headers/SectionHeader"

function TempleAndFamilyHistory() {
  return (
    <>
      <Head>
        <title>Maples 3rd Ward - Temple &amp; Family History</title>
      </Head>
      <PageHeader title="Temple &amp; Family History" />
      <Layout>
        <PrimaryButton type="link" className="absolute top-2 md:top-5" link={{ url: "/" }}>
          <Icon name="chevron-left" />
          <span className="mr-2 text-sm uppercase font-semibold">Back</span>
        </PrimaryButton>
        <SectionHeader title="Our mission for Temple &amp; Family History" />
      </Layout>
    </>
  )
}

export default TempleAndFamilyHistory
