import { useState } from "react";

export default function Work() {
  const [isShowing, setIsShowing] = useState(false); // State to manage showing/hiding

  const showImage = () => {
    setIsShowing(!isShowing); // Toggle state
  };
  return (
    <>
      <div className="aboutus-container container py-5 mt-lg-0 mt-3  d-block flex-column justify-content-center vh-100">
        <span className="aboutus-title">MY WORK</span>
        <h2>RECENT WORK</h2>

        <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
          <li className="nav-item" role="presentation">
            <button
              className="nav-link active"
              id="pills-home-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-home"
              type="button"
              role="tab"
              aria-controls="pills-home"
              aria-selected="true"
            >
              Graphic Design
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link"
              id="pills-profile-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-profile"
              type="button"
              role="tab"
              aria-controls="pills-profile"
              aria-selected="false"
            >
              Apps
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link"
              id="pills-contact-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-contact"
              type="button"
              role="tab"
              aria-controls="pills-contact"
              aria-selected="false"
            >
              Software
            </button>
          </li>
        </ul>
        <div className="tab-content" id="pills-tabContent">
          <div
            className="tab-pane fade show active"
            id="pills-home"
            role="tabpanel"
            aria-labelledby="pills-home-tab"
          >
            <div className="row">
              <div className="col-md-6">
                <div className="card img1">
                  <div className="info pt-4">
                    <div className="info-details">
                      <div>
                        <h3>
                          <a href="work.html">Work 02</a>
                        </h3>
                        <span>Animation</span>
                      </div>
                      <p className="icon">
                        <span>
                          <a href="#">
                            <i className="fa-solid fa-share-nodes"></i>
                          </a>
                        </span>
                        <span>
                          <a href="#">
                            <i className="fa-regular fa-eye"></i> 100
                          </a>
                        </span>
                        <span>
                          <a href="#">
                            <i className="fa-regular fa-heart"></i> 49
                          </a>
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="card img2">
                  <div className="info pt-4">
                    <div className="info-details">
                      <div>
                        <h3>
                          <a href="work.html">Work 02</a>
                        </h3>
                        <span>Animation</span>
                      </div>
                      <p className="icon">
                        <span>
                          <a href="#">
                            <i className="fa-solid fa-share-nodes"></i>
                          </a>
                        </span>
                        <span>
                          <a href="#">
                            <i className="fa-regular fa-eye"></i> 100
                          </a>
                        </span>
                        <span>
                          <a href="#">
                            <i className="fa-regular fa-heart"></i> 49
                          </a>
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="card img3">
                  <div className="info pt-4">
                    <div className="info-details">
                      <div>
                        <h3>
                          <a href="work.html">Work 02</a>
                        </h3>
                        <span>Animation</span>
                      </div>
                      <p className="icon">
                        <span>
                          <a href="#">
                            <i className="fa-solid fa-share-nodes"></i>
                          </a>
                        </span>
                        <span>
                          <a href="#">
                            <i className="fa-regular fa-eye"></i> 100
                          </a>
                        </span>
                        <span>
                          <a href="#">
                            <i className="fa-regular fa-heart"></i> 49
                          </a>
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="card img4">
                  <div className="info pt-4">
                    <div className="info-details">
                      <div>
                        <h3>
                          <a href="work.html">Work 02</a>
                        </h3>
                        <span>Animation</span>
                      </div>
                      <p className="icon">
                        <span>
                          <a href="#">
                            <i className="fa-solid fa-share-nodes"></i>
                          </a>
                        </span>
                        <span>
                          <a href="#">
                            <i className="fa-regular fa-eye"></i> 100
                          </a>
                        </span>
                        <span>
                          <a href="#">
                            <i className="fa-regular fa-heart"></i> 49
                          </a>
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {isShowing && (
              <div className="row">
                <div className="col-md-6">
                  <div className="card img5">
                    <div className="info pt-4">
                      <div className="info-details">
                        <div>
                          <h3>
                            <a href="work.html">Work 02</a>
                          </h3>
                          <span>Animation</span>
                        </div>
                        <p className="icon">
                          <span>
                            <a href="#">
                              <i className="fa-solid fa-share-nodes"></i>
                            </a>
                          </span>
                          <span>
                            <a href="#">
                              <i className="fa-regular fa-eye"></i> 100
                            </a>
                          </span>
                          <span>
                            <a href="#">
                              <i className="fa-regular fa-heart"></i> 49
                            </a>
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="card img6">
                    <div className="info pt-4">
                      <div className="info-details">
                        <div>
                          <h3>
                            <a href="work.html">Work 02</a>
                          </h3>
                          <span>Animation</span>
                        </div>
                        <p className="icon">
                          <span>
                            <a href="#">
                              <i className="fa-solid fa-share-nodes"></i>
                            </a>
                          </span>
                          <span>
                            <a href="#">
                              <i className="fa-regular fa-eye"></i> 100
                            </a>
                          </span>
                          <span>
                            <a href="#">
                              <i className="fa-regular fa-heart"></i> 49
                            </a>
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            <button
              onClick={showImage}
              type="button"
              className="btn btn-primary"
            >
              {isShowing ? "Hide" : "Show"} more
            </button>
          </div>
          <div
            className="tab-pane fade"
            id="pills-profile"
            role="tabpanel"
            aria-labelledby="pills-profile-tab"
          >
            <div className="row">
              <div className="col-md-6">
                <div className="card img1">
                  <div className="info pt-4">
                    <div className="info-details">
                      <div>
                        <h3>
                          <a href="work.html">Work 02</a>
                        </h3>
                        <span>Animation</span>
                      </div>
                      <p className="icon">
                        <span>
                          <a href="#">
                            <i className="fa-solid fa-share-nodes"></i>
                          </a>
                        </span>
                        <span>
                          <a href="#">
                            <i className="fa-regular fa-eye"></i> 100
                          </a>
                        </span>
                        <span>
                          <a href="#">
                            <i className="fa-regular fa-heart"></i> 49
                          </a>
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="card img2">
                  <div className="info pt-4">
                    <div className="info-details">
                      <div>
                        <h3>
                          <a href="work.html">Work 02</a>
                        </h3>
                        <span>Animation</span>
                      </div>
                      <p className="icon">
                        <span>
                          <a href="#">
                            <i className="fa-solid fa-share-nodes"></i>
                          </a>
                        </span>
                        <span>
                          <a href="#">
                            <i className="fa-regular fa-eye"></i> 100
                          </a>
                        </span>
                        <span>
                          <a href="#">
                            <i className="fa-regular fa-heart"></i> 49
                          </a>
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="card img3">
                  <div className="info pt-4">
                    <div className="info-details">
                      <div>
                        <h3>
                          <a href="work.html">Work 02</a>
                        </h3>
                        <span>Animation</span>
                      </div>
                      <p className="icon">
                        <span>
                          <a href="#">
                            <i className="fa-solid fa-share-nodes"></i>
                          </a>
                        </span>
                        <span>
                          <a href="#">
                            <i className="fa-regular fa-eye"></i> 100
                          </a>
                        </span>
                        <span>
                          <a href="#">
                            <i className="fa-regular fa-heart"></i> 49
                          </a>
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="card img4">
                  <div className="info pt-4">
                    <div className="info-details">
                      <div>
                        <h3>
                          <a href="work.html">Work 02</a>
                        </h3>
                        <span>Animation</span>
                      </div>
                      <p className="icon">
                        <span>
                          <a href="#">
                            <i className="fa-solid fa-share-nodes"></i>
                          </a>
                        </span>
                        <span>
                          <a href="#">
                            <i className="fa-regular fa-eye"></i> 100
                          </a>
                        </span>
                        <span>
                          <a href="#">
                            <i className="fa-regular fa-heart"></i> 49
                          </a>
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {isShowing && (
              <div className="row">
                <div className="col-md-6">
                  <div className="card img5">
                    <div className="info pt-4">
                      <div className="info-details">
                        <div>
                          <h3>
                            <a href="work.html">Work 02</a>
                          </h3>
                          <span>Animation</span>
                        </div>
                        <p className="icon">
                          <span>
                            <a href="#">
                              <i className="fa-solid fa-share-nodes"></i>
                            </a>
                          </span>
                          <span>
                            <a href="#">
                              <i className="fa-regular fa-eye"></i> 100
                            </a>
                          </span>
                          <span>
                            <a href="#">
                              <i className="fa-regular fa-heart"></i> 49
                            </a>
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="card img6">
                    <div className="info pt-4">
                      <div className="info-details">
                        <div>
                          <h3>
                            <a href="work.html">Work 02</a>
                          </h3>
                          <span>Animation</span>
                        </div>
                        <p className="icon">
                          <span>
                            <a href="#">
                              <i className="fa-solid fa-share-nodes"></i>
                            </a>
                          </span>
                          <span>
                            <a href="#">
                              <i className="fa-regular fa-eye"></i> 100
                            </a>
                          </span>
                          <span>
                            <a href="#">
                              <i className="fa-regular fa-heart"></i> 49
                            </a>
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            <button
              onClick={showImage}
              type="button"
              className="btn btn-primary"
            >
              {isShowing ? "Hide" : "Show"} more
            </button>
          </div>
          <div
            className="tab-pane fade"
            id="pills-contact"
            role="tabpanel"
            aria-labelledby="pills-contact-tab"
          >
            <div className="row">
              <div className="col-md-6">
                <div className="card img1">
                  <div className="info pt-4">
                    <div className="info-details">
                      <div>
                        <h3>
                          <a href="work.html">Work 02</a>
                        </h3>
                        <span>Animation</span>
                      </div>
                      <p className="icon">
                        <span>
                          <a href="#">
                            <i className="fa-solid fa-share-nodes"></i>
                          </a>
                        </span>
                        <span>
                          <a href="#">
                            <i className="fa-regular fa-eye"></i> 100
                          </a>
                        </span>
                        <span>
                          <a href="#">
                            <i className="fa-regular fa-heart"></i> 49
                          </a>
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="card img2">
                  <div className="info pt-4">
                    <div className="info-details">
                      <div>
                        <h3>
                          <a href="work.html">Work 02</a>
                        </h3>
                        <span>Animation</span>
                      </div>
                      <p className="icon">
                        <span>
                          <a href="#">
                            <i className="fa-solid fa-share-nodes"></i>
                          </a>
                        </span>
                        <span>
                          <a href="#">
                            <i className="fa-regular fa-eye"></i> 100
                          </a>
                        </span>
                        <span>
                          <a href="#">
                            <i className="fa-regular fa-heart"></i> 49
                          </a>
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="card img3">
                  <div className="info pt-4">
                    <div className="info-details">
                      <div>
                        <h3>
                          <a href="work.html">Work 02</a>
                        </h3>
                        <span>Animation</span>
                      </div>
                      <p className="icon">
                        <span>
                          <a href="#">
                            <i className="fa-solid fa-share-nodes"></i>
                          </a>
                        </span>
                        <span>
                          <a href="#">
                            <i className="fa-regular fa-eye"></i> 100
                          </a>
                        </span>
                        <span>
                          <a href="#">
                            <i className="fa-regular fa-heart"></i> 49
                          </a>
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="card img4">
                  <div className="info pt-4">
                    <div className="info-details">
                      <div>
                        <h3>
                          <a href="work.html">Work 02</a>
                        </h3>
                        <span>Animation</span>
                      </div>
                      <p className="icon">
                        <span>
                          <a href="#">
                            <i className="fa-solid fa-share-nodes"></i>
                          </a>
                        </span>
                        <span>
                          <a href="#">
                            <i className="fa-regular fa-eye"></i> 100
                          </a>
                        </span>
                        <span>
                          <a href="#">
                            <i className="fa-regular fa-heart"></i> 49
                          </a>
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {isShowing && (
              <div className="row">
                <div className="col-md-6">
                  <div className="card img5">
                    <div className="info pt-4">
                      <div className="info-details">
                        <div>
                          <h3>
                            <a href="work.html">Work 02</a>
                          </h3>
                          <span>Animation</span>
                        </div>
                        <p className="icon">
                          <span>
                            <a href="#">
                              <i className="fa-solid fa-share-nodes"></i>
                            </a>
                          </span>
                          <span>
                            <a href="#">
                              <i className="fa-regular fa-eye"></i> 100
                            </a>
                          </span>
                          <span>
                            <a href="#">
                              <i className="fa-regular fa-heart"></i> 49
                            </a>
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="card img6">
                    <div className="info pt-4">
                      <div className="info-details">
                        <div>
                          <h3>
                            <a href="work.html">Work 02</a>
                          </h3>
                          <span>Animation</span>
                        </div>
                        <p className="icon">
                          <span>
                            <a href="#">
                              <i className="fa-solid fa-share-nodes"></i>
                            </a>
                          </span>
                          <span>
                            <a href="#">
                              <i className="fa-regular fa-eye"></i> 100
                            </a>
                          </span>
                          <span>
                            <a href="#">
                              <i className="fa-regular fa-heart"></i> 49
                            </a>
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            <button
              onClick={showImage}
              type="button"
              className="btn btn-primary"
            >
              {isShowing ? "Hide" : "Show"} more
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
