import styles from "@/styles/Projects.module.css"
import Navbar from "@/components/Navbar"
import TableComponent from "@/components/table"
import { Table } from "@/components/table/table"
import Link from "next/link"

export default function Home() {

  const icons: string = `<i class="bi bi-pencil"></i><i class="bi bi-check2-square"></i><i class="bi bi-clipboard"></i><i class="bi bi-archive"></i>`;

  const table: Table = {
    headers: [
      {
        headerValue: "Project Name",
        isSortable:  true
      },
      {
        headerValue: "Description",
        isSortable:  true
      },
      {
        headerValue: "Project Responsible",
        isSortable:  true
      },
      {
        headerValue: "State",
        isSortable:  true
      },
      {
        headerValue: "License Clearing",
        isSortable:  true
      },
      {
        headerValue: "Actions",
        isSortable:  false
      }
    ],
    rows: [
      [
        '<p>HxH</p>',
        '<p>Description</p>',
        '<p>oberoidearsh@gmail.com</p>',
        '<p>0/0</p>',
        '<div style="background-color:#68c17c;color:white;">PS</div><div style="background-color:#e6717c;color:white">CS</div>',
        icons
      ],
      [
        '<p>Aot</p>',
        '<p>Description</p>',
        '<p>oberoidearsh@gmail.com</p>',
        '<p>0/0</p>',
        '<div style="background-color:#68c17c;color:white;">PS</div><div style="background-color:#e6717c;color:white">CS</div>',
        icons
      ]
    ],
    paginationSize: 10,
    messageOnEmptyTable: "There are no projects."
  };

  return (
    <>
      <Navbar />
      <div className="ms-5 me-5 mt-1">
        <div className="row mt-2">
            <div className="col col-sm-3">
                <div className="card mb-4">
                    <div className={styles["card-header"]}>
                        <p className="fw-bold m-3">Advanced Search</p>
                    </div>
                    <div className="card-body">
                      <div className="mb-3">
                        <label htmlFor="projectName" className="form-label fw-bold">Project Name</label>
                        <input type="text" className="form-control" id="projectName" />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="projectVersion" className="form-label fw-bold">Project Version</label>
                        <input type="text" className="form-control" id="projectVersion" />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="projectType" className="form-label fw-bold">Project Type</label>
                        <select className="form-select" id="projectType" aria-label="project type select">
                          <option selected></option>
                          <option value="Customer Project">Customer Project</option>
                          <option value="Internal Project">Internal Project</option>
                          <option value="Product">Product</option>
                          <option value="Service">Service</option>
                          <option value="Inner Source">Inner Source</option>
                        </select>
                      </div>
                      <div className="mb-3">
                        <label htmlFor="projectResponsible" className="form-label fw-bold">Project Responsible (Email)</label>
                        <input type="text" className="form-control" id="projectResponsible" />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="group" className="form-label fw-bold">Group</label>
                        <select className="form-select" id="group" aria-label="group select">
                          <option selected></option>
                          <option value="Department">Department</option>
                        </select>
                      </div>
                      <div className="mb-3">
                        <label htmlFor="state" className="form-label fw-bold">State</label>
                        <select className="form-select" id="state" aria-label="state select">
                          <option selected></option>
                          <option value="Active">Active</option>
                          <option value="Phase Out">Phase Out</option>
                          <option value="Unknown">Unknown</option>
                        </select>
                      </div>
                      <div className="mb-3">
                        <label htmlFor="state" className="form-label fw-bold">State</label>
                        <select className="form-select" id="state" aria-label="state select">
                          <option selected></option>
                          <option value="Open">Open</option>
                          <option value="In Progress">In Progress</option>
                          <option value="Closed">Closed</option>
                        </select>
                      </div>
                      <div className="mb-3">
                        <label htmlFor="tag" className="form-label fw-bold">Tag</label>
                        <input type="text" className="form-control" id="tag" />
                      </div>
                      <div className="mb-4">
                        <label htmlFor="additionalData" className="form-label fw-bold">Additional Data</label>
                        <input type="text" className="form-control" id="additionalData" />
                      </div>
                      <button type="button" className={`fw-bold btn ${styles['button-search']}`}>Search</button>
                    </div>
                </div>
            </div>
            <div className="col col-sm-9">
              <div className="col">
                <div className="row">
                  <div className="col-lg-3">
                    <div className="btn-group d-flex mb-2" role="group" aria-label="Project Utilities">
                    <Link href="http://localhost:3000/projects/add/summary"><button type="button" className={`fw-bold btn btn-primary ${styles['button']}`}>Add Project</button></Link>
                      <button type="button" className={`fw-bold btn btn-light ${styles['button-plain']}`}>Import SBOM</button>
                    </div>
                  </div>
                  <div className="col-lg-3">
                    <div className="dropdown">
                      <button className={`fw-bold btn btn-light ${styles['button-plain']} dropdown-toggle`} type="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Export Spreadsheet
                      </button>
                      <ul className="dropdown-menu">
                      <li><button type="button" className="dropdown-item">Projects only</button></li>
                      <li><button type="button" className="dropdown-item">Projects with linked releases</button></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="row my-2">
                  <div className="col-xl-2 d-flex">
                    <p className="my-2">show</p>                   
                      <select className="form-select form-select-sm mx-2" aria-label="page size select">
                        <option selected value={10}>10</option>
                        <option selected value={25}>25</option>
                        <option selected value={50}>50</option>
                        <option selected value={100}>100</option>
                      </select>
                    <p className="my-2">entries</p>
                  </div>
                  <div className="col-xl-1 d-flex">
                    <button type="button" className={`fw-bold btn btn-light ${styles['button-plain']}`}>Print <i className="bi bi-printer"></i></button>
                  </div>
                </div>
                <div className="row">
                  <TableComponent table={table}></TableComponent>
                </div>
              </div>
            </div>
        </div>
      </div>

    </>
  )
}
