import React, { useEffect, useState } from "react";
import "aos/dist/aos.css";
import AOS from "aos";
import axios from "axios";

function Spandana() {
  const [id, setId] = useState();
  const [name, setName] = useState();
  const [roll, setRoll] = useState();
  const [branch, setBranch] = useState();
  const [year, setYear] = useState();
  const [contact, setContact] = useState();
  const [position, setPosition] = useState();

  const [hackathon, setHackathon] = useState();
  const [clubmembers, setClubMembers] = useState();

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
        club: "Spandana",
        name: name,
        roll: roll,
        branch: branch,
        year: year,
        contact: contact,
        position: position,
      })
      .then((result) => console.log(result))
      .catch((err) => console.log(err));
  };

  const handleHackathonApplication = (e) => {
    e.preventDefault();

    axios
      .post(`${process.env.REACT_APP_SERVER_URL}/hackathonAppliation`, {
        club: "Spandana",
        name: name,
        roll: roll,
        branch: branch,
        year: year,
        contact: contact,
      })
      .then((result) => console.log("hello"))
      .catch((err) => console.log(err));

    axios
      .get(`${process.env.REACT_APP_SERVER_URL}/getOneHackathon/${id}`)
      .then((result) => {
        const newCount = result.data.participants;
        const updatedCount = newCount + 1;

        axios
          .put(`${process.env.REACT_APP_SERVER_URL}/updateParticipants/${id}`, {
            participants: updatedCount,
          })
          .then((res2) => console.log("bye", res2))
          .catch((err) => console.log(err));
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <section className="section py-4 bg-dark text-start">
        <div
          className="shadow rounded bg-dark "
          data-aos="fade-flip"
          data-aos-duration="2000"
        >
          <h2 className="text-center">Spandana</h2>
        </div>

        <div className=" container g-5">
          <div className="row">
            <div className="col">
              <div className="col">
                <h5
                  className="pt-3 "
                  style={{ borderBottom: "2px solid rgba(255, 255, 255, 0.2)" }}
                >
                  What is Spandana all about
                </h5>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
                eaque nihil dolore nesciunt. Eum, consectetur eligendi
                praesentium vel fuga eveniet dolores impedit excepturi. Autem
                delectus architecto molestiae voluptates debitis officia
                deleniti ab eum suscipit magni doloremque earum consequatur
                veritatis blanditiis impedit tenetur odit, laudantium ut sed!
                Quibusdam debitis voluptatem quam dolore aliquam obcaecati dolor
                unde, molestiae mollitia delectus beatae voluptas at, molestias
                laborum dolores eligendi? Iusto fuga non odit libero vel ex eum
                aliquid unde perferendis itaque, sint reiciendis quasi vero
                dolorem quam veniam qui officiis labore ut. Repellendus
                inventore perspiciatis nulla saepe in aut error. Velit animi
                alias commodi? Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Labore hic fugit impedit magnam omnis ab
                consectetur libero, adipisci aspernatur dolores veritatis error
                nostrum possimus eum incidunt repellat mollitia dolorum
                architecto sed quae nihil sint quos cum similique. Provident,
                tempora alias.
              </div>
              <div className="row g-3 py-5">
                <div
                  className="rounded  col-6 d-flex align-items-center justify-content-center"
                  data-aos="fade-up"
                  data-aos-duration="2000"
                >
                  <div className="col p-5">
                    <img
                      className="rounded shadow img-fluid "
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS--HRoEU7uBxDFwfcCRCNY7rU8E8XBM9CrvA&usqp=CAU"
                      width={"100%"}
                    />
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
                  <div className="col mx-4">
                    <div className="row py-5 g-5">
                      <div
                        className="col-12 rounded"
                        data-aos="fade-up"
                        data-aos-duration="2000"
                        style={{ border: "1px solid rgba(255, 255, 255, 0.2)" }}
                      >
                        hello Lorem, ipsum dolor nam ab earum, voluptates
                        blanditiis perferendis nobis quis esse, aut nemo
                        possimus? Architectoit enim!
                      </div>
                      <div
                        className="col-12 rounded"
                        data-aos="fade-up"
                        data-aos-duration="2000"
                        style={{ border: "1px solid rgba(255, 255, 255, 0.2)" }}
                      >
                        world Lorem ipsum dolor sit, amet consectetur
                        adipisicing elit. Aspernatur tempore explicabo sint
                        nulla voluptates est?
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
                    Membership Information - How to join Spandana
                  </h5>
                  <small>
                    CBIT's cultural clubs infuse the campus with energy,
                    showcasing a kaleidoscope of talents through dance, music,
                    and drama. These vibrant hubs foster cultural diversity,
                    uniting students in celebration of traditions and artistic
                    expression. From lively performances to engaging festivals,
                    these clubs create an inclusive space for students to
                    showcase their creativity and contribute to the rich
                    cultural fabric of CBIT. Lorem, ipsum dolor sit amet
                    consectetur adipisicing elit. Maxime, ducimus qui vel
                    corrupti itaque, sunt incidunt corporis quia saepe
                    architecto molestiae soluta? Maxime beatae iusto, esse
                    magnam quasi, veniam officiis porro aspernatur explicabo
                    sint ratione earum exercitationem tenetur, provident cum
                    nisi neque quidem dolorem. Commodi quasi magnam suscipit
                    soluta. Ducimus quod architecto deleniti et molestias nam
                    facilis repellendus vel assumenda velit fugiat obcaecati
                    quidem mollitia animi iure, dolorum officia aut excepturi ad
                    incidunt provident deserunt nisi aliquid modi. Corporis
                    expedita cum, sapiente facere consequuntur ad error et,
                    perspiciatis eligendi nisi dolor similique, accusamus
                    doloribus vero magni? Dolor aliquid tempora impedit.
                  </small>
                  <br></br>
                  <button
                    type="button"
                    className="btn btn-primary my-3"
                    data-bs-toggle="modal"
                    data-bs-target="#club"
                  >
                    Register To Club
                  </button>

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
                    Upcoming Events And Hackathons In Spandana
                  </h5>
                  <br></br>
                  <div className="col-12 text-center"></div>
                  <div className="col">
                    <div className="row g-3">
                      {hackathon &&
                        hackathon.map((hack) => {
                          if (hack.club === "Spandana") {
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
              <tbody className="table-group-divider">
                {clubmembers &&
                  clubmembers.map((member) => {
                    if (member.club === "Spandana") {
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
                    Question 1
                  </button>
                </h2>
                <div
                  id="panelsStayOpen-collapseOne"
                  className="accordion-collapse collapse show"
                  aria-labelledby="panelsStayOpen-headingOne"
                >
                  <div className="accordion-body">
                    <strong>This is the first item's accordion body.</strong> It
                    is shown by default, until the collapse plugin adds the
                    appropriate classes that we use to style each element. These
                    classes control the overall appearance, as well as the
                    showing and hiding via CSS transitions. You can modify any
                    of this with custom CSS or overriding our default variables.
                    It's also worth noting that just about any HTML can go
                    within the <code>.accordion-body</code>, though the
                    transition does limit overflow.
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
                    Question 2
                  </button>
                </h2>
                <div
                  id="panelsStayOpen-collapseTwo"
                  className="accordion-collapse collapse"
                  aria-labelledby="panelsStayOpen-headingTwo"
                >
                  <div className="accordion-body">
                    <strong>This is the second item's accordion body.</strong>{" "}
                    It is hidden by default, until the collapse plugin adds the
                    appropriate classes that we use to style each element. These
                    classes control the overall appearance, as well as the
                    showing and hiding via CSS transitions. You can modify any
                    of this with custom CSS or overriding our default variables.
                    It's also worth noting that just about any HTML can go
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
                    <strong>This is the third item's accordion body.</strong> It
                    is hidden by default, until the collapse plugin adds the
                    appropriate classes that we use to style each element. These
                    classes control the overall appearance, as well as the
                    showing and hiding via CSS transitions. You can modify any
                    of this with custom CSS or overriding our default variables.
                    It's also worth noting that just about any HTML can go
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
    </>
  );
}

export default Spandana;
