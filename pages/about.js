import { motion } from 'framer-motion'
import Head from 'next/head'
import AboutMe from '../components/AboutMe'
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"

function about() {
  return (
    <>
      <Head>
        <title>About Me</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <motion.div exit={{ opacity: 0 }}>
        <div className="about">
          <Navbar/>
          <AboutMe />
          <Footer />
        </div>
      </motion.div>
    </>
  )
}

export default about
