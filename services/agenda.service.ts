import { IAgendaData } from "../components/modules/agenda/Agenda"
import { config } from "../config"

const { apiUrl, apiWard, apiHeaders } = config

/**
 * REQUESTS
 */
export const agendaRequest = new Request(`${apiUrl}/agenda/${apiWard}`, apiHeaders)

/**
 * CONVERTER - AGENDA
 */
export const convertAgenda = (agenda: IAgendaResponse): IAgendaData => {
  return {
    presiding: agenda.presiding,
    conducting: agenda.conducting,
    chorister: agenda.chorister,
    organist: agenda.organist,
    openHymn: agenda.openHymn,
    invocation: agenda.invocation,
    sacramentHymn: agenda.sacramentHymn,
    programContent: agenda.programContent.map((content) => {
      return {
        title: content.title,
        name: content.name,
        order: content.order,
      }
    }),
    closingHymn: agenda.closingHymn,
    benediction: agenda.benediction,
    wardAnnouncement: agenda.wardAnnouncement.map((announcement) => {
      return {
        title: announcement.title,
        name: announcement.description,
      }
    }),
  }
}

/**
 * RESPONSE TYPE
 */
export type IAgendaResponse = {
  id: string
  wardPath: string
  date: Date
  presiding: {
    title: string
    name: string
  }
  conducting: {
    title: string
    name: string
  }
  organist: {
    title: string
    name: string
  }
  chorister: {
    title: string
    name: string
  }
  openHymn: {
    title: string
    name: string
  }
  invocation: {
    title: string
    name: string
  }
  sacramentHymn: {
    title: string
    name: string
  }
  closingHymn: {
    title: string
    name: string
  }
  benediction: {
    title: string
    name: string
  }
  programContent: [
    {
      title: string
      name: string
      order: number
    }
  ]
  wardAnnouncement: [
    {
      title: string
      description: string
    }
  ]
}
