/* eslint-disable jsx-a11y/anchor-is-valid */

// styles 
import './landing.css'

// icons 
import emailIcon from '../../assets/email-icon.svg'
import phoneSupport from '../../assets/phone-support.svg'
import leftQuotes from '../../assets/left-quotes.png'
import HiveSyncLogo from '../../assets/HiveSync_logo.png'
import HeroImg from '../../assets/hero.png'
import realTimeCollab from '../../assets/real-time-collab.png'
import taskManagement from '../../assets/task-management.png'
import secureFileSharing from '../../assets/secure-file-sharing.png'
import analyticsAndReporting from '../../assets/analytics-and-reporting.png'
import seviceSection1 from '../../assets/service-section-1.png'
import serviceSection2 from '../../assets/secure-collab.png'
import serviceSection3 from '../../assets/scalable-&-flexible.png'
import serviceSection4 from '../../assets/hivesync-collab-platform.png'
import reviewer_1 from '../../assets/reviewer-1.jpg'
import reviewer_2 from '../../assets/reviewer-2.jpg'
import reviewer_3 from '../../assets/reviewer-3.jpg'



import { Link } from 'react-router-dom'

const LandingPage = () => {
  return (
    <div className="page">
      <header className="header">
        <div className="header__content">
          <h1 className="header__title">
            <Link to="#" className="header__link" title="Go to the homepage">
              <img src={HiveSyncLogo} alt="HiveSync logo" className="icon header__icon" />
            </Link>
          </h1>
          <nav className="header-menu" >
            <ul className="header-menu__list" >
              <li className="header-menu__list-item" >
                <Link className="link " to="#" >Features</Link>
              </li>
              <li className="header-menu__list-item">
                <Link className="link " to="#">Teams</Link>
              </li>
              <li className="header-menu__list-item" >
                <Link className="link " to="#">Sign in</Link>
              </li>
              <li className="header-menu__list-item">
                <Link to='#' className='nav__btn' >Get started</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <main className="main">
        <section className="hero">
          <div className="hero__content">
            <div className="hero__img-container img-container">
              <img src={HeroImg} alt="Color illustration showing the group of peoples collaborate with each other and manage their works by using HiveSync" title="All files in one single location" className="img" />
            </div>
            <div className="hero__text-container">
              <h2 className="hero__title">Power up your team's productivity with HiveSync.</h2>
              <p className="hero__description">
                Looking to take your team's productivity to new heights? HiveSync is the ultimate platform for cross-functional teamwork, offering seamless collaboration and enhanced efficiency. Join the HiveSync community today and start delivering quality work together, faster.
              </p>
              <Link to="#" className="hero__link btn">Get started</Link>
            </div>
          </div>
        </section>
        <section className="features">
          <div className="features__content">
            <div className="features__grid-container">
              <article className="feature">
                <span className="feature__icon top2-features__icon icon">
                  <img src={realTimeCollab} alt="real time collab" className="feature__icon" />
                </span>
                <h3 className="feature__title">Real-time Collaboration</h3>
                <p className="feature__description">
                  HiveSync empowers teams to work together in real-time, streamlining communication, sharing of ideas, and collaboration on projects.
                </p>
              </article>
              <article className="feature">
                <span className="feature__icon  top2-features__icon icon">
                  <img src={secureFileSharing} alt="real time collab" className="feature__icon" />
                </span>
                <h3 className="feature__title">File Sharing</h3>
                <p className="feature__description">
                  Share files and collaborate on projects easily and securely with HiveSync.
                </p>
              </article>
              <article className="feature">
                <span className="feature__icon bottom2-features__icon icon">
                  <img src={taskManagement} alt="real time collab" className="feature__icon" />
                </span>
                <h3 className="feature__title">Task Management</h3>
                <p className="feature__description">
                  Stay organized and on top of deadlines with HiveSync's intuitive task management system.
                </p>
              </article>

              <article className="feature">
                <span className="feature__icon bottom2-features__icon icon">
                  <img src={analyticsAndReporting} alt="real time collab" className="feature__icon" />
                </span>
                <h3 className="feature__title">Analytics and Reporting</h3>
                <p className="feature__description">
                  Gain valuable insights into your team's productivity and optimize your workflow with HiveSync's powerful analytics and reporting tools.
                </p>
              </article>
            </div>
          </div>
        </section>
        <section className="services">
          <div className="services__content">
            <div className="services__flex-container">

              <div className="services__text-container">
                <h2 className="services__title">Unlock Your Team's Potential with HiveSync</h2>
                <p className="services__description">
                  Empower your team to succeed with HiveSync's comprehensive suite of services. Our platform streamlines your workflow, boosts productivity, and helps you achieve your goals.
                </p>
              </div>
              <div className="services__img-container img-container">
                <img src={seviceSection1} alt="unlock team's Potential with HiveSync" title="Stay productive illustration" className="img" />
              </div>
            </div>
          </div>
        </section>
        <section className="services">
          <div className="services__content">
            <div className="services__flex-container">
              <div className="services__img-container img-container">
                <img src={serviceSection2} alt="secure collaboration" title="Stay productive illustration" className="img" />
              </div>
              <div className="services__text-container">
                <h2 className="services__title">Secure and Reliable Collaboration</h2>
                <p className="services__description">
                  Collaborate with confidence knowing that HiveSync puts your team's security first. We implement cutting-edge security protocols to protect your data, and our platform boasts 24/7 uptime, ensuring seamless communication no matter where you are.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="services">
          <div className="services__content">
            <div className="services__flex-container">
              <div className="services__text-container">
                <h2 className="services__title">Scalable and Flexible Platform</h2>
                <p className="services__description">
                  As your team grows, HiveSync grows with you. Our platform is designed to be scalable and flexible, giving you the freedom to add new users and features with ease. With HiveSync, you can build the perfect workspace for your team's needs.
                </p>
              </div>
              <div className="services__img-container img-container">
                <img src={serviceSection3} alt="scalable and adaptive planning platform - HiveSync" title="Stay productive illustration" className="img" />
              </div>
            </div>
          </div>
        </section>
        <section className="services">
          <div className="services__content">
            <div className="services__flex-container">
              <div className="services__img-container img-container">
                <img src={serviceSection4} alt="HiveSync collabration platform" title="Stay productive illustration" className="img" />
              </div>
              <div className="services__text-container">
                <h2 className="services__title">Experience the HiveSync Advantage</h2>
                <p className="services__description">
                  Join millions of users worldwide who trust HiveSync to optimize their team's productivity. Sign up for our services today and unlock your team's full potential.
                </p>
                <Link to="#" className="services__link">
                  See how HiveSync works
                  <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" className="services__icon icon">
                    <title>Right pointing arrow</title>
                    <desc>
                      An icon of a black arrow pointing rightwards inside of a light
                      green circle
                    </desc>
                    <defs>
                      <circle id="b" cx={6} cy={6} r={6} />
                      <filter x="-25%" y="-25%" width="150%" height="150%" filterUnits="objectBoundingBox" id="a">
                        <feOffset in="SourceAlpha" result="shadowOffsetOuter1" />
                        <feGaussianBlur stdDeviation={1} in="shadowOffsetOuter1" result="shadowBlurOuter1" />
                        <feColorMatrix values="0 0 0 0 0.384313725 0 0 0 0 0.878431373 0 0 0 0 0.850980392 0 0 0 0.811141304 0" in="shadowBlurOuter1" />
                      </filter>
                    </defs>
                    <g fill="none" fillRule="evenodd">
                      <g transform="translate(2 2)">
                        <use fill="#000" filter="url(#a)" xlinkHref="#b" />
                        <use fill="#62E0D9" xlinkHref="#b" />
                      </g>
                      <path d="M8.582 6l-.363.35 1.452 1.4H5.333v.5h4.338L8.22 9.65l.363.35 2.074-2z" fill="#1B2330" />
                    </g>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section className="testimonials">
          <div className="testimonials__content">
            <div className="testimonials__img-container--relative img-container">
              <img src={leftQuotes} alt="A left quote" title="See customers' testimonials" className="img" />
            </div>
            <div className="testimonials__flex-container">
              <article className="card-1">
                <div className="card__content">
                  <p className="card__text">HiveSync has completely transformed the way our team works. With its real-time collaboration tools, we are able to work more efficiently and get projects done faster than ever before. I can't imagine going back to the old way of doing things!</p>
                  <div className="card__flex-container">
                    <div className="card__img-container img-container">
                      <img src={reviewer_1} alt="A customer named John" title="Read our customer's testimonials" className="img card__image" />
                    </div>
                    <div>
                      <p className="card__text--bold">John</p>
                      <p className="card__text--small">Project Manager</p>
                    </div>
                  </div>
                </div>
              </article>
              <article className="card-2">
                <div className="card__content">
                  <p className="card__text">As someone who values security and privacy, I love that HiveSync prioritizes these features in their platform. I feel confident that my team's data is always protected, and the reliable uptime means we can collaborate without interruption.</p>
                  <div className="card__flex-container">
                    <div className="card__img-container img-container">
                      <img src={reviewer_2} alt="A customer named Sarah" title="Read our customer's testimonials" className="img card__image" />
                    </div>
                    <div>
                      <p className="card__text--bold">Sarah</p>
                      <p className="card__text--small">IT Specialist</p>
                    </div>
                  </div>
                </div>
              </article>
              <article className="card-3">
                <div className="card__content">
                  <p className="card__text">HiveSync has been a game-changer for my small business. The scalability and flexibility of the platform have allowed us to grow and adapt as we take on new clients and projects. And the task management features ensure that we never miss a deadline.</p>
                  <div className="card__flex-container">
                    <div className="card__img-container img-container">
                      <img src={reviewer_3} alt="A customer named Alex" title="Read our customer's testimonials" className="img card__image" />
                    </div>
                    <div>
                      <p className="card__text--bold">Alex</p>
                      <p className="card__text--small">Founder &amp; CEO, BinaryBeasts</p>
                    </div>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </section>
        <section className="registration">
          <div className="registration__content">
            <h2 className="registration__title">Join the HiveSync Community Today</h2>
            <p className="registration__text">
              Register today and join the HiveSync community to unleash the power of collaboration. Our support team is here to help you every step of the way.
            </p>
            <form action="#" method="GET" className="form">
              <fieldset className="form__content">
                <div className="form__flex-container">
                  <div className="form__child--1">
                    <label htmlFor="email" />
                    <input type="email" id="email" name="email" placeholder="email@example.com" className="text-input form__text-input" />
                  </div>
                  <div className="form__child--2">
                    <button className="btn form__btn" type="button">Get Started For Free</button>
                  </div>
                </div>
              </fieldset>
            </form>
          </div>
        </section>
      </main>
      <footer className="footer">
        <div className="footer__content">
          <Link to="#" className="footer__link" title="Go to the homepage" >
            <img src={HiveSyncLogo} alt="HiveSync logo" className="icon footer__icon" />
          </Link>
          <div className="footer__flex-outer">
            <ul className="contact-list">
              <li className="contact-list__item">
                <div className="contact-list__flex-container">
                  <iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d2965.0824050173574!2d-93.63905729999999!3d41.998507000000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sWebFilings%2C+University+Boulevard%2C+Ames%2C+IA!5e0!3m2!1sen!2sus!4v1390839289319" width="100%" height="200" frameborder="0" title="our landmark location" style={{border:0}}></iframe>
                  {/* <p className="contact-list__text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua
                  </p> */}
                </div>
              </li>
              <div className="contact-list__flex-inner">
                <li className="contact-list__item">
                  <div className="contact-list__flex-container">
                    <img src={phoneSupport} alt="phone support" title="Contact us by phone" className="contact-list__image" />
                    <p className="contact-list__text">+91 9965******</p>
                  </div>
                </li>
                <li className="contact-list__item">
                  <div className="contact-list__flex-container">
                    <img src={emailIcon} alt="Gmail logo" title="Contact us by email" className="contact-list__image" />
                    <p className="contact-list__text">techcreed@hivesync.com</p>
                  </div>
                </li>
              </div>
            </ul>
            <div className="footer__flex-intermediate">
              <div className="footer__flex-inner">
                <nav className="footer-menu" >
                  <ul className="footer-menu__list" >
                    <li className="footer-menu__list-item">
                      <Link className="link link--secondary" to="#" >About us</Link>
                    </li>
                    <li className="footer-menu__list-item" >
                      <Link className="link link--secondary" to="#">Jobs</Link>
                    </li>
                    <li className="footer-menu__list-item" >
                      <Link className="link link--secondary" to="#">Press</Link>
                    </li>
                    <li className="footer-menu__list-item">
                      <Link className="link link--secondary" to="#">Blog</Link>
                    </li>
                  </ul>
                </nav>
                <nav className="footer-menu">
                  <ul className="footer-menu__list" >
                    <li className="footer-menu__list-item" >
                      <Link className="link link--secondary" to="#" >Contact us</Link>
                    </li>
                    <li className="footer-menu__list-item" >
                      <Link className="link link--secondary" to="#" >Terms</Link>
                    </li>
                    <li className="footer-menu__list-item" >
                      <Link className="link link--secondary" to="#" >Privacy</Link>
                    </li>
                  </ul>
                </nav>
              </div>
              <nav className="footer-menu--flex">
                <ul className="footer-menu--flex__list">
                  <li className="footer-menu--flex__list-item" >
                    <Link to="#" className="footer-menu--flex__link" >
                      <i className="fab fa-facebook-f footer-menu--flex__icon" aria-hidden="true" />
                    </Link>
                  </li>
                  <li className="footer-menu--flex__list-item">
                    <Link to="#" className="footer-menu--flex__link">
                      <i className="fab fa-twitter footer-menu--flex__icon" aria-hidden="true" />
                    </Link>
                  </li>
                  <li className="footer-menu--flex__list-item" >
                    <Link to="#" className="footer-menu--flex__link">
                      <i className="fab fa-instagram footer-menu--flex__icon" aria-hidden="true" />
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default LandingPage