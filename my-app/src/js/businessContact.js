import React from 'react';
import './../css/Introduction.css';

const BusinessContact  = () =>  {
    return (
        <div class="style_business_information">
            <div className="register-business">
                <div className="register-business-head">
                    Register your business
                </div>
                <div className="register-business-body">
                    <p>
                        Get access to reach more customers near your business without much efforts and advertisements.
                        We help you advertise your offers to customers and bring them to you. 
                        Want to more know ? <br></br> 
                    </p>
                    <div className="center_button">
                        Contact us <br></br>
                        <button type="button" className="business-card">
                            Add your business
                        </button>
                    </div>
                </div>
            </div>
            <div className="register-business">
                <div className="register-business-head">
                    Already our Mission Partner ? 
                </div>
                <div className="register-business-body">
                    <p>
                        Thanks for continuous support and believing in us.
                        Working harder everyday to give you the best service possible 
                    </p>
                    <br></br>
                    <div className="center_button">
                        Login here <br></br>
                        <button type="button" className="business-card">
                            Login to existing account
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BusinessContact;