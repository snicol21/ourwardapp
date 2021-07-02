import Head from "next/head"
import Layout from "../components/layouts/Layout"
import PageHeader from "../components/elements/headers/PageHeader"
import PrimaryButton from "../components/elements/buttons/PrimaryButton"
import Icon from "../components/elements/icons/Icon"
import HeroCard from "../components/modules/cards/HeroCard"
import SectionHeader from "../components/elements/headers/SectionHeader"
import Divider from "../components/elements/dividers/Divider"
import ContactCard from "../components/modules/cards/ContactCard"
import { dataHeroCard, dataFaceCard } from "../data/dataWardMission"

function WardMission() {
  return (
    <>
      <Head>
        <title>Ward Mission</title>
      </Head>
      <PageHeader title="Ward Mission" />
      <Layout>
        <PrimaryButton type="link" className="absolute top-2 md:top-5" link={{ url: "/" }}>
          <Icon name="chevron-left" className="h-5 w-5" />
          <span className="mr-2 text-sm uppercase font-semibold">Back</span>
        </PrimaryButton>
        <div className="pt-16">
          <HeroCard {...dataHeroCard} />
        </div>
        <div className="pt-16">
          <Divider />
          <SectionHeader title="Contact" />
          <div className="grid grid-cols-1 sm:grid-cols-4 pt-10">
            <ContactCard {...Object.assign(dataFaceCard, { className: "col-span-1 sm:col-span-2 sm:col-start-2" })} />
          </div>
        </div>
        <PrimaryButton type="link" className="mt-20" link={{ url: "/" }}>
          <Icon name="chevron-left" className="h-5 w-5" />
          <span className="mr-2 text-sm uppercase font-semibold">Back</span>
        </PrimaryButton>
      </Layout>
    </>
  )
}

export default WardMission
