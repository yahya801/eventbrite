import React, { Component } from 'react'

export class topdest extends Component {
    render() {
        return (
            <div>
              <div className="top">
  <div className="container">
    <div className="row">
      <div className="col">
        <div className="section_title text-center">
          <h2>Top destinations in Europe</h2>
          <div>take a look at these offers</div>
        </div>
      </div>
    </div>
    <div className="row top_content">
      <div className="col-lg-3 col-md-6 top_col">
        {/* Top Destination Item */}
        <div className="top_item">
          <a href="#">
            <div className="top_item_image">
              <img
                src="images/top_1.jpg"
                alt="https://unsplash.com/@sgabriel"
              />
            </div>
            <div className="top_item_content">
              <div className="top_item_price">From $890</div>
              <div className="top_item_text">Paris, France</div>
            </div>
          </a>
        </div>
      </div>
      <div className="col-lg-3 col-md-6 top_col">
        {/* Top Destination Item */}
        <div className="top_item">
          <a href="#">
            <div className="top_item_image">
              <img
                src="images/top_2.jpg"
                alt="https://unsplash.com/@jenspeter"
              />
            </div>
            <div className="top_item_content">
              <div className="top_item_price">From $890</div>
              <div className="top_item_text">Italian Riviera</div>
            </div>
          </a>
        </div>
      </div>
      <div className="col-lg-3 col-md-6 top_col">
        {/* Top Destination Item */}
        <div className="top_item">
          <a href="#">
            <div className="top_item_image">
              <img
                src="images/top_3.jpg"
                alt="https://unsplash.com/@anikindimitry"
              />
            </div>
            <div className="top_item_content">
              <div className="top_item_price">From $890</div>
              <div className="top_item_text">Cinque Terre</div>
            </div>
          </a>
        </div>
      </div>
      <div className="col-lg-3 col-md-6 top_col">
        {/* Top Destination Item */}
        <div className="top_item">
          <a href="#">
            <div className="top_item_image">
              <img
                src="images/top_4.jpg"
                alt="https://unsplash.com/@hellolightbulb"
              />
            </div>
            <div className="top_item_content">
              <div className="top_item_price">From $890</div>
              <div className="top_item_text">Santorini, Greece</div>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</div>;
  
            </div>
        )
    }
}

export default topdest
