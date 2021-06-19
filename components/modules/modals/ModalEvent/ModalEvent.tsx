import PrimaryButton from "../../../elements/buttons/PrimaryButton"
import { IModal, IModalEventData } from "../../../../shared/types"
import { getDateDisplay } from "../../../../shared/utils/date.util"

const ModalEvent = ({ data }: IModal) => {
  const { title, subtitle, image, button, date, duration, location, details } = data as IModalEventData
  const dateDisplay = getDateDisplay(date, 7, duration)
  return (
    <div className="bg-white overflow-auto max-w-6xl w-full max-h-full">
      {image && (
        <div className="flex flex-shrink-0">
          <img className="h-36 w-full object-cover object-center lg:h-56" src={image.src} alt={image.alt || ""} />
        </div>
      )}
      <div className="bg-white shadow overflow-hidden">
        <div className="flex justify-between px-4 py-5 sm:px-6">
          <div>
            <h3 className="text-lg sm:text-2xl leading-6 font-semibold text-black">{title}</h3>
            {subtitle && <p className="mt-1 max-w-2xl text-md text-gray-500">{subtitle}</p>}
          </div>
          {button?.link && (
            <PrimaryButton link={button.link} color={button.color} size="sm" className="whitespace-nowrap">
              {button.text}
            </PrimaryButton>
          )}
        </div>
        <div className="border-t border-gray-200 px-4 py-2 sm:p-0">
          <dl className="sm:divide-y sm:divide-gray-200">
            {date && (
              <>
                <div className="py-2 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-md font-medium text-gray-500">Date</dt>
                  <dd className="mt-1 text-md font-semibold text-gray-900 sm:mt-0 sm:col-span-2 flex">
                    {dateDisplay.dateFullDisplay}
                    <span
                      className={`inline-flex items-center ml-2 px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        dateDisplay.isOver
                          ? "bg-red-100 text-red-800"
                          : dateDisplay.isWithin
                          ? "bg-green-100 text-green-800"
                          : "bg-primary-100 text-primary-800"
                      }`}
                    >
                      {dateDisplay.relativeDisplay}
                    </span>
                  </dd>
                </div>
                <div className="py-2 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-md font-medium text-gray-500">Time</dt>
                  {dateDisplay.timeRangeDisplay ? (
                    <dd className="mt-1 text-md font-semibold text-gray-900 sm:mt-0 sm:col-span-2">{dateDisplay.timeRangeDisplay}</dd>
                  ) : (
                    <dd className="mt-1 text-md font-semibold text-gray-900 sm:mt-0 sm:col-span-2">{dateDisplay.timeDisplay}</dd>
                  )}
                </div>
              </>
            )}
            {location && (
              <div className="py-2 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-md font-medium text-gray-500">Location</dt>
                <dd className="mt-1 text-md font-semibold text-gray-900 sm:mt-0 sm:col-span-2 whitespace-pre-wrap">{location}</dd>
              </div>
            )}
            {details && (
              <div className="py-2 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-md font-medium text-gray-500">Details</dt>
                <dd className="mt-1 text-sm font-semibold text-gray-900 sm:mt-0 sm:col-span-2 whitespace-pre-wrap">{details}</dd>
              </div>
            )}
          </dl>
        </div>
      </div>
    </div>
  )
}

export default ModalEvent
