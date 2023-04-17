import Head from "next/head"

import PrimaryButton from "../../components/elements/buttons/PrimaryButton"
import PageHeader from "../../components/elements/headers/PageHeader"
import Icon from "../../components/elements/icons/Icon"
import Layout from "../../components/layouts/Layout"
import Agenda, { IAgenda } from "../../components/modules/agenda/Agenda"
import { config } from "../../config"
import { agendaRequest, convertAgenda } from "../../services/agenda.service"
import { setHttpHeaders } from "../../shared/utils/api.util"
import { getDateDisplay } from "../../shared/utils/date.util"

export const getServerSideProps = async ({ req, res }) => {
  setHttpHeaders(res)
  const agenda = await fetch(agendaRequest)
  return {
    props: {
      agenda: await agenda.json(),
    },
  }
}

function SacramentAgenda({ agenda }) {
  const meetingAgenda: IAgenda = {
    date: getDateDisplay(agenda.date, 7),
    agenda: convertAgenda(agenda),
  }

  return (
    <>
      <Head>
        <title>{config.wardName} - Sacrament Agenda</title>
      </Head>
      <PageHeader title="Sacrament Meeting Agenda" />
      <Layout>
        <PrimaryButton type="link" className="absolute top-2 md:top-5" link={{ url: "/sunday" }}>
          <Icon name="chevron-left" className="h-5 w-5" />
          <span className="mr-2 text-sm uppercase font-semibold">Back</span>
        </PrimaryButton>
        <Agenda {...meetingAgenda} />
        <PrimaryButton type="link" className="mt-20" link={{ url: "/sunday" }}>
          <Icon name="chevron-left" className="h-5 w-5" />
          <span className="mr-2 text-sm uppercase font-semibold">Back</span>
        </PrimaryButton>
      </Layout>
    </>
  )
}

export default SacramentAgenda
