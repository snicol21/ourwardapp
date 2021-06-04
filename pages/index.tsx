import Head from "next/head"
import Layout from "../components/layouts/Layout"
import SectionHeader from "../components/elements/headers/SectionHeader"
import HeroCard from "../components/modules/cards/HeroCard"
import EventCard, { IEventCard } from "../components/modules/cards/EventCard"
import FaceCard, { IFaceCard } from "../components/modules/cards/FaceCard"
import MiniCard, { IMiniCard } from "../components/modules/cards/MiniCard"
import ImageCard, { IImageCard } from "../components/modules/cards/ImageCard"
import { dataSundayMeeting, dataFaceCards, dataMiniCards, dataImageCards } from "../data/dataIndex"
import { isSameOrAfterToday } from "../shared/utils/date.util"
import { ISheetyEvent } from "../shared/types"

function Home({ data }: { data: { events: ISheetyEvent[] } }) {
  let dataInfoCards: IEventCard[] = []
  if (data.events) {
    dataInfoCards = data.events.map((e) => {
      return {
        title: e.title,
        date: new Date(`${e.date} ${e.time}`),
        image: {
          src: e.imageUrl,
        },
        button: {
          modal: {
            type: "event",
            data: {
              title: e.title,
              subtitle: e.subtitle,
              image: {
                src: e.imageUrl,
              },
              date: new Date(`${e.date} ${e.time}`),
              duration: e.duration,
              location: e.location,
              details: e.details,
              button: e.buttonText
                ? {
                    text: e.buttonText,
                    link: {
                      url: e.buttonUrl,
                      external: true,
                    },
                  }
                : null,
            },
          },
        },
        hidden: e.hidden ? e.hidden : false,
      }
    })
  }

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

export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`https://api.sheety.co/62c9e91944aea5ff47ee1e4776d4cc2a/ourwardapp/events`)
  const data = await res.json()

  // Pass data to the page via props
  return { props: { data } }
}

export default Home
