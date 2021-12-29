function Footer() {
    return (
        <footer className="footer">
            <svg  className="footer__logo" style={{transform: 'translate3d(-50%,0,0)'}} fill="#FF331F" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 236.7 254.9" >
                <polygon points="203.5,69.6 116.8,23.2 43.8,37.1 19,21.7 122.3,0 236.7,59.7 "/>
                <polygon points="169.7,254.4 19.3,158.4 0,37.2 31,53.9 46.4,136 154.6,201 "/>
                <polygon points="227,204.7 72.7,114.7 63.8,73.3 211.5,161.6 "/>
                <polygon points="182.7,113.1 77.1,54.6 112.9,46.8 218.3,102.7 "/>
            </svg>

            <p className="footer__info">
                <span className="footer__info__desc">&copy; Robert Otieno - 2021 | Web Apps + Websites developer. Nairobi, Kenya</span>
                <br/>
                <small className="footer__info__stack">💻&nbsp;Built with ReactJs, NextJs, Taillwind Css & SendGrid&nbsp; | <a href="https://vincentbourdeau.com/">@Vinc</a> 🔥</small>
            </p>
            <svg className="footer__overlay__left ct0" viewBox="0 0 702 777" fill="#FF331F" xmlns="http://www.w3.org/2000/svg">
                <path d="M602.5 326.469C492.1 178.857 142.167 49.4459 -9 0.174988V776.945C39.8333 749.964 200.724 667.093 370 684.437C792 727.675 740.5 510.983 602.5 326.469Z" />
            </svg>
            <svg className="footer__overlay__right ct2" viewBox="0 0 1340 563" fill="#F7AB0A" xmlns="http://www.w3.org/2000/svg">
                <path d="M1863.74 842.654C303.452 453.182 -410.34 891.131 -463.034 1091.51L-470.7 417.371C-131.054 544.231 677.587 507.516 1189.47 227.352C1748.88 -78.8189 2766.58 -15.9035 2967.77 125.431L2976.77 917.21C2615.3 1015.81 2084.14 908.59 1863.74 842.654Z"/>
            </svg>
        </footer>
    )
}

export default Footer
