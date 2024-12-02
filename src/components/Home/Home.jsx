export default function Home() {
  return (
    <>
      <div
       id="carouselExampleSlidesOnly" className="carousel slide carousel-fade" data-bs-ride="carousel"
      >
        <div className="carousel-inner">
        <div className="carousel-item active carousel-one">
            <div className="container  text-center text-md-start">
              <h1 className="text-lg-start text-center">
                Hi! <br /> Im Jackson
              </h1>
              <p className="text-lg-start text-center">
                100% html5 bootstrap templates Made <br /> By
                <a href="https://colorlib.com/">Colorlib.com</a>
              </p>
              <button type="button" className="btn btn-transparent">
                DOWNLOAD CV <i className="fa-solid fa-download"></i>
              </button>
            </div>
          </div>
          <div className="carousel-item  carousel-sec">
            <div className="container  text-center text-md-start">
              <h1 className="text-lg-start text-center">
              I am
               <br /> a Designer
              </h1>
              <p className="text-lg-start text-center">
                100% html5 bootstrap templates Made <br /> By
                <a href="https://colorlib.com/">Colorlib.com</a>
              </p>
              <button type="button" className="btn btn-transparent">
              VIEW PORTFOLIO  <i className="fa-solid fa-briefcase"></i>
              </button>
            </div>
          </div>
        </div>
        {/* <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button> */}
      </div>
    </>
  );
}
