import NextNProgress from "nextjs-progressbar"
import "../shared/globals.css"

function MyApp({ Component, pageProps }) {
  return (
    <>
      <NextNProgress color="#4F46E5" height={5} />
      <Component {...pageProps} />;
    </>
  )
}

export default MyApp
