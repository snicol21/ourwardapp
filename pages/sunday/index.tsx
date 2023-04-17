import Head from "next/head"

import PrimaryButton from "../../components/elements/buttons/PrimaryButton"
import PageHeader from "../../components/elements/headers/PageHeader"
import Icon from "../../components/elements/icons/Icon"
import Layout from "../../components/layouts/Layout"
import Schedule, { ISchedule, IScheduleTime } from "../../components/modules/schedules/Schedule"
import { config } from "../../config"
import { dataSpecialSchedules } from "../../data/dataSchedules"
import { convertSchedules, schedulesRequest } from "../../services/schedule.service"
import { setHttpHeaders } from "../../shared/utils/api.util"
import { getNextSunday, getScheduleDate, isSameOrAfterToday } from "../../shared/utils/date.util"

export const getServerSideProps = async ({ req, res }) => {
  setHttpHeaders(res)
  const schedules = await fetch(schedulesRequest)
  return {
    props: {
      schedules: await schedules.json(),
    },
  }
}

function Sunday({ schedules }) {
  const dataSundayScheduleTimes: IScheduleTime[] = convertSchedules(schedules)
  const sundaySchedule: ISchedule = {
    date: getScheduleDate(getNextSunday()),
    times: dataSundayScheduleTimes,
  }
  const schedule = dataSpecialSchedules
    .filter((e) => isSameOrAfterToday(e.date.date))
    .concat(sundaySchedule)
    .sort((a: ISchedule, b: ISchedule) => a.date.date.getTime() - b.date.date.getTime())[0]
  return (
    <>
      <Head>
        <title>{config.wardName} - Sunday Meetings</title>
      </Head>
      <PageHeader title="Sunday Meetings" subtitle="Below is a list of scheduled events this upcoming Sunday" />
      <Layout>
        <PrimaryButton type="link" className="absolute top-2 md:top-5" link={{ url: "/" }}>
          <Icon name="chevron-left" className="h-5 w-5" />
          <span className="mr-2 text-sm uppercase font-semibold">Back</span>
        </PrimaryButton>
        <Schedule {...schedule} />
        <PrimaryButton type="link" className="mt-20" link={{ url: "/" }}>
          <Icon name="chevron-left" className="h-5 w-5" />
          <span className="mr-2 text-sm uppercase font-semibold">Back</span>
        </PrimaryButton>
      </Layout>
    </>
  )
}

export default Sunday
