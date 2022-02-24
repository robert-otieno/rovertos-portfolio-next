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

            <Navbar/>
            <ContactForm />
            
            <div className="modal-svgs">
                <svg className="left" width="702" height="777" viewBox="0 0 702 777" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M602.5 326.469C492.1 178.857 142.167 49.4459 -9 0.174988V776.945C39.8333 749.964 200.724 667.093 370 684.437C792 727.675 740.5 510.983 602.5 326.469Z" />
                </svg>
                <svg className="right" width="340" height="1122" viewBox="0 0 340 1122" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M109.628 425.5C218.428 338.7 321.961 105.667 360.128 0V1121.5C302.528 1035.9 169.128 917.5 109.628 869C-46.3719 717 -26.3719 534 109.628 425.5Z"/>
                </svg>
            </div>
        </>
    )
}

export default contact
