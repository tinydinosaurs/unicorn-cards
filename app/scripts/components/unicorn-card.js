import React from 'react';
import UnicornArray from '../unicorn-array';

console.log(UnicornArray[0].name);

const UnicornCard = React.createClass({
  render: function() {
    return (
      <div className="unicorn-card">
        <h1>{this.props.name}</h1>
        <img src={this.props.image} />
      </div>
    )
  }
});

export default UnicornCard

// const Greeting = React.createClass({
//   usePower: function() {
//     alert('my power is ' + this.props.power);
//   },
//   render: function() {
//     return (
//       <main>
//         <h1>Hello, {this.props.name}!</h1>
//         {this.props.children}
//         <button onClick={this.usePower}>use power!</button>
//       </main>
//     );
//   }
// });
