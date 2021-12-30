import { useRouter } from "next/router";

function Navbar() {
  const router = useRouter();

  return (
    <div className="navbar">
      <nav className="navbar__nav">
        <a title="Website Logo" onClick={() => router.push("/")} className="navbar__logo">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#F7AB0A" viewBox="0 0 236.7 254.9">
            <polygon points="203.5,69.6 116.8,23.2 43.8,37.1 19,21.7 122.3,0 236.7,59.7 "/>
            <polygon points="169.7,254.4 19.3,158.4 0,37.2 31,53.9 46.4,136 154.6,201 "/>
            <polygon points="227,204.7 72.7,114.7 63.8,73.3 211.5,161.6 "/>
            <polygon points="182.7,113.1 77.1,54.6 112.9,46.8 218.3,102.7 "/>
          </svg>
          &nbsp;
          <span className="block md:hidden">Robert</span>&nbsp;
          <span className="hidden md:block">Robert Otieno</span>
        </a>
        <div className="navbar__links">
          <a rel="dns-prefetch" className="navbar__link" title="About page" onClick={() => router.push("/about")}>What I Do</a>
          <a rel="dns-prefetch" className="navbar__link" title="Projects listing page" onClick={() => router.push("/projects")}>Projects</a>
          <a rel="dns-prefetch" className="navbar__link__contact" onClick={() => router.push("/contact")} title="Contact page">Contact</a>
          <span className="vertical__divider">|</span>
          <a rel="dns-prefetch" className="mr-3" href="https://github.com/robert-otieno" rel="noreferer noopener" target="_blank" title="GitHub">
            <svg width="24" fill="#F7AB0A" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 .5C5.37.5 0 5.78 0 12.292c0 5.211 3.438 9.63 8.205 11.188.6.111.82-.254.82-.567 0-.28-.01-1.022-.015-2.005-3.338.711-4.042-1.582-4.042-1.582-.546-1.361-1.335-1.725-1.335-1.725-1.087-.731.084-.716.084-.716 1.205.082 1.838 1.215 1.838 1.215 1.07 1.803 2.809 1.282 3.495.981.108-.763.417-1.282.76-1.577-2.665-.295-5.466-1.309-5.466-5.827 0-1.287.465-2.339 1.235-3.164-.135-.298-.54-1.497.105-3.121 0 0 1.005-.316 3.3 1.209.96-.262 1.98-.392 3-.398 1.02.006 2.04.136 3 .398 2.28-1.525 3.285-1.209 3.285-1.209.645 1.624.24 2.823.12 3.121.765.825 1.23 1.877 1.23 3.164 0 4.53-2.805 5.527-5.475 5.817.42.354.81 1.077.81 2.182 0 1.578-.015 2.846-.015 3.229 0 .309.21.678.825.56C20.565 21.917 24 17.495 24 12.292 24 5.78 18.627.5 12 .5z" />
            </svg>
          </a>
          <a rel="dns-prefetch" className="" href="https://www.linkedin.com/in/robert-otieno-9b2b42174/" rel="noreferer noopener" target="_blank" title="LinkedIn">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#F7AB0A">
              <path d="M19 0H5a5 5 0 0 0-5 5v14a5 5 0 0 0 5 5h14a5 5 0 0 0 5-5V5a5 5 0 0 0-5-5zM8 19H5V8h3v11zM6.5 6.732c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zM20 19h-3v-5.604c0-3.368-4-3.113-4 0V19h-3V8h3v1.765c1.396-2.586 7-2.777 7 2.476V19z" />
            </svg>
          </a>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
