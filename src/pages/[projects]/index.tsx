import styles from "@/styles/Projects.module.css"
import Navbar from "@/components/Navbar"
import TableComponent from "@/components/table"
import { ColumnType, Table } from "@/components/table/table"
import Link from "next/link"

export default function Home() {

  interface IData {
    projectName: string;
    description: string;
    projectResponsible: string;
    state: string;
    licenseClearing: string;
  }; // interface of data as returned from request

  const columns: ColumnType<IData>[] = [
    {
      key: "projectName",
      title: "Project Name",
      isSortable: true,
      render: (_, { projectName }) => (
        <>
          { projectName }
        </>
      )
    },
    {
      key: "description",
      title: "Description",
      isSortable: true,
      render: (_, { description }) => (
        <>
          { description }
        </>
      )
    },
    {
      key: "projectResponsible",
      title: "Project Responsible",
      isSortable: true,
      render: (_, { projectResponsible }) => (
        <>
          { projectResponsible }
        </>
      )
    },
    {
      key: "state",
      title: "State",
      isSortable: true,
      render: (_, { state }) => (
        <>
          { state }
        </>
      )
    },
    {
      key: "licenseClearing",
      title: "License Clearing",
      isSortable: true,
      render: (_, { licenseClearing }) => (
        <>
          <div style={{backgroundColor:"#68c17c", color:"white"}}>PS</div><div style={{backgroundColor:"#e6717c", color:"white"}}>CS</div>
        </>
      )
    },
    {
      key: "actions",
      title: "Actions",
      isSortable: true,
      // id can be passed to do operations on data
      render: (_, { projectName, description, projectResponsible, state, licenseClearing }) => (
        <>
          <div><i className="bi bi-pencil"></i><i className="bi bi-check2-square"></i><i className="bi bi-clipboard"></i><i className="bi bi-archive"></i></div>
        </>
      )
    },
  ];

  const rows: IData[] = [
    {
      projectName: "NextJS",
      description: "A React framework.",
      projectResponsible: "oberoidearsh@gmail.com",
      state: "0/0",
      licenseClearing: "done"
    },
        {
      projectName: "ExpressJS",
      description: "An Express framework.",
      projectResponsible: "oberoidearsh@gmail.com",
      state: "0/0",
      licenseClearing: "done"
    }
  ];

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
                        <select className="form-select" id="projectType" aria-label="project type select" defaultValue="">
                          <option value=""></option>
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
                        <select className="form-select" id="group" aria-label="group select" defaultValue="">
                          <option value=""></option>
                          <option value="Department">Department</option>
                        </select>
                      </div>
                      <div className="mb-3">
                        <label htmlFor="state" className="form-label fw-bold">State</label>
                        <select className="form-select" id="state" aria-label="state select" defaultValue="">
                          <option value=""></option>
                          <option value="Active">Active</option>
                          <option value="Phase Out">Phase Out</option>
                          <option value="Unknown">Unknown</option>
                        </select>
                      </div>
                      <div className="mb-3">
                        <label htmlFor="state" className="form-label fw-bold">State</label>
                        <select className="form-select" id="state" aria-label="state select" defaultValue="">
                          <option value=""></option>
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
                      <select className="form-select form-select-sm mx-2" aria-label="page size select" defaultValue={10}>
                        <option value={10}>10</option>
                        <option value={25}>25</option>
                        <option value={50}>50</option>
                        <option value={100}>100</option>
                      </select>
                    <p className="my-2">entries</p>
                  </div>
                  <div className="col-xl-1 d-flex">
                    <button type="button" className={`fw-bold btn btn-light ${styles['button-plain']}`}>Print <i className="bi bi-printer"></i></button>
                  </div>
                </div>
                <div className="row">
                  <TableComponent data={rows} columns={columns} paginationSize={10} messageOnEmptyTable="No Projects" />
                </div>
              </div>
            </div>
        </div>
      </div>

    </>
  )
}