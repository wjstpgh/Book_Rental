import React, { Component } from 'react';

export class Home extends Component {
  static displayName = Home.name;

  render () {
    return (
        <>
            <h1> How to Use </h1>
            <h3>Rental List Add</h3>
            <h5><center>Step:1</center></h5>
            <img src='add1.png' />
            <h5><center>Step:2</center></h5>
            <img src='add2.png' />
            <h5><center>Step:3</center></h5>
            <img src='add3.png' />
            <h3>Rental List Delete</h3>
            <h5><center>Step:1</center></h5>
            <img src='del1.png' />
            <h5><center>Step:2</center></h5>
            <img src='del2.png' />
            <h5><center>Step:3</center></h5>
            <img src='del3.png' />
            <h3>Rental List Modify</h3>
            <h5><center>Step:1</center></h5>
            <img src='modi1.png' />
            <h5><center>Step:2</center></h5>
            <img src='modi2.png' />
            <h5><center>Step:3</center></h5>
            <img src='modi3.png' />
        </>
    );
  }
}
