import Head from 'next/head'
import AboutMe from '../components/AboutMe'
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
// import '../components/misc/intro-animation'

function about() {
  return (
    <div className="scrollbar-hide">
      <Head>
        <title>About Me | Robert Otieno</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <div className="about overflow-y-scroll scrollbar-hide">
        <Navbar/>
        <AboutMe />
        <Footer />
      </div>

      {/* Intro animation SVGs */}
      {/* <svg className="shape-overlays" viewBox="0 0 100 100" preserveAspectRatio="none">
        <path className="shape-overlays__path"></path>
        <path className="shape-overlays__path"></path>
        <path className="shape-overlays__path"></path>
      </svg> */}
    </div>
  )
}

export default about
