import Head from "next/head"
import Layout from "../components/layouts/Layout"
import PageHeader from "../components/elements/headers/PageHeader"
import PrimaryButton from "../components/elements/buttons/PrimaryButton"
import Icon from "../components/elements/icons/Icon"
import HeroCard from "../components/modules/cards/HeroCard"
import EventCard, { IEventCard } from "../components/modules/cards/EventCard"
import ImageCard, { IImageCard } from "../components/modules/cards/ImageCard"
import BlockQuote from "../components/elements/headers/BlockQuote"
import { dataInfoCards, dataHeroCard, dataBlockQuote, dataImageCards } from "../data/dataDeseretSoap"
import SectionHeader from "../components/elements/headers/SectionHeader"
import Divider from "../components/elements/dividers/Divider"
import { isSameOrAfterToday } from "../shared/utils/date.util"

function DeseretSoap() {
  return (
    <>
      <Head>
        <title>Maples 3rd Ward - Deseret Soap</title>
      </Head>
      <PageHeader title="Deseret Soap" subtitle="Maples 3rd Ward will have an opportunity to server at Deseret Soap this year." />
      <Layout>
        <PrimaryButton type="link" className="absolute top-2 md:top-5" link={{ url: "/welfare" }}>
          <Icon name="chevron-left" className="h-5 w-5" />
          <span className="mr-2 text-sm uppercase font-semibold">Back</span>
        </PrimaryButton>
        <SectionHeader title="Next Opportunity at Deseret Soap" />
        <div className="pt-16">
          <HeroCard {...dataHeroCard} />
        </div>
        <div className="pt-16">
          <BlockQuote {...dataBlockQuote} />
        </div>
        <PrimaryButton type="link" className="mt-20" link={{ url: "/welfare" }}>
          <Icon name="chevron-left" className="h-5 w-5" />
          <span className="mr-2 text-sm uppercase font-semibold">Back</span>
        </PrimaryButton>
      </Layout>
    </>
  )
}

export default DeseretSoap
