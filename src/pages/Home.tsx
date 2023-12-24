import React from 'react'
import { Link } from 'react-router-dom'
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
          <Link to="/about" className="home-about-link">Read more</Link>
          <form action="" className="home-about-fm d-f">
            <div className="check-bl d-f align-center">
              <input type="checkbox" name="gluften" id="gluften" />
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
      <div className="home-benefits d-f">
        <div><img src="images/benefits.png" alt="benefits" /></div>
        <div>
          <h4 className="home-benefits-above">Our Benefits</h4>
          <h3 className="home-benefits-title">Why choose us?</h3>
          <p className="home-benefits-desc">
            We are proud to provide a healthy and nutritious meal for those in need! We listen to your preferences and
            customize the weekly menu considering your requests! Your health is our priority!
          </p>
          <div className="home-benefits-box d-f">
            <div className="home-benefits-item d-f align-center">
              <div><img src="images/hamburger.svg" alt="hamburger" /></div>
              <div className="benefits-item-title">Delicious & Healthy</div>
            </div>
            <div className="home-benefits-item d-f align-center">
              <div><img src="images/heat.svg" alt="heat" /></div>
              <div className="benefits-item-title">Ready to heat</div>
            </div>
            <div className="home-benefits-item d-f align-center">
              <div><img src="images/truck.svg" alt="truck" /></div>
              <div className="benefits-item-title">Delivery</div>
            </div>
            <div className="home-benefits-item d-f align-center">
              <div><img src="images/taste.svg" alt="taste" /></div>
              <div className="benefits-item-title">Taste and preferences</div>
            </div>
          </div>
        </div>
      </div>
      <div className="home-nutrition">
        <div className="home-nutrition-mask"><img src="images/nutrition-mask.png" alt="nutrition-mask" /></div>
        <h4 className="home-nutrition-above">Nutrition plans</h4>
        <h3 className="home-nutrition-title">Choose Your Nutrition</h3>
        <div className="home-nutrition-content">
          <div className="home-nutrition-features d-f jc-sb">
            <div className="nutrition-features-item">
              <div><img src="images/nutrition1.png" alt="nutrition1" /></div>
              <h5>Gourmet</h5>
            </div>
            <div className="nutrition-features-item">
              <div><img src="images/nutrition2.png" alt="nutrition2" /></div>
              <h5>Comfort</h5>
            </div>
            <div className="nutrition-features-item">
              <div><img src="images/nutrition3.png" alt="nutrition3" /></div>
              <h5>Deli</h5>
            </div>
            <div className="nutrition-features-item">
              <div><img src="images/nutrition1.png" alt="nutrition1" /></div>
              <h5>International</h5>
            </div>
            <div className="nutrition-features-item">
              <div><img src="images/nutrition1.png" alt="nutrition1" /></div>
              <h5>Family</h5>
            </div>
            <div className="nutrition-features-item">
              <div><img src="images/nutrition1.png" alt="nutrition1" /></div>
              <h5>Homestyle</h5>
            </div>
          </div>
          <div className="home-nutrition-box d-f">
            <div><img src="images/meals.png" alt="meals" /></div>
            <div>
              <div className="meals-title">Meals includes:</div>
              <ul className="meals-list">
                <li className="meals-list-item">Loaf of Bread </li>
                <li className="meals-list-item">Sticks of Butter</li>
                <li className="meals-list-item">Quart of Juice</li>
                <li className="meals-list-item">Half Callon of 2% Milk</li>
                <li className="meals-list-item">Box of Cereal or Oat Meal</li>
                <li className="meals-list-item">Package of Cheese Sticks or Cheese Slices</li>
                <li className="meals-list-item">Pack of Fruits Cups Complimentary Dessert</li>   
              </ul>
              <div className="meals-actions d-f">
                <a href="" className="meals-actions-download">Download menu</a>
                <button className='meals-actions-started'>Get started</button>
              </div> 
            </div>
          </div>

        </div>
      </div>
      <div className="home-delivery">
        <h3 className="home-delivery-title">Schedule your first <span>weekly</span> delivery</h3>
        <a href="" className="home-delivery-started">Get started</a>
      </div>
      <div className="home-serve d-f align-center">
        <div className="home-serve-info">
            <h4 className="home-serve-above">Who We Serve</h4>
            <h3 className="home-serve-title">Who We Serve</h3>
            <p className="home-serve-desc">
              We serve those in need for long-term meal assistance or anyone who might be in need 
              of a short-term plan while recovering from an injury or illness, or who would 
              simply enjoy healthy meals that require minimal preparation time.
            </p>
            <div className="home-serve-about d-f align-senter">
              <div className="home-serve-schedule">Monday - Friday 9:00 AM - 5:00 PM</div>
              <div className="home-serve-phone">(786) 600-59-09</div>
            </div>
            <a href="" className="home-serve-link">Read more</a>
        </div>
        <div><img src="images/serve1.png" alt="serve" /></div>
      </div>
    </main>
  )
}

export default Home