import React from 'react';
import i from 'react-fontawesome';

export default () => (
  <div className="product-ad">
    <div className="product-ad-title">Product Hunt</div>
    <div className="product-ad-border"></div>
    <p className="product-ad-text">
      Thank you for visiting this implementation of <a href="https://www.producthunt.com">product hunt</a>.
      You can find out more about it from the links below.
    </p>
    <div className="product-ad-nav">
      <a className="github-link"
         href="https://github.com/johnschoeman"><i className="fa fa-github fa-3x"/></a>
      <a className="linkedin-link"
         href="https://www.linkedin.com/in/john-schoeman-36894658/"><i className="fa fa-linkedin fa-3x"/></a>
      <a className="email-link"
         href="mailto:johnschoeman1729@gmail.com"><i className="fa fa-envelope-o fa-3x"/></a>
    </div>
  </div>
);