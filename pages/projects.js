import { motion } from 'framer-motion'
import Head from 'next/head'
// import { useEffect, useState } from "react"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import ProjectItem from "../components/ProjectItem"

export async function getServerSideProps() {
  const url = process.env.NODE_ENV === "development" ? "http://localhost:3001" : "https://robertotieno.rokeservices.com"
  const res = await fetch(`${url}/api/projects`)
  const data = await res.json()

  return {
    props: {
      portfolio: data
    }
  }
}

function projects({ portfolio }) {
  return (
    <>
      <Head>
        <title>My Projects</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="Check out some of my amazing projects"></meta>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <motion.div exit={{ opacity: 0 }}>
        <div className="projects">
          <Navbar />
          <div className="projects__wrapper">
            {portfolio?.map(({category, projects}, index) => (
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
                  ) : (<></>)}
                </>
              ))}
          </div>
          <Footer />
        </div>
      </motion.div>
    </>
  );
}

export default projects;
