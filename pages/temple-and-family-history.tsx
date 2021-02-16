import Head from "next/head"
import Layout from "../components/layout/Layout"
import PageHeader from "../components/headers/PageHeader"
import Button from "../components/buttons/Button"
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
        <Button type="link" className="absolute top-5" href={{ url: "/" }}>
          <Icon name="chevron-left" />
          <span className="mr-2 text-sm uppercase font-semibold">Back</span>
        </Button>
        <SectionHeader title="Temple &amp; Family History" />
      </Layout>
    </>
  )
}

export default TempleAndFamilyHistory
