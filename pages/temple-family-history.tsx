import Head from "next/head"
import Layout from "../components/layouts/Layout"
import PageHeader from "../components/headers/PageHeader"
import PrimaryButton from "../components/buttons/PrimaryButton"
import Icon from "../components/shared/Icon"
import HeroCard from "../components/cards/HeroCard"
import ImageCard, { IImageCard } from "../components/cards/ImageCard"
import BlockQuote from "../components/headers/BlockQuote"
import { dataHeroCard, dataBlockQuote, dataImageCards, dataFaceCard } from "../content/dataFamilyHistory"
import SectionHeader from "../components/headers/SectionHeader"
import Divider from "../components/dividers/Divider"
import FaceCard from "../components/cards/FaceCard"

function TempleAndFamilyHistory() {
  return (
    <>
      <Head>
        <title>Maples 3rd Ward - Temple &amp; Family History</title>
      </Head>
      <PageHeader title="Temple &amp; Family History" />
      <Layout>
        <PrimaryButton type="link" className="absolute top-2 md:top-5" link={{ url: "/" }}>
          <Icon name="chevron-left" className="h-5 w-5" />
          <span className="mr-2 text-sm uppercase font-semibold">Back</span>
        </PrimaryButton>
        <div className="pt-16">
          <HeroCard {...dataHeroCard} />
        </div>
        <div className="pt-16">
          <BlockQuote {...dataBlockQuote} />
        </div>
        {dataImageCards.filter((card) => !card.hidden).length > 0 && (
          <>
            <SectionHeader title="Resources" />
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
        <div className="pt-16">
          <Divider />
          <SectionHeader title="Contact" />
          <div className="grid grid-cols-4 pt-10">
            <FaceCard {...Object.assign(dataFaceCard, { className: "col-span-2 col-start-2" })} />
          </div>
        </div>
      </Layout>
    </>
  )
}

export default TempleAndFamilyHistory
