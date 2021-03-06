import Head from "next/head"
import { motion } from 'framer-motion'
import ContactForm from "../components/ContactForm"
import Navbar from "../components/Navbar";

const contact = () => {
    return (
        <>
            <Head>
                <title>Contact Me</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <meta name="description" content="Let's talk! There's a lot we can do together."></meta>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Navbar />
            <ContactForm />
        </>
    )
}

export default contact
