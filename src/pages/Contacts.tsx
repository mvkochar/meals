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
                    Please complete the form below. Due to current high demand, we will do our best to reply back to you within
                    48 business hours.
                </p>
                <form action="" className="contacts-started-fm">
                    <div className="started-fm-box d-f jc-sb">
                        <div>
                            <label htmlFor="name" className='started-fm-label'>Name <span>*</span></label>
                            <input type="text" name='fname' id='fname' className='started-fm-input' required />
                        </div>
                        <div>
                            <label htmlFor="organization" className='started-fm-label'>Organization</label>
                            <input type="text" name='organization' id='organization' className='started-fm-input' />
                        </div>
                        <div>
                            <label htmlFor="pnone" className='started-fm-label'>Phone Number <span>*</span> </label>
                            <input type="tel" name="phone" id="phone" className='started-fm-input' required />
                        </div>
                        <div>
                            <label htmlFor="email" className='started-fm-label'>E-mail address</label>
                            <input type="email" name="email" id="email" className='started-fm-input' />
                        </div>
                        <div>
                            <label htmlFor="city" className='started-fm-label'>City <span>*</span> </label>
                            <input type="text" name="city" id="city" className='started-fm-input' required />
                        </div>
                        <div>
                            <label htmlFor="state" className='started-fm-label'>State <span>*</span> </label>
                            <input type="text" name="state" id="state" className='started-fm-input' required />
                        </div>
                        <div>
                            <label htmlFor="country" className='started-fm-label'>Country <span>*</span> </label>
                            <input type="text" name="country" id="country" className='started-fm-input' required />
                        </div>
                        <div>
                            <label htmlFor="zip" className='started-fm-label'>Zip Code <span>*</span> </label>
                            <input type="text" name="zip" id="zip" className='started-fm-input' required />
                        </div>
                        <div>
                            <label htmlFor="needs" className='started-fm-label'>Tell us about your needs <span>*</span> </label>
                             <select name="needs" id="needs" className='started-fm-select' required>
                                <option value="">—Please choose an option—</option>
                             </select>
                        </div>
                    </div>
                    <div className="started-fm-comments">
                        <label htmlFor="comments" className='started-fm-label'>Provide any additional comments</label>
                        <textarea name="comments" id="comments" className='started-fm-textarea'></textarea>
                    </div>
                    <button className='started-fm-btn'>Submit</button>
                </form>
            </div>
        </main>
    )
}

export default Contacts