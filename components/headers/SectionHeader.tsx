const SectionHeader = ({ title, subtitle = "" }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 text-center sm:px-6 lg:px-8">
      <div className="space-y-8 sm:space-y-12">
        <div className="space-y-5 sm:mx-auto sm:max-w-xl sm:space-y-4 lg:max-w-5xl">
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">{title}</h2>
          {subtitle && <p className="text-xl text-gray-500">{subtitle}</p>}
        </div>
      </div>
    </div>
  )
}
export default SectionHeader
