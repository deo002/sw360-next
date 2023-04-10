import Navbar from "@/components/Navbar"
import styles from "@/styles/AddProjects.module.css"
import Link from "next/link"
import { useRouter } from "next/router"

export default function Administration() {

  const router = useRouter();

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
        </div>
    </div>
    </>
  )
}
