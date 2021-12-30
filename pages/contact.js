import Head from "next/head"
import { motion } from 'framer-motion'
import ContactForm from "../components/ContactForm"

const contact = ({ isFirstMount }) => {
    return (
        <>
            <Head>
                <title>Contact Me</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <motion.div exit={{ opacity: 0 }}>
                <ContactForm/>
            </motion.div>
        </>
    )
}

export default contact
