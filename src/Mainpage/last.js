import React, { Component } from 'react'

export class last extends Component {
    render() {
        return (
            <div>
                <div className="last">
  {/* Image by https://unsplash.com/@thanni */}
  <div
    className="last_background parallax-window"
    data-parallax="scroll"
    data-image-src="images/last.jpg"
    data-speed="0.8"
  />
  <div className="container">
    <div className="row">
      <div className="last_logo">
        <img src="images/last_logo.png" alt />
      </div>
      <div className="col-lg-6 last_col">
        <div className="last_item">
          <div className="last_item_content">
            <div className="last_subtitle">maldive</div>
            <div className="last_percent">50%</div>
            <div className="last_title">Last Minute Offer</div>
            <div className="last_text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              pulvinar sed mauris eget tincidunt. Sed lectus nulla, tempor vel.
            </div>
            <div className="button last_button">
              <a href="offers.html">See Offer</a>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-6 last_col">
        <div className="last_item">
          <div className="last_item_content">
            <div className="last_subtitle">bali</div>
            <div className="last_percent">38%</div>
            <div className="last_title">Last Minute Offer</div>
            <div className="last_text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              pulvinar sed mauris eget tincidunt. Sed lectus nulla, tempor vel.
            </div>
            <div className="button last_button">
              <a href="offers.html">See Offer</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>;

            </div>
        )
    }
}

export default last
