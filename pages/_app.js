import '../styles/globals.css'
import HeadMeta from "../components/HeadMeta";
// import "semantic-ui-css/components/button.min.css";
// import "semantic-ui-css/components/card.min.css";



function MyApp({ Component, pageProps }) {
  return (
    <>
      <HeadMeta />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp

