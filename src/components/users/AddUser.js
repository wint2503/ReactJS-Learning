import React, { useState } from "react";

function AddUser(props){

    let [image, setImage] = useState("");
    let [name, setName] = useState("");
    let [phone, setPhone] = useState("");
    let [cell, setCell] = useState("");
    let [uuid, setUuid] = useState("");
    
    const imageChangeHandler = (event)=>{
        setImage(event.target.value);
    };
    const nameChangeHandler = (event)=>{
        setName(event.target.value)
    };
    const phoneChangeHandler = (event)=>{
        setPhone(event.target.value);
    };
    const cellChangeHandler = (event)=>{
        setCell(event.target.value);
    };
    const uuidChangeHandler = (event)=>{
        setUuid(event.target.value);
    };

    const submitHandler = (event)=>{
        event.preventDefault();

        let user = {
            name: name,
            image: image,
            phone: phone,
            cell: cell,
            uuid: uuid
        }
        props.addUser(user);
    }
    
    return(
        <div className="card bg-dark px-3 my-2">
            <form className="my-3" onSubmit={submitHandler}>
                <div className="mb-3">
                    <label htmlFor="image" className="form-label text-white">Image</label>
                    <input type="text" className="form-control" id="image" onChange={imageChangeHandler} />
                </div>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label text-white">Name</label>
                    <input type="name" className="form-control" id="name" onChange={nameChangeHandler}/>
                </div>
                <div class="mb-3">
                    <label htmlFor="phone" className="form-label text-white">Phone</label>
                    <input type="tel" className="form-control" id="phone" onChange={phoneChangeHandler}/>
                </div>
                <div class="mb-3">
                    <label htmlFor="cell" className="form-label text-white">Cell</label>
                    <input type="tel" className="form-control" id="cell" onChange={cellChangeHandler}/>
                </div>
                <div class="mb-3">
                    <label htmlFor="uuid" className="form-label text-white">Uuid</label>
                    <input type="tel" className="form-control" id="uuid" onChange={uuidChangeHandler}/>
                </div>
                <button type="submit" className="btn btn-primary float-end btn-sm">Submit</button>       
            </form>
        </div>
    )
}

export default AddUser;