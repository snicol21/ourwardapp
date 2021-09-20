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
            <SectionHeader title="Upcoming Events" subtitle="There are two more opportunities to serve here this year." />
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
        <SectionHeader title="Volunteer Info" subtitle="Reach out to Jason Hardman with any questions" />
        <div className="pt-16">
          <h2>Address:</h2>
          <p>242 West Paramount Avenue</p>
          <p>Salt Lake City, UT 84115</p>
          <br></br>
          <ul>
            <li>- If you are experiencing COVID symptoms, please stay home.</li>
            <li>- Because you&#39;ll be working around food, please make sure that you&#39;re showered and that your clothes are clean</li>
            <li>- Please be sure to bring the following items:</li>
            <ol>
              <li>1) Close toed shoes and socks</li>
              <li>2) A shirt with sleeves, no tank-tops</li>
              <li>3) A hair tie for hair that is longer than five inches</li>
              <li>4) A hat if you don&#39;t want to wear a hairnet</li>
            </ol>
            <li>- Hair nets, beard nets, aprons, and gloves will be provided upon arrival.</li>
          </ul>
          <br></br>
          <h2>Where to Park?</h2>
          <ul>
            <li>- Press the call button at the gate to have a staff member open the gate</li>
            <li>- Let them know that you are here to volunteer</li>
            <li>- Once in the parking area, follow the road around the building and park in any open spot</li>
          </ul>
        </div>
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
