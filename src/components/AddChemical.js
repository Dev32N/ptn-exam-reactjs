import React, { useState } from 'react';
import "./style.css";

export default function AddChemical({ handle_add }) {
    const [name, setName] = useState("");
    const [formula, setFormula] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (name && formula !== "") {
            handle_add({ name, formula });
            setName("");
            setFormula("");
        } else {
            alert("Vui lòng nhập đầy đủ thông tin");
        }
    };

    return (
        <div className='add-container'>
            <form onSubmit={handleSubmit} className="add-form">
                <input
                    type="text"
                    placeholder="Chemical Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
                <input
                    type="text"
                    placeholder="Formula Name"
                    value={formula}
                    onChange={(e) => setFormula(e.target.value)}
                    required
                />
                <button type="submit">New Chemical 
                    <span> <i class="fa-solid fa-plus"></i></span>
                </button>
            </form>
        </div>
    );
}
