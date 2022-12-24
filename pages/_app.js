import '../styles/globals.css'
import Navbar from '../components/Home/Navbar'

export default function App({ Component, pageProps }) {
  return (
    <>
    <Navbar/>
    <Component {...pageProps} />
  </>)
}
