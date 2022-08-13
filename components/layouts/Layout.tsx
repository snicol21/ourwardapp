import Footer from "../elements/footers/Footer"

const Layout = ({ children, className = "" }) => {
  return (
    <div className={`${className} bg-gray-100 min-h-screen relative`}>
      <div className="bg-gray-100">
        <div className="max-w-7xl mx-auto pb-16 px-4 sm:px-6 lg:px-8">{children}</div>
        <Footer />
      </div>
    </div>
  )
}
export default Layout
