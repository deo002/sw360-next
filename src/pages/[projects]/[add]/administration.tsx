import Navbar from "@/components/Navbar"
import styles from "@/styles/AddProjects.module.css"
import Link from "next/link"
import { useRouter } from "next/router"
import { useState } from "react"

export default function Administration() {

  const router = useRouter();
  const DEFAULT_LICENSE_INFO_HEADER = `This product or device contains, among other things, Open Source Software (see below) components developed by third parties and licensed under an Open Source Software license. These Open Source Software components are protected by copyright. Your rights to use these Open Source Software components are governed by the applicable Open Source Software license conditions. You must comply with these license conditions in order to be entitled to use the Open Source Software as foreseen in the relevant license.

You are permitted to modify proprietary components and to engage in reverse engineering for purposes of debugging such modifications, to the extent such components are linked to libraries licensed under the GNU Lesser General Public License. Your rights to modify proprietary components originating from other parties are governed by the respective third party´s license conditions.
  `;

  const [licenseInfo, setLicenseInfo] = useState<string>(DEFAULT_LICENSE_INFO_HEADER);

  return (
    <>
      <Navbar />
      <div className="mx-5 mt-1">
        <div className="row mt-2">
            <div className="col col-sm-3">
                <div className="list-group">
                  <Link href="http://localhost:3000/projects/add/summary" className={`list-group-item ${styles["list-group-item-action"]} ${router.pathname === "/[projects]/[add]/summary" ? "active "+styles["sidebar-active"]:""}`}>Summary</Link>
                  <Link href="http://localhost:3000/projects/add/administration" className={`list-group-item ${styles["list-group-item-action"]} ${router.pathname === "/[projects]/[add]/administration" ? "active "+styles["sidebar-active"]:""}`}>Administration</Link>
                  <Link href="http://localhost:3000/projects/add/linkedProjects" className={`list-group-item ${styles["list-group-item-action"]} ${router.pathname === "/[projects]/[add]/linkedProjects" ? "active "+styles["sidebar-active"]:""}`}>Linked Releases and Projects</Link>
                </div>
            </div>
            <div className="col col-sm-9">
              <div className="row mb-2">
                <div className="col-lg-3">
                  <button type="button" className={`fw-bold btn btn-primary ${styles['button']} me-2`}>Create Project</button>
                  <button type="button" className={`fw-bold btn btn-light ${styles['button-plain']}`}>Cancel</button>
                </div>
              </div>
              <div className="row mb-4">
                <div className={`${styles["header"]} mb-2`}>
                  <p className="fw-bold mt-3">Clearing</p>
                </div>
              </div>
              <div className="row">
                <div className="col col-lg-5">
                  <label htmlFor="project_clearing_state" className="form-label fw-bold">Project clearing state</label>
                  <select className="form-select" aria-label="project clearing state" id="project_clearing_state" defaultValue="Open">
                    <option value="Open">Open</option>
                    <option value="In Progress">In Progress</option>
                    <option value="Closed">Closed</option>
                  </select>
                  <div id="learn_more_project_clearing_state" className="form-text"><i className="bi bi-info-circle"></i> Learn more about the project clearing state.</div>
                </div>
                <div className="col col-lg-3">
                  <label htmlFor="clearing_team" className="form-label fw-bold">Clearing team</label>
                  <select className="form-select" aria-label="Clearing team" id="clearing_team" defaultValue="Unknown">
                    <option value="Unknown">Unknown</option>
                    <option value="org1">org1</option>
                    <option value="org2">org2</option>
                    <option value="org3">org3</option>
                  </select>
                </div>
                <div className="col col-lg-4">
                  <label htmlFor="pre_evaluation_deadline" className="form-label fw-bold">Deadline for pre-evaluation</label>
                  <input type="text" className="form-control" onFocus={(e) => {e.target.type = 'date'}} onBlur={(e) => {e.target.type = 'text'}} id="pre_evaluation_deadline" aria-describedby="Deadline for pre-evaluation" placeholder="Pre-evaluation date YYYY-MM-DD" />
                </div>
              </div>
              <hr className="my-4" />
              <div className="row">
                  <label htmlFor="clearing_summary" className="form-label fw-bold">Clearing summary</label>
                  <textarea className="form-control" id="clearing_summary" aria-describedby="Clearing summary" style={{height : "100px"}} />
              </div>
              <hr className="my-4" />
              <div className="row">
                  <label htmlFor="special_risk_open_source_software" className="form-label fw-bold">Special risk open source software</label>
                  <textarea className="form-control" id="special_risk_open_source_software" aria-describedby="Special risk open source software" style={{height : "100px"}} />
              </div>
              <hr className="my-4" />
              <div className="row">
                  <label htmlFor="general_risk_third_party_software" className="form-label fw-bold">General risk 3rd party software</label>
                  <textarea className="form-control" id="general_risk_third_party_software" aria-describedby="General risk 3rd party software" style={{height : "100px"}} />
              </div>
              <hr className="my-4" />
              <div className="row">
                  <label htmlFor="sales_and_delivery_channel" className="form-label fw-bold">Sales and delivery channel</label>
                  <textarea className="form-control" id="sales_and_delivery_channel" aria-describedby="Sales and delivery channel" style={{height : "100px"}} />
              </div>
              <hr className="my-4" />
              <div className="row">
                  <label htmlFor="remarks_additional_requirements" className="form-label fw-bold">Remarks additional requirements</label>
                  <textarea className="form-control" id="remarks_additional_requirements" aria-describedby="Remarks additional requirements" style={{height : "100px"}} />
              </div>
              <div className="row my-4">
                <div className={`${styles["header"]} mb-2`}>
                  <p className="fw-bold mt-3">Lifecycle</p>
                </div>
              </div>
              <div className="row">
                <div className="col col-lg-4">
                  <label htmlFor="project_state" className="form-label fw-bold">Project state</label>
                  <select className="form-select" aria-label="project state" id="project_state" defaultValue="Active">
                    <option value="Active">Active</option>
                    <option value="Phase out">Phase out</option>
                    <option value="Unknown">Unknown</option>
                  </select>
                  <div id="learn_more_project_state" className="form-text"><i className="bi bi-info-circle"></i> Learn more about the project state.</div>
                </div>
                <div className="col col-lg-4">
                  <label htmlFor="system_test_begin" className="form-label fw-bold">System test begin</label>
                  <input type="text" className="form-control" onFocus={(e) => {e.target.type = 'date'}} onBlur={(e) => {e.target.type = 'text'}} id="system_test_begin" aria-describedby="System test begin" placeholder="System test begin date YYYY-MM-DD" />
                </div>
                <div className="col col-lg-4">
                  <label htmlFor="system_test_end" className="form-label fw-bold">System test end</label>
                  <input type="text" className="form-control" onFocus={(e) => {e.target.type = 'date'}} onBlur={(e) => {e.target.type = 'text'}} id="system_test_end" aria-describedby="System test end" placeholder="System test end date YYYY-MM-DD" />
                </div>
              </div>
              <hr className="my-4" />
              <div className="row">
                <div className="col col-lg-4">
                  <label htmlFor="delivery_start_date" className="form-label fw-bold">Delivery start date</label>
                  <input type="text" className="form-control" onFocus={(e) => {e.target.type = 'date'}} onBlur={(e) => {e.target.type = 'text'}} id="delivery_start_date" aria-describedby="Delivery start date" placeholder="Delivery start date YYYY-MM-DD" />
                </div>
                <div className="col col-lg-4">
                  <label htmlFor="phase_out_date" className="form-label fw-bold">Phase-out date</label>
                  <input type="text" className="form-control" onFocus={(e) => {e.target.type = 'date'}} onBlur={(e) => {e.target.type = 'text'}} id="phase_out_date" aria-describedby="Phase-out date" placeholder="Phase-out date YYYY-MM-DD" />
                </div>
              </div>
              <div className="row my-4">
                <div className={`${styles["header"]} mb-2`}>
                  <p className="fw-bold mt-3">License Info Header</p>
                </div>
              </div>
              <button className={styles["link-button"]} onClick={() => setLicenseInfo(DEFAULT_LICENSE_INFO_HEADER)}>Set to Default Text</button>
              <div className="row my-4">
                  <textarea className="form-control" aria-describedby="License Info Header" defaultValue={DEFAULT_LICENSE_INFO_HEADER} value={licenseInfo} onChange={e => setLicenseInfo(e.target.value)} style={{height : "250px"}} />
              </div>
              <hr className="my-4" />
            </div>
        </div>
    </div>
    </>
  )
}
