import React from 'react'
import './Works.css'

const Works = () => {
    return (
        <main>
            <div className="works-main">
                <p className="works-main-desc">
                    We serve those in need for the long-term meal assistance or anyone who might be
                    in need of a short-term plan while recovering from an injury or illness, or who
                    would simply enjoy healthy meals that requires minimum preparation time.
                </p>
                <h2 className="works-main-title">
                    Answer these few questions to find out if you qualify for Home Delivered Meals by Meals America:
                </h2>
                <form action="" className="works-main-fm">
                    <div className="check-bl d-f align-center">
                        <input type="checkbox" name="age" id="age" />
                        <label htmlFor="age">Are you over 65?</label>
                    </div>
                    <div className="check-bl d-f align-center">
                        <input type="checkbox" name="disability" id="disability" />
                        <label htmlFor="disability">Are you disabled or on a short-term disability?</label>
                    </div>
                    <div className="check-bl check-bl__last d-f align-center">
                        <input type="checkbox" name="assistance" id="assistance" />
                        <label htmlFor="assistance">Do you need any assistance with grocery shopping and/or preparing meals?</label>
                    </div>
                    <p className="questions-note">
                        Can you say <span>yes</span> to any of these questions? If so, you might qualify for government or health
                        plan assistance and have our meal delivered to your door at no cost!
                    </p>
                </form>
                <div className="works-main-info d-f">
                    <div className="info-item d-f">
                        <div style={{marginTop: "16px"}}><img src="images/manager.svg" alt="manager" /></div>
                        <div>
                            <h5 className="info-item-title">Information for Case Managers/Coordinators</h5>
                            <p className="info-item-desc">
                                If the participant qualifies for home meals delivery - submit authorization for Meals America.
                                We deliver within 2-3 business days from the day you have submitted the authorization.
                                Call us with any questions at <span>(786) 600-59-09</span>.
                            </p>
                        </div>
                    </div>
                    <div className="info-item d-f">
                        <div style={{marginTop: "16px"}}><img src="images/healthcare.svg" alt="healthcare" /></div>
                        <div>
                            <h5 className="info-item-title">Information for Individuals/Caregivers</h5>
                            <p className="info-item-desc">
                                If you have a health insurance plan and you may qualify for home meal delivery, contact, your case manager.
                                If you or your loved ones need home delivered meal but don't qualify through your insurance, please, 
                                contact us at <span>(786) 600-59-09</span> for the options available for private customers.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </main>
    )
}

export default Works