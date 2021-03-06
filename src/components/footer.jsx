import React, { Component } from 'react';
import '../stylesheets/footer.css';

class Footer extends Component {
  render() {
    return (
      <div className="Footer">
        <div className="row">
          <div className="col-3 text-center">
            <a href="https://www.facebook.com/North-Shuswap-First-Responders-232930087385283/">
              <i className="fab fa-facebook fa-2x mb-2"></i>
            </a>
          </div>
          <div className="col-6 text-center">
            <small>North Shuswap First Responder Society &copy; 2019</small>
          </div>
          <div className="col-3 text-center">
            <a href="https://www.chris-eddy.ca/"><small>Chris Eddy</small></a>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;