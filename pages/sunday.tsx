import Head from "next/head"
import Layout from "../components/layout/Layout"
import PageHeader from "../components/headers/PageHeader"
import Schedule, { IScheduleDate } from "../components/schedule/Schedule"
import { dataScheduleTimes } from "../content/dataSunday"
import { getNextDayOfWeek } from "../components/shared/Utilities"
import PrimaryButton from "../components/buttons/PrimaryButton"
import Icon from "../components/shared/Icon"

function Sunday() {
  const nextSunday: IScheduleDate = getNextDayOfWeek(new Date(), 7)
  return (
    <>
      <Head>
        <title>Maples 3rd Ward - Sunday Meetings</title>
      </Head>
      <PageHeader title="Sunday Meetings" subtitle="Below is a list of scheduled events this upcoming Sunday" />
      <Layout>
        <PrimaryButton type="link" className="absolute top-2 md:top-5" link={{ url: "/" }}>
          <Icon name="chevron-left" />
          <span className="mr-2 text-sm uppercase font-semibold">Back</span>
        </PrimaryButton>
        <Schedule date={nextSunday} times={dataScheduleTimes} />
      </Layout>
    </>
  )
}

export default Sunday
