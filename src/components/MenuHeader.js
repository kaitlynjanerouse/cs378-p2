import React from 'react';

function MenuHeader() {
    return (
      <div>
        <div class="logo-container">
            <img src={process.env.PUBLIC_URL + '/images/logo.jpg'} alt="Coffee Central Logo" class="logo"/>
        </div>
        <div class="first-tag-line">Sweet Sips From Scratch</div>
        <div class="second-tag-line">The Best Coffee at UT!</div>
      </div>
    );
  }
  
  export default MenuHeader;