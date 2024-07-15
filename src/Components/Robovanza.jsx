import React, { useEffect, useState } from "react";
import "aos/dist/aos.css";
import AOS from "aos";
import axios from "axios";

function Robovanza() {
  const [id, setId] = useState();
  const [name, setName] = useState();
  const [roll, setRoll] = useState();
  const [branch, setBranch] = useState();
  const [year, setYear] = useState();
  const [contact, setContact] = useState();
  const [position, setPosition] = useState();
  const [passcode, setPasscode] = useState();
  const [hackathon, setHackathon] = useState([]);
  const [clubmembers, setClubMembers] = useState();

  console.log("process fileee",process.env.REACT_APP_SERVER_URL);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_SERVER_URL}/getHackathon`)
      .then((result) => {
        setHackathon(result.data);
      })
      .catch((err) => console.log(err));

    axios
      .get(`${process.env.REACT_APP_SERVER_URL}/getClubMembers`)
      .then((result) => setClubMembers(result.data))
      .catch((err) => console.log(err));

    AOS.init();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post(`${process.env.REACT_APP_SERVER_URL}/clubRegistration`, {
        club: "Robovanza",
        name: name,
        roll: roll,
        branch: branch,
        year: year,
        contact: contact,
        position: position,
        passcode: passcode,
      })
      .then((result) => console.log(result))
      .catch((err) => console.log(err));
  };

  const handleHackathonApplication = (e) => {
    e.preventDefault();

    axios
      .post(`${process.env.REACT_APP_SERVER_URL}/hackathonAppliation`, {
        club: "Robovanza",
        name: name,
        roll: roll,
        branch: branch,
        year: year,
        contact: contact,
      })
      .then((result) => console.log("hello"))
      .catch((err) => console.log(err));

    axios
      .get(`${process.evn.REACT_APP_SERVER_URL}/getOneHackathon/${id}`)
      .then((result) => {
        const newCount = result.data.participants;
        const updatedCount = newCount + 1;

        axios
          .put(`${process.evn.REACT_APP_SERVER_URL}/updateParticipants/${id}`, {
            participants: updatedCount,
          })
          .then((res2) => console.log("bye", res2))
          .catch((err) => console.log(err));
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <section className="section  py-4 bg-dark text-start">
        <div
          className=" rounded bg-dark "
          data-aos="fade-flip"
          data-aos-duration="2000"
        >
          <h2 className="text-center">Robovanza</h2>
        </div>

        <div className=" container g-5">
          <div className="row">
            <div className="col">
              <div className="col">
                <h5
                  className="pt-3 "
                  style={{ borderBottom: "2px solid rgba(255, 255, 255, 0.2)" }}
                >
                  What is Robovanza all about
                </h5>
                RoboVanza, the prestigious robotics club at Chaitanya Bharathi
                Institute of Technology (CBIT), acts as a dynamic hub where
                technological passion converges. By engaging students in diverse
                hands-on projects, immersive workshops, and competitive events,
                the club not only immerses them in the forefront of cutting-edge
                robotics but also imparts practical skills crucial for
                real-world applications. The emphasis on practical application
                creates a dynamic learning environment, seamlessly bridging
                theoretical concepts to tangible solutions and fostering
                collaboration among students with expertise in electronics,
                programming, and mechanical engineering. Within the CBIT
                community, RoboVanza is not merely a club but a beacon of
                innovation, harnessing the collective creativity of its members.
                Beyond cultivating technical proficiency, the club instills a
                spirit of teamwork and inventive thinking, contributing to a
                holistic educational experience. As an integral part of the
                college's ecosystem, RoboVanza plays a pivotal role in shaping
                not only skilled engineers but also a close-knit community that
                thrives on pushing the boundaries of technology, fostering an
                environment of continuous exploration and growth.
              </div>
              <div className="row g-3 py-5">
                <div
                  className="rounded  col-6 d-flex align-items-center justify-content-center"
                  data-aos="fade-up"
                  data-aos-duration="2000"
                >
                  <div className="col px-5">
                    <div className="col">
                      <img
                        className="rounded shadow mt-3 img-fluid "
                        src="https://static.vecteezy.com/system/resources/previews/008/215/184/original/robot-logo-design-with-dark-background-abstract-cyborg-human-symbol-for-brand-technology-illustration-vector.jpg"
                        alt="https://static-00.iconduck.com/assets.00/person-icon-476x512-hr6biidg.png"
                      />
                    </div>
                  </div>
                </div>
                <div className="rounded col-6 ">
                  <h5
                    className="pt-3 "
                    style={{
                      borderBottom: "2px solid rgba(255, 255, 255, 0.2)",
                    }}
                  >
                    Mission and Vision of the club
                  </h5>
                  <p>
                    In its pursuit of excellence, RoboVanza at Chaitanya
                    Bharathi Institute of Technology (CBIT) has outlined a clear
                    mission and vision. These guiding principles shape the
                    club's endeavors, propelling members toward a future marked
                    by innovation, collaboration, and leadership in the dynamic
                    realm of robotics.
                  </p>
                  <div className="col mx-4">
                    <div className="row py-5 g-5">
                      <div
                        className="col-12 rounded"
                        data-aos="fade-up"
                        data-aos-duration="2000"
                        style={{ border: "1px solid rgba(255, 255, 255, 0.2)" }}
                      >
                        Mission: RoboVanza is dedicated to fostering innovation
                        and practical learning in robotics, empowering CBIT
                        students to become adept problem solvers. Through
                        diverse projects and competitions, we instill a passion
                        for continuous learning and real-world application.
                      </div>
                      <div
                        className="col-12 rounded"
                        data-aos="fade-up"
                        data-aos-duration="2000"
                        style={{ border: "1px solid rgba(255, 255, 255, 0.2)" }}
                      >
                        Vision: Our vision for RoboVanza is to stand as a
                        prominent force in robotics, inspiring students to excel
                        in technological advancements. With a focus on
                        interdisciplinary collaboration and creative
                        exploration, we aim to cultivate a community of
                        forward-thinking engineers shaping the future of
                        robotics and automation.
                      </div>
                    </div>
                  </div>
                </div>

                <div className="w-100 g-5"></div>

                <div className="rounded col ">
                  <h5
                    className="pt-3 "
                    style={{
                      borderBottom: "2px solid rgba(255, 255, 255, 0.2)",
                    }}
                  >
                    Membership Information - How to join Robovanza
                  </h5>
                  <div>
                    <ol>
                      <li className="p-2">
                        <strong>Initiate Registration:</strong> Click the
                        "Register" button to access the registration form.
                      </li>
                      <li className="p-2">
                        <strong>Complete Form:</strong> Fill in details such as
                        name, branch, and contact information.
                      </li>
                      <li className="p-2">
                        <strong>Submit:</strong> Submit the form for review by
                        club members.
                      </li>
                      <li className="p-2">
                        <strong>Club Interaction:</strong> Engage in discussions
                        with club members regarding your interests and skills.
                      </li>
                      <li className="p-2">
                        <strong>Evaluation:</strong> Your compatibility with
                        RoboVanza's objectives will be assessed.
                      </li>
                      <li className="p-2">
                        <strong>Acceptance/Rejection:</strong> Receive feedback
                        on your application, with the possibility of acceptance
                        or constructive feedback for future applications.
                      </li>
                      <li className="p-2">
                        <strong>Welcome:</strong> If accepted, become an active
                        member of RoboVanza, participating in events and
                        collaborative projects.
                      </li>
                    </ol>
                  </div>
                  <div className="container">
                    <button
                      type="button"
                      className="btn btn-primary my-3"
                      data-bs-toggle="modal"
                      data-bs-target="#club"
                    >
                      Register To Club
                    </button>
                  </div>

                  <div className="modal fade " id="club">
                    <div className="modal-dialog modal-dialog-centered">
                      <div className="modal-content bg-dark text-light">
                        <div className="modal-header text-dark border-0">
                          <button
                            className="btn-close bg-light"
                            data-bs-dismiss="modal"
                          ></button>
                        </div>

                        <div className="modal-body text-light pt-0">
                          <div className="container mt-5">
                            <form onSubmit={handleSubmit}>
                              <div className="mb-2">
                                <h4 className="text-center ">
                                  Registration Form
                                </h4>
                                <label htmlFor="name" className="form-label">
                                  Name
                                </label>
                                <input
                                  type="text"
                                  className="form-control border-bottom border-warning bg-dark text-light"
                                  onChange={(e) => setName(e.target.value)}
                                  required
                                />
                              </div>

                              <div className="mb-3">
                                <label htmlFor="email" className="form-label">
                                  Roll Number
                                </label>
                                <input
                                  type="number"
                                  className="form-control border-bottom border-warning bg-dark text-light"
                                  onChange={(e) => setRoll(e.target.value)}
                                  required
                                />
                              </div>

                              <div className="mb-3">
                                <label
                                  htmlFor="yearOfStudy"
                                  className="form-label"
                                >
                                  Year of Study
                                </label>
                                <input
                                  type="number"
                                  className="form-control border-bottom border-warning bg-dark text-light"
                                  onChange={(e) => setYear(e.target.value)}
                                  required
                                />
                              </div>

                              <div className="mb-3">
                                <label htmlFor="branch" className="form-label">
                                  Branch
                                </label>
                                <input
                                  type="text"
                                  className="form-control border-bottom border-warning bg-dark text-light"
                                  onChange={(e) => setBranch(e.target.value)}
                                  required
                                />
                              </div>

                              <div className="mb-3">
                                <label htmlFor="number" className="form-label">
                                  Contact
                                </label>
                                <input
                                  type="number"
                                  className="form-control border-bottom border-warning bg-dark text-light"
                                  onChange={(e) => setContact(e.target.value)}
                                  required
                                />
                              </div>

                              <div className="mb-3">
                                <label htmlFor="text" className="form-label">
                                  To what position you are applying?
                                </label>
                                <input
                                  type="text"
                                  className="form-control border-bottom border-warning bg-dark text-light"
                                  onChange={(e) => setPosition(e.target.value)}
                                  required
                                />
                              </div>

                              <div className="mb-3">
                                <label htmlFor="text" className="form-label">
                                  Set Passcode greater than 8 digits
                                </label>
                                <input
                                  type="text"
                                  className="form-control border-bottom border-warning bg-dark text-light"
                                  onChange={(e) => setPasscode(e.target.value)}
                                  required
                                />
                              </div>

                              <button
                                type="submit"
                                className="btn btn-light "
                                data-bs-dismiss="modal"
                              >
                                Sign Up
                              </button>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-6 w-100"></div>

                <div className="rounded col ">
                  <h5
                    className="pt-3 text-end"
                    style={{
                      borderBottom: "2px solid rgba(255, 255, 255, 0.2)",
                    }}
                  >
                    Upcoming Events And Hakathons In Robovanza
                  </h5>
                  <br></br>
                  <div className="col-12 text-center"></div>
                  <div className="col">
                    <div className="row g-3">
                      {hackathon &&
                        hackathon.map((hack) => {
                          if (hack.club === "Robovanza") {
                            return (
                              <>
                                <div
                                  className="rounded  col-12 bg-dark"
                                  style={{
                                    border:
                                      "2px solid rgba(255, 255, 255, 0.2)",
                                  }}
                                  data-aos="fade-up"
                                  data-aos-duration="2000"
                                  key={hack.id}
                                >
                                  <h5>{hack.name}</h5>
                                  <small>{hack.date}</small>
                                  <p>{hack.description}</p>
                                  <button
                                    className="btn btn-outline-primary mt-0 mb-1"
                                    onClick={() => setId(hack._id)}
                                    data-bs-toggle="modal"
                                    data-bs-target="#hackathon"
                                  >
                                    Apply
                                  </button>
                                </div>
                              </>
                            );
                          } else {
                            return null;
                          }
                        })}

                      <div className="modal fade " id="hackathon">
                        <div className="modal-dialog modal-dialog-centered">
                          <div className="modal-content bg-dark text-light">
                            <div className="modal-header text-dark border-0">
                              <button
                                className="btn-close bg-light"
                                data-bs-dismiss="modal"
                              ></button>
                            </div>

                            <div className="modal-body text-light pt-0">
                              <div className="container mt-5">
                                <form onSubmit={handleHackathonApplication}>
                                  <div className="mb-2">
                                    <h4 className="text-center ">
                                      Hackathon Registration Form
                                    </h4>
                                    <label
                                      htmlFor="name"
                                      className="form-label"
                                    >
                                      Name
                                    </label>
                                    <input
                                      type="text"
                                      className="form-control border-bottom border-warning bg-dark text-light"
                                      onChange={(e) => setName(e.target.value)}
                                      required
                                    />
                                  </div>

                                  <div className="mb-3">
                                    <label
                                      htmlFor="email"
                                      className="form-label"
                                    >
                                      Roll Number
                                    </label>
                                    <input
                                      type="number"
                                      className="form-control border-bottom border-warning bg-dark text-light"
                                      onChange={(e) => setRoll(e.target.value)}
                                      required
                                    />
                                  </div>

                                  <div className="mb-3">
                                    <label
                                      htmlFor="yearOfStudy"
                                      className="form-label"
                                    >
                                      Year of Study
                                    </label>
                                    <input
                                      type="number"
                                      className="form-control border-bottom border-warning bg-dark text-light"
                                      onChange={(e) => setYear(e.target.value)}
                                      required
                                    />
                                  </div>

                                  <div className="mb-3">
                                    <label
                                      htmlFor="branch"
                                      className="form-label"
                                    >
                                      Branch
                                    </label>
                                    <input
                                      type="text"
                                      className="form-control border-bottom border-warning bg-dark text-light"
                                      onChange={(e) =>
                                        setBranch(e.target.value)
                                      }
                                      required
                                    />
                                  </div>

                                  <div className="mb-3">
                                    <label
                                      htmlFor="number"
                                      className="form-label"
                                    >
                                      Contact
                                    </label>
                                    <input
                                      type="number"
                                      className="form-control border-bottom border-warning bg-dark text-light"
                                      onChange={(e) =>
                                        setContact(e.target.value)
                                      }
                                      required
                                    />
                                  </div>

                                  <button
                                    type="submit"
                                    className="btn btn-light "
                                    data-bs-dismiss="modal"
                                  >
                                    Sign Up
                                  </button>
                                </form>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container bg-dark">
          <h5
            className="my-3"
            style={{ borderBottom: "2px solid rgba(255, 255, 255, 0.2)" }}
          >
            Robovanza Team Members
          </h5>
          <div className="col">
            <table class="table table-dark table-hover mt-3">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Position</th>
                  <th>Contact</th>
                  <th>Year of study</th>
                  <th>Branch</th>
                </tr>
              </thead>
              <tbody className="table-group-divider">
                {clubmembers &&
                  clubmembers.map((member) => {
                    if (member.club === "Robovanza") {
                      return (
                        <tr>
                          <td>{member.name}</td>
                          <td>{member.position}</td>
                          <td>{member.contact}</td>
                          <td>{member.year}</td>
                          <td>{member.branch}</td>
                        </tr>
                      );
                    } else {
                      return null;
                    }
                  })}
              </tbody>
            </table>
          </div>
          <div className="col-12 py-5"></div>
          <div className="col">
            <h5 className="text-center">Frequently Asked questions</h5>
            <div className="accordion" id="accordionPanelsStayOpenExample">
              <div className="accordion-item bg-dark text-light">
                <h2
                  className="accordion-header bg-dark text-light"
                  id="panelsStayOpen-headingOne"
                >
                  <button
                    className="accordion-button bg-dark text-light"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#panelsStayOpen-collapseOne"
                    aria-expanded="true"
                    aria-controls="panelsStayOpen-collapseOne"
                  >
                    Question: What is the primary focus of RoboVanza at
                    Chaitanya Bharathi Institute of Technology (CBIT)?
                  </button>
                </h2>
                <div
                  id="panelsStayOpen-collapseOne"
                  className="accordion-collapse collapse show"
                  aria-labelledby="panelsStayOpen-headingOne"
                >
                  <div className="accordion-body">
                    Answer: RoboVanza primarily focuses on fostering innovation
                    and hands-on learning in the field of robotics. It serves as
                    a vibrant hub for students to engage in cutting-edge
                    projects, workshops, and competitions, emphasizing practical
                    application of theoretical concepts.
                  </div>
                </div>
              </div>
              <div className="accordion-item bg-dark text-light">
                <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
                  <button
                    className="accordion-button collapsed bg-dark text-light"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#panelsStayOpen-collapseTwo"
                    aria-expanded="false"
                    aria-controls="panelsStayOpen-collapseTwo"
                  >
                    Question:How does the registration process for RoboVanza
                    work?
                  </button>
                </h2>
                <div
                  id="panelsStayOpen-collapseTwo"
                  className="accordion-collapse collapse"
                  aria-labelledby="panelsStayOpen-headingTwo"
                >
                  <div className="accordion-body">
                    Answer: To register for RoboVanza, individuals need to click
                    the "Register" button on the club's website, complete a form
                    with details such as name, branch, and contact information,
                    and submit it for review by club members. Following this,
                    there will be an interaction with club members to discuss
                    interests and skills. The evaluation process considers
                    compatibility with RoboVanza's objectives, and applicants
                    receive feedback on acceptance or, if necessary,
                    constructive feedback for future applications.
                  </div>
                </div>
              </div>
              <div className="accordion-item bg-dark text-light">
                <h2
                  className="accordion-header"
                  id="panelsStayOpen-headingThree"
                >
                  <button
                    className="accordion-button collapsed bg-dark text-light"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#panelsStayOpen-collapseThree"
                    aria-expanded="false"
                    aria-controls="panelsStayOpen-collapseThree"
                  >
                    Question:What role does RoboVanza play in the CBIT community
                    beyond technical proficiency?
                  </button>
                </h2>
                <div
                  id="panelsStayOpen-collapseThree"
                  className="accordion-collapse collapse"
                  aria-labelledby="panelsStayOpen-headingThree"
                >
                  <div className="accordion-body">
                    Answer: RoboVanza stands as a beacon of innovation within
                    CBIT, channeling the collective creativity of its members.
                    Beyond technical proficiency, the club nurtures a spirit of
                    teamwork and inventive thinking. As an integral part of the
                    college's ecosystem, RoboVanza not only produces skilled
                    engineers but also cultivates a community that thrives on
                    pushing the boundaries of technology, contributing to a
                    holistic and collaborative learning experience.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-w-100 py-5"></div>
          <div className="col"></div>
        </div>
      </section>
    </>
  );
}

export default Robovanza;
