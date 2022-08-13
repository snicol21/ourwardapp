import Head from "next/head"
import Layout from "../components/layouts/Layout"
import SectionHeader from "../components/elements/headers/SectionHeader"
import HeroCard, { IHeroCard } from "../components/modules/cards/HeroCard"
import Announcement, { IAnnouncement } from "../components/modules/announcements/Announcement"
import ContactCard, { IContactCard } from "../components/modules/cards/ContactCard"
import MiniCard, { IMiniCard } from "../components/modules/cards/MiniCard"
import ImageCard, { IImageCard } from "../components/modules/cards/ImageCard"
import BannerCard, { IBannerCard } from "../components/modules/cards/BannerCard"
import { filterAndSortAnnouncements, generateAnnouncementKey } from "../shared/utils/announcement.util"
import { filterByType, filterById, setHttpHeaders } from "../shared/utils/api.util"
import { announcementsByTypeRequest, convertAnnouncements } from "../services/announcement.service"
import { convertHeroCard, convertFaceCards, convertMiniCards, convertImageCards, dataCardsRequest, convertBannerCards } from "../services/data-card.service"
import { config } from "../config"

export const getServerSideProps = async ({ req, res }) => {
  setHttpHeaders(res)
  const [announcements, dataCards] = await Promise.all([fetch(announcementsByTypeRequest("ward")), fetch(dataCardsRequest())])
  return {
    props: {
      announcements: await announcements.json(),
      dataCards: await dataCards.json(),
    },
  }
}

function Home({ announcements, dataCards }) {
  const dataAnnouncements: IAnnouncement[] = convertAnnouncements(announcements)
  const dataSundayMeeting: IHeroCard = convertHeroCard(filterById(dataCards, config.pages.index.heroCardId), "dark")
  const dataBannerCards: IBannerCard[] = convertBannerCards(filterByType(dataCards, "banner-card"))
  const dataFaceCards: IContactCard[] = convertFaceCards(filterByType(dataCards, "face-card"))
  const dataMiniCards: IMiniCard[] = convertMiniCards(filterByType(dataCards, "mini-card"))
  const dataImageCards: IImageCard[] = convertImageCards(filterByType(dataCards, "image-card"))
  return (
    <Layout>
      <Head>
        <title>{config.wardName}</title>
      </Head>
      <div className="pt-16">
        <HeroCard {...dataSundayMeeting} />
      </div>
      {(dataAnnouncements.length > 0 || dataBannerCards.length > 0) && (
        <>
          <SectionHeader title="Announcements" subtitle="Find out more details of some of the upcoming events and activities." />
          {dataBannerCards.length > 0 && (
            <div className="mt-7">
              {dataBannerCards.map((card: IBannerCard) => (
                <div key={card.title} className="py-4 w-full">
                  <BannerCard {...card} />
                </div>
              ))}
            </div>
          )}
          {dataAnnouncements.length > 0 && (
            <div className="mt-7">
              <div className="relative max-w-xl mx-auto lg:max-w-7xl">
                <div className="grid gap-4 lg:grid-cols-2">
                  {filterAndSortAnnouncements(dataAnnouncements).map((announcement: IAnnouncement) => (
                    <div key={generateAnnouncementKey(announcement)} className="p-4 bg-white rounded-lg shadow-xl lg:p-8">
                      <Announcement {...announcement} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </>
      )}
      {dataFaceCards.length > 0 && (
        <>
          <SectionHeader title="Meet with a member of the bishopric" subtitle="Select a time and quickly schedule your appointment." />
          <div className="grid grid-cols-1 gap-x-6 sm:grid-cols-2">
            {dataFaceCards.map((card: IContactCard) => (
              <div key={card.title} className="py-3 w-full">
                <ContactCard {...Object.assign(card, { className: "col-span-1" })} />
              </div>
            ))}
          </div>
        </>
      )}
      {dataMiniCards.length > 0 && (
        <div className="grid grid-cols-1 gap-x-6 sm:grid-cols-2 lg:grid-cols-3">
          {dataMiniCards.map((card: IMiniCard) => (
            <div key={card.title} className="py-3 w-full">
              <MiniCard {...card} />
            </div>
          ))}
        </div>
      )}
      {dataImageCards.length > 0 && (
        <>
          <SectionHeader title="Learn what's going on" subtitle="Below are some of the happenings of the ward and ways to become involved." />
          <div className="grid grid-cols-1 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 pt-5">
            {dataImageCards.map((card: IImageCard) => (
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
