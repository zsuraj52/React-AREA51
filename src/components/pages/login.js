import React from 'react';
import { MDBBtn, MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBInput, MDBIcon } from 'mdb-react-ui-kit';
import '../styles/signUp.css';
import { Link } from 'react-router-dom';
import NavBar from './navBar';

function Login() {
	return (

		<div>
			<NavBar />
			<MDBContainer className='my-5'>

				<MDBRow className='g-0 align-items-center'>
					<MDBCol col='6'>

						<MDBCard className='my-5 cascading-right rounded' style={{ background: '#ffbe33', backdropFilter: 'blur(30px)' }}>
							<MDBCardBody className='p-5 shadow-5 text-center'>

								<h2 className="fw-bold mb-5">Sign up now</h2>

								<div className='d-flex flex-column justify-content-center align-items-center'>
									<MDBInput wrapperClass='mb-4' className='w-100' placeholder='email or username' id='form3' type='text' />
									<MDBInput wrapperClass='mb-4' className='w-100' placeholder='password' id='form4' type='password' />
								</div>
								<button className='w-25 mb-4 btn btn-success' size='md'>sign in</button>

								<div className="text-center">
									<p>or sign up with:</p>

									<MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
										<MDBIcon fab icon='facebook-f' size="lg" />
									</MDBBtn>

									<MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
										<MDBIcon fab icon='twitter' size="lg" />
									</MDBBtn>

									<MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
										<MDBIcon fab icon='google' size="lg" />
									</MDBBtn>

									<br /><br />
									<hr />
									<div>
										<p className="mb-0">Don't have an account? <Link to='/register'><a class="fw-bold text-decoration-none">Sign Up</a></Link></p>
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
		</div>

	);
}

export default Login;