import React, { Component } from 'react'

export class home extends Component {
    render() {
        return (
            <div>
                <div className="home">
  <div
    className="home_background"
    style={{ backgroundImage: "url(images/home.jpg)" }}
  />
  <div className="home_content">
    <div className="home_content_inner">
      <div className="home_text_large">discover</div>
      <div className="home_text_small">Discover new worlds</div>
    </div>
  </div>
</div>;

            </div>
        )
    }
}

export default home
