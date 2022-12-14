import React from 'react';
import background from '../asset/background.jpg'

const exports = {};

exports.Wrapper = class extends React.Component {
  render() {
    const {content} = this.props;
    return (
      <div className="App">
        <header className="App-header" id="root">
          <h1>Raw Material Tracking System</h1>
          {content}
        </header>
      </div>
    );
  }
}

exports.ConnectAccount = class extends React.Component {
  render() {
    return (
      <div>
        Connecting to your account...
        <br></br>
        <img className="background" src={background} alt="Homepage" />
      </div>
    )
  }
}

exports.FundAccount = class extends React.Component {
  render() {
    const {bal, standardUnit, defaultFundAmt, parent} = this.props;
    const amt = (this.state || {}).amt || defaultFundAmt;
    return (
      <div>
        <h2>Fund account</h2>
        <br />
        Balance: {bal} {standardUnit}
        <hr />
        Would you like to fund your account with additional {standardUnit}?
        <br />
        (This only works on certain devnets)
        <br />
        <input
          type='number'
          placeholder={defaultFundAmt}
          onChange={(e) => this.setState({amt: e.currentTarget.value})}
        />
        <button onClick={() => parent.fundAccount(amt)}>Fund Account</button>
        <button onClick={() => parent.skipFundAccount()}>Skip</button>
      </div>
    );
  }
}

exports.selectRole = class extends React.Component {
  render() {
    const {parent} = this.props;
    return (
      <div>
        <b className='headerbar'>
          Please Select a Role:
        </b>
        <br />
        <p>
            <button
                onClick={() => parent.selectWarehouse()}>Warehouse</button>
            <br />
        </p>
        <p>
            <button
                onClick={() => parent.selectFactory()}>Factory</button>
            <br />
        </p>
      </div>
    );
  }
}

export default exports;
