import Divider from "../dividers/Divider"

export type IBlockQuote = {
  quote: string
  name?: string
  title?: string
}
const BlockQuote = ({ quote, name = "", title = "" }: IBlockQuote) => {
  return (
    <>
      <Divider className="mb-14" />
      <blockquote>
        <div className="max-w-3xl mx-auto text-center text-2xl leading-8 sm:text-3xl sm:leading-10 font-bold text-black">
          <p>&ldquo;{quote}&rdquo;</p>
        </div>
        <footer className="mt-8">
          <div className="md:flex md:items-center md:justify-center">
            <div className="mt-3 text-center md:mt-0 md:ml-4 md:flex md:items-center">
              <div className="text-base font-bold text-gray-900">{name}</div>
              <svg className="hidden md:block mx-1 h-5 w-5 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                <path d="M11 0h3L9 20H6l5-20z" />
              </svg>
              <div className="text-base font-semibold text-gray-500">{title}</div>
            </div>
          </div>
        </footer>
      </blockquote>
      <Divider className="mt-14" />
    </>
  )
}
export default BlockQuote
