import Head from "next/head"
import Layout from "../components/layout/Layout"
import Cards from "../components/Card"
import HeroCard from "../components/cards/HeroCard"
import Footer from "../components/Footer"
import { dataSundayMeetings } from "../content/data"

function Home() {
  return (
    <Layout>
      <Head>
        <title>Maples 3rd Ward</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeroCard {...dataSundayMeetings} />
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
