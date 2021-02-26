import { IModalEventActionData } from "../../../../../shared/types"

const ModalEventActionUpdate = ({ setShowModal }: IModalEventActionData) => {
  return (
    <div className="space-y-8 divide-y divide-gray-200 px-4 py-5 sm:px-6">
      <div className="space-y-8 divide-y divide-gray-200">
        <div>
          <h3 className="text-lg leading-6 font-medium text-gray-900">Updating an existing event</h3>
          <p className="mt-1 text-sm text-gray-500">
            This information will be displayed publicly so ensure that the information detailed in your event is appropriate for anybody to see and share.
          </p>
        </div>
      </div>
    </div>
  )
}

export default ModalEventActionUpdate
