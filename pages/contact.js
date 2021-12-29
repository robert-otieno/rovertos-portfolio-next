import Head from "next/head"
import ContactForm from "../components/ContactForm"

const contact = () => {
    return (
        
        <div>
            <Head>
                <title>Contact Me</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <ContactForm/>
        </div>
    )
}

export default contact
