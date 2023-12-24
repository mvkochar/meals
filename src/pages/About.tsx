import React from 'react'
import './About.css'

const About = () => {
    return (
        <main>
            <div className="about-main d-f">
                <div>
                    <h2 className="about-main-title">Welcome to Meals America!</h2>
                    <p className="about-main-desc">
                        Meals America is a local business located in Orange County, FL. We deliver nutritious and healthy
                        meals to eligible seniors every week in all 67 counties in Florida. We proudly serve anyone on
                        long-term care (assisting elderly to age at home), chronic care, injury, short-term disability,
                        post-discharge care. We provide meals to eligible with Medicare/Medicaid, and other managed care organizations in FL.
                    </p>
                    <p className="about-main-desc">
                        Our meals are for anyone who is unable to cook and prepare meals for themselves, or simply individuals
                        and caregivers who would love to enjoy a fresh and easy meal. Our priority is our customer's health.
                        We care about each preference and dietary needs; therefore, we provide a variety of meal options and
                        have options for low-sodium, gluten-free, Kosher, and vegetarian meals, allowing each customer
                        to customize their meal plan to their preference. Meals America delivers ready-to-go meals that
                        require NO preparation and only need to be heated so that our customers can enjoy healthy meals
                        in minutes that taste like homemade meal they'd cook for themselves!
                    </p>
                </div>
                <div><img src="images/about-main.png" alt="about-main" /></div>

            </div>
        </main>
    )
}

export default About