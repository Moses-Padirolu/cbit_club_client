import React, { useEffect, useState, useLocation } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import "aos/dist/aos.css";
import AOS from "aos";
import ANavbar from "./ANavbar";

function RobovanzaAdmin() {
  const clubName = "Robovanza";
  const location = useLocation();
  const { state } = location;
  const [data, setData] = useState([]);
  const [clubmembers, setClubMembers] = useState();
  const [clubapplication, setClubApplication] = useState();
  const [eventName, setEventName] = useState();
  const [eventDate, setEventDate] = useState();
  const [eventDescription, setEventDescription] = useState();

  const handleCreate = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/createHackathon", {
        club: clubName,
        name: eventName,
        date: eventDate,
        description: eventDescription,
        participants: 0,
      })
      .then((result) => console.log(result))
      .catch((err) => console.log(err));
  };

  const handleAcceptApplication = (id) => {
    axios
      .get(`http://localhost:3001/getApplication/${id}`)
      .then((result) => {
        axios
          .post("http://localhost:3001/createMember", {
            club: clubName,
            name: result.data.name,
            roll: result.data.roll,
            year: result.data.year,
            branch: result.data.branch,
            contact: result.data.contact,
            position: result.data.position,
            passcode: result.data.passcode,
          })
          .then((res2) => console.log("added to club members"))
          .catch((err) => console.log(err));
      })
      .catch((err) => console.log(err));

      window.location.reload();
      
    axios
      .delete(`http://localhost:3001/deleteApplication/${id}`)
      .then((res) => console.log("deleted"))
      .catch((err) => console.log(err));
  };

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:3001/deleteHackathon/${id}`)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  const handleDeleteApplication = (id) => {
    axios
      .delete(`http://localhost:3001/deleteApplication/${id}`)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    axios
      .get("http://localhost:3001/getHackathon")
      .then((result) => {
        setData(result.data);
      })
      .catch((err) => console.log(err));

    axios
      .get("http://localhost:3001/getClubRegistration")
      .then((result) => {
        setClubApplication(result.data);
      })
      .catch((err) => console.log(err));

    axios
      .get("http://localhost:3001/getClubMembers")
      .then((result) => setClubMembers(result.data))
      .catch((err) => console.log(err));
  });

  useEffect(() => {
    AOS.init();
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    yearOfStudy: "",
    branch: "",
    password: "",
  });

  return (
    <>
      <ANavbar />
      <section
        className="section text-light p-4"
        style={{ background: "#222222" }}
      >
        <div className="container pt-5">
          <div className="row shadow" style={{ gap: "5px" }}>
            <div className="shadow col-2 bg-dark rounded ">
              <div
                className="rounded bg-dark shadow"
                data-aos="flip-left"
                data-aos-duration="3000"
              >
                <div className="col bg-dark">
                  <div className="col">
                    <img
                      className="mt-3 img-fluid "
                      src="https://media.licdn.com/dms/image/D5603AQHzqzFBrgEjKg/profile-displayphoto-shrink_800_800/0/1676305938174?e=1726704000&v=beta&t=zCws-MfpxiB4skO9RUmTog5Pl-uNRraJosxJw9fyKTw"
                      alt="https://static-00.iconduck.com/assets.00/person-icon-476x512-hr6biidg.png"
                      height={"50%"}
                      style={{ borderRadius: "50%" }}
                    />
                  </div>

                  <h5 className="text-center pt-3">{state.name}</h5>
                  <h6 className="text-center">{state.position}</h6>
                </div>
              </div>
            </div>

            <div className="col shadow bg-dark rounded py-5">
              <section className="section pb-5 bg-dark text-start">
                <div
                  className="shadow rounded bg-dark "
                  data-aos="fade-flip"
                  data-aos-duration="2000"
                >
                  <h2 className="text-center">Robovanza Admin</h2>
                </div>

                <div className=" container g-5">
                  <div className="row">
                    <div className="col">
                      <div className="col">
                        <h5
                          className="pt-3 "
                          style={{
                            borderBottom: "2px solid rgba(128, 0, 128, 0.4)",
                          }}
                        >
                          What is Robovanza all about
                        </h5>
                        RoboVanza, the prestigious robotics club at Chaitanya
                        Bharathi Institute of Technology (CBIT), acts as a
                        dynamic hub where technological passion converges. By
                        engaging students in diverse hands-on projects,
                        immersive workshops, and competitive events, the club
                        not only immerses them in the forefront of cutting-edge
                        robotics but also imparts practical skills crucial for
                        real-world applications. The emphasis on practical
                        application creates a dynamic learning environment,
                        seamlessly bridging theoretical concepts to tangible
                        solutions and fostering collaboration among students
                        with expertise in electronics, programming, and
                        mechanical engineering. Within the CBIT community,
                        RoboVanza is not merely a club but a beacon of
                        innovation, harnessing the collective creativity of its
                        members. Beyond cultivating technical proficiency, the
                        club instills a spirit of teamwork and inventive
                        thinking, contributing to a holistic educational
                        experience. As an integral part of the college's
                        ecosystem, RoboVanza plays a pivotal role in shaping not
                        only skilled engineers but also a close-knit community
                        that thrives on pushing the boundaries of technology,
                        fostering an environment of continuous exploration and
                        growth.
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
                                alt="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOuxrvcNMfGLh73uKP1QqYpKoCB0JLXiBMvA&s"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="rounded col-6 ">
                          <h5
                            className="pt-3 "
                            style={{
                              borderBottom: "2px solid rgba(128, 0, 128, 0.4)",
                            }}
                          >
                            Mission and Vision of the club
                          </h5>
                          In its pursuit of excellence, RoboVanza at Chaitanya
                          Bharathi Institute of Technology (CBIT) has outlined a
                          clear mission and vision. These guiding principles
                          shape the club's endeavors, propelling members toward
                          a future marked by innovation, collaboration, and
                          leadership in the dynamic realm of robotics.
                          <div className="col mx-4">
                            <div className="row py-5 g-5">
                              <div
                                className="col-12  rounded"
                                data-aos="fade-up"
                                data-aos-duration="2000"
                                style={{
                                  border: "2px solid rgba(225, 225, 225, 0.1)",
                                }}
                              >
                                Mission:RoboVanza is dedicated to fostering
                                innovation and practical learning in robotics,
                                empowering CBIT students to become adept problem
                                solvers. Through diverse projects and
                                competitions, we instill a passion for
                                continuous learning and real-world application.
                              </div>
                              <div
                                className="col-12 rounded"
                                data-aos="fade-up"
                                data-aos-duration="2000"
                                style={{
                                  border: "2px solid rgba(225, 225, 225, 0.1)",
                                }}
                              >
                                Vission:Our vision for RoboVanza is to stand as
                                a prominent force in robotics, inspiring
                                students to excel in technological advancements.
                                With a focus on interdisciplinary collaboration
                                and creative exploration, we aim to cultivate a
                                community of forward-thinking engineers shaping
                                the future of robotics and automation.
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="w-100 g-5"></div>

                        <div className="rounded col ">
                          <h5
                            className="pt-3 "
                            style={{
                              borderBottom: "2px solid rgba(128, 0, 128, 0.4)",
                            }}
                          >
                            New Applications To Robovanza
                          </h5>
                          <div>
                            Dear RoboVanza Member: <br></br>
                            We are excited to inform you that new applications
                            have been received for membership in RoboVanza. As
                            the club administrator, your role is crucial in
                            ensuring the selection of candidates who align with
                            the objectives and ethos of RoboVanza.
                            <ol className="pl-0">
                              <li className="p-2">
                                <strong>Review & Interview:</strong> Access the
                                admin dashboard, review applications, and
                                initiate interviews to assess applicants'
                                alignment with RoboVanza's goals.
                              </li>
                              <li className="p-2">
                                <strong>Check Resume & Conditions:</strong>{" "}
                                Scrutinize resumes, ensuring applicants meet
                                necessary conditions for club membership.
                              </li>
                              <li className="p-2">
                                <strong>Decision & Notification:</strong> Based
                                on interviews and evaluations, make informed
                                decisions. Notify applicants of outcomes,
                                welcoming accepted members warmly.
                              </li>
                            </ol>
                          </div>
                          <br></br>
                          <table class="table table-dark table-hover mt-3">
                            <thead>
                              <tr>
                                <th>Name</th>
                                <th>Roll Number</th>
                                <th>Contact</th>
                                <th>Year</th>
                                <th>Branch</th>
                                <th>Position</th>
                                <th>Accept</th>
                                <th>Reject</th>
                              </tr>
                            </thead>
                            <tbody class="table-group-divider">
                              {clubapplication &&
                                clubapplication.map((user) => {
                                  if (user.club === "Robovanza") {
                                    return (
                                      <>
                                        <tr>
                                          <td>{user.name}</td>
                                          <td>{user.roll}</td>
                                          <td>{user.contact}</td>
                                          <td>{user.year}</td>
                                          <td>{user.branch}</td>
                                          <td>{user.position}</td>
                                          <td>
                                            <button
                                              className="btn btn-outline-warning"
                                              onClick={() =>
                                                handleAcceptApplication(
                                                  user._id
                                                )
                                              }
                                            >
                                              Accept
                                            </button>
                                          </td>
                                          <td>
                                            <button
                                              className="btn btn-outline-danger"
                                              onClick={() =>
                                                handleDeleteApplication(
                                                  user._id
                                                )
                                              }
                                            >
                                              Reject
                                            </button>
                                          </td>
                                        </tr>
                                      </>
                                    );
                                  } else {
                                    return null;
                                  }
                                })}
                            </tbody>
                          </table>
                        </div>
                        <div className="col-6 w-100"></div>

                        <div className="rounded col ">
                          <h5
                            className="pt-3 text-end"
                            style={{
                              borderBottom: "2px solid rgba(128, 0, 128, 0.5)",
                            }}
                          >
                            Upcoming Events And Hakathons In Robovanza
                          </h5>
                          <br></br>
                          <div className="col-12 text-center"></div>
                          <div className="col">
                            <div className="row g-3">
                              <div className="col">
                                <button
                                  type="button"
                                  className="btn btn-outline-success"
                                  data-bs-toggle="modal"
                                  data-bs-target="#modal"
                                >
                                  Add Event
                                </button>
                              </div>
                              {data.map((hackathon) => {
                                if (hackathon.club === "Robovanza") {
                                  return (
                                    <>
                                      <div
                                        className="rounded col-12 bg-dark "
                                        style={{
                                          border:
                                            "2px solid rgba(225, 225, 225, 0.1)",
                                        }}
                                        data-aos="fade-up"
                                        data-aos-duration="2000"
                                      >
                                        <h5 className="text-center">
                                          {hackathon.name}
                                        </h5>
                                        <small>{hackathon.date}</small>
                                        <p>{hackathon.description}</p>
                                        <div className="row">
                                          <div className="col">
                                            <button
                                              className="btn btn-outline-danger my-2"
                                              onClick={() =>
                                                handleDelete(hackathon._id)
                                              }
                                            >
                                              delete
                                            </button>
                                          </div>
                                          <div className="col pt-2 d-flex justify-content-space-between">
                                            <small
                                              style={{
                                                marginRight: "20px",
                                                paddingTop: "5px",
                                              }}
                                            >
                                              Total Applications Received:{" "}
                                            </small>
                                            <h4 className="text-success">
                                              {hackathon.participants}
                                            </h4>
                                          </div>
                                        </div>
                                      </div>
                                    </>
                                  );
                                } else {
                                  return null;
                                }
                              })}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <div className="modal fade " id="modal">
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
                        <form onSubmit={handleCreate}>
                          <div className="mb-2">
                            <h4 className="text-center ">Add Event Details</h4>
                            <label htmlFor="name" className="form-label">
                              Event Name
                            </label>
                            <input
                              type="text"
                              className="form-control border-bottom border-warning bg-dark text-light"
                              onChange={(e) => setEventName(e.target.value)}
                              required
                            />
                          </div>

                          <div className="mb-3">
                            <label htmlFor="date" className="form-label">
                              Event Date
                            </label>
                            <input
                              type="date"
                              className="form-control border-bottom border-warning bg-dark text-light"
                              onChange={(e) => setEventDate(e.target.value)}
                              required
                            />
                          </div>

                          <div className="mb-3">
                            <label htmlFor="description" className="form-label">
                              Description
                            </label>
                            <input
                              type="text"
                              className="form-control border-bottom border-warning bg-dark text-light"
                              onChange={(e) =>
                                setEventDescription(e.target.value)
                              }
                              required
                            />
                          </div>
                          <button
                            type="submit"
                            className="btn btn-light "
                            data-bs-dismiss="modal"
                          >
                            Add Event
                          </button>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <section className="section">
                <div className="container bg-dark">
                  <h5
                    style={{ borderBottom: "2px solid rgba(128, 0, 128, 0.5)" }}
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
                      <tbody class="table-group-divider">
                        {clubmembers &&
                          clubmembers.map((member) => {
                            if (member.club === "Robovanza") {
                              return (
                                <>
                                  <tr>
                                    <td>{member.name}</td>
                                    <td>{member.position}</td>
                                    <td>{member.contact}</td>
                                    <td>{member.year}</td>
                                    <td>{member.branch}</td>
                                  </tr>
                                </>
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
                    <div
                      className="accordion"
                      id="accordionPanelsStayOpenExample"
                    >
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
                            Answer: RoboVanza primarily focuses on fostering
                            innovation and hands-on learning in the field of
                            robotics. It serves as a vibrant hub for students to
                            engage in cutting-edge projects, workshops, and
                            competitions, emphasizing practical application of
                            theoretical concepts.
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item bg-dark text-light">
                        <h2
                          className="accordion-header"
                          id="panelsStayOpen-headingTwo"
                        >
                          <button
                            className="accordion-button collapsed bg-dark text-light"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#panelsStayOpen-collapseTwo"
                            aria-expanded="false"
                            aria-controls="panelsStayOpen-collapseTwo"
                          >
                            Question:How does the registration process for
                            RoboVanza work?
                          </button>
                        </h2>
                        <div
                          id="panelsStayOpen-collapseTwo"
                          className="accordion-collapse collapse"
                          aria-labelledby="panelsStayOpen-headingTwo"
                        >
                          <div className="accordion-body">
                            Answer: To register for RoboVanza, individuals need
                            to click the "Register" button on the club's
                            website, complete a form with details such as name,
                            branch, and contact information, and submit it for
                            review by club members. Following this, there will
                            be an interaction with club members to discuss
                            interests and skills. The evaluation process
                            considers compatibility with RoboVanza's objectives,
                            and applicants receive feedback on acceptance or, if
                            necessary, constructive feedback for future
                            applications.
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
                            Question:What role does RoboVanza play in the CBIT
                            community beyond technical proficiency?
                          </button>
                        </h2>
                        <div
                          id="panelsStayOpen-collapseThree"
                          className="accordion-collapse collapse"
                          aria-labelledby="panelsStayOpen-headingThree"
                        >
                          <div className="accordion-body">
                            Answer: RoboVanza stands as a beacon of innovation
                            within CBIT, channeling the collective creativity of
                            its members. Beyond technical proficiency, the club
                            nurtures a spirit of teamwork and inventive
                            thinking. As an integral part of the college's
                            ecosystem, RoboVanza not only produces skilled
                            engineers but also cultivates a community that
                            thrives on pushing the boundaries of technology,
                            contributing to a holistic and collaborative
                            learning experience.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-w-100 py-5"></div>
                  <div className="col"></div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default RobovanzaAdmin;
