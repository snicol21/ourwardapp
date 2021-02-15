export type ISectionHeader = {
  title: string
  subtitle?: string
  className?: string
}

const SectionHeader = ({ title, subtitle = "", className = "" }: ISectionHeader) => {
  return (
    <div className={`${className} pt-20 max-w-7xl mx-auto px-4 text-center sm:px-6 lg:px-8`}>
      <div className="space-y-8 sm:space-y-12">
        <div className="space-y-2 sm:mx-auto sm:max-w-xl sm:space-y-4 lg:max-w-5xl">
          <h2 className="text-2xl font-extrabold tracking-tight sm:text-4xl">{title}</h2>
          {subtitle && <p className="text-lg text-gray-500">{subtitle}</p>}
        </div>
      </div>
    </div>
  )
}
export default SectionHeader
