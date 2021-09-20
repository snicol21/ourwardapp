import Head from "next/head"
import Layout from "../components/layouts/Layout"
import PageHeader from "../components/elements/headers/PageHeader"
import PrimaryButton from "../components/elements/buttons/PrimaryButton"
import Icon from "../components/elements/icons/Icon"
import HeroCard from "../components/modules/cards/HeroCard"
import ImageCard, { IImageCard } from "../components/modules/cards/ImageCard"
import BlockQuote from "../components/elements/headers/BlockQuote"
import { dataHeroCard, dataBlockQuote, dataImageCards, dataFaceCard } from "../data/dataWelfare"
import SectionHeader from "../components/elements/headers/SectionHeader"
import Divider from "../components/elements/dividers/Divider"
import ContactCard from "../components/modules/cards/ContactCard"

function Welfare() {
  return (
    <>
      <Head>
        <title>Maples 3rd Ward - Welfare &amp; Service </title>
      </Head>
      <PageHeader title="Welfare &amp; Service" subtitle="Giving your time to those in need is giving your time to your Heavenly Father" />
      <Layout>
        <PrimaryButton type="link" className="absolute top-2 md:top-5" link={{ url: "/" }}>
          <Icon name="chevron-left" className="h-5 w-5" />
          <span className="mr-2 text-sm uppercase font-semibold">Back</span>
        </PrimaryButton>
        <SectionHeader title="Next Opportunity" />
        <div className="pt-16">
          <HeroCard {...dataHeroCard} />
        </div>
        <div className="pt-16">
          <BlockQuote {...dataBlockQuote} />
        </div>
        {dataImageCards.filter((card) => !card.hidden).length > 0 && (
          <>
            <SectionHeader title="Upcoming Opportunities" />
            <div className="grid grid-cols-1 gap-x-6 sm:grid-cols-2 /*lg:grid-cols-3*/ pt-5">
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
          <div className="grid grid-cols-1 sm:grid-cols-4 pt-10">
            <ContactCard {...Object.assign(dataFaceCard, { className: "col-span-1 sm:col-span-2 sm:col-start-2" })} />
          </div>
        </div>
        <PrimaryButton type="link" className="mt-20" link={{ url: "/" }}>
          <Icon name="chevron-left" className="h-5 w-5" />
          <span className="mr-2 text-sm uppercase font-semibold">Back</span>
        </PrimaryButton>
      </Layout>
    </>
  )
}

export default Welfare
