import Head from "next/head"
import Layout from "../components/layouts/Layout"
import SectionHeader from "../components/elements/headers/SectionHeader"
import HeroCard from "../components/modules/cards/HeroCard"
import EventCard, { IEventCard } from "../components/modules/cards/EventCard"
import FaceCard, { IFaceCard } from "../components/modules/cards/FaceCard"
import MiniCard, { IMiniCard } from "../components/modules/cards/MiniCard"
import ImageCard, { IImageCard } from "../components/modules/cards/ImageCard"
import { dataSundayMeeting, dataInfoCards, dataFaceCards, dataMiniCards, dataImageCards } from "../data/dataIndex"
import PrimaryButton from "../components/elements/buttons/PrimaryButton"
import Icon from "../components/elements/icons/Icon"
import { isSameOrAfterToday } from "../shared/utils/date.util"

function Home() {
  return (
    <Layout>
      <Head>
        <title>Maples 3rd Ward</title>
      </Head>
      <div className="pt-16">
        <HeroCard {...dataSundayMeeting} />
      </div>
      {dataInfoCards.filter((card) => !card.hidden).length > 0 && (
        <>
          <SectionHeader title="Upcoming Events" subtitle="Find out more details of some of the upcoming events and activities." />
          <div className="mt-3 grid grid-cols-1 gap-5 sm:gap-6 md:grid-cols-2">
            {dataInfoCards
              .filter((card) => !card.hidden && isSameOrAfterToday(card.date))
              .map((card: IEventCard) => (
                <EventCard key={card.title} {...card} />
              ))}
          </div>
          {/* <div className="flex pt-5 justify-end">
            <PrimaryButton
              type="light"
              size="sm"
              color="gray"
              modal={{
                type: "event-action",
              }}
            >
              <Icon name="pencil" className="h-5 w-5" />
              <span className="pl-2">Add/Update</span>
            </PrimaryButton>
          </div> */}
        </>
      )}
      {dataFaceCards.filter((card) => !card.hidden).length > 0 && (
        <>
          <SectionHeader title="Meet with a member of the bishopric" subtitle="Select a time and quickly schedule your appointment." />
          <div className="grid grid-cols-1 gap-x-6 sm:grid-cols-2">
            {dataFaceCards
              .filter((card) => !card.hidden)
              .map((card: IFaceCard) => (
                <div key={card.title} className="py-3 w-full">
                  <FaceCard {...Object.assign(card, { className: "col-span-1" })} />
                </div>
              ))}
          </div>
        </>
      )}
      {dataMiniCards.filter((card) => !card.hidden).length > 0 && (
        <div className="grid grid-cols-1 gap-x-6 sm:grid-cols-2 lg:grid-cols-3">
          {dataMiniCards
            .filter((card) => !card.hidden)
            .map((card: IMiniCard) => (
              <div key={card.title} className="py-3 w-full">
                <MiniCard {...card} />
              </div>
            ))}
        </div>
      )}
      {dataImageCards.filter((card) => !card.hidden).length > 0 && (
        <>
          <SectionHeader title="Learn what's going on" subtitle="Below are some of the happenings of the ward and ways to become involved." />
          <div className="grid grid-cols-1 gap-x-6 sm:grid-cols-2 pt-5">
            {dataImageCards
              .filter((card) => !card.hidden)
              .map((card: IImageCard) => (
                <div key={card.title} className="py-3 w-full">
                  <ImageCard {...card} />
                </div>
              ))}
          </div>
        </>
      )}
    </Layout>
  )
}

export default Home
