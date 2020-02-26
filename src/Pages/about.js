import React, { Component } from 'react'


export class about extends Component {
    render() {
        return (
            <div>
                <div className="about">
  <div className="container">
    <div className="row">
      <div className="col">
        <div className="section_title text-center">
          <h2>We are an award winning Agency</h2>
          <div>take a look at our story</div>
        </div>
      </div>
    </div>
    <div className="row about_row">
      <div className="col-lg-6 about_col order-lg-1 order-2">
        <div className="about_content">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
            fringilla lectus nec diam auctor, ut fringilla diam sagittis.
            Quisque vel est id justo faucibus dapibus id a nibh. Aenean suscipit
            consequat lacus, sit amet mollis nulla. Morbi sagittis orci id lacus
            convallis tempus eget sit amet metus. Sed finibus, magna at euismod
            aliquet, enim justo vulputate lorem, sit amet elementum dolor eros
            sollicitudin dui. Sed ac magna mauris. Nullam lectus odio, viverra
            vel mi id, interdum imperdiet nulla.{" "}
          </p>
          <div className="button about_button">
            <a href="#">Read More</a>
          </div>
        </div>
      </div>
      <div className="col-lg-6 about_col order-lg-2 order-1">
        <div className="about_image">
          <img
            src="images/about.jpg"
            alt="https://unsplash.com/@sanfrancisco"
          />
        </div>
      </div>
    </div>
  </div>
</div>;

                
            </div>
        )
    }
}

export default about
