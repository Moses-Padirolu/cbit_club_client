import React, { useEffect, useState} from "react";
import { useLocation } from 'react-router-dom';
import axios from "axios";
import "aos/dist/aos.css";
import AOS from "aos";
import ANavbar from "./ANavbar";

function SpandanaAdmin() {
  const clubName = "Spandana";
  const location = useLocation();
  const {state} = location;
  const [data, setData] = useState([]);
  const [clubmembers, setClubMembers] = useState();
  const [clubapplication, setClubApplication] = useState();
  const [eventName, setEventName] = useState();
  const [eventDate, setEventDate] = useState();
  const [eventDescription, setEventDescription] = useState();

  const handleCreate = (e) => {
    e.preventDefault(); 
    axios
      .post(`${process.env.REACT_APP_SERVER_URL || "http://cbit-clubs-server.onrender.com"}/createHackathon`, {
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
      .get(`${process.env.REACT_APP_SERVER_URL || "http://cbit-clubs-server.onrender.com"}/getApplication/${id}`)
      .then((result) => {
        axios
          .post(`${process.env.REACT_APP_SERVER_URL || "http://cbit-clubs-server.onrender.com"}/createMember`, {
            club: clubName,
            name: result.data.name,
            roll: result.data.roll,
            year: result.data.year,
            branch: result.data.branch,
            contact: result.data.contact,
            position: result.data.position,
          })
          .then((res2) => console.log("added to club members"))
          .catch((err) => console.log(err));
      })
      .catch((err) => console.log(err));

    axios
      .delete(`${process.env.REACT_APP_SERVER_URL || "http://cbit-clubs-server.onrender.com"}/deleteApplication/${id}`)
      .then((res) => console.log("deleted"))
      .catch((err) => console.log(err));
  };

  const handleDelete = (id) => {
    axios
      .delete(`${process.env.REACT_APP_SERVER_URL || "http://cbit-clubs-server.onrender.com"}/deleteHackathon/${id}`)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  const handleDeleteApplication = (id) => {
    axios
      .delete(`${process.env.REACT_APP_SERVER_URL || "http://cbit-clubs-server.onrender.com"}/deleteApplication/${id}`)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_SERVER_URL || "http://cbit-clubs-server.onrender.com"}/getHackathon`)
      .then((result) => {
        console.log("getting hackathon")
        setData(result.data);
      })
      .catch((err) => console.log(err));

    axios
      .get(`${process.env.REACT_APP_SERVER_URL || "http://cbit-clubs-server.onrender.com"}/getClubRegistration`)
      .then((result) => {
        setClubApplication(result.data);
      })
      .catch((err) => console.log(err));

    axios
      .get(`${process.env.REACT_APP_SERVER_URL || "http://cbit-clubs-server.onrender.com"}/getClubMembers`)
      .then((result) => setClubMembers(result.data))
      .catch((err) => console.log(err));
  });

  useEffect(() => {
   
    AOS.init();
  }, []);




  return (
    <>
      <ANavbar/>
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
                      src="https://media.licdn.com/dms/image/D5603AQHzqzFBrgEjKg/profile-displayphoto-shrink_800_800/0/1676305938174?e=1726704000&v=beta&t=zCws-MfpxiB4skO9RUmTog5Pl-uNRraJosxJw9fyKTw" height={'50%'}
                      style={{ borderRadius: "50%" }}
                      alt="https://static-00.iconduck.com/assets.00/person-icon-476x512-hr6biidg.png"
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
                  <h2 className="text-center">Spandana Admin</h2>
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
                          What is Spandana all about
                        </h5>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Nisi eaque nihil dolore nesciunt. Eum, consectetur
                        eligendi praesentium vel fuga eveniet dolores impedit
                        excepturi. Autem delectus architecto molestiae
                        voluptates debitis officia deleniti ab eum suscipit
                        magni doloremque earum consequatur veritatis blanditiis
                        impedit tenetur odit, laudantium ut sed! Quibusdam
                        debitis voluptatem quam dolore aliquam obcaecati dolor
                        unde, molestiae mollitia delectus beatae voluptas at,
                        molestias laborum dolores eligendi? Iusto fuga non odit
                        libero vel ex eum aliquid unde perferendis itaque, sint
                        reiciendis quasi vero dolorem quam veniam qui officiis
                        labore ut. Repellendus inventore perspiciatis nulla
                        saepe in aut error. Velit animi alias commodi? Lorem
                        ipsum dolor sit amet consectetur adipisicing elit.
                        Labore hic fugit impedit magnam omnis ab consectetur
                        libero, adipisci aspernatur dolores veritatis error
                        nostrum possimus eum incidunt repellat mollitia dolorum
                        architecto sed quae nihil sint quos cum similique.
                        Provident, tempora alias.
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
                          <small>
                            CBIT's cultural clubs infuse the campus with energy,
                            showcasing a kaleidoscope of talents through dance,
                            music, and drama. These vibrant hubs foster cultural
                            diversity, uniting students in celebration of
                            traditions and artistic expression. From lively
                            performances to engaging festivals, these clubs
                            create an inclusive space for students to showcase
                            their creativity and contribute to the rich cultural
                            fabric of CBIT.
                          </small>
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
                                hello Lorem, ipsum dolor nam ab earum,
                                voluptates blanditiis perferendis nobis quis
                                esse, aut nemo possimus? Architectoit enim!
                              </div>
                              <div
                                className="col-12 rounded"
                                data-aos="fade-up"
                                data-aos-duration="2000"
                                style={{
                                  border: "2px solid rgba(225, 225, 225, 0.1)",
                                }}
                              >
                                world Lorem ipsum dolor sit, amet consectetur
                                adipisicing elit. Aspernatur tempore explicabo
                                sint nulla voluptates est?
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
                            New Applications To Spandana
                          </h5>
                          <small>
                            CBIT's cultural clubs infuse the campus with energy,
                            showcasing a kaleidoscope of talents through dance,
                            music, and drama. These vibrant hubs foster cultural
                            diversity, em mollitia animi iure, dolorum officia
                            aut excepturi ad incidunt provident deserunt nisi
                            aliquid modi. Corporis expedita cum, sapiente facere
                            consequuntur ad error et, perspiciatis eligendi nisi
                            dolor similique, accusamus doloribus vero magni?
                            Dolor aliquid tempora impedit.
                          </small>
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
                                  if (user.club === "Spandana") {
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
                            Upcoming Events And Hakathons In Spandana
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
                                if (hackathon.club === "Spandana") {
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
                    Spandana Team Members
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
                            if (member.club === "Spandana") {
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
                            Question 1
                          </button>
                        </h2>
                        <div
                          id="panelsStayOpen-collapseOne"
                          className="accordion-collapse collapse show"
                          aria-labelledby="panelsStayOpen-headingOne"
                        >
                          <div className="accordion-body">
                            <strong>
                              This is the first item's accordion body.
                            </strong>{" "}
                            It is shown by default, until the collapse plugin
                            adds the appropriate classes that we use to style
                            each element. These classes control the overall
                            appearance, as well as the showing and hiding via
                            CSS transitions. You can modify any of this with
                            custom CSS or overriding our default variables. It's
                            also worth noting that just about any HTML can go
                            within the <code>.accordion-body</code>, though the
                            transition does limit overflow.
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
                            Question 2
                          </button>
                        </h2>
                        <div
                          id="panelsStayOpen-collapseTwo"
                          className="accordion-collapse collapse"
                          aria-labelledby="panelsStayOpen-headingTwo"
                        >
                          <div className="accordion-body">
                            <strong>
                              This is the second item's accordion body.
                            </strong>{" "}
                            It is hidden by default, until the collapse plugin
                            adds the appropriate classes that we use to style
                            each element. These classes control the overall
                            appearance, as well as the showing and hiding via
                            CSS transitions. You can modify any of this with
                            custom CSS or overriding our default variables. It's
                            also worth noting that just about any HTML can go
                            within the <code>.accordion-body</code>, though the
                            transition does limit overflow.
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
                            Question 3
                          </button>
                        </h2>
                        <div
                          id="panelsStayOpen-collapseThree"
                          className="accordion-collapse collapse"
                          aria-labelledby="panelsStayOpen-headingThree"
                        >
                          <div className="accordion-body">
                            <strong>
                              This is the third item's accordion body.
                            </strong>{" "}
                            It is hidden by default, until the collapse plugin
                            adds the appropriate classes that we use to style
                            each element. These classes control the overall
                            appearance, as well as the showing and hiding via
                            CSS transitions. You can modify any of this with
                            custom CSS or overriding our default variables. It's
                            also worth noting that just about any HTML can go
                            within the <code>.accordion-body</code>, though the
                            transition does limit overflow.
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

export default SpandanaAdmin;
