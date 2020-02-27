import React, { Component } from 'react'

export class about extends Component {
    render() {
        return (
            <div>
                <header className="header">
  <div className="container">
    <div className="row">
      <div className="col">
        <div className="header_container d-flex flex-row align-items-center justify-content-start">
          {/* Logo */}
          <div className="logo_container">
            <div className="logo">
              <div>destino</div>
              <div>travel agency</div>
              <div className="logo_image">
                <img src="images/logo.png" alt />
              </div>
            </div>
          </div>
          {/* Main Navigation */}
          <nav className="main_nav ml-auto">
            <ul className="main_nav_list">
              <li className="main_nav_item">
                <a href="index.html">Home</a>
              </li>
              <li className="main_nav_item active">
                <a href="#">About us</a>
              </li>
              <li className="main_nav_item">
                <a href="offers.html">Offers</a>
              </li>
              <li className="main_nav_item">
                <a href="news.html">News</a>
              </li>
              <li className="main_nav_item">
                <a href="contact.html">Contact</a>
              </li>
            </ul>
          </nav>
          {/* Search */}
          <div className="search">
            <form action="#" className="search_form">
              <input
                type="search"
                name="search_input"
                className="search_input ctrl_class"
                required="required"
                placeholder="Keyword"
              />
              <button
                type="submit"
                className="search_button ml-auto ctrl_class"
              >
                <img src="images/search.png" alt />
              </button>
            </form>
          </div>
          {/* Hamburger */}
          <div className="hamburger ml-auto">
            <i className="fa fa-bars" aria-hidden="true" />
          </div>
        </div>
      </div>
    </div>
  </div>
</header>;

            </div>
        )
    }
}

export default about
