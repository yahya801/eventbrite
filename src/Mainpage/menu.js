import React, { Component } from 'react'

export class menu extends Component {
    render() {
        return (
            <div>
                 <div className="menu_container menu_mm">
    {/* Menu Close Button */}
    <div className="menu_close_container">
      <div className="menu_close" />
    </div>
    {/* Menu Items */}
    <div className="menu_inner menu_mm">
      <div className="menu menu_mm">
        <div className="menu_search_form_container">
          <form action="#" id="menu_search_form">
            <input type="search" className="menu_search_input menu_mm" />
            <button
              id="menu_search_submit"
              className="menu_search_submit"
              type="submit"
            >
              <img src="images/search_2.png" alt />
            </button>
          </form>
        </div>
        <ul className="menu_list menu_mm">
          <li className="menu_item menu_mm">
            <a href="#">Home</a>
          </li>
          <li className="menu_item menu_mm">
            <a href="about.html">About us</a>
          </li>
          <li className="menu_item menu_mm">
            <a href="offers.html">Offers</a>
          </li>
          <li className="menu_item menu_mm">
            <a href="news.html">News</a>
          </li>
          <li className="menu_item menu_mm">
            <a href="contact.html">Contact</a>
          </li>
        </ul>
        {/* Menu Social */}
        <div className="menu_social_container menu_mm">
          <ul className="menu_social menu_mm">
            <li className="menu_social_item menu_mm">
              <a href="#">
                <i className="fa fa-pinterest" aria-hidden="true" />
              </a>
            </li>
            <li className="menu_social_item menu_mm">
              <a href="#">
                <i className="fa fa-linkedin" aria-hidden="true" />
              </a>
            </li>
            <li className="menu_social_item menu_mm">
              <a href="#">
                <i className="fa fa-instagram" aria-hidden="true" />
              </a>
            </li>
            <li className="menu_social_item menu_mm">
              <a href="#">
                <i className="fa fa-facebook" aria-hidden="true" />
              </a>
            </li>
            <li className="menu_social_item menu_mm">
              <a href="#">
                <i className="fa fa-twitter" aria-hidden="true" />
              </a>
            </li>
          </ul>
        </div>
        <div className="menu_copyright menu_mm">
          Colorlib All rights reserved
        </div>
      </div>
    </div>
  </div>
</div>
        )
    }
}

export default menu
