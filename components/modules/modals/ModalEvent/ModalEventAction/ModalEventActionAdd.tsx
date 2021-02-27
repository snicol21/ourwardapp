import { useState } from "react"
import { useForm } from "react-hook-form"
import { IButtonColor, IModalEventActionData } from "../../../../../shared/types"
import { isSameOrAfterToday } from "../../../../../shared/utils/date.util"
import Cropper from "react-easy-crop"
import Icon from "../../../../elements/icons/Icon"
import getCroppedImg, { dataURLtoFile } from "../../../../../shared/utils/image.util"
import fire from "../../../../../config/fire-config"

const db = fire.firestore()
const storage = fire.storage()

export type INewEvent = {
  title: string
  subtitle?: string
  date: Date
  time: string
  duration: number
  location?: string
  details?: string
  image?: {
    name: string
    url: string
  }
  buttonColor?: IButtonColor
  buttonLinkUrl?: string
  buttonText?: string
}

const regExpUrlPattern = new RegExp(
  /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/,
  "i"
)

const getInputStyle = {
  default: "border-gray-300 focus:ring-primary-500 focus:border-primary-500",
  error: "border-red-300 text-red-900 placeholder-red-300 focus:ring-red-500 focus:border-red-500",
}

const getButtonColor = {
  primary: "bg-primary-600",
  blue: "bg-blue-600",
  red: "bg-red-600",
  green: "bg-green-600",
  gray: "bg-gray-600",
}

const Error = () => {
  return (
    <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
      <Icon name="alert" className="h-5 w-5 text-red-500" />
    </div>
  )
}

