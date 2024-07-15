import React from "react";
import { useEffect } from "react";
import Navbar from "./Navbar";
import "aos/dist/aos.css";
import AOS from "aos";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faFacebook,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { NavLink } from "react-router-dom";

function Home() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <Navbar />

      <section className="section bg-dark text-light p-5 text-start">
        <div className="container pt-5">
          <div className="row ">
            <div className="col-md-6">
              <h1>
                Explore The <span className="text-warning">CBIT CLUBS</span>
              </h1>
              <p className="lead my-4">
                Step into the dynamic realm of CBIT Clubs, a lively hub teeming
                with opportunities for personal and intellectual development.
                Our extensive selection of clubs spans a multitude of interests,
                guaranteeing an enriching experience for every student. Join us
                on a journey as we unravel the intricate tapestry of CBIT's club
                culture, where collaboration, exploration, and community
                engagement form the essence of a vibrant and fulfilling college
                experience. Explore the diverse landscape of our clubs and
                discover the myriad possibilities that await you.
              </p>
              <NavLink to='clubs'>
              <button type="button" className="btn btn-outline-warning btn-lg">
                Enrollment
              </button>
              </NavLink>
            </div>
            <div className="col-md-6 d-flex align-items-center justify-content-end">
              <img
                className="img-fluid"
                width="400px"
                height="300px"
                src="https://www.shutterstock.com/image-vector/student-club-abstract-concept-vector-260nw-2177600269.jpg"
                alt="https://static-00.iconduck.com/assets.00/person-icon-476x512-hr6biidg.png"
                data-aos="zoom-in"
                data-aos-duration="3000"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section p-5 text-start">
        <div className=" container g-5">
          <div className="row">
            <div className="col-12 text-center pb-5">
              
            </div>
            <div className="col">
              <div className="row g-3">
                <div className="rounded col-6 d-flex align-items-center justify-content-center">
                  <img
                    src="http://bemac.org.au/wp-content/uploads/2013/07/cultureclub_logo_inline_web.jpg"
                    alt="https://static-00.iconduck.com/assets.00/person-icon-476x512-hr6biidg.png"
                    height="400px"
                    width="400px"
                    data-aos="fade-right"
                    data-aos-duration="2000"
                  />
                </div>
                <div className="rounded col-6 ">
                  <h2>Cultural Clubs</h2>
                  <small>
                    CBIT's cultural clubs infuse the campus with energy,
                    showcasing a kaleidoscope of talents through dance, music,
                    and drama. These vibrant hubs foster cultural diversity,
                    uniting students in celebration of traditions and artistic
                    expression. From lively performances to engaging festivals,
                    these clubs create an inclusive space for students to
                    showcase their creativity and contribute to the rich
                    cultural fabric of CBIT.
                  </small>
                  <ul className="list-group py-2">
                    <li className="listcomponent list-group-item py-2 mb-2 border border-dark">
                      chaitanya vaadya
                    </li>
                    <li className="listcomponent list-group-item py-2 mb-2 border border-dark">
                      chaitanya geethi
                    </li>
                    <li className="listcomponent list-group-item py-2 mb-2 border border-dark">
                      cbit mun
                    </li>
                    <li className="listcomponent list-group-item py-2 mb-2 border border-dark">
                      communicando
                    </li>
                  </ul>
                </div>

                <div className="w-100 g-5"></div>

                <div className="rounded col-6 ">
                  <h2>Technical Clubs</h2>
                  <small>
                    CBIT's technical clubs fuel innovation through coding
                    competitions, hackathons, and workshops, fostering hands-on
                    learning. These dynamic platforms provide students with
                    opportunities for continuous growth, tech talks, and
                    collaborative projects, preparing them for excellence in the
                    ever-evolving realm of technology.
                  </small>
                  <ul className="list-group py-2">
                    <li className="listcomponent list-group-item py-2 mb-2 border border-dark">
                      chaitanya vaadya
                    </li>
                    <li className="listcomponent list-group-item py-2 mb-2 border border-dark">
                      chaitanya geethi
                    </li>
                    <li className=" listcomponent list-group-item py-2 mb-2 border border-dark">
                      cbit mun
                    </li>
                    <li className="listcomponent list-group-item py-2 mb-2 border border-dark">
                      communicando
                    </li>
                  </ul>
                </div>
                <div className="rounded col-6 d-flex align-items-center justify-content-center">
                  <img
                    src="https://www.bhprsd.org/cms/lib/NJ01001930/Centricity/Domain/894/tech%20club.jpg"
                    alt="https://static-00.iconduck.com/assets.00/person-icon-476x512-hr6biidg.png"
                    height="400px"
                    width="400px"
                    data-aos="fade-left"
                    data-aos-duration="2000"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-dark p-5 text-light text-start">
        <div className=" container g-5">
          <div className="row">
            <div className="col-12 text-center pb-5">
              <h1 className="text-light">
                Importance Of <span className="text-warning">Clubs</span>
              </h1>
            </div>
            <div className="col">
              <div className="row g-3">
                <div
                  className="rounded border border-warning col-6 bg-dark "
                  data-aos="fade-right"
                  data-aos-duration="2000"
                >
                  <h2>Skill Development</h2>
                  <p>
                    College clubs enhance skills like leadership, communication,
                    teamwork, and time management, bridging theory with
                    practical experience.
                  </p>
                </div>
                <div className="col-6 "></div>
                <div className="col "></div>
                <div
                  className="rounded border border-warning col bg-dark "
                  data-aos="fade-left"
                  data-aos-duration="2000"
                >
                  <h3>Networking Opportunities</h3>
                  <p>
                    Joining clubs facilitates networking with peers, faculty,
                    and industry professionals, crucial for career growth and
                    job opportunities.
                  </p>
                </div>
                <div className="w-100"></div>
                <div
                  className="rounded border border-warning col-6 bg-dark"
                  data-aos="fade-right"
                  data-aos-duration="2000"
                >
                  <h3> Leadership Experience</h3>
                  <p>
                    Holding leadership positions in clubs showcases and develops
                    initiative and responsibility, appealing to employers.
                  </p>
                </div>
                <div className="col-6 "></div>
                <div className="col "></div>
                <div
                  className="rounded border border-warning col bg-dark"
                  data-aos="fade-left"
                  data-aos-duration="2000"
                >
                  <h3>Resume Enhancement</h3>
                  <p>
                    Club involvement enhances resumes, demonstrating a
                    commitment to both academic and extracurricular excellence.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-light text-dark">
        <br />
        <h2 className="text-center p-5">Frequently Asked Question</h2>
        <div className="container">
          <div className="accordion accordion-flush" id="accordionFlushExample">
            <div className="accordion-item">
              <h2 className="accordion-header" id="flush-headingOne">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseOne"
                  aria-expanded="false"
                  aria-controls="flush-collapseOne"
                >
                  How Can I Join a Club?
                </button>
              </h2>
              <div
                id="flush-collapseOne"
                className="accordion-collapse collapse"
                aria-labelledby="flush-headingOne"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  To join a club at CBIT, you can start by exploring the list of
                  clubs available on our website. Each club typically has a
                  dedicated page with information about its activities,
                  objectives, and contact details. Look for any upcoming club
                  fairs, orientations, or recruitment events where you can meet
                  current members, learn more about the club, and express your
                  interest in joining. Additionally, keep an eye out for
                  announcements or registration forms that may be posted on the
                  club's page or bulletin board.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="flush-headingTwo">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseTwo"
                  aria-expanded="false"
                  aria-controls="flush-collapseTwo"
                >
                  What Types of Clubs Exist, and How Do They Differ?
                </button>
              </h2>
              <div
                id="flush-collapseTwo"
                className="accordion-collapse collapse"
                aria-labelledby="flush-headingTwo"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  CBIT offers a diverse range of clubs, catering to various
                  interests and passions. You can find technical clubs focusing
                  on STEM fields, cultural clubs celebrating diversity and
                  creativity, sports clubs for fitness enthusiasts, and more.
                  Each club has its unique activities and goals. Explore the
                  club pages on our website to get a detailed overview of the
                  types of clubs available, their meeting schedules, and the
                  events they organize. This will help you identify clubs
                  aligning with your interests.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="flush-headingThree">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseThree"
                  aria-expanded="false"
                  aria-controls="flush-collapseThree"
                >
                  Are There Opportunities for Freshers to Take Leadership Roles?
                </button>
              </h2>
              <div
                id="flush-collapseThree"
                className="accordion-collapse collapse"
                aria-labelledby="flush-headingThree"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  Absolutely! At CBIT, we encourage freshers to actively
                  participate in club activities and provide opportunities for
                  leadership roles. Many clubs have positions such as club
                  president, vice president, or event coordinator that are open
                  to all members. Keep an eye on leadership development
                  programs, workshops, or announcements about upcoming elections
                  for leadership positions. Additionally, attending club
                  meetings, volunteering for events, and showcasing your passion
                  and commitment can increase your chances of taking on
                  leadership roles within the clubs. Don't hesitate to express
                  your interest and inquire about leadership opportunities
                  during club orientations or meetings.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-dark text-light p-5 mt-5">
        <div className="container">
          <div className="row text-center">
            <div className="col ">
              <span className="text-30 p-3">
                <FontAwesomeIcon icon={faInstagram} />
                Instagram
              </span>
              <span className="text-30 p-3">
                <FontAwesomeIcon icon={faTwitter} />
                Twitter
              </span>
              <span className="text-30 p-3">
                <FontAwesomeIcon icon={faFacebook} />
                Facebook
              </span>
              <span className="text-30 p-3">
                <FontAwesomeIcon icon={faLinkedin} />
                Linkedin
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
