import '../styles/pizza.css'
import React, { useState, useEffect } from 'react';
import PaymentComponent from './orderModal';
function Pizza() {

    let [show, setShow] = useState(false);
    let [showPaymentComponent, setPaymentComponent] = useState(false);

    let [firstnme, setFirstName] = useState("");
    let [lastname, setLastName] = useState("");
    let [mobileNumber, setmobileNumber] = useState("");
    let [alternateNumber, setalternateNumber] = useState("");
    let [street, setstreet] = useState("");
    let [streetLine2, setStreetLine2] = useState("");
    let [city, setCity] = useState("");
    let [email, setEmail] = useState("");
    let [zipCode, setZipCode] = useState("");
    let [checkbox, setCheckBox] = useState(false);
    let [submitButton, setSubmitButton] = useState(true);

    function clearData() {
        setFirstName("")
        setLastName("")
        setmobileNumber("")
        setalternateNumber("")
        setstreet("")
        setStreetLine2("")
        setCity("")
        setEmail("")
        setZipCode("")
        setCheckBox(false);
    }

    function closeShowForm() {
        setShow(false);
        setPaymentComponent(false)
    }

    function submitFormdata(event) {
        event.preventDefault();
        // showAddedExpenseToast();
        clearData();
        setShow(false);
        setPaymentComponent(true);
    }

    useEffect(() => {
        console.log("DT+ATA : ", show, showPaymentComponent);
    }, [show, showPaymentComponent])


    const showOrderForm = () => {
        setShow(true);
        setPaymentComponent(false)
    }


    useEffect(() => {
        console.log("UseEffect");
        if (firstnme !== "" && lastname !== "" && mobileNumber !== "" && alternateNumber !== "" && street !== "" && streetLine2 !== "" && city !== "" && email !== "" && zipCode !== "") {
            setSubmitButton(false);
        } else {
            setSubmitButton(true);
        }

    }, [firstnme, lastname, mobileNumber, alternateNumber, street, streetLine2, city, email, zipCode, checkbox, submitButton]);


    return (

        <div className='container bg'>
            {
                show && !showPaymentComponent ?
                    <>
                        <div className='props'>
                            <form onSubmit={submitFormdata}>
                                <section className="order-form my-4 mx-4 bg-light">
                                    <div className="container pt-4">

                                        <div className="row">
                                            <div className="col-12">
                                                <h1>Order Details</h1>
                                                <hr className="mt-1"></hr>
                                            </div>
                                            <div className="col-12">

                                                <div className="row mx-4">
                                                    <div className="col-12 mb-2">
                                                        <label className="order-form-label">Name</label>
                                                    </div>
                                                    <div className="col-12 col-sm-6">
                                                        <input type="text" className="order-form-input" placeholder="First" required={true} value={firstnme} onChange={e => setFirstName(e.target.value)} size="20" />
                                                    </div>
                                                    <div className="col-12 col-sm-6 mt-2 mt-sm-0">
                                                        <input type="text" className="order-form-input" placeholder="Last" required={true} value={lastname} onChange={e => setLastName(e.target.value)} size="20" />
                                                    </div>
                                                </div>


                                                <div className="row mx-4">
                                                    <div className="col-12 mb-2">
                                                        <label className="order-form-label">E-mail</label>
                                                    </div>
                                                    <div className="col-12 col-sm-6 pl-sm-0">
                                                        <input type="text" className="order-form-input" placeholder="Region" value={email} onChange={e => { setEmail(e.target.value) }} />
                                                    </div>
                                                    <div className="col-12 mb-2">
                                                        <label className="order-form-label">Mobile Number</label>
                                                    </div>
                                                    <div className="col-12 col-sm-6">
                                                        <input type="number" className="order-form-input" placeholder="Mobile Number" required={true} value={mobileNumber} onChange={e => setmobileNumber(e.target.value)} />
                                                    </div>
                                                    <div className="col-12 mb-2">
                                                        <label className="order-form-label">Alternate Mobile Number</label>
                                                    </div>
                                                    <div className="col-12 col-sm-6">
                                                        <input type="number" className="order-form-input" placeholder="Alternate Number" required={true} value={alternateNumber} onChange={e => setalternateNumber(e.target.value)} />
                                                    </div>
                                                </div>

                                                <div className="row mt-3 mx-4">
                                                    <div className="col-12">
                                                        <label className="order-form-label">Adress</label>
                                                    </div>
                                                    <div className="col-12">
                                                        <input type="text" className="order-form-input" placeholder="Street Address" required={true} value={street} onChange={e => setstreet(e.target.value)} />
                                                    </div>
                                                    <div className="col-12 mt-2">
                                                        <input type="text" className="order-form-input" placeholder="Street Address Line 2" required={true} value={streetLine2} onChange={e => setStreetLine2(e.target.value)} />
                                                    </div>
                                                    <div className="col-12 col-sm-6 mt-2 pr-sm-2">
                                                        <input type="text" className="order-form-input" placeholder="City" required={true} value={city} onChange={e => setCity(e.target.value)} />
                                                    </div>
                                                    <div className="col-12 col-sm-6 mt-2 pr-sm-2">
                                                        <input type="number" className="order-form-input" placeholder="Postal / Zip Code" value={zipCode} onChange={e => setZipCode(e.target.value)} />
                                                    </div>
                                                </div>

                                                <div className="row mt-3 mx-4">
                                                    <div className="col-12">
                                                        <div className="form-check">
                                                            <input type="checkbox" className="form-check-input" name="validation" id="validation" required={true} value={checkbox} />
                                                            <label forhtml="validation" className="form-check-label">I know what I need to know</label >
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="row mt-3">
                                                    <div className="col-12 d-flex justify-content-center">
                                                        <button type="submit" id="btnSubmit" className="btn btn-success me-4 submit" disabled={submitButton} >Submit</button>
                                                        <button onClick={clearData} id="btnSubmit" className="btn btn-warning me-4">Clear</button>
                                                        <button onClick={closeShowForm} id="btnSubmit" className="btn btn-danger">Cancel</button>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </section>
                            </form>
                        </div>
                    </>
                    :
                    (!show && showPaymentComponent) ?
                        <PaymentComponent orderState={showOrderForm} />
                        :
                        <div className='container'>
                            <div>
                                <div>
                                    <p className='text-warning display fw-bold'>Pizza</p>
                                </div>
                                <div className="row">
                                    <div className="col-md-4">
                                        <div>
                                            <img className='burgerImg' src="https://images.unsplash.com/photo-1579751626657-72bc17010498?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fHBpenphfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="burger-1"></img>
                                        </div>
                                        <p className='text-center text-warning display'>Hard Base Pizza</p>
                                        <div>
                                            <h2 className='text-warning test display-6'>Price : 25</h2>
                                            <div className=''>
                                                <button onClick={() => showOrderForm()} className='btn btn-sm btn-warning me-3'>Buy Now</button>
                                                <button onClick={() => showOrderForm()} className='btn btn-sm btn-warning'>Add To Cart</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div>
                                            <img className='burgerImg' src="https://images.unsplash.com/photo-1627461985459-51600559fffe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzl8fHBpenphfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="burger-2"></img>
                                        </div>
                                        <p className='text-center text-warning display'>The Italian Pizza</p>
                                        <div>
                                            <h2 className='text-warning test display-6'>Price : 25</h2>
                                            <div className=''>
                                                <button onClick={() => showOrderForm()} className='btn btn-sm btn-warning me-3'>Buy Now</button>
                                                <button onClick={() => showOrderForm()} className='btn btn-sm btn-warning'>Add To Cart</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4 mb-5">
                                        <div>
                                            <img className='burgerImg' src="https://images.unsplash.com/photo-1561350111-7daa4f284bc6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzh8fHBpenphfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="burger-3"></img>
                                        </div>
                                        <p className='text-center text-warning display'>The Smokey Pizza</p>
                                        <div>
                                            <h2 className='text-warning test display-6'>Price : 25</h2>
                                            <div className=''>
                                                <button onClick={() => showOrderForm()} className='btn btn-sm btn-warning me-3'>Buy Now</button>
                                                <button onClick={() => showOrderForm()} className='btn btn-sm btn-warning'>Add To Cart</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-md-4">
                                        <div>
                                            <img className='burgerImg' src="https://images.unsplash.com/photo-1594791670225-09300060596a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTE5fHxwaXp6YXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="burger-4"></img>
                                        </div>
                                        <p className='text-center text-warning display'>Double Chesse Pizzas</p>
                                        <div>
                                            <h2 className='text-warning test display-6'>Price : $25</h2>
                                            <div className=''>
                                                <button onClick={() => showOrderForm()} className='btn btn-sm btn-warning me-3'>Buy Now</button>
                                                <button onClick={() => showOrderForm()} className='btn btn-sm btn-warning'>Add To Cart</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div>
                                            <img className='burgerImg' src="https://images.unsplash.com/photo-1611599538311-360e527c1d22?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTUwfHxwaXp6YXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="burger-5"></img>
                                        </div>
                                        <p className='text-center text-warning display'>Full Veggies Pizza</p>
                                        <div>
                                            <h2 className='text-warning test display-6'>Price : 25</h2>
                                            <div className=''>
                                                <button onClick={() => showOrderForm()} className='btn btn-sm btn-warning me-3'>Buy Now</button>
                                                <button onClick={() => showOrderForm()} className='btn btn-sm btn-warning'>Add To Cart</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4 mb-5">
                                        <div>
                                            <img className='burgerImg' src="https://images.unsplash.com/photo-1598215451314-adcc15701d4f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjMzfHxwaXp6YXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="burger-6"></img>
                                        </div>
                                        <p className='text-center text-warning display'>The Tomato Pizza</p>
                                        <div>
                                            <h2 className='text-warning test display-6'>Price : 25</h2>
                                            <div className=''>
                                                <button onClick={() => showOrderForm()} className='btn btn-sm btn-warning me-3'>Buy Now</button>
                                                <button onClick={() => showOrderForm()} className='btn btn-sm btn-warning'>Add To Cart</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
            }
        </div>

    );
}

export default Pizza;