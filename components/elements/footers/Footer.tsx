import Divider from "../dividers/Divider"
import { config } from "../../../config"

const Footer = () => {
  return (
    <>
      <Divider />
      <footer className="bg-gray-100">
        <div className="max-w-2xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <p className="text-center text-base text-gray-500">
            This is not an official website of The Church of Jesus Christ of Latter-day Saints.
            <br />
            It is operated by members of the {config.wardName}.
          </p>
        </div>
      </footer>
    </>
  )
}

export default Footer
