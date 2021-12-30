import Head from "next/head"
import { motion } from 'framer-motion'
import ContactForm from "../components/ContactForm"
import InitialTransition from "../components/InitialTransition"

const contact = ({ isFirstMount }) => {
    return (
        <>
            <Head>
                <title>Contact Me</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <motion.div exit={{ opacity: 0 }}>
                {isFirstMount && <InitialTransition />}
                <ContactForm/>
            </motion.div>
        </>
    )
}

export default contact
