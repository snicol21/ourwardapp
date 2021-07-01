export type IPageHeader = {
  title: string
  subtitle?: string
  className?: string
}

const PageHeader = ({ title, subtitle = "", className = "" }: IPageHeader) => {
  return (
    <div className={`${className} bg-gradient-to-r from-primary-900 via-primary-700 to-primary-500`}>
      <div className="p-6 sm:p-12 md:p-14 lg:p-16 xl:px-28">
        <div className="w-full px-4 text-center md:px-10 lg:px-16 xl:px-24">
          <h2 className="text-xl font-extrabold text-white sm:text-4xl">{title}</h2>
          {subtitle && <h4 className="text-lg mt-2 md:mt-4 leading-6 text-white sm:text-xl">{subtitle}</h4>}
        </div>
      </div>
    </div>
  )
}
export default PageHeader
