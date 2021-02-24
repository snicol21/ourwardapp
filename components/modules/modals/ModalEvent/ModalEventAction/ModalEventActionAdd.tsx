import { useState } from "react"
import { useForm } from "react-hook-form"
import Icon from "../../../../elements/icons/Icon"

const getInputStyle = {
  default: "border-gray-300 focus:ring-indigo-500 focus:border-indigo-500",
  error: "border-red-300 text-red-900 placeholder-red-300 focus:ring-red-500 focus:border-red-500",
}

const Error = () => {
  return (
    <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
      <Icon name="alert" className="h-5 w-5 text-red-500" />
    </div>
  )
}

const ModalEventActionAdd = () => {
  const [hasButton, setHasButton] = useState(false)
  const urlPattern = /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/
  const regExpUrlPattern = new RegExp(urlPattern, "i")

  const { register, handleSubmit, errors } = useForm()
  const onSubmit = (formData) => {
    alert(JSON.stringify(formData))
  }

  return (
    <form className="space-y-8 divide-y divide-gray-200 px-4 py-5 sm:px-6" onSubmit={handleSubmit(onSubmit)}>
      <div className="space-y-8 divide-y divide-gray-200">
        <div>
          <h3 className="text-lg leading-6 font-medium text-gray-900">Adding a new event</h3>
          <p className="mt-1 text-sm text-gray-500">
            This information will be displayed publicly so ensure that the information detailed in your event is appropriate for anybody to see and share.
          </p>

          <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
            {/* Title */}
            <div className="sm:col-span-4">
              <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                Name*
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <input
                  ref={register({ required: true })}
                  name="title"
                  type="text"
                  id="title"
                  autoComplete="title"
                  className={`shadow-sm block w-full sm:text-sm rounded-md ${getInputStyle[errors.title ? "error" : "default"]}`}
                />
                {errors.title && <Error />}
              </div>
              {errors.title ? (
                <p className="mt-2 text-sm text-red-600" id="title-error">
                  {errors.title?.type === "required" && <>Name is required</>}
                </p>
              ) : (
                <p className="mt-2 text-sm text-gray-500">(ex: Bishop Mobile)</p>
              )}
            </div>

            {/* Subtitle */}
            <div className="sm:col-span-3">
              <label htmlFor="subtitle" className="block text-sm font-medium text-gray-700">
                Type of Event
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <input
                  ref={register}
                  name="subtitle"
                  type="text"
                  id="subtitle"
                  autoComplete="subtitle"
                  placeholder="(optional)"
                  className={`shadow-sm block w-full sm:text-sm rounded-md ${getInputStyle["default"]}`}
                />
              </div>
              <p className="mt-2 text-sm text-gray-500">(ex: Ward Activity)</p>
            </div>

            {/* Date */}
            <div className="sm:col-span-3 sm:col-start-1">
              <label htmlFor="date" className="block text-sm font-medium text-gray-700">
                Date*
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <input
                  ref={register({ required: true })}
                  name="date"
                  type="date"
                  id="date"
                  autoComplete="date"
                  className={`shadow-sm block w-full sm:text-sm rounded-md ${getInputStyle[errors.date ? "error" : "default"]}`}
                />
                {errors.date && <Error />}
              </div>
              {errors.date ? (
                <p className="mt-2 text-sm text-red-600" id="date-error">
                  {errors.date?.type === "required" && <>Date is required</>}
                </p>
              ) : (
                <p className="mt-2 text-sm text-gray-500">(ex: 02/13/2021)</p>
              )}
            </div>

            {/* Duration */}
            <div className="sm:col-span-3">
              <label htmlFor="duration" className="block text-sm font-medium text-gray-700">
                Duration*
              </label>
              <div className="mt-1">
                <select
                  ref={register}
                  name="duration"
                  id="duration"
                  autoComplete="duration"
                  defaultValue={60}
                  className={`shadow-sm block w-full sm:text-sm rounded-md ${getInputStyle["default"]}`}
                >
                  <option value={15}>15 minutes</option>
                  <option value={30}>30 minutes</option>
                  <option value={45}>45 minutes</option>
                  <option value={60}>1 hour</option>
                  <option value={90}>1 hour 30 minutes</option>
                  <option value={120}>2 hours</option>
                  <option value={150}>2 hours 30 minutes</option>
                  <option value={180}>3 hours</option>
                  <option value={210}>3 hours 30 minutes</option>
                  <option value={240}>4 hours</option>
                </select>
              </div>
            </div>

            {/* Location */}
            <div className="sm:col-span-3">
              <label htmlFor="location" className="block text-sm font-medium text-gray-700">
                Location
              </label>
              <div className="mt-1">
                <input
                  ref={register}
                  name="location"
                  type="text"
                  id="location"
                  autoComplete="location"
                  placeholder="(optional)"
                  className={`shadow-sm block w-full sm:text-sm rounded-md ${getInputStyle["default"]}`}
                />
              </div>
              <p className="mt-2 text-sm text-gray-500">(ex: Relief Society room)</p>
            </div>

            {/* Details */}
            <div className="sm:col-span-6">
              <label htmlFor="details" className="block text-sm font-medium text-gray-700">
                Details
              </label>
              <div className="mt-1">
                <textarea
                  ref={register}
                  name="details"
                  id="details"
                  rows={3}
                  className={`shadow-sm block w-full sm:text-sm rounded-md ${getInputStyle["default"]}`}
                ></textarea>
              </div>
              <p className="mt-2 text-sm text-gray-500">Write a few sentences about this event/announcement.</p>
            </div>

            {/* Tile Image */}
            <div className="sm:col-span-6">
              <label htmlFor="image_small" className="block text-sm font-medium text-gray-700">
                Tile Image
              </label>
              <div className="mt-1 flex items-center">
                <span className="flex justify-center items-center h-16 w-16 rounded-full overflow-hidden bg-gray-100">
                  <Icon name="add-image" className="h-10 w-10 text-gray-300" />
                </span>
                <button
                  type="button"
                  className="ml-5 bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Change
                </button>
              </div>
            </div>

            {/* Header Image */}
            <div className="sm:col-span-6">
              <label htmlFor="image_large" className="block text-sm font-medium text-gray-700">
                Header Image
              </label>
              <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                <div className="space-y-1 text-center">
                  <Icon name="add-image" className="mx-auto h-12 w-12 text-gray-400" />
                  <div className="flex text-sm text-gray-600">
                    <label
                      htmlFor="file-upload"
                      className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                    >
                      <span>Upload a file</span>
                      <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                    </label>
                    <p className="pl-1">or drag and drop</p>
                  </div>
                  <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-6">
            <legend className="text-base font-medium text-gray-900">
              Do you need a <span className="text-primary">button</span> to redirect people to a sign-up page?
            </legend>
            <div className="mt-4 space-y-4">
              <div className="relative flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="comments"
                    name="comments"
                    type="checkbox"
                    onChange={() => setHasButton(!hasButton)}
                    checked={hasButton}
                    className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label htmlFor="comments" className="font-medium text-gray-700">
                    Yes, I need a button
                  </label>
                  <p className="text-gray-500">.</p>
                </div>
              </div>
            </div>
            {hasButton && (
              <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                {/* Button Label */}
                <div className="sm:col-span-2 sm:col-start-1">
                  <label htmlFor="button_text" className="block text-sm font-medium text-gray-700">
                    Button Label*
                  </label>
                  <div className="mt-1 relative rounded-md shadow-sm">
                    <input
                      ref={register({ required: true })}
                      name="button_text"
                      type="text"
                      id="button_text"
                      autoComplete="button_text"
                      className={`shadow-sm block w-full sm:text-sm rounded-md ${getInputStyle[errors.button_text ? "error" : "default"]}`}
                    />
                    {errors.button_text && <Error />}
                  </div>
                  {errors.button_text ? (
                    <p className="mt-2 text-sm text-red-600" id="button_text-error">
                      {errors.button_text?.type === "required" && <>Button label is required</>}
                    </p>
                  ) : (
                    <p className="mt-2 text-sm text-gray-500">(ex: Sign Up)</p>
                  )}
                </div>

                {/* Button Color */}
                <div className="sm:col-span-2">
                  <label htmlFor="button_color" className="block text-sm font-medium text-gray-700">
                    Button Color*
                  </label>
                  <div className="mt-1 flex items-center">
                    <div className="w-full pr-2">
                      <select
                        ref={register}
                        name="button_color"
                        id="button_color"
                        autoComplete="button_color"
                        className={`shadow-sm block w-full sm:text-sm rounded-md ${getInputStyle["default"]}`}
                      >
                        <option value={"primary"}>Default</option>
                        <option value={"blue"}>Blue</option>
                        <option value={"red"}>Red</option>
                        <option value={"green"}>Green</option>
                        <option value={"gray"}>Gray</option>
                      </select>
                    </div>
                    <div>
                      <div className="h-5 w-5 bg-primary rounded-full"></div>
                    </div>
                  </div>
                </div>

                {/* Button Url */}
                <div className="sm:col-span-6">
                  <label htmlFor="button_link_url" className="block text-sm font-medium text-gray-700">
                    Button Link*
                  </label>
                  <div className="mt-1 relative rounded-md shadow-sm">
                    <input
                      ref={register({
                        required: true,
                        pattern: regExpUrlPattern,
                      })}
                      name="button_link_url"
                      type="text"
                      id="button_link_url"
                      autoComplete="button_link_url"
                      className={`shadow-sm block w-full sm:text-sm rounded-md ${getInputStyle[errors.button_link_url ? "error" : "default"]}`}
                    />
                    {errors.button_link_url && <Error />}
                  </div>
                  {errors.button_link_url ? (
                    <p className="mt-2 text-sm text-red-600" id="button_link_url-error">
                      {errors.button_link_url?.type === "required" && <>Website is required</>}
                      {errors.button_link_url?.type === "pattern" && <>Enter a valid url!</>}
                    </p>
                  ) : (
                    <p className="mt-2 text-sm text-gray-500">(ex: https://docs.google.com/forms/my-google-form-that-i-made)</p>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="pt-5">
          <div className="flex justify-end">
            <button
              type="submit"
              className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </form>
  )
}

export default ModalEventActionAdd
