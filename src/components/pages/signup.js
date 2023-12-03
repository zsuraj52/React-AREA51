import React from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBInput, MDBIcon } from 'mdb-react-ui-kit';
import '../styles/signUp.css';
import { Link } from 'react-router-dom';
import NavBar from './navBar';
import Footer from './footer';

function Registration() {
	return (
		<div>
			<NavBar />
			<MDBContainer className='my-5'>

				<MDBRow className='g-0 align-items-center'>
					<MDBCol col='6' className='me-5'>

						<MDBCard className='my-5 cascading-right rounded' style={{ background: '#ffbe33', backdropFilter: 'blur(30px)' }}>
							<MDBCardBody className='p-5 shadow-5 text-center'>

								<h2 className="fw-bold mb-5">Sign up now</h2>

								<div className='d-flex flex-column justify-content-center align-items-center'>
									<MDBInput wrapperClass='mb-4' className='w-100' placeholder='username' id='form3' type='text' />
									<MDBInput wrapperClass='mb-4' className='w-100' placeholder='email' id='form3' type='email' />
									<MDBInput wrapperClass='mb-4' className='w-100' placeholder='password' id='form4' type='password' />
								</div>
								<button className='w-25 mb-4 btn btn-success' size='md'>sign up</button>

								<div className="d-flex flex-column justify-content-center align-items-center">
									<p className='fw-bold h4 mb-3 mt-3'>or sign in with</p>
									<button className="mb-2 w-50 btn btn-danger" size="md" >
										<MDBIcon fab icon="google" className="mx-2" />
										Sign in with google
									</button>

									<button className="mb-4 w-50 btn btn-primary" size="md" >
										<MDBIcon fab icon="facebook-f" className="mx-2" />
										Sign in with facebook
									</button>

									<hr />
									<div>
										<p className="mb-0">Already have an account? <span></span> <Link to='/login'><a className="fw-bold text-decoration-none">Sign In</a></Link></p>
									</div>

								</div>

							</MDBCardBody>
						</MDBCard>
					</MDBCol>

					<MDBCol col='6'>
						<img src="register-img.png" class="w-100 rounded-4 shadow-4"
							alt="" fluid />
					</MDBCol>

				</MDBRow>

			</MDBContainer>
			<Footer />
		</div>

	);
}

export default Registration;