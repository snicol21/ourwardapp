import Head from "next/head"
import Layout from "../components/layout/Layout"
import HeroCard from "../components/cards/HeroCard"
import InfoCard from "../components/cards/InfoCard"
import { dataSundayMeeting, dataInfoCards, dataFaceCards } from "../content/data"
import { IFaceCard, IInfoCard } from "../components/layout/Interfaces"
import FaceCard from "../components/cards/FaceCard"

function Home() {
  return (
    <Layout>
      <Head>
        <title>Maples 3rd Ward</title>
        <link rel="icon" href="/favicon.ico" />
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
        <div className="max-w-7xl mx-auto py-12 px-4 text-center sm:px-6 lg:px-8 lg:py-24">
          <div className="space-y-8 sm:space-y-12">
            <div className="space-y-5 sm:mx-auto sm:max-w-xl sm:space-y-4 lg:max-w-5xl">
              <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">Bishopric Appointments</h2>
              <p className="text-xl text-gray-500">Select the appointment you wish to schedule with a member of the bishopric</p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {dataFaceCards
            .filter((card) => !card.hidden)
            .map((card: IFaceCard) => (
              <div key={card.id} className="pt-5">
                <FaceCard {...card} />
              </div>
            ))}
        </div>
      </div>

      {/* <div className="max-w-7xl mx-auto px-2 mt-8 sm:px-6 lg:px-8">
        <Cards />
      </div>
      <div className="absolute bottom-0 w-full">
        <Footer />
      </div> */}
    </Layout>
  )
}

export default Home
