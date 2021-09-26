import Head from "next/head"
import Layout from "../../components/layouts/Layout"
import PageHeader from "../../components/elements/headers/PageHeader"
import PrimaryButton from "../../components/elements/buttons/PrimaryButton"
import Icon from "../../components/elements/icons/Icon"
import HeroCard from "../../components/modules/cards/HeroCard"
import EventCard, { IEventCard } from "../../components/modules/cards/EventCard"
import BlockQuote from "../../components/elements/headers/BlockQuote"
import { dataInfoCards, dataHeroCard, dataBlockQuote } from "../../data/welfare/dataSaintVincentDePaul"
import SectionHeader from "../../components/elements/headers/SectionHeader"
import { isSameOrAfterToday } from "../../shared/utils/date.util"

function StVincent() {
  return (
    <>
      <Head>
        <title>Maples 3rd Ward - Saint Vincent De Paul </title>
      </Head>
      <PageHeader title="Saint Vincent De Paul" subtitle="Maples 3rd Ward will have a number of opportunities to server at St. Vincent De Paul's this year." />
      <Layout>
        <PrimaryButton type="link" className="absolute top-2 md:top-5" link={{ url: "/welfare" }}>
          <Icon name="chevron-left" className="h-5 w-5" />
          <span className="mr-2 text-sm uppercase font-semibold">Back To Welfare</span>
        </PrimaryButton>
        <SectionHeader title="Next Opportunity at Saint Vincent De Paul" />
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
          <p>437 West 200 South</p>
          <p>Salt Lake City, UT 84115</p>
          <br></br>
          <ul>
            <li>- Parking is available in the fenced lot east of the building (the gate is on the north on 200 South)</li>
            <li>- Enter at the south-most door (blue) on the east side of the building, adjacent to the parking lot</li>
            <li>- Youth 12 and older are welcome with adult supervision</li>
            <li>- Closed toe shoes are required (health code)</li>
            <li>- Aprons and plastic gloves are provided</li>
            <li>- Valuables should be left at home or otherwise secured. No problems have been reported, but this precaution should be considered</li>
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

export default StVincent
