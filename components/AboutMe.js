import Image from "next/image";
import { useRouter } from "next/router";

// Images
import hero from "../public/assets/react.svg";
import webapp from "../public/assets/webapp-development.svg";
import website from "../public/assets/website-development.svg";
import Technologies from "./Technologies";

function AboutMe() {
  const router = useRouter();

  return (
    <>
      <div className="about__wrapper scroll">
        <div className="bg-effect pb-4 sm:pb-10 md:pb-16 lg:pb-20">
          <section className="about__section">
            <div className="relative text-center block w-11/12 mx-auto">
              <article className="">
                <h2 className="m-0 leading-4 text-sm font-normal tracking-normal">
                  Front-End&nbsp;Developer&nbsp;👨‍💻&nbsp;Freelancer
                </h2>
                <h1 className="font-serif m-0 px-4 pt-4 pb-2 text-xl leading-7 font-bold tracking-normal">
                  Web Apps & Websites Developer
                </h1>
                <p className="max-w-[90%] mx-auto pt-2 pb-8 text-base leading-7 font-normal">
                  Hi there, I am Robert! A web apps developer, and designer. I
                  love coding and discovering new ways to create beautiful web
                  applications using the latest technology stack. I enjoy
                  developing web apps and websites from scratch using ReactJs,
                  NextJs, WordPress, HTML5, and CSS3. 🚀
                </p>
                <div style={{ position: "relative", height: "200px" }}>
                  <Image className="w-full" alt="Hero" src={hero} layout="fill" objectFit="contain"/>
                </div>
              </article>
            </div>
          </section>
        </div>

        {/* <!-- About Hero SVG separator --> */}
        <svg className="about__hero__svg" style={{transform: "scale(2) translate(1%,-70%)"}} viewBox="0 0 3083 1176" fill="none" xmlns="http://www.w3.org/2000/svg" data-scroll>
          <g filter="url(#filter0_dd)">
            <path d="M1285.99 983.356C883.852 944.438 644 632 571.086 510.504C384 316 268 164 240 0V1176H900.616H2609.71C2878.73 989.194 3319.04 576.275 2928.07 419.047C2439.36 222.511 2595.75 574.718 2472.87 747.903C2349.99 921.088 1788.67 1032 1285.99 983.356Z" fill="white"/>
          </g>
          <defs>
            <filter id="filter0_dd" x="0" y="0" width="3083" height="1176" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
            <feOffset dx="-240"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.04 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
            <feOffset dx="-110"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"/>
            <feBlend mode="normal" in2="effect1_dropShadow" result="effect2_dropShadow"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow" result="shape"/>
            </filter>
          </defs>
        </svg>

        {/* Technologies Grid*/}
        <Technologies/>

        <div className="about__services">
          <section className="about__section">
            <article className="about__section__article about__feature__grid">
              <span className="max-w-lg"><Image className="about__feature__image" alt="Custom Web Apps Development" src={webapp}/></span>
              <div className="p-4">
                <h2 className="about__article__header">
                  <span className="text-primary">Web Apps</span> Development
                </h2>
                <p className="leading-8 font-light">
                Are you having a hard time finding a "Ready-Made" solution that meets your requirements? Are you fed up with paying monthly fees for software that tries to perform more than you require?
                A Custom Web App can help in this situation.
                It's designed to accomplish exactly what it's supposed to.
                Transform and automate any time-consuming business procedure to increase productivity! 
                </p>
                <span className="about__link" onClick={() => router.push("/projects")} title="Learn more about my projects">See Projects&nbsp;
                  <svg className="ml-2" xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="#720E07" viewBox="0 0 31.49 31.49">
                    <path d="M21.205 5.007a1.112 1.112 0 0 0-1.587 0 1.12 1.12 0 0 0 0 1.571l8.047 8.047H1.111A1.106 1.106 0 0 0 0 15.737c0 .619.492 1.127 1.111 1.127h26.554l-8.047 8.032c-.429.444-.429 1.159 0 1.587a1.112 1.112 0 0 0 1.587 0l9.952-9.952a1.093 1.093 0 0 0 0-1.571l-9.952-9.953z" />
                  </svg>
                </span>
              </div>
            </article>

            <article className="about__section__article about__feature__grid">
              <span className="lg:order-2 max-w-lg"><Image className="about__feature__image" alt="Custom Websites Development" src={website}/></span>
              <div className="p-4 lg:order-1">
                <h2 className="about__article__header">
                  Custom <span className="text-primary noto">Websites</span> Development
                </h2>
                <p className="leading-8 font-light">
                  Sure you can use a <span className="line-through">Wix</span>,{" "}
                  <span className="line-through">Wordpress</span> or{" "}
                  <small>(insert any comparable)</small>. But if you really want to
                  stand out, be accessible, performant and SEO friendly, let me
                  built something completely custom for you. I start by really
                  understanding your brand and core values to create something that
                  is unique and beautiful.
                </p>
                <span className="about__link" onClick={() => router.push("/projects")} title="Learn more about my projects">See Projects&nbsp;
                  <svg className="ml-2" xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="#720E07" viewBox="0 0 31.49 31.49">
                    <path d="M21.205 5.007a1.112 1.112 0 0 0-1.587 0 1.12 1.12 0 0 0 0 1.571l8.047 8.047H1.111A1.106 1.106 0 0 0 0 15.737c0 .619.492 1.127 1.111 1.127h26.554l-8.047 8.032c-.429.444-.429 1.159 0 1.587a1.112 1.112 0 0 0 1.587 0l9.952-9.952a1.093 1.093 0 0 0 0-1.571l-9.952-9.953z" />
                  </svg>
                </span>
              </div>
            </article>
          </section>
        </div>

        <section className="about__seo">
            <article className="about__seo__article">
            {/* <Image className="about__feature__image" height={250} alt="Custom Websites Development" src={website}/> */}
              <div className="leading-8">
                <h2 className="font-bold text-2xl noto">
                  Best Practices & High-performance
                </h2>
                <p className="leading-8">
                  Because Web performance really matters, all of my creations are
                  tested before going live. I never settle down for something less
                  than 90% on all metrics.{" "}
                  <strong className="text-[#FF331F]">Performance</strong> &bull;{" "}
                  <strong className="text-primary">Accessibility</strong> &bull;{" "}
                  <strong className="text-[#FF331F]">Best Practices</strong> &bull;{" "}
                  <strong className="text-primary">SEO</strong> &bull;{" "}
                  <strong className="text-[#FF331F]">Progressive Web App</strong>
                </p>
                
                <a rel="dns-prefetch" href="https://pagespeed.web.dev/report?url=https%3A%2F%2Frovertos-portfolio-next.vercel.app%2F" target="_blank" title="WebPerf test" className="about__seo__link">
                  Test my site on Google Page Speed
                  <span className="pl-2 flex align-middle justify-center">
                    <svg fill="#FF331F" width="14" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                      <path d="M508.875 248.458l-160-160c-4.167-4.167-10.917-4.167-15.083 0-4.167 4.167-4.167 10.917 0 15.083l141.792 141.792H10.667C4.771 245.333 0 250.104 0 256s4.771 10.667 10.667 10.667h464.917L333.792 408.458c-4.167 4.167-4.167 10.917 0 15.083a10.634 10.634 0 0 0 7.542 3.125c2.729 0 5.458-1.042 7.542-3.125l160-160c4.166-4.166 4.166-10.916-.001-15.083z" />
                    </svg>
                  </span>
                </a>
                <a rel="dns-prefetch" href="https://gtmetrix.com/reports/rovertos-portfolio-next.vercel.app/1m3qF0T2/" target="_blank" title="WebPerf test" className="about__seo__link">
                  Test my site on GTMetrix
                  <svg fill="#FF331F" width="14" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path d="M508.875 248.458l-160-160c-4.167-4.167-10.917-4.167-15.083 0-4.167 4.167-4.167 10.917 0 15.083l141.792 141.792H10.667C4.771 245.333 0 250.104 0 256s4.771 10.667 10.667 10.667h464.917L333.792 408.458c-4.167 4.167-4.167 10.917 0 15.083a10.634 10.634 0 0 0 7.542 3.125c2.729 0 5.458-1.042 7.542-3.125l160-160c4.166-4.166 4.166-10.916-.001-15.083z" />
                  </svg>
                </a>
              </div>
            </article>
          </section>

        <section className=" about__cta">
          <a rel="dns-prefetch" className="about__cta__link" onClick={() => router.push("/contact")} title="Contact Me">Contact Me</a>
        </section>
      </div>
    </>
  );
}

export default AboutMe;
