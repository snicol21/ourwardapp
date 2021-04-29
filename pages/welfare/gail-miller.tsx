import Head from "next/head"
import Layout from "../../components/layouts/Layout"
import PageHeader from "../../components/elements/headers/PageHeader"
import PrimaryButton from "../../components/elements/buttons/PrimaryButton"
import Icon from "../../components/elements/icons/Icon"
import HeroCard from "../../components/modules/cards/HeroCard"
import EventCard, { IEventCard } from "../../components/modules/cards/EventCard"
import BlockQuote from "../../components/elements/headers/BlockQuote"
import { dataInfoCards, dataHeroCard, dataBlockQuote } from "../../data/welfare/dataGailMiller"
import SectionHeader from "../../components/elements/headers/SectionHeader"
import { isSameOrAfterToday } from "../../shared/utils/date.util"

function GailMiller() {
  return (
    <>
      <Head>
        <title>Maples 3rd Ward - Gail Miller Homeless Resource Center</title>
      </Head>
      <PageHeader
        title="Gail Miller Resource Center"
        subtitle="Maples 3rd Ward will have a number of opportunities to server at Gail Miller Homeless Resource Center this year."
      />
      <Layout>
        <PrimaryButton type="link" className="absolute top-2 md:top-5" link={{ url: "/welfare" }}>
          <Icon name="chevron-left" className="h-5 w-5" />
          <span className="mr-2 text-sm uppercase font-semibold">Back To Welfare</span>
        </PrimaryButton>
        <SectionHeader title="Next Opportunity at Gail Miller Homeless Resource Center" />
        <div className="pt-16">
          <HeroCard {...dataHeroCard} />
        </div>
        {dataInfoCards.filter((card) => !card.hidden).length > 0 && (
          <>
            <SectionHeader title="Upcoming Events" subtitle="There are opportunities to serve here all year." />
            <div className="mt-3 grid grid-cols-1 gap-5 sm:gap-6 md:grid-cols-2">
              {dataInfoCards
                .filter((card) => !card.hidden && isSameOrAfterToday(card.date))
                .sort((a: any, b: any) => a.date - b.date)
                .map((card: IEventCard) => (
                  <EventCard key={card.title} {...card} />
                ))}
            </div>
          </>
        )}
        <div className="pt-16">
          <BlockQuote {...dataBlockQuote} />
        </div>
        <PrimaryButton type="link" className="mt-20" link={{ url: "/welfare" }}>
          <Icon name="chevron-left" className="h-5 w-5" />
          <span className="mr-2 text-sm uppercase font-semibold">Back To Welfare</span>
        </PrimaryButton>
      </Layout>
    </>
  )
}

export default GailMiller
