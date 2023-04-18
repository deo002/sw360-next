import React from 'react'
import Image from 'next/image'
import styles from "@/styles/Navbar.module.css"

export default function Navbar() {
    return(
        <>
            <nav className="navbar navbar-light bg-light">
                <div className={styles["container"]}>
                    <a className="navbar-brand" href="#">
                        <Image className="image" src="/logo.svg" alt="SW360" width={144.7} height={57} />
                    </a>
                </div>
            </nav>
        </>
    );
}