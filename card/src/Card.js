import React, { Component } from 'react';
import './Card.css';
import i from './gold.png'
import ii from './visa.jpg'
class Card extends Component {
  render() {
    return (
      <div className="Card-style">
       <h1>CREDIT CARD</h1>
      <img id="firstimage" src={i}/>
      <div className="emptydiv"></div>    
      <div className="twodivspart">
      <div className="firstpart">
      <p id="highlighted">7235 3256 7895 1245</p>
       <div className="inlinecontent"> 
       <div className="title"><h2>5422</h2></div> 
       <div className="tinyicon">
       <p className="tinypara">VALID <br/>THRU</p>
       </div>
       <div className="interline">
       <p className="tinypara s">MONTH/YEAR</p>
       <h2>11/55</h2> 
       </div>
</div>
    <h3>CARDHOLDER</h3>
      </div>
      <div className="secondpart">
      <img id="secondimage" src={ii}/></div>
      </div>
    
      </div>
    );
  }
}

export default Card;