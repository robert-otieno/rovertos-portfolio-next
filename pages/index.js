import Head from 'next/head'
import Homepage from '../components/Homepage'
import '../components/misc/intro-animation'

export default function Home() {

  return (
    <div className="app">
      <Head>
        <title>Robert Otieno Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main role="main">
        {/*Main Content*/}
        <Homepage />

        <div id="overlays" className="home__overlays">
          <svg className="home__overlay__left" width="702" height="777" fill="#F7AB0A" viewBox="0 0 702 777" xmlns="http://www.w3.org/2000/svg"><path d="M602.5 326.469C492.1 178.857 142.167 49.4459 -9 0.174988V776.945C39.8333 749.964 200.724 667.093 370 684.437C792 727.675 740.5 510.983 602.5 326.469Z"/></svg>
          <svg className="home__overlay__right" width="340" height="1122" fill="#FF331F" viewBox="0 0 340 1122" xmlns="http://www.w3.org/2000/svg"><path d="M109.628 425.5C218.428 338.7 321.961 105.667 360.128 0V1121.5C302.528 1035.9 169.128 917.5 109.628 869C-46.3719 717 -26.3719 534 109.628 425.5Z"/></svg>
        </div>
      </main>

      {/* Intro animation SVGs */}
      <svg className="shape-overlays" viewBox="0 0 100 100" preserveAspectRatio="none">
        <path className="shape-overlays__path"></path>
        <path className="shape-overlays__path"></path>
        <path className="shape-overlays__path"></path>
      </svg>
      
    </div>
  )
}
