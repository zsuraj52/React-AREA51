import React, { useEffect, useState } from "react";
import { MDBRow, MDBCol, MDBInput } from 'mdb-react-ui-kit';
import { ToastContainer, toast } from 'react-toastify';


function MainPageBookATable() {

    let [name, setName] = useState("");
    let [mobileNumber, setMobileNumber] = useState();
    let [email, setEmail] = useState("");
    let [members, setMembers] = useState();
    let [date, setDate] = useState();
    let [time, setTime] = useState();
    let [submitButton, setSubmitButton] = useState(true);

    function clearData() {
        setName("")
        setMobileNumber("")
        setEmail("")
        setMembers("")
        setDate("")
        setTime("")
    }

    function submitBookATableForm(event) {
        event.preventDefault();
        clearData();
        setSubmitButton(true);
    }

    useEffect(() => {
        console.log("UseEffect");
        console.log("here ", name, mobileNumber, email, members, date, time, submitButton);
        if (name !== undefined && mobileNumber !== undefined && email !== undefined && date !== undefined && time !== undefined) {
            // setSubmitButton(false);
        } else {
            // setSubmitButton(true);
        }


    }, [name, mobileNumber, email, members, date, time]);


    function showToastMessage() {
        toast.warning('Order Placed Successfully !', {
            position: toast.POSITION.TOP_RIGHT
        });
    };

    return (
        <div className="container">
            <form onSubmit={submitBookATableForm}>
                <div className="container mt-5 d-flex justify-content-center mb-3 bg-dark text-light">
                    <div className="col-md-6 mb-5">
                        <div className='d-flex justify-content-center flex-column mt-3'>
                            <h2 className='text-light text-center fw-bold'>Book A Table</h2>

                            <MDBInput wrapperClass='mb-4' placeholder="name" id='form6Example3' label='Your Name' required={true} value={name} onChange={e => setName(e.target.value)} />
                            <MDBInput wrapperClass='mb-4' placeholder="phone" id='form6Example6' label='Phone' type='number' required={true} value={mobileNumber} onChange={e => setMobileNumber(e.target.value)} />
                            <MDBInput wrapperClass='mb-4' placeholder="email" type='email' id='form6Example5' label='Email' required={true} value={email} onChange={e => setEmail(e.target.value)} />
                            <MDBInput wrapperClass='mb-4' id='form6Example4' label='How Many Persons' type='number' required={true} value={members} onChange={e => setMembers(e.target.value)} />

                            <MDBRow className='mb-4'>
                                <MDBCol>
                                    <MDBInput wrapperClass='mb-4' id='form6Example4' label='Date' type='date' required={true} value={date} onChange={e => setDate(e.target.value)} />
                                </MDBCol>
                                <MDBCol>
                                    <MDBInput wrapperClass='mb-4' id='form6Example4' label='Time' type='time' required={true} value={time} onChange={e => setTime(e.target.value)} />
                                </MDBCol>
                            </MDBRow>
                        </div>
                        <div className="d-flex justify-content-center ">
                            <button className='btn btn-warning w-20 me-5' disabled={submitButton} onClick={showToastMessage} > Book Now</button>
                            <ToastContainer />
                            <button onClick={clearData} className='btn btn-danger w-20 me-5'> Cancel</button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default MainPageBookATable;