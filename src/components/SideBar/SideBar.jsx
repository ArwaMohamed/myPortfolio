import { Link } from "react-router-dom";
// import logo from './../../assets/imgs/about-BgAkqdr2.jpg'
export default function SideBar() {
  return (
    <>
     <div className="d-flex text-center sidebar-container">
      {/* Sidebar - Visible by Default on Larger Screens */}
      <div className=" w-100 sidebar d-none d-lg-flex flex-column bg-light vh-100 p-3 pt-5">
        <div className="d-flex justify-center flex-column align-items-center">
         <div className="img"></div> 
         {/* <img src={logo} className="w-50 rounded-circle"/> */}
        <h4 className="text-center mb-4">Jackson Ford</h4>
        <p className="user-info"><span className="active">UI/UX/Designer</span> in Philippines</p>
        </div>
        <ul className="nav flex-column text-center">
          <li className="nav-item">
            <Link className="nav-link" to="/home" >
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about">
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/skills">
              Skills
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/experience">
              Experience
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/work">
              Work
            </Link>
          </li>
        </ul>
      </div>

      {/* Offcanvas Sidebar - For Smaller Screens */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light d-lg-none">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="offcanvas offcanvas-start"
            tabIndex="-1"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
                Menu
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body">
              <ul className="w-100 navbar-nav justify-content-end flex-grow-1 pe-3 ">
              <li className="nav-item">
            <Link className="nav-link active" to="/home">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about">
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/skills">
              Skills
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/experience">
              Experience
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/work">
              Work
            </Link>
          </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      {/* <div className="flex-grow-1 p-4">
        <h1>Welcome to My Portfolio</h1>
        <p>Content goes here...</p>
      </div> */}
    </div>
    </>
  )
}
