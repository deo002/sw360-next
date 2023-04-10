import React, { useState } from 'react'
import styles from "@/styles/AddKeyValue.module.css"

interface Input {
    role: string;
    email: string;
}

export default function AddAdditionalRolesComponent() {

    const [inputList, setInputList] = useState<Input[]>([]);  
	
    const handleInputChange = (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>, index: number) => {
        const { name, value } = e.target;
        const list: Input[] = [...inputList];
        list[index][name as keyof Input] = value;
        setInputList(list);
    };
    
    const handleRemoveClick = (index: number) => {
        const list = [...inputList];
        list.splice(index, 1);
        setInputList(list);
    };
    
    const handleAddClick = () => {
        setInputList([...inputList, { role: "Stakeholder", email: "" }]);
    };

    return(
        <>
            <div className={`${styles["header"]} mb-2`}>
                <p className="fw-bold mt-3">Additional Roles</p>
            </div>
            <div className="row">
                {
                    inputList.map((elem, j) => {
                        return (
                            <div className="row mb-2">
                                <div className="col-lg-5">
                                    <select className="form-select" name="role" value={elem.role} aria-label="additional role" onChange={e => handleInputChange(e, j)}>
                                        <option value="Stakeholder" selected>Stakeholder</option>
                                        <option value="Analyst">Analyst</option>
                                        <option selected value="Contributor">Contributor</option>
                                        <option value="Accountant">Accountant</option>
                                        <option value="End User">End User</option>
                                        <option value="Quality Manager">Quality Manager</option>
                                        <option selected value="Test Manager">Test Manager</option>
                                        <option value="Technical writer">Technical writer</option>
                                        <option value="Key User">Key User</option>
                                    </select>
                                </div>
                                <div className="col-lg-5">
                                    <input name="email" value={elem.email} type="email" onChange={e => handleInputChange(e, j)} className="form-control" placeholder={`Enter email`} aria-describedby={`Email`} />
                                </div>
                                <div className="col-lg-2">
                                    <button type="button" onClick={() => handleRemoveClick(j)} className={`fw-bold btn btn-light ${styles['button-plain']}`}><i className="bi bi-trash3-fill"></i></button>
                                </div>
                            </div>
                        )
                    })
                }
                <div className="col-lg-3">
                    <button type="button" onClick={() => handleAddClick()} className={`fw-bold btn btn-light ${styles['button-plain']}`}>Click to add row to Additional Roles</button>
                </div>
            </div>
        </>
    );
}