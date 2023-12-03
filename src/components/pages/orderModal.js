import React from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function PaymentComponent(props) {
    

    const showAddedExpenseToast = () => {
        toast.success('Thank You For The Order !', {
            position: toast.POSITION.TOP_RIGHT
        }); 
    };


    return (
        <div>
            <div className="container mt-5 px-5">
                <div className="mb-4">
                    <h2 className="text-light">Confirm order and pay</h2>
                    <span className="text-light">please make the payment, after that you can enjoy all the features and benefits.</span>
                </div>
                <div className="row">
                    <div className="col-md-8">
                        <div className="card p-3">
                            <h6 className="text-uppercase">Payment details</h6>
                            <div className="inputbox mt-3"> <input type="text" name="name" className="form-control" required="required" /> <span>Name on card</span> </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="inputbox mt-3 mr-2"> <input type="text" name="name" className="form-control" required="required" /> <i className="fa fa-credit-card"></i> <span>Card Number</span>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="d-flex flex-row">
                                        <div className="inputbox mt-3 mr-2"> <input type="text" name="name" className="form-control" required="required" /> <span>Expiry</span> </div>
                                        <div className="inputbox mt-3 mr-2"> <input type="text" name="name" className="form-control" required="required" /> <span>CVV</span> </div>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-4 mb-4">
                                <h6 className="text-uppercase">Billing Address</h6>
                                <div className="row mt-3">
                                    <div className="col-md-6">
                                        <div className="inputbox mt-3 mr-2"> <input type="text" name="name" className="form-control" required="required" /> <span>Street Address</span> </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="inputbox mt-3 mr-2"> <input type="text" name="name" className="form-control" required="required" /> <span>City</span> </div>
                                    </div>
                                </div>
                                <div className="row mt-2">
                                    <div className="col-md-6">
                                        <div className="inputbox mt-3 mr-2"> <input type="text" name="name" className="form-control" required="required" /> <span>State/Province</span> </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="inputbox mt-3 mr-2"> <input type="text" name="name" className="form-control" required="required" /> <span>Zip code</span> </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-4 mb-4 d-flex justify-content-between">
                            <button className="btn btn-warning" onClick={() => props.orderState()}>Previous step</button>
                            <button onClick={props.setPaymentState()} className="btn btn-success px-3">Pay</button>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer autoClose={2000} />
        </div>

    );
}


export default PaymentComponent;