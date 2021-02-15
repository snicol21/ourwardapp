import Head from "next/head"
import Layout from "../components/layout/Layout"
import { dataSundayMeeting, dataInfoCards, dataFaceCards, dataMiniCards, dataImageCards } from "../content/data"
import SectionHeader from "../components/headers/SectionHeader"
import HeroCard from "../components/cards/HeroCard"
import InfoCard, { IInfoCard } from "../components/cards/InfoCard"
import FaceCard, { IFaceCard } from "../components/cards/FaceCard"
import MiniCard, { IMiniCard } from "../components/cards/MiniCard"
import ImageCard, { IImageCard } from "../components/cards/ImageCard"

function Home() {
  return (
    <Layout>
      <Head>
        <title>Maples 3rd Ward</title>
      </Head>
      <HeroCard {...dataSundayMeeting} />
      <SectionHeader title="Announcements" />
      {dataInfoCards
        .filter((card) => !card.hidden)
        .map((card: IInfoCard) => (
          <div key={card.title} className="pt-5">
            <InfoCard {...card} />
          </div>
        ))}
      <SectionHeader title="Bishopric Appointments" subtitle="Select the appointment you wish to schedule with a member of the bishopric" />
      <div className="grid grid-cols-1 gap-x-6 sm:grid-cols-2">
        {dataFaceCards
          .filter((card) => !card.hidden)
          .map((card: IFaceCard) => (
            <div key={card.title} className="py-3 w-full">
              <FaceCard {...card} />
            </div>
          ))}
      </div>
      <div className="grid grid-cols-1 gap-x-6 sm:grid-cols-2 lg:grid-cols-3">
        {dataMiniCards
          .filter((card) => !card.hidden)
          .map((card: IMiniCard) => (
            <div key={card.title} className="py-3 w-full">
              <MiniCard {...card} />
            </div>
          ))}
      </div>
      {/* <SectionHeader title="Bishopric Appointments" subtitle="Select the appointment you wish to schedule with a member of the bishopric" /> */}
      <div className="grid grid-cols-1 gap-x-6 sm:grid-cols-2">
        {dataImageCards
          .filter((card) => !card.hidden)
          .map((card: IImageCard) => (
            <div key={card.title} className="py-3 w-full">
              <ImageCard {...card} />
            </div>
          ))}
      </div>
    </Layout>
  )
}

export default Home