const ModalEventActionAdd = ({ toggleModal }: IModalEventActionData) => {
  const { register, handleSubmit, errors } = useForm()

  const [hasButton, setHasButton] = useState(false)
  const [buttonColor, setButtonColor] = useState("primary")

  const [hasImage, setHasImage] = useState(false)
  const [image, setImage] = useState(null)
  const [imageCropped, setImageCropped] = useState(null)
  const [imageCroppedArea, setImageCroppedArea] = useState(null)
  const [imageCrop, setImageCrop] = useState({ x: 0, y: 0 })
  const [imageZoom, setImageZoom] = useState(1)
  const [showImageCrop, setShowImageCrop] = useState(true)

  const onSubmit = async (data: INewEvent) => {
    if (hasImage && showImageCrop) {
      onImageSaveCrop()
    }
    if (hasImage && imageCropped) {
      const file = dataURLtoFile(imageCropped, `${data.title.replace(/[^a-z0-9]/gi, "_").toLowerCase()}.png`)
      const storageRef = storage.ref()
      const fileRef = storageRef.child(file.name)
      await fileRef.put(file)
      data.image = {
        name: file.name,
        url: await fileRef.getDownloadURL(),
      }
    }
    db.collection("events").doc(data.title).set(data)
  }

  const uploadToFirebase = async (data) => {}

  const onImageChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      const reader = new FileReader()
      reader.readAsDataURL(e.target.files[0])
      reader.addEventListener("load", () => {
        setImage(reader.result)
      })
    }
  }

  const onImageDelete = () => {
    setImage(null)
    setImageCropped(null)
    setImageCroppedArea(null)
    setImageCrop({ x: 0, y: 0 })
    setImageZoom(1)
    setShowImageCrop(true)
  }

  const onImageCropComplete = (croppedAreaPercentage, imageCroppedAreaPixels) => {
    setImageCroppedArea(imageCroppedAreaPixels)
  }

  async function onImageSaveCrop() {
    const imageCropped = await getCroppedImg(image, imageCroppedArea)
    setImageCropped(imageCropped)
    setShowImageCrop(false)
  }

  return (
    <form id="add-event" className="space-y-8 divide-y divide-gray-200 px-4 py-5 sm:px-6" onSubmit={handleSubmit(onSubmit)}>
      <div className="space-y-8 divide-y divide-gray-200">
        <div>
          <h3 className="text-lg leading-6 font-medium text-gray-900">Adding a new event</h3>
          <p className="mt-1 text-sm text-gray-500">
            This information will be displayed publicly so ensure that the information detailed in your event is appropriate for anybody to see and share.
          </p>
          <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
            {/* Title */}
            <div className="sm:col-span-4 lg:col-span-3">
              <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                Name*
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <input
                  ref={register({ required: true })}
                  name="title"
                  type="text"
                  id="title"
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
                  placeholder="(optional)"
                  className={`shadow-sm block w-full sm:text-sm rounded-md ${getInputStyle["default"]}`}
                />
              </div>
              <p className="mt-2 text-sm text-gray-500">(ex: Ward Activity)</p>
            </div>

            {/* Date */}
            <div className="sm:col-span-2 sm:col-start-1">
              <label htmlFor="date" className="block text-sm font-medium text-gray-700">
                Date*
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <input
                  ref={register({
                    required: true,
                    valueAsDate: true,
                    validate: { isSameOrAfterToday: (value) => !!isSameOrAfterToday(value) },
                  })}
                  name="date"
                  type="date"
                  id="date"
                  className={`shadow-sm block w-full sm:text-sm rounded-md ${getInputStyle[errors.date ? "error" : "default"]}`}
                />
                {errors.date && <Error />}
              </div>
              {errors.date && (
                <p className="mt-2 text-sm text-red-600" id="date-error">
                  {errors.date?.type === "required" && <>Date is required</>}
                  {errors.date?.type === "isSameOrAfterToday" && <>Not a future date</>}
                </p>
              )}
            </div>

            {/* Time */}
            <div className="sm:col-span-2">
              <label htmlFor="time" className="block text-sm font-medium text-gray-700">
                Time*
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <input
                  ref={register({ required: true })}
                  name="time"
                  type="time"
                  id="time"
                  className={`shadow-sm block w-full sm:text-sm rounded-md ${getInputStyle[errors.time ? "error" : "default"]}`}
                />
                {errors.time && <Error />}
              </div>
              {errors.time && (
                <p className="mt-2 text-sm text-red-600" id="time-error">
                  {errors.time?.type === "required" && <>Time is required</>}
                </p>
              )}
            </div>

            {/* Duration */}
            <div className="sm:col-span-2">
              <label htmlFor="duration" className="block text-sm font-medium text-gray-700">
                Duration*
              </label>
              <div className="mt-1">
                <select
                  ref={register({ setValueAs: (value) => parseInt(value) })}
                  name="duration"
                  id="duration"
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
                  rows={5}
                  className={`shadow-sm block w-full sm:text-sm rounded-md ${getInputStyle["default"]}`}
                ></textarea>
              </div>
              <p className="mt-2 text-sm text-gray-500">Write a few sentences about this event/announcement.</p>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
            {/* Image Section */}
            <div className="sm:col-span-6 xl:col-span-3">
              <legend className="text-base font-medium text-gray-900">
                Do you want an <span className="underline font-semibold">image</span> to style your event/announcement?
              </legend>
              <div className="mt-4 space-y-4">
                <div className="relative flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="imageCheckbox"
                      name="imageCheckbox"
                      type="checkbox"
                      onChange={() => setHasImage(!hasImage)}
                      accept=".jpg, .png, .jpg"
                      checked={hasImage}
                      className="focus:ring-primary-500 h-5 w-5 text-primary-600 border-gray-300 rounded"
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label htmlFor="imageCheckbox" className="font-medium text-gray-700">
                      <span className="underline font-semibold">Yes</span>, I want an image
                    </label>
                    <p className="text-gray-500">.</p>
                  </div>
                </div>
              </div>
              {hasImage && (
                <div>
                  {/* Image */}
                  <label htmlFor="image" className="block text-sm font-medium text-gray-700">
                    Image*{" "}
                    <span className="text-gray-400 italic text-xs">
                      (works best if image has a <span className="underline text-semibold">2:1</span> aspect ratio)
                    </span>
                  </label>
                  {image ? (
                    <div className="mt-2">
                      <div className="relative w-full pt-1/2 border-2 border-transparent rounded-xl">
                        {showImageCrop ? (
                          <Cropper
                            image={image}
                            crop={imageCrop}
                            zoom={imageZoom}
                            aspect={2}
                            onCropChange={setImageCrop}
                            onZoomChange={setImageZoom}
                            onCropComplete={onImageCropComplete}
                          />
                        ) : (
                          <img className="absolute h-full w-full top-0 rounded-xl object-cover object-center" src={imageCropped} />
                        )}
                        <div className="absolute top-0 right-3 mt-3 space-x-2">
                          {showImageCrop ? (
                            <button
                              type="button"
                              onClick={() => onImageSaveCrop()}
                              className="inline-flex items-center p-2 border border-transparent rounded-full shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                            >
                              <Icon name="check" className="h-6 w-6" />
                            </button>
                          ) : (
                            <button
                              type="button"
                              onClick={() => setShowImageCrop(true)}
                              className="inline-flex items-center p-2 border border-transparent rounded-full shadow-sm text-white bg-yellow-600 hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
                            >
                              <Icon name="pencil" className="h-6 w-6" />
                            </button>
                          )}
                          <button
                            type="button"
                            onClick={onImageDelete}
                            className="inline-flex items-center p-2 border border-transparent rounded-full shadow-sm text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
                          >
                            <Icon name="trash" className="h-6 w-6" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <>
                      <div
                        className={`mt-2 relative w-full pt-1/2 flex justify-center items-center rounded-xl border-2 border-dashed ${
                          errors.image ? "border-red-600" : "border-gray-400"
                        }`}
                      >
                        <div className="absolute top-0 left-0 bottom-0 right-0">
                          <div className="flex justify-center items-center h-full">
                            <div className="space-y-1 text-center">
                              <Icon name="add-image" className="mx-auto h-12 w-12 text-gray-400" />
                              <div className="flex justify-center text-sm text-gray-600">
                                <label
                                  htmlFor="image"
                                  className={`relative cursor-pointer bg-transparent rounded-md font-medium focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 ${
                                    errors.image
                                      ? "text-red-600 hover:text-red-500 focus-within:ring-red-500"
                                      : "text-primary-600 hover:text-primary-500 focus-within:ring-primary-500"
                                  }`}
                                >
                                  <span>Upload an image</span>
                                  <input
                                    id="image"
                                    ref={register({ required: true, validate: { fileSize: (value) => value[0].size <= 2000000 } })}
                                    name="image"
                                    type="file"
                                    accept="image/*"
                                    className="sr-only"
                                    onChange={onImageChange}
                                  />
                                </label>
                              </div>
                              <p className="text-xs text-gray-500">PNG, JPG, GIF up to 2MB</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      {errors.image && (
                        <p className="mt-2 text-sm text-red-600" id="image-error">
                          {errors.image?.type === "required" && <>Image is required if you say you want one 😉</>}
                          {errors.image?.type === "fileSize" && <>Sorry, your file is too big. Please resize the image and keep it under 2 MB.</>}
                        </p>
                      )}
                    </>
                  )}
                </div>
              )}
            </div>
            {/* Button Section */}
            <div className="sm:col-span-6 xl:col-span-3">
              <legend className="text-base font-medium text-gray-900">
                Do you want a <span className="underline font-semibold">button</span> to redirect people to a sign-up page?
              </legend>
              <div className="mt-4 space-y-4">
                <div className="relative flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="buttonCheckbox"
                      name="buttonCheckbox"
                      type="checkbox"
                      onChange={() => setHasButton(!hasButton)}
                      checked={hasButton}
                      className="focus:ring-primary-500 h-5 w-5 text-primary-600 border-gray-300 rounded"
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label htmlFor="buttonCheckbox" className="font-medium text-gray-700">
                      <span className="underline font-semibold">Yes</span>, I want a button
                    </label>
                    <p className="text-gray-500">.</p>
                  </div>
                </div>
              </div>
              {hasButton && (
                <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                  {/* Button Label */}
                  <div className="sm:col-span-2 sm:col-start-1">
                    <label htmlFor="buttonText" className="block text-sm font-medium text-gray-700">
                      Button Label*
                    </label>
                    <div className="mt-1 relative rounded-md shadow-sm">
                      <input
                        ref={register({ required: true })}
                        name="buttonText"
                        type="text"
                        id="buttonText"
                        className={`shadow-sm block w-full sm:text-sm rounded-md ${getInputStyle[errors.buttonText ? "error" : "default"]}`}
                      />
                      {errors.buttonText && <Error />}
                    </div>
                    {errors.buttonText ? (
                      <p className="mt-2 text-sm text-red-600" id="button-text-error">
                        {errors.buttonText?.type === "required" && <>Button label is required</>}
                      </p>
                    ) : (
                      <p className="mt-2 text-sm text-gray-500">(ex: Sign Up)</p>
                    )}
                  </div>

                  {/* Button Color */}
                  <div className="sm:col-span-2">
                    <label htmlFor="buttonColor" className="block text-sm font-medium text-gray-700">
                      Button Color*
                    </label>
                    <div className="mt-1 flex items-center">
                      <div className="w-full pr-2">
                        <select
                          ref={register}
                          name="buttonColor"
                          value={buttonColor}
                          onChange={(e) => setButtonColor(e.target.value)}
                          defaultValue={"primary"}
                          id="buttonColor"
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
                        <div className={`h-5 w-5 ${getButtonColor[buttonColor]} rounded-full`}></div>
                      </div>
                    </div>
                  </div>

                  {/* Button Url */}
                  <div className="sm:col-span-6">
                    <label htmlFor="buttonLinkUrl" className="block text-sm font-medium text-gray-700">
                      Button Url*
                    </label>
                    <div className="mt-1 relative rounded-md shadow-sm">
                      <input
                        ref={register({
                          required: true,
                          pattern: regExpUrlPattern,
                          setValueAs: (value) => value.toLowerCase(),
                        })}
                        name="buttonLinkUrl"
                        type="text"
                        id="buttonLinkUrl"
                        className={`shadow-sm block w-full sm:text-sm rounded-md ${getInputStyle[errors.buttonLinkUrl ? "error" : "default"]}`}
                      />
                      {errors.buttonLinkUrl && <Error />}
                    </div>
                    {errors.buttonLinkUrl ? (
                      <p className="mt-2 text-sm text-red-600" id="button-link-url-error">
                        {errors.buttonLinkUrl?.type === "required" && <>Button url is required</>}
                        {errors.buttonLinkUrl?.type === "pattern" && <>Enter a valid url!</>}
                      </p>
                    ) : (
                      <p className="mt-2 text-sm text-gray-500">(ex: https://docs.google.com/forms/my-google-form-that-i-made)</p>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="pt-5">
          <div className="flex justify-end">
            <button
              type="button"
              onClick={toggleModal}
              className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
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
