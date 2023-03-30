import React from 'react'
import styles from "@/styles/Table.module.css"
import { Table } from "./table"

interface Props {
    table: Table
}

export default function TableComponent(props: Props) {
    return(
        <>
            <div className="table-responsive">
                <table className="table table-bordered">
                    <thead className={`${styles["column-header"]}`}>
                        <tr>
                            {props.table.headers.map((header, i) => (
                                <th scope="col">
                                    <div className={header.isSortable ? 'd-flex justify-content-between mt-3':'mt-3'}>
                                        <span>{header.headerValue}</span>
                                        {header.isSortable && <i className="bi bi-arrow-down-up"></i>}
                                    </div>
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {props.table.rows.length === 0 && <td colSpan={props.table.headers.length} style={{textAlign:"center"}}>{props.table.messageOnEmptyTable}</td>}
                            {
                                props.table.rows.map((row, i) => (
                                    <tr>
                                        {
                                            row.map((elem, j) => (
                                                <td className={j===0 ? `${styles["row-header"]}`: ""}><div dangerouslySetInnerHTML={{ __html: elem }}></div></td>
                                            ))
                                        }
                                    </tr>
                                ))
                            }
                    </tbody>
                </table>
                <div className="d-flex justify-content-between">
                    <p>Showing {1} to {1} of {1} entries</p>
                    <nav aria-label="Page navigation">
                    <ul className="pagination">
                        <li className="page-item"><a className="page-link" href="#">Previous</a></li>
                        <li className="page-item"><a className="page-link" href="#">1</a></li>
                        <li className="page-item"><a className="page-link" href="#">Next</a></li>
                    </ul>
                    </nav>
                </div>
            </div>
        </>
    );
}