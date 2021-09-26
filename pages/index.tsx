import Head from "next/head"
import Layout from "../components/layouts/Layout"
import SectionHeader from "../components/elements/headers/SectionHeader"
import HeroCard from "../components/modules/cards/HeroCard"
import EventCard, { IEventCard } from "../components/modules/cards/EventCard"
import ContactCard, { IContactCard } from "../components/modules/cards/ContactCard"
import MiniCard, { IMiniCard } from "../components/modules/cards/MiniCard"
import ImageCard, { IImageCard } from "../components/modules/cards/ImageCard"
import PrimaryButton from "../components/elements/buttons/PrimaryButton"
import Icon from "../components/elements/icons/Icon"
import { dataSundayMeeting, dataInfoCards, dataFaceCards, dataMiniCards, dataImageCards } from "../data/dataIndex"
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
          <div className="pt-5">
            <div className="bg-green-50 shadow rounded-lg border-2 border-green-500">
              <div className="px-4 py-5 sm:p-6">
                <div className="sm:flex sm:items-start sm:justify-between">
                  <div>
                    <h3 className="text-lg leading-6 font-bold text-gray-900">Tithing Settlement</h3>
                    <div className="mt-1 pr-2 flex items-center">
                      <Icon name="calendar" className="h-4 w-4 mr-2 mb-0.5 text-gray-400" />
                      <time>October 15th - December 31st</time>
                    </div>
                  </div>
                  <div className="mt-5 sm:mt-0 sm:ml-6 sm:flex-shrink-0 sm:flex sm:items-center">
                    <PrimaryButton
                      type="dark"
                      color="green"
                      link={{
                        url: "https://calendly.com/ssr3-bishop/tithing",
                        calendly: true,
                      }}
                    >
                      Schedule
                    </PrimaryButton>
                  </div>
                </div>
                <div className="bg-white border border-gray-200 mt-3 text-base p-5 rounded-xl">
                  <p>
                    Please schedule a time for your family. Tithing settlement is an opportunity for each ward member to meet with the bishop, to make sure his
                    or her donations records are correct, and to declare to the bishop his or her tithing status.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-7 grid grid-cols-1 gap-5 sm:gap-6 md:grid-cols-2">
            {dataInfoCards
              .filter((card) => !card.hidden && isSameOrAfterToday(card.date))
              .sort((a: any, b: any) => a.date - b.date)
              .map((card: IEventCard) => (
                <EventCard key={`${card.title}${card.date}`} {...card} />
              ))}
          </div>
        </>
      )}
      {dataFaceCards.filter((card) => !card.hidden).length > 0 && (
        <>
          <SectionHeader title="Meet with a member of the bishopric" subtitle="Select a time and quickly schedule your appointment." />
          <div className="grid grid-cols-1 gap-x-6 sm:grid-cols-2">
            {dataFaceCards
              .filter((card) => !card.hidden)
              .map((card: IContactCard) => (
                <div key={card.title} className="py-3 w-full">
                  <ContactCard {...Object.assign(card, { className: "col-span-1" })} />
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
          <div className="grid grid-cols-1 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 pt-5">
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
