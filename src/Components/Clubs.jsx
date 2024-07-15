import React from "react";
import CNavbar from "./CNavbar";
import { NavLink, Outlet } from "react-router-dom";

function Clubs() {
  return (
    <>
      <CNavbar />
      <section
        className="section text-light p-4"
        style={{ background: "#222222" }}
      >
        <div className="container pt-5">
          <div className="row shadow " style={{ gap: "5px" }}>
            <div className="shadow  p-0 col-2 pt-5 bg-dark rounded">
              <div className="col-12 py-1"></div>
              <div className="row ">
                <div className="col ">
                  <div className="col">
                    {/* <h5 className="">CBIT Clubs</h5> */}
                    <div
                      className="accordion "
                      id="accordionPanelsStayOpenExample"
                    >
                      <div className="accordion-item border-dark bg-dark text-light">
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
                            Technical Clubs
                          </button>
                        </h2>
                        <div
                          id="panelsStayOpen-collapseOne"
                          className="accordion-collapse collapse show"
                          aria-labelledby="panelsStayOpen-headingOne"
                        >
                          <div className="accordion-body px-1">
                            <NavLink to="/clubs/">
                              <button
                                type="button"
                                className="btn btn-outline-primary my-2 w-100"
                              >
                                Robovanza
                              </button>
                            </NavLink>
                            <button className="btn btn-outline-primary my-2 w-100">
                              Cosc
                            </button>
                            <button className="btn btn-outline-primary my-2 w-100">
                              Hackiton
                            </button>
                          </div>
                        </div>
                      </div>

                      <div className="accordion-item border-dark bg-dark text-light">
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
                            Sports Clubs
                          </button>
                        </h2>
                        <div
                          id="panelsStayOpen-collapseTwo"
                          className="accordion-collapse collapse"
                          aria-labelledby="panelsStayOpen-headingTwo"
                        >
                          <div className="accordion-body px-1">
                            <button className="btn btn-outline-primary my-2 w-100">
                              Robovanza
                            </button>
                            <button className="btn btn-outline-primary my-2 w-100">
                              Robovanza
                            </button>
                            <button className="btn btn-outline-primary my-2 w-100">
                              Robovanza
                            </button>
                          </div>
                        </div>
                      </div>

                      <div className="accordion-item border-dark bg-dark text-light">
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
                            Cultural Clubs
                          </button>
                        </h2>
                        <div
                          id="panelsStayOpen-collapseThree"
                          className="accordion-collapse collapse"
                          aria-labelledby="panelsStayOpen-headingThree"
                        >
                          <div className="accordion-body px-1">
                            <button className="btn btn-outline-primary my-2 w-100">
                              Robovanza
                            </button>
                            <button className="btn btn-outline-primary my-2 w-100">
                              Robovanza
                            </button>
                            <button className="btn btn-outline-primary my-2 w-100">
                              Robovanza
                            </button>
                          </div>
                        </div>
                      </div>

                      <div className="accordion-item border-dark bg-dark text-light">
                        <h2
                          className="accordion-header"
                          id="panelsStayOpen-headingFour"
                        >
                          <button
                            className="accordion-button collapsed bg-dark text-light"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#panelsStayOpen-collapseFour"
                            aria-expanded="false"
                            aria-controls="panelsStayOpen-collapseThree"
                          >
                            Others Clubs
                          </button>
                        </h2>
                        <div
                          id="panelsStayOpen-collapseFour"
                          className="accordion-collapse collapse"
                          aria-labelledby="panelsStayOpen-headingFour"
                        >
                          <div className="accordion-body px-1">
                            <NavLink to="/clubs/spandana">
                              <button
                                type="button"
                                className="btn btn-outline-primary my-2 w-100"
                              >
                                Spandana
                              </button>
                            </NavLink>
                            <button className="btn btn-outline-primary my-2 w-100">
                              Robovanza
                            </button>
                            <button className="btn btn-outline-primary my-2 w-100">
                              Robovanza
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col shadow bg-dark rounded">
              <Outlet />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Clubs;
