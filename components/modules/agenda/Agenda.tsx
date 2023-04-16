import AgendaDivider from "../../elements/dividers/AgendaDivider"
import { IDateDisplay } from "../../../shared/utils/date.util";

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

const Agenda = ({ agenda }: IAgenda) => {
    const dividerFont = "text-lg md:text-2xl text-gray-700 font-bold"
    return (
        <>
            <div className="grid grid-cols-2 md:grid-cols-3 w-full md:w-2/3 mx-auto gap-4 pt-8">
                <AgendaItem name={agenda.presiding.name} title={agenda.presiding.title} />
                <AgendaItem name={agenda.conducting.name} title={agenda.conducting.title} />
                <AgendaItem name={agenda.chorister.name} title={agenda.chorister.title} />
                <AgendaItem name={agenda.organist.name} title={agenda.organist.title} />
                <AgendaItem name={agenda.openHymn.name} title={agenda.openHymn.title} />
                <AgendaItem name={agenda.invocation.name} title={agenda.invocation.title} />
            </div>

            <AgendaDivider text="Ward Business" className="mt-8 md:mt-12" fontClass={dividerFont} />

            <div className="grid grid-cols-2 md:grid-cols-3 w-full md:w-2/3 mx-auto gap-4 pt-4">
                <AgendaItem name={agenda.sacramentHymn.name} title={agenda.sacramentHymn.title} />
            </div>

            <AgendaDivider text="Administration of the Sacrament" className="mt-8 md:mt-12" fontClass={dividerFont} />

            {agenda.programContent.sort((a, b) => a.order - b.order).map((content) =>
            <div key={content.order} className="grid grid-cols-2 md:grid-cols-3 w-full md:w-2/3 mx-auto gap-4 pt-4">
                <AgendaItem name={content.name} title={content.title} />
            </div>
            )}

            <div className="grid grid-cols-2 md:grid-cols-3 w-full md:w-2/3 mx-auto gap-4 pt-4">
                <AgendaItem name={agenda.closingHymn.name} title={agenda.closingHymn.title} />
                <AgendaItem name={agenda.benediction.name} title={agenda.benediction.title} />
            </div>

            <AgendaDivider text="Announcements" className="mt-8 md:mt-12" fontClass={dividerFont} />

            {agenda.wardAnnouncement.map((announcement) =>
            <div key={announcement.title} className="grid grid-cols-2 w-full md:w-2/3 mx-auto gap-4 pt-4">
                <div className="font-bold">{announcement.title}:</div>
                <div>{announcement.name}</div>
            </div>
            )}
        </>
    )
}

export const AgendaItem = ({title, name} : IAgendaItem)  => {
    return (
      <>
          <div className="font-bold">{title}</div>
          <div className="border-b-2 border-gray-600 border-dotted md:block hidden"></div>
          <div className="text-right">{name}</div>
      </>
    )
}
export default Agenda
