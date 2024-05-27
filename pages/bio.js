import { PaperClipIcon } from "@heroicons/react/outline";
import React from "react";

const Bio = () => {
  return (
    <div className='bg-white min-h-screen'>
      <div className='shadow-md overflow-hidden sm:rounded-lg max-w-6xl mx-auto mb-4'>
        <div className='px-4 py-5 sm:px-6'>
          <h3 className='text-xl leading-6 font-medium text-slate-900'>Summary</h3>
          <p className='mt-1 text-sm text-slate-500'>
            Robert is a versatile professional specializing in full stack web and mobile development, as well as systems librarianship. He is experienced in building user-friendly, visually appealing
            web applications and websites optimized for search engine performance. As a Systems Librarian, he manages library systems to ensure seamless access to digital resources and integrates
            technology solutions to enhance library services. Committed to staying current with the latest technologies and trends, Robert consistently delivers high-quality, cutting-edge results. He
            is currently seeking to join a cross-functional team dedicated to improving lives through accessible and innovative design.
          </p>
        </div>
      </div>

      <div className='shadow-md overflow-hidden sm:rounded-lg max-w-6xl mx-auto'>
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
              <dt className='text-sm font-medium text-slate-500'>Profession</dt>
              <dd className='mt-1 text-sm text-slate-900 sm:mt-0 sm:col-span-2'>Systems Librarian | Full Stack Developer</dd>
            </div>
            <div className='border-b border-slate-200 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
              <dt className='text-sm font-medium text-slate-500'>Email address</dt>
              <dd className='mt-1 text-sm text-slate-900 sm:mt-0 sm:col-span-2'>robertotieno.or@gmail.com</dd>
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
    </div>
  );
};

export default Bio;
