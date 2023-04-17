import { IDateDisplay } from "../../../shared/utils/date.util"
import AgendaDivider from "../../elements/dividers/AgendaDivider"
import Divider from "../../elements/dividers/Divider"
import SectionHeader from "../../elements/headers/SectionHeader"

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
}

export type IAgendaContent = {
  title: string
  name: string
  order: number
}

const Agenda = ({ date, agenda }: IAgenda) => {
  const dividerFont = "text-sm text-gray-400 font-light uppercase italic"
  return (
    <>
      <SectionHeader title={date.dateFullDisplay} />
      <Divider className="mt-8 md:mt-12 lg:mt-14" />
      <div className="w-full md:w-2/3 mx-auto">
        <div className="flex flex-col gap-4 pt-8">
          <AgendaItem name={agenda.presiding.name} title={agenda.presiding.title} />
          <AgendaItem name={agenda.conducting.name} title={agenda.conducting.title} />
          <AgendaItem name={agenda.chorister.name} title={agenda.chorister.title} />
          <AgendaItem name={agenda.organist.name} title={agenda.organist.title} />
          <AgendaItem name={agenda.openHymn.name} title={agenda.openHymn.title} />
          <AgendaItem name={agenda.invocation.name} title={agenda.invocation.title} />
        </div>

        <AgendaDivider text="Ward Business" className="mt-8" fontClass={dividerFont} borderClass="border-gray-300" />

        <div className="flex flex-col gap-4 pt-8">
          <AgendaItem name={agenda.sacramentHymn.name} title={agenda.sacramentHymn.title} />
        </div>

        <AgendaDivider text="Administration of the Sacrament" className="mt-8 mb-4" fontClass={dividerFont} borderClass="border-gray-300" />

        {agenda.programContent
          .sort((a, b) => a.order - b.order)
          .map((content) => (
            <div key={content.order} className="flex flex-col gap-4 pt-4">
              <AgendaItem name={content.name} title={content.title} />
            </div>
          ))}

        <div className="flex flex-col gap-4 pt-4">
          <AgendaItem name={agenda.closingHymn.name} title={agenda.closingHymn.title} />
          <AgendaItem name={agenda.benediction.name} title={agenda.benediction.title} />
        </div>

        <AgendaDivider text="Announcements" className="mt-8" fontClass="text-lg md:text-2xl text-gray-700 font-bold" />

        {agenda.wardAnnouncement.map((announcement) => (
          <div key={announcement.title} className="grid grid-cols-2 gap-4 pt-8">
            <div className="font-bold">{announcement.title}:</div>
            <div>{announcement.name}</div>
          </div>
        ))}
      </div>
    </>
  )
}

export const AgendaItem = ({ title, name }: IAgendaItem) => {
  return (
    <div className="dots-in-between w-full">
      <span className="font-bold bg-gray-100 pr-3">{title}</span>
      <span className="text-right bg-gray-100 float-right pl-3">{name}</span>
    </div>
  )
}
export default Agenda
