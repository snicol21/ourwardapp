import Head from "next/head"
import Layout from "../components/layouts/Layout"
import PageHeader from "../components/elements/headers/PageHeader"
import Schedule, { IScheduleDate } from "../components/modules/schedules/Schedule"
import { dataScheduleTimes } from "../data/dataSunday"
import { getNextDayOfWeek } from "../shared/utils/date.util"
import PrimaryButton from "../components/elements/buttons/PrimaryButton"
import Icon from "../components/elements/icons/Icon"

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
          <Icon name="chevron-left" className="h-5 w-5" />
          <span className="mr-2 text-sm uppercase font-semibold">Back</span>
        </PrimaryButton>
        <Schedule date={nextSunday} times={dataScheduleTimes} />
        <PrimaryButton type="link" className="mt-20" link={{ url: "/" }}>
          <Icon name="chevron-left" className="h-5 w-5" />
          <span className="mr-2 text-sm uppercase font-semibold">Back</span>
        </PrimaryButton>
      </Layout>
    </>
  )
}

export default Sunday
