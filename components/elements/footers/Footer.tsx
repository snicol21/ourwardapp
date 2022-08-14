import Divider from "../dividers/Divider"
import { config } from "../../../config"

const Footer = () => {
  return (
    <>
      <Divider />
      <footer className="bg-gray-100">
        <div className="max-w-2xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm text-gray-500">
            This is <span className="underline font-semibold">not</span> an official website of{" "}
            <a
              href="https://www.churchofjesuschrist.org"
              target="_blank"
              className="whitespace-nowrap text-primary-500 hover:text-primary-900"
              rel="noreferrer"
            >
              The Church of Jesus Christ of Latter-day Saints
            </a>
            .
            <br />
            It is operated by members of the <span className="whitespace-nowrap">{config.wardName}</span>.
          </p>
        </div>
      </footer>
    </>
  )
}

export default Footer
