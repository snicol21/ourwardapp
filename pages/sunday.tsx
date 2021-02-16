import Head from "next/head"
import Layout from "../components/layout/Layout"
import PageHeader from "../components/headers/PageHeader"
import Schedule, { IScheduleDate } from "../components/schedule/Schedule"
import { dataScheduleTimes } from "../content/dataSunday"
import { getNextDayOfWeek } from "../components/shared/Utilities"

function Sunday() {
  const nextSunday: IScheduleDate = getNextDayOfWeek(new Date(), 7)
  return (
    <>
      <Head>
        <title>Maples 3rd Ward - Sunday Meetings</title>
      </Head>
      <PageHeader title="Sunday Meetings" subtitle="Below is a list of scheduled events this upcoming Sunday" />
      <Layout>
        <Schedule date={nextSunday} times={dataScheduleTimes} />
      </Layout>
    </>
  )
}

export default Sunday
