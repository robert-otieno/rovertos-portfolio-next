import { useRouter } from "next/router";
import Navbar from "./Navbar";

function Homepage() {
    const router = useRouter()

    return (
        <div className="home container">
            <div className="home__wrapper">
                <section className="home__section content-box">
                    <Navbar />

                    <div className="home__content">
                        <h1 className="home__description">
                            Web Apps Development, <br className="md:leading-[3rem]"/>
                            Websites, Graphics Design & Creative ideas <br className="md:leading-[3rem]" />
                        </h1>
                        <h2 className="home__tags">
                            <span className="home__tag">Freelancer</span>
                            <span className="home__tag">Web Apps Developer</span>
                            <span className="home__tag">Graphics</span>
                            <span className="home__tag">Websites</span>
                        </h2>

                        <span className="home__link" onClick={() => router.push('/about')} title="Learn more about me">What I Do&nbsp;
                            <svg className="ml-2" xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="#720E07" viewBox="0 0 31.49 31.49">
                                <path d="M21.205 5.007a1.112 1.112 0 0 0-1.587 0 1.12 1.12 0 0 0 0 1.571l8.047 8.047H1.111A1.106 1.106 0 0 0 0 15.737c0 .619.492 1.127 1.111 1.127h26.554l-8.047 8.032c-.429.444-.429 1.159 0 1.587a1.112 1.112 0 0 0 1.587 0l9.952-9.952a1.093 1.093 0 0 0 0-1.571l-9.952-9.953z" />
                            </svg>
                        </span>
                    </div>
                </section>
            </div>
        </div>
        
    )
}

export default Homepage
