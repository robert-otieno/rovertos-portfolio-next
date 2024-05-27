import { motion } from "framer-motion";
import Head from "next/head";
import { useRouter } from "next/router";

export default function Home({ isFirstMount }) {
  const router = useRouter();

  const homepage = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transform: "none",
      transition: {
        duration: 0.8,
      },
    },
  };
  return (
    <>
      <Head>
        <title>Robert Otieno Portfolio</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <meta name='description' content="Robert Otieno - Web Apps Developer and Designer. Let's build your next amazing App."></meta>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <motion.main exit={{ opacity: 0 }}>
        {/*Main Content*/}
        <div className='home container'>
          <div className='home__wrapper'>
            <motion.section animate='animate' variants={homepage} className='home__section content-box flex flex-row'>
              {/* <img src='../assets/robert.jpg' className=' w-48 max-w-xs rounded-lg shadow-2xl' /> */}
              <div className='home__content'>
                <h1 className='home__description'>
                  Hi! I am Robert, <br className='md:leading-[3rem]' />
                  <span className='text-lg font-light tracking-wider'>A Systems Librarian & Full Stack Developer based in Nairobi.</span>
                </h1>
                <h2 className='home__tags'>
                  {/* <span className='home__tag hidden md:block'>Freelancer</span> */}
                  <span className='home__tag'>ReactJS</span>
                  <span className='home__tag'>NextJS</span>
                  <span className='home__tag'>TailwindCSS</span>
                  <span className='home__tag'>Firebase</span>
                  <span className='home__tag'>Expo/React Native</span>
                </h2>
              </div>
            </motion.section>
          </div>
        </div>

        <div id='overlays' className='home__overlays'>
          <svg className='home__overlay__left' width='702' height='777' fill='#F7AB0A' viewBox='0 0 702 777' xmlns='http://www.w3.org/2000/svg'>
            <path d='M602.5 326.469C492.1 178.857 142.167 49.4459 -9 0.174988V776.945C39.8333 749.964 200.724 667.093 370 684.437C792 727.675 740.5 510.983 602.5 326.469Z' />
          </svg>
          <svg className='home__overlay__right' width='340' height='1122' fill='#FF331F' viewBox='0 0 340 1122' xmlns='http://www.w3.org/2000/svg'>
            <path d='M109.628 425.5C218.428 338.7 321.961 105.667 360.128 0V1121.5C302.528 1035.9 169.128 917.5 109.628 869C-46.3719 717 -26.3719 534 109.628 425.5Z' />
          </svg>
        </div>
      </motion.main>
    </>
  );
}
