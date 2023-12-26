import React from 'react'
import './Contacts.css'

const Contacts = () => {
    return (
        <main>
            <div className="contacts-info">
                <h2 className="contacts-title">Contacts</h2>
                <div className="contacts-info-box d-f">
                    <div className="contacts-info-location">1733 Benbow Ct, Ste 3, Apopka, FL, 32703</div>
                    <div>
                        <div className="contacts-info-phone">(786) 600-59-09</div>
                        <div className="contacts-info-email">supportmealsamericafl.com</div>
                    </div>
                    <div className="contacts-info-schedule">Monday - Friday 9:00 AM - 5:00 PM</div>
                </div>
            </div>
            <div className="contacts-started">
                <h2 className="contacts-title">Get started</h2>
                <p className="contacts-started-desc">
                    Please complete the form below. Due to current high demand, we will do our best to reply back to you within 48 business hours.
                </p>
            </div>
        </main>
    )
}

export default Contacts