import Head from "next/head"
import Layout from "../components/layouts/Layout"
import PageHeader from "../components/elements/headers/PageHeader"
import PrimaryButton from "../components/elements/buttons/PrimaryButton"
import Icon from "../components/elements/icons/Icon"
import HeroCard from "../components/modules/cards/HeroCard"
import SectionHeader from "../components/elements/headers/SectionHeader"
import Divider from "../components/elements/dividers/Divider"
import ContactCard, { IContactCard } from "../components/modules/cards/ContactCard"
import { dataHeroCard, dataFaceCards } from "../data/dataYouthConference"

function YouthConference() {
  return (
    <>
      <Head>
        <title>Youth Conference</title>
      </Head>
      <PageHeader title="Youth Conference" subtitle="August 5—7 2021" />
      <Layout>
        <PrimaryButton type="link" className="absolute top-2 md:top-5" link={{ url: "/" }}>
          <Icon name="chevron-left" className="h-5 w-5" />
          <span className="mr-2 text-sm uppercase font-semibold">Back</span>
        </PrimaryButton>
        <div className="pt-16">
          <HeroCard {...dataHeroCard} />
        </div>
        <div className="pt-16">
          <Divider />
          <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:gap-24 lg:items-start">
            <div className="mt-5 relative sm:py-16 lg:py-0">
              <div className="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0 lg:max-w-none lg:py-20">
                <div className="relative pt-64 pb-10 overflow-hidden">
                  <img
                    className="absolute inset-0 h-full w-full object-cover rounded-2xl"
                    src="/images/youth-conference/M3W-youthconference-agenda.jpg"
                    alt=""
                  />
                </div>
              </div>
            </div>

            <div className="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0">
              <div className="pt-12 sm:pt-16 lg:pt-20">
                <h2 className="text-3xl text-gray-900 font-extrabold tracking-tight sm:text-4xl">Agenda</h2>
                <div className="mt-6 text-gray-500 space-y-6">
                  <h3 className="text-xl text-gray-900 font-extrabold tracking-tight sm:text-2xl">Thursday, August 5th</h3>
                  <ul className="list-inside list-disc space-y-3">
                    <li>7:00 PM</li>
                    <li>Oaks East Park - 6129 W 8200 S, West Jordan (across the street from Fox Hollow Elementary)</li>
                    <li>Treats &amp; yard Games</li>
                  </ul>
                  <h3 className="text-xl text-gray-900 font-extrabold tracking-tight sm:text-2xl">Friday, August 6th</h3>
                  <ul className="list-inside list-disc space-y-3">
                    <li>9:30 AM until 8:30 or 9:00 PM</li>
                    <li>“Ball Park Building” 8834 Duck Ridge Way, West Jordan</li>
                    <li>Breakfast, Lunch, Dinner &amp; snacks will be provided</li>
                    <li>We will have reusable water bottles for everyone to use for Friday &amp; Saturday.</li>
                    <li>Outside activity in the morning for about an hour, wear sunscreen and comfortable clothes</li>
                  </ul>
                  <h3 className="text-xl text-gray-900 font-extrabold tracking-tight sm:text-2xl">Saturday, August 7th</h3>
                  <ul className="list-inside list-disc space-y-3">
                    <li>10:00 AM until 6 or 6:30 PM</li>
                    <li>“Ball Park Building” 8834 Duck Ridge Way, West Jordan</li>
                    <li>Lunch and morning and evening snacks will be provided</li>
                    <li>Please remember to bring back your water bottle!</li>
                    <li>Yoga outside at 10 am. Bring a beach towel, wear comfortable clothes, and sunscreen</li>
                    <li>Water fight outside at the end of the day before we go home. (you’ll be needing that beach towel from yoga!)</li>
                  </ul>
                  <h3 className="text-xl text-gray-900 font-extrabold tracking-tight sm:text-2xl">Sunday, August 8th</h3>
                  <ul className="list-inside list-disc space-y-3">
                    <li>7:00 PM</li>
                    <li>Our ward building in the Relief Society Room</li>
                    <li>Testimony Meeting &amp; dessert</li>
                    <li>Sunday best please</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <Divider className="pt-16" />
          <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:gap-24 lg:items-start">
            <div className="mt-5 relative sm:py-16 lg:py-0">
              <div className="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0 lg:max-w-none lg:py-20">
                <div className="relative pt-64 pb-10 overflow-hidden">
                  <img className="absolute inset-0 h-full w-full object-cover rounded-2xl" src="/images/youth-conference/M3W_YouthConf_Donate.png" alt="" />
                </div>
              </div>
            </div>

            <div className="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0">
              <div className="pt-12 sm:pt-16 lg:pt-20">
                <h2 className="text-3xl text-gray-900 font-extrabold tracking-tight sm:text-4xl">Service Project Donations</h2>
                <div className="mt-6 text-gray-500 space-y-6">
                  <p className="text-lg">
                    Student weekend kits are sent home in the backpacks of insecure children in our community. The pack contains enough food for four meals and
                    several snacks.
                  </p>
                  <h3 className="text-xl text-gray-900 font-extrabold tracking-tight sm:text-2xl">What you can donate:</h3>
                  <ul className="list-inside list-disc space-y-3">
                    <li>Individual size microwaveable meals (Easy Mac, ravioli, spaghetti and meatballs)</li>
                    <li>Fruit cup/squeeze pouch or applesauce</li>
                    <li>Shelf stable pudding cup</li>
                    <li>Juice boxes or pouches</li>
                    <li>Instance oatmeal</li>
                    <li>Individual sized peanut butter crackers or cheese crackers</li>
                    <li>Granola bars (no peanuts)</li>
                    <li>Gallon ziploc bags</li>
                  </ul>
                  <div className="relative py-5 overflow-hidden">
                    <img className="h-full w-full rounded-2xl" src="/images/youth-conference/M3W_YouthConf_Food.png" alt="" />
                  </div>
                  <h3 className="text-xl text-gray-900 font-extrabold tracking-tight sm:text-2xl">Where to take donations:</h3>
                  <p className="text-lg">
                    Items can be dropped off at the Gough&apos;s (7867&#160;S.&#160;Highlandpoint&#160;Way) or dropped off at the clerks office on Sundays
                    during the month of July.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="pt-16">
          <Divider />
          <SectionHeader title="Contact" />
          <div className="grid grid-cols-1 gap-x-6 sm:grid-cols-2 mt-5">
            {dataFaceCards
              .filter((card) => !card.hidden)
              .map((card: IContactCard) => (
                <div key={card.title} className="py-3 w-full">
                  <ContactCard {...Object.assign(card, { className: "col-span-1" })} />
                </div>
              ))}
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

export default YouthConference
