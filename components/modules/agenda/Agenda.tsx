import { parseHymnNumber } from "../../../services/hymn.service"
import { IDateDisplay } from "../../../shared/utils/date.util"
import AgendaDivider from "../../elements/dividers/AgendaDivider"
import SectionHeader from "../../elements/headers/SectionHeader"
import Hymn from "../../elements/hymn/Hymn"

export type IAgenda = {
  date: IDateDisplay
  agenda: IAgendaData
}
export type IAgendaData = {
  presiding: IAgendaItem
  conducting: IAgendaItem
  organist: IAgendaItem
  chorister: IAgendaItem
  openHymn: IAgendaItem
  invocation: IAgendaItem
  sacramentHymn: IAgendaItem
  closingHymn: IAgendaItem
  benediction: IAgendaItem
  programContent: IAgendaContent[]
  wardAnnouncement: IAgendaItem[]
}

export type IAgendaItem = {
  title: string
  name: string
  hymn?: boolean
}

export type IAgendaContent = {
  title: string
  name: string
  order: number
}

const Agenda = ({ date, agenda }: IAgenda) => {
  const dividerFont = "text-sm text-gray-500 font-light uppercase italic"
  return (
    <>
      <SectionHeader title={date.dateFullDisplay} />
      <div className="w-full md:w-4/5 mx-auto bg-white px-5 py-8 md:px-16 md:py-20 mt-8 md:mt-12 lg:mt-14 rounded-lg text-sm sm:text-base">
        <div className="flex flex-col gap-4">
          <AgendaItem name={agenda.presiding.name} title={agenda.presiding.title} />
          <AgendaItem name={agenda.conducting.name} title={agenda.conducting.title} />
          <AgendaItem name={agenda.chorister.name} title={agenda.chorister.title} />
          <AgendaItem name={agenda.organist.name} title={agenda.organist.title} />
          <AgendaItem name={agenda.openHymn.name} title={agenda.openHymn.title} hymn />
          <AgendaItem name={agenda.invocation.name} title={agenda.invocation.title} />
        </div>

        <AgendaDivider text="Ward Business" className="mt-8" fontClass={dividerFont} borderClass="border-gray-400" />

        <div className="flex flex-col gap-4 pt-8">
          <AgendaItem name={agenda.sacramentHymn.name} title={agenda.sacramentHymn.title} hymn />
        </div>

        <AgendaDivider text="Administration of the Sacrament" className="mt-8 mb-4" fontClass={dividerFont} borderClass="border-gray-400" />

        {agenda.programContent
          .sort((a, b) => a.order - b.order)
          .map((content) => (
            <div key={content.order} className="flex flex-col gap-4 pt-4">
              <AgendaItem name={content.name} title={content.title} />
            </div>
          ))}

        <div className="flex flex-col gap-4 pt-4">
          <AgendaItem name={agenda.closingHymn.name} title={agenda.closingHymn.title} hymn />
          <AgendaItem name={agenda.benediction.name} title={agenda.benediction.title} />
        </div>

        {agenda.wardAnnouncement.length > 0 && (
          <>
            <AgendaDivider text="Announcements" className="mt-8 mb-4" fontClass="text-lg md:text-2xl text-gray-700 font-bold" />
            {agenda.wardAnnouncement.map((announcement) => (
              <div key={announcement.title} className="grid grid-cols-1 md:grid-cols-2 md:gap-4 py-3 md:py-4">
                <h2 className="text-md font-bold">{announcement.title}:</h2>
                <p className="text-sm md:col-span-1 pt-1 md:pt-0">{announcement.name}</p>
              </div>
            ))}
          </>
        )}
      </div>
    </>
  )
}

export const AgendaItem = ({ title, name, hymn = false }: IAgendaItem) => {
  let hymnNumber: number | null
  if (hymn) {
    hymnNumber = parseHymnNumber(name)
  }
  return (
    <div className="dots-in-between w-full">
      <span className="font-bold bg-white pr-3">{title}</span>
      <span className="text-right bg-white float-right pl-3">{hymnNumber ? <Hymn number={hymnNumber} name={name} /> : name}</span>
    </div>
  )
}
export default Agenda
