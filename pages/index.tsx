import Head from "next/head"
import Layout from "../components/layout/Layout"
import HeroCard from "../components/cards/HeroCard"
import InfoCard from "../components/cards/InfoCard"
import { dataSundayMeeting, dataInfoCards } from "../content/data"

function Home() {
  return (
    <Layout>
      <Head>
        <title>Maples 3rd Ward</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="pb-12">
        <HeroCard {...dataSundayMeeting} />
      </div>
      {dataInfoCards
        .filter((card) => !card.hidden)
        .map((card: InfoCard) => (
          <div className="pt-5">
            <InfoCard key={card.id} {...card} />
          </div>
        ))}

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
