import Head from "next/head"
import { dataSundayMeeting, dataInfoCards, dataFaceCards } from "../content/data"
import Layout from "../components/layout/Layout"
import { IFaceCard, IInfoCard } from "../components/layout/Interfaces"
import HeroCard from "../components/cards/HeroCard"
import InfoCard from "../components/cards/InfoCard"
import FaceCard from "../components/cards/FaceCard"
import SectionHeader from "../components/headers/SectionHeader"

function Home() {
  return (
    <Layout>
      <Head>
        <title>Maples 3rd Ward</title>
      </Head>
      <div>
        <HeroCard {...dataSundayMeeting} />
      </div>
      <div className="pt-20">
        {dataInfoCards
          .filter((card) => !card.hidden)
          .map((card: IInfoCard) => (
            <div key={card.id} className="pt-5">
              <InfoCard {...card} />
            </div>
          ))}
      </div>
      <div className="pt-20">
        <SectionHeader title="Bishopric Appointments" subtitle="Select the appointment you wish to schedule with a member of the bishopric" />
        <div className="flex flex-col justify-between flex-wrap sm:flex-row sm:-mx-1 md:-mx-4">
          {dataFaceCards
            .filter((card) => !card.hidden)
            .map((card: IFaceCard) => (
              <div key={card.id} className="pt-5 flex-1 w-full sm:mx-2 md:mx-4">
                <FaceCard {...card} />
              </div>
            ))}
        </div>
      </div>
    </Layout>
  )
}

export default Home
