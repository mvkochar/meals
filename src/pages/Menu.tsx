import React from 'react'
import './Menu.css'

const Menu = () => {
    return (
        <main>
            <div className="menu-main d-f">
                <div><img src="images/meals-menu1.png" alt="meals-menu1" /></div>
                <div><img src="images/meals-menu2.png" alt="meals-menu2" /></div>
            </div>
            <div className="menu-instructions">
                <h3 className="menu-instructions-title">Heating instructions</h3>
                <h4 className="menu-instructions-subtitle">
                    Food must be cooked thoroughly to 165°F. Appliances vary, adjust cooking times as needed.
                </h4>
                <div className="menu-instructions-box d-f">
                    <div className="menu-instructions-item d-f">
                        <div><img src="images/instructions1.svg" alt="instructions1" /></div>
                        <div className="instructions-item-info">
                            <div className="instructions-item-title">Microwave Oven</div>
                            <p className="instructions-item-desc">
                                Directions developed with 1000-watt microwave ovens.Heat for 4 minutes on full power.
                                Stir and heat an additional 1-2 minutes.Let stand for about 1 minute.
                            </p>
                        </div>
                    </div>
                    <div className="menu-instructions-item d-f">
                        <div><img src="images/instructions2.svg" alt="instructions2" /></div>
                        <div className="instructions-item-info">
                            <div className="instructions-item-title">Conventional Oven</div>
                            <p className="instructions-item-desc">
                                Preheat Oven to 350°FCook on baking sheet in center of oven 35-40 minutes.Let stand for about 1 minute.
                            </p>
                        </div>
                    </div>
                </div>
                <p className="menu-instructions-desc">
                    Occasionally, any meal delivered may be substituted without notice based on product availability.
                </p>
            </div>
        </main>
    )
}

export default Menu