import React from 'react';
import Backbone from 'backbone';
import UnicornCard from './unicorn-card';
import UnicornArray from '../unicorn-array';

const UnicornList = React.createClass({
  render: function() {
    return (
      <ul className="unicorn-list">
        <UnicornCard
        name="Charlie"
        age="43"
        color="grey"
        power="grumpify"
        image="http://www.albinoblacksheep.com/video/charlie/charlieunicorn.png"
        />
        <UnicornCard
        name="spritzie"
        age="12"
        color="pearly"
        power="bubbles"
        image="http://d2ydh70d4b5xgv.cloudfront.net/images/1/4/my-little-pony-g1-pearlized-mail-order-pearly-baby-moondancer-unicorn-rare-kk1-afad64a54e030a27f0abfe2a169fafb6.jpg"
        />
      </ul>
    )
  }
});

export default UnicornList
