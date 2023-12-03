import React, { useEffect, useState } from 'react';
import { MDBRow, MDBCol, MDBInput } from 'mdb-react-ui-kit';
import NavBar from './navBar';
import Footer from './footer';

function BookATable() {


    let [name, setName] = useState("");
    let [mobileNumber, setMobileNumber] = useState();
    let [email, setEmail] = useState("");
    let [members, setMembers] = useState();
    let [date, setDate] = useState();
    let [time, setTime] = useState();
    let [submitButton, setSubmitButton] = useState(true);

    function clearData() {
        setName("")
        setMobileNumber()
        setEmail("")
        setMembers()
        setDate("")
        setTime("")
    }


    useEffect(() => {
        console.log("UseEffect");
        if (name !== "" && mobileNumber !== "" && email !== "" && date !== "" && time !== "") {
            setSubmitButton(false);
        } else {
            setSubmitButton(true);
        }

    }, [name ,mobileNumber ,email ,members ,date ,time ,submitButton ]);


    return (
        <div>
            <NavBar/>
            <div className="container mt-5 d-flex justify-content-center">
                    <div className="col-md-6 mb-5">
                        <div className='d-flex justify-content-center flex-column'>
                        <h2 className='text-dark text-center fw-bold'>Book A Table</h2>

                        <MDBInput wrapperClass='mb-4' id='form6Example3' label='Your Name' required={true} value={name} onChange={e => setName(e.target.value)} />
                        <MDBInput wrapperClass='mb-4' type='tel' id='form6Example6' label='Phone' required={true} value={mobileNumber} onChange={e => setMobileNumber(e.target.value)} />
                        <MDBInput wrapperClass='mb-4' type='email' id='form6Example5' label='Email' required={true} value={email} onChange={e => setEmail(e.target.value)}/>
                        <MDBInput wrapperClass='mb-4' id='form6Example4' label='How Many Persons' type='number' required={true} value={members} onChange={e => setMembers(e.target.value)} />

                        <MDBRow className='mb-4'>
                            <MDBCol>
                                <MDBInput wrapperClass='mb-4' id='form6Example4' label='Date' type='date' required={true} value={date} onChange={e => setDate(e.target.value)}/>
                            </MDBCol>
                            <MDBCol>
                                <MDBInput wrapperClass='mb-4' id='form6Example4' label='Time' type='time' required={true} value={time} onChange={e => setTime(e.target.value)}/>
                            </MDBCol>
                        </MDBRow>
                        </div>
                        <button className='btn btn-dark w-20' disabled={submitButton}> Book Now</button>
                        <button onClick={clearData} className='btn btn-dark w-20'> Cancel</button>

                    </div>
                </div>
            <Footer/>
        </div>
    )
}

export default BookATable; 