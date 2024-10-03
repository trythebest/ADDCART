import React from 'react';
import "./Header.css";

const Header = () => {
    return (
        <div className='head-container'>
            <div className='flipkart'>
                <h3>FlipKart</h3>
                {/* <img src='flipkart.png' ></img> */}
            </div>
            {/* <div className='cart-count'> */}

                <button>Cart <span>0</span> </button>
            {/* </div> */}

        </div>

    );
};

export default Header;