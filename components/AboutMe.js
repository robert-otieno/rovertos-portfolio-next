import Image from "next/image";
import { PaperClipIcon } from "@heroicons/react/solid";
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
      <div className='about__wrapper scroll'>
        <div className='bg-effect pb-4 sm:pb-10 md:pb-16 lg:pb-20'>
          <section className='about__section'>
            <div className='relative text-center block w-11/12 mx-auto'>
              <article className=''>
                <h2 className='m-0 leading-4 text-sm font-normal tracking-normal'>Front-End&nbsp;Developer&nbsp;👨‍💻&nbsp;Freelancer</h2>
                <h1 className='font-serif m-0 px-4 pt-4 pb-2 text-xl leading-7 font-bold tracking-normal'>Web Apps & Websites Developer</h1>
                <p className='max-w-[90%] mx-auto pt-2 pb-8 text-base leading-7 font-normal'>
                  Hi there, I am Robert! A web apps developer, and designer. I love coding and discovering new ways to create beautiful web applications using the latest technology stack. I enjoy
                  developing web apps and websites from scratch using ReactJs, NextJs, WordPress, HTML5, and CSS3. 🚀
                </p>
                <div style={{ position: "relative", height: "200px" }}>
                  <Image className='w-full' alt='Hero' src={hero} layout='fill' objectFit='contain' />
                </div>
              </article>
            </div>
          </section>
        </div>

        {/* <!-- About Hero SVG separator --> */}
        {/* <svg className="about__hero__svg" style={{transform: "scale(2) translate(1%,-70%)"}} viewBox="0 0 3083 1176" fill="none" xmlns="http://www.w3.org/2000/svg" data-scroll>
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
        </svg> */}

        {/* Technologies Grid*/}
        <Technologies />

        <div className='about__services'>
          <section className='about__section'>
            {/* Description */}
            <div className='bg-white shadow overflow-hidden sm:rounded-lg'>
              <div className='px-4 py-5 sm:px-6'>
                <h3 className='text-lg leading-6 font-medium text-slate-900'>Personal Information</h3>
                <p className='mt-1 max-w-2xl text-sm text-slate-500'>Personal details and application.</p>
              </div>
              <div className='border-t border-slate-200'>
                <dl>
                  <div className='border-b border-slate-200 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
                    <dt className='text-sm font-medium text-slate-500'>Full name</dt>
                    <dd className='mt-1 text-sm text-slate-900 sm:mt-0 sm:col-span-2'>Robert Opiyo Otieno</dd>
                  </div>
                  <div className='border-b border-slate-200 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
                    <dt className='text-sm font-medium text-slate-500'>Career Goal</dt>
                    <dd className='mt-1 text-sm text-slate-900 sm:mt-0 sm:col-span-2'>Full Stack Developer</dd>
                  </div>
                  <div className='border-b border-slate-200 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
                    <dt className='text-sm font-medium text-slate-500'>Email address</dt>
                    <dd className='mt-1 text-sm text-slate-900 sm:mt-0 sm:col-span-2'>robertotieno.or@gmail.com</dd>
                  </div>
                  <div className='border-b border-slate-200 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
                    <dt className='text-sm font-medium text-slate-500'>About</dt>
                    <dd className='mt-1 text-sm text-slate-900 sm:mt-0 sm:col-span-2'>
                      I am a web developer and designer with an eye for detail. I have experience building web apps from scratch using HTML5, CSS3, JavaScript, ReactJs, and NextJs and using WordPress
                      as well. My favorite part about my job is that I get to learn something new every day!
                    </dd>
                  </div>
                  <div className='bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
                    <dt className='text-sm font-medium text-slate-500'>Attachments</dt>
                    <dd className='mt-1 text-sm text-slate-900 sm:mt-0 sm:col-span-2'>
                      <ul role='list' className='border border-slate-200 rounded-md divide-y divide-slate-200'>
                        <li className='pl-3 pr-4 py-3 flex items-center justify-between text-sm'>
                          <div className='w-0 flex-1 flex items-center'>
                            <PaperClipIcon className='flex-shrink-0 h-5 w-5 text-slate-400' aria-hidden='true' />
                            <span className='ml-2 flex-1 w-0 truncate'>resume_front_end_developer.pdf</span>
                          </div>
                          <div className='ml-4 flex-shrink-0'>
                            <a href='#' className='font-medium text-orange-400 hover:text-orange-500' disable=''>
                              <svg xmlns='http://www.w3.org/2000/svg' className='h-6 w-6' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                                <path
                                  strokeLinecap='round'
                                  strokeLinejoin='round'
                                  strokeWidth={2}
                                  d='M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z'
                                />
                              </svg>
                            </a>
                          </div>
                        </li>
                        <li className='pl-3 pr-4 py-3 flex items-center justify-between text-sm'>
                          <div className='w-0 flex-1 flex items-center'>
                            <PaperClipIcon className='flex-shrink-0 h-5 w-5 text-slate-400' aria-hidden='true' />
                            <span className='ml-2 flex-1 w-0 truncate'>coverletter_front_end_developer.pdf</span>
                          </div>
                          <div className='ml-4 flex-shrink-0'>
                            <a href='#' className='font-medium text-orange-400 hover:text-orange-500' disable=''>
                              <svg xmlns='http://www.w3.org/2000/svg' className='h-6 w-6' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                                <path
                                  strokeLinecap='round'
                                  strokeLinejoin='round'
                                  strokeWidth={2}
                                  d='M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z'
                                />
                              </svg>
                            </a>
                          </div>
                        </li>
                      </ul>
                    </dd>
                  </div>
                </dl>
              </div>
            </div>

            <article className='about__section__article about__feature__grid'>
              <span className='max-w-lg'>
                <Image className='about__feature__image' alt='Custom Web Apps Development' src={webapp} />
              </span>
              <div className='p-4'>
                <h2 className='about__article__header'>
                  <span className='text-primary'>Web Apps</span> Development
                </h2>
                <p className='leading-8 font-light mb-3'>
                  Are you having a hard time finding a "Ready-Made" solution that meets your requirements? Are you fed up with paying monthly fees for software that tries to perform more than you
                  require? A Custom Web App can help in this situation. It's designed to accomplish exactly what it's supposed to. Transform and automate any time-consuming business procedure to
                  increase productivity!
                </p>
                <a
                  className='lg:float-right border rounded-full py-2 px-4 text-orange-400 border-orange-400 hover:bg-orange-400 hover:text-white hover:font-medium'
                  href='/projects'
                  title='Learn more about my projects'
                >
                  See Projects &rarr;
                </a>
              </div>
            </article>

            <article className='about__section__article about__feature__grid'>
              <span className='lg:order-2 max-w-lg'>
                <Image className='about__feature__image' alt='Custom Websites Development' src={website} />
              </span>
              <div className='p-4 lg:order-1'>
                <h2 className='about__article__header'>
                  Custom <span className='text-primary noto'>Websites</span> Development
                </h2>
                <p className='leading-8 font-light mb-3'>
                  Sure you can use a <span className='line-through'>Wix</span>, <span className='line-through'>Wordpress</span> or <small>(insert any comparable)</small>. But if you really want to
                  stand out, be accessible, performant and SEO friendly, let me built something completely custom for you. I start by really understanding your brand and core values to create
                  something that is unique and beautiful.
                </p>
                <a
                  className='lg:float-right border rounded-full py-2 px-4 text-orange-400 border-orange-400 hover:bg-orange-400 hover:text-white hover:font-medium'
                  href='/projects'
                  title='Learn more about my projects'
                >
                  See Projects &rarr;
                </a>
              </div>
            </article>
          </section>
        </div>

        <section className='about__seo'>
          <article className='about__seo__article'>
            {/* <Image className="about__feature__image" height={250} alt="Custom Websites Development" src={website}/> */}
            <div className='leading-8'>
              <h2 className='font-bold text-2xl noto'>Best Practices & High-performance</h2>
              <p className='leading-8'>
                Because Web performance really matters, all of my creations are tested before going live. I never settle down for something less than 90% on all metrics.{" "}
                <strong className='text-[#FF331F]'>Performance</strong> &bull; <strong className='text-primary'>Accessibility</strong> &bull; <strong className='text-[#FF331F]'>Best Practices</strong>{" "}
                &bull; <strong className='text-primary'>SEO</strong> &bull; <strong className='text-[#FF331F]'>Progressive Web App</strong>
              </p>

              <a rel='dns-prefetch' href='https://pagespeed.web.dev/report?url=https%3A%2F%2Frovertos-portfolio-next.vercel.app%2F' target='_blank' title='WebPerf test' className='about__seo__link'>
                Test my site on Google Page Speed
                <span className='pl-2 flex align-middle justify-center'>
                  <svg xmlns='http://www.w3.org/2000/svg' className='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'>
                    <path
                      fill-rule='evenodd'
                      d='M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z'
                      clip-rule='evenodd'
                    />
                  </svg>
                </span>
              </a>
              <a rel='dns-prefetch' href='https://gtmetrix.com/reports/rovertos-portfolio-next.vercel.app/1m3qF0T2/' target='_blank' title='WebPerf test' className='about__seo__link'>
                Test my site on GTMetrix
                <span className='pl-2 flex align-middle justify-center'>
                  <svg xmlns='http://www.w3.org/2000/svg' className='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'>
                    <path
                      fill-rule='evenodd'
                      d='M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z'
                      clip-rule='evenodd'
                    />
                  </svg>
                </span>
              </a>
            </div>
          </article>
        </section>

        <section className=' about__cta'>
          <a rel='dns-prefetch' className='about__cta__link' onClick={() => router.push("/contact")} title='Contact Me'>
            Contact Me
          </a>
        </section>
      </div>
    </>
  );
}

export default AboutMe;
