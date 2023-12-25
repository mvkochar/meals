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
                        <div style={{ marginTop: "16px" }}><img src="images/manager.svg" alt="manager" /></div>
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
                        <div style={{ marginTop: "16px" }}><img src="images/healthcare.svg" alt="healthcare" /></div>
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
            <div className="works-serve">
                <div className="works-serve-content">
                    <h3 className="works-serve-title">Who We Serve</h3>
                    <h4 className="worsk-serve-subtitle">
                        We serve those in need for the long-term meal assistance or anyone who might be in need of a short-term plan
                        while recovering from an injury or illness, or who would simply enjoy healthy meals that requires minimum
                        preparation time.
                    </h4>
                    <p className="works-serve-desc">
                        Meals America is proud to serve and deliver healthy, nutritious meals to your door.
                        All our meals comply with Floridian state requirements. Your first delivery
                        will be at your door within 2-3 business days from the day we receive the authorization.
                        Please, let us know your preferences, and we will be happy to modify the menu or customize
                        it to your preference! Please, consider our delicious meals a complete nutrition solution.
                        We are delighted to serve you and your satisfaction is our priority!
                    </p>
                </div>
                <div className="works-serve-image"><img src="images/shopper.png" alt="Shopper" /></div>
            </div>
            <div className="works-eligibility">
                <h3 className="works-eligibility-title">Eligibility</h3>
                <h4 className="works-eligibility-subtitle">
                    Find out if you are eligible to have Meals America deliver meals to you each week at NO COST for you!
                </h4>
                <form action="" className="works-eligibility-fm d-f">
                    <div className="check-bl d-f align-center">
                        <input type="checkbox" name="disability" id="disability" />
                        <label htmlFor="disability">Are you disabled or on a short-term disability?</label>
                    </div>
                    <div className="check-bl d-f align-center">
                        <input type="checkbox" name="disabled" id="disabled" />
                        <label htmlFor="disabled">Are you disabled?</label>
                    </div>
                    <div className="check-bl d-f align-center">
                        <input type="checkbox" name="age" id="age" />
                        <label htmlFor="age">Are you over 65?</label>
                    </div>
                    <div className="check-bl check-bl__last d-f align-center">
                        <input type="checkbox" name="insurance" id="insurance" />
                        <label htmlFor="insurance">
                            Do you have Medicare/Medicaid or ANY other health insurance that offer paid meal option?
                        </label>
                    </div>
                </form>
                <p className="works-eligibility-desc">
                    If you answered “Yes” to any of these questions, you may qualify for Meals America weekly meal
                    delivery plan at NO COST for you!
                </p>
                <p className="works-eligibility-desc eligibility-desc__last">
                    If you have any questions call about your eligibility us <span>(786) 600-59-09</span>, use our LIVE chat box,
                    or fill out the form below and someone will reach back to you over e-mail within 2 business days.
                </p>
                <h3 className="works-eligibility-title eligibility-title_second">Aging Waiver</h3>
                <h4 className="works-eligibility-subtitle eligibility-subtitle__second">
                    We serve those in need for long-term meal assistance or anyone who might be in need of a short-term plan while recovering from an injury or illness, or who would simply enjoy healthy meals that require minimal preparation time.
                </h4>
                <p className="works-eligibility-desc" style={{ maxWidth: "1145px", margin: "35px auto", marginBottom: "30px" }}>
                    Aging Home and Community-Based Waiver Services may be available to any Florida over 65 to enable them
                    to live in their homes and communities with additional support and services.
                </p>
                <p className="works-eligibility-desc eligibility-desc__last" style={{ maxWidth: "1148px" }}>
                    Meals America is happy to provide extra information about the waiver and who's eligible.
                    If you have any questions reach our customer care representative at (786) 600-59-09, use
                    our LIVE chat box, or fill out the form below and someone will reach back to you over
                    e-mail within 2 business days. We will happily assist you with any questions you have.
                </p>
                <div className="works-eligibility-requirements">
                    <h4 className="eligibility-requirements-title"> Aging Waiver eligibility requirements:</h4>
                    <ul className="eligibility-requirements-list">
                        <li>Be a resident of Florida</li>
                        <li>Be a U.S. citizen or a qualified non-citizen</li>
                        <li>Have a Social Security Number</li>
                        <li>Be 65 years of age or older</li>
                        <li>Meet the level of care needs for a Skilled Nursing Facility</li>
                        <li>Meet the financial requirements by the local county assistance office</li>
                    </ul>
                </div>
                <div className="works-eligibility-requirements">
                    <h4 className="eligibility-requirements-title">Services that Aging Waiver may be available to include:</h4>
                    <div className="eligibility-requirements-box d-f">
                        <ul className="eligibility-requirements-list">
                            <li>Accessibility Adaptations, Equipment, Technology and Medical</li>
                            <li>Supplies</li>
                            <li>Adult Daily Living Services</li>
                            <li>Assistive Technology</li>
                            <li>Community Transition Services</li>
                            <li>Home Adaptations</li>
                            <li>Home Delivered Meals</li>
                            <li>Home Health Services</li>
                            <li>Non-Medical Transportation Services</li>
                            <li>Nutritional Consultation Services</li>
                            <li>Nursing Services</li>
                        </ul>
                        <ul className="eligibility-requirements-list">
                            <li>Participant-Directed Community Supports</li>
                            <li>Participant-Directed Goods and Services</li>
                            <li>Personal Assistance Services</li>
                            <li>Personal Emergency Response System (PERS)</li>
                            <li>Physical Therapy Services</li>
                            <li>Respite</li>
                            <li>Service Coordination</li>
                            <li>Specialized Medical Equipment and Supplies</li>
                            <li>Speech and Language Therapy Services</li>
                            <li>TeleCare</li>
                            <li>Therapeutic and Counseling Services</li>
                        </ul>
                    </div>
                </div>
                <p className="works-eligibility-note">
                    If you have any questions, contact our Professional and qualified team of health care experts
                    at (786) 600-59-09 to help you determine if you qualify for the FL Aging Waiver.
                </p>
            </div>
            <div className="home-serve d-f align-center" style={{marginTop: "140px", marginBottom: "145px"}}>
                <div className="home-serve-info">
                    <h4 className="home-serve-above">Who We Serve</h4>
                    <h3 className="home-serve-title">Who We Serve</h3>
                    <p className="home-serve-desc" style={{fontSize: "15px", opacity: "0.8"}}>
                        Meals America is determined to provide good meals for those in need and attempt to address the needs 
                        of the participants at home on long-term care, post-discharge and those with chronic conditions. 
                        We try to help all participants to remain independent and provide the best meal plans and a large menu 
                        with many options to choose from to fit any dietary need. We have variety of options from vegetarian to kosher, 
                        low-sodium, gluten-free, and many more. Our meals help those with health issues or injuries to make meal 
                        preparation easy and safe. We deliver straight to their doorstep each week. The meals get warmed up in the 
                        microwave and are ready to be served and enjoyed in minutes! Please, note that all 
                        referrals submitted by case managers and coordinators by 5:00 PM EST by Friday will be delivered the following week. 
                        Participant's first delivery with include items from the first week of our standard menu unless we have special 
                        request submitted along with the authorization.
                    </p>
                </div>
                <div><img src="images/serve1.png" alt="serve" /></div>
            </div>
        </main>
    )
}

export default Works