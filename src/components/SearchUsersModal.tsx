import React from 'react'
import styles from "@/styles/SearchModal.module.css"

export default function SearchUsersModalComponent() {

    return(
        <>
            <div className="modal fade" id="search_users_modal" tabIndex={-1} aria-labelledby="Search Users Modal" aria-hidden="true">
                <div className="modal-dialog modal-lg modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title fw-bold" id="search_users_modal_label">Search Users</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="row">
                                <div className="col-lg-6">
                                    <input type="text" className="form-control" placeholder="Enter search text..." aria-describedby="Search Users" />
                                </div>
                                <div className="col-lg-4">
                                    <button type="button" className={`fw-bold btn btn-light ${styles['button-plain']} me-2`}>Search</button>
                                    <button type="button" className={`fw-bold btn btn-light ${styles['button-plain']}`}>Reset</button>
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" data-bs-dismiss="modal" className={`fw-bold btn btn-light ${styles['button-plain']} me-2`}>Close</button>
                            <button type="button" className={`fw-bold btn btn-light ${styles['button-orange']}`}>Select Users</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}