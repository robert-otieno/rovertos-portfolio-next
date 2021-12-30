import { motion } from 'framer-motion'
import Head from 'next/head'
import { useEffect, useState } from "react"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import ProjectItem from "../components/ProjectItem"

function projects({ isFirstMount }) {
  const [portfolio, setportfolio] = useState([])

  useEffect(() => {
    const getportfolio = async () => {
      const portfolioFromAPI = await fetchportfolio()
      setportfolio(portfolioFromAPI)
    }
    getportfolio()
  }, [])

  // Fetch portfolio
  const fetchportfolio = async () => {
    const res = await fetch('/api/projects')
    const data = await res.json()
    return data
  }

  return (
    <>
      <Head>
        <title>My Projects</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <motion.div exit={{ opacity: 0 }}>
        <div className="projects">
          <Navbar />
          <div className="projects__wrapper">
            {portfolio.map(({category, projects}, index) => {
              return (
                <>
                  {projects?.length > 0 ? (
                    <section className="projects__section" key={index}>
                      <article className="projects__category">
                        <h2 className="projects__header">{category}</h2>
                        <ul className="projects__list">
                        {projects.map((item, index) => {
                          return (<ProjectItem item={item} key={index}/>)
                        })}
                        </ul>
                      </article>
                    </section>
                  ) : (<span></span>)}
                </>
              )
            })}
          </div>
          <Footer />
        </div>
      </motion.div>
    </>
  );
}

export default projects;
