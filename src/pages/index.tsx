import styles from "@/styles/WelcomePage.module.css"
import Navbar from "@/components/Navbar"

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Sign In</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
                <div className="mb-4">
                    <label htmlFor="signin-email" className="form-label">Email Address</label>
                    <input type="email" className="form-control" id="signin-email" placeholder="user@sw360.org" />
                </div>
                <div className="mb-4">
                    <label htmlFor="signin-password" className="form-label">Password</label>
                    <input type="password" className="form-control" id="signin-password" />
                </div>
                <div className="text-center">
                    <button type="button" className={`btn btn-lg ${styles['btn-primary']} fw-bold`} data-bs-dismiss="modal">Submit</button>
                </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-4 mb-4 p-5 bg-light rounded">
          <h1 className="display-4">Welcome to SW360!</h1>
          <p className="lead">SW360 is an open source software project that provides both a web application and a repository to collect, organize and make available information about software components. It establishes a central hub for software components in an organization.</p>
          <hr className="my-4" />
          <p className="fw-bold">In order to go ahead, please sign in or create a new account!</p>
          <div className="pb-2">
              <button type="button" className={`btn btn-lg ${styles['btn-primary']} fw-bold mx-2`} data-bs-toggle="modal" data-bs-target="#exampleModal">Sign In</button>
              <button type="button" className={`btn btn-lg ${styles['btn-outline-primary']} fw-bold`}>Create Account</button>
          </div>
      </div>
    </>
  )
}
