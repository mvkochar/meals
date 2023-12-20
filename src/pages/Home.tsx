import React from 'react'
import './Home.css'

const Home = () => {
  return (
    <main>
      <div className="home-main d-f">
        <div className="home-main-info">
          <h2 className="home-main-title"><span>Free Meals delivered</span> to your doorstep!</h2>
          <p className="home-main-desc">
            We provide healthy, balanced meals delivered to your doorstep!
          </p>
          <div className="home-main-actions d-f">
            <a href="" className="home-main-link">How It Works</a>
            <button className="home-main-btn">Get started</button>
          </div>
        </div>
      </div>
      <div className="home-features d-f">
        <div className="home-features-item d-f align-center">
          <div><img src="images/features1.png" alt="features1" /></div>
          <div>
            <div className="features-item-title">AAA & State Governments</div>
            <p className="features-item-desc">
              Information for leaders in government or at Area Agencies on Aging.
            </p>
          </div>
        </div>
        <div className="home-features-item d-f align-center">
          <div><img src="images/features2.png" alt="features2" /></div>
          <div>
            <div className="features-item-title">Case Managers</div>
            <p className="features-item-desc">
              Information for case managers who are looking for solutions for their clients or members.
            </p>
          </div>
        </div>
        <div className="home-features-item d-f align-center">
          <div><img src="images/features3.png" alt="features3" /></div>
          <div>
            <div className="features-item-title">Individuals & Caregivers</div>
            <p className="features-item-desc">
              For self-pay customers managing a chronic disease, living independently, or caring.
            </p>
          </div>
        </div>
      </div>
      <div className="home-about d-f align-center">
        <div>
          <h3 className="home-about-title">About Us</h3>
          <p className="home-about-desc">
            Meals America provides home-delivered meals to consumers across all 67 counties in Florida.
            We offer a wide variety of frozen, refrigerated, and shelf-stable meals including dinners,
            deli café, breakfasts, soups, and specialty weeks.
          </p>
          <p className="home-about-desc">
            We also provide option for customers with dietary restrictions and have vegetarian, sodium-controlled,
            and gluten-free menus. We also provide emergency packs for emergency situations that contain shelf stable
            items only and do not require refrigeration or heating.
          </p>
          <a href="" className="home-about-link">Read more</a>
          <form action="" className="home-about-fm d-f">
            <div className="check-bl d-f align-center">
              <input type="checkbox" name="gluften" id="gluften" checked />
              <label htmlFor="gluften">Gluten free options</label>
            </div>
            <div className="check-bl d-f align-center">
              <input type="checkbox" name="vegetarian" id="vegetarian" />
              <label htmlFor="vegetarian">Vegetarian options</label>
            </div>
            <div className="check-bl d-f align-center">
              <input type="checkbox" name="calorie" id="calorie" />
              <label htmlFor="calorie">Exact calorie content</label>
            </div>
            <div className="check-bl d-f align-center">
              <input type="checkbox" name="strength" id="strength" />
              <label htmlFor="calorie">Adds strength and energy</label>
            </div>
            <div className="check-bl  d-f align-center">
              <input type="checkbox" name="health" id="health" />
              <label htmlFor="calorie">Improves health</label>
            </div>
          </form>
        </div>
        <div><img src="images/about.png" alt="about" /></div>
      </div>
    </main>
  )
}

export default Home