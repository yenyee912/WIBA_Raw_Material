import React from 'react';
import QRCode from "qrcode.react";
import commonInteract from './commonInteract';

const exports = {...commonInteract};

exports.Wrapper = class extends React.Component {
  render() {
    const {content} = this.props;
    return (
      <div className="Deployer">
         <div className="headerbar">
            <b className="user">Welcome, Warehouse</b>
        </div>
        {content}
      </div>
    );
  }
}

exports.Deploy = class extends React.Component {
  render() {
    const {parent} = this.props;
    const {warehouseName, inventoryWarehouse, supplierID, supplierName, staffID, staffName, materialID, materialName, batchNumber, quantity} = this.state || {};

    return (
      <div className='form-box'>
        Warehouse's Name:&nbsp;
        <input
        type='text'
        onChange={(e) => this.setState({warehouseName : e.currentTarget.value})}/>
        <br/> 
        Warehouse's current inventory number (integer):&nbsp;
        <input
        type='number'
        onChange={(e) => this.setState({inventoryWarehouse : e.currentTarget.value})}/>
        <br/> 
        <br />
        SupplierID:&nbsp;
        <input
        type='text'
        onChange={(e) => this.setState({supplierID : e.currentTarget.value})}
        /> 
        <br />
        SupplierName:&nbsp;  
        <input
        type='text'
        onChange={(e) => this.setState({supplierName : e.currentTarget.value})}
        /> 
        <br />
        
        StaffID:&nbsp; 
        <input
        type='text'
        onChange={(e) => this.setState({staffID : e.currentTarget.value})}
        /> 
        <br />
        StaffName:&nbsp;
        <input
        type='text'
        onChange={(e) => this.setState({staffName : e.currentTarget.value})}
        /> 
        <br />
        MaterialID:&nbsp;
        <input
        type='text'
        onChange={(e) => this.setState({materialID : e.currentTarget.value})}
        /> 
        <br />
        MaterialName:&nbsp; 
        <input
        type='text'
        onChange={(e) => this.setState({materialName : e.currentTarget.value})}
        /> 
        <br />
        Batch Number:&nbsp;
        <input
        type='text'
        onChange={(e) => this.setState({batchNumber: e.currentTarget.value})}
        /> 
        <br />
        Quantity (integer):&nbsp;
        <input
        type='number'
        onChange={(e) => this.setState({quantity: e.currentTarget.value})}
        />
        <br />
        <br />
        <b>Deploy the smart contract</b>
        <br />
        <button
          disabled={!warehouseName||!inventoryWarehouse||!supplierID||!supplierName||!staffID|| !staffName|| !materialID|| !materialName||!batchNumber|| !quantity|| quantity>inventoryWarehouse}
          onClick={() => parent.deploy(warehouseName,inventoryWarehouse, supplierID, supplierName, staffID, staffName, materialID, materialName, batchNumber, quantity)}>
          Deploy</button>
      </div>
    );
  }
}

exports.Deploying = class extends React.Component {
  render() {
    return (
      <div>Deploying... please wait.
        <div class="load">Loading
          <span></span>
        </div>
      </div>
      
    );
  }
}

exports.WaitingForAttacher = class extends React.Component {
  downloadQR = () => {
    const canvas = document.getElementById("code");
    const pngUrl = canvas
      .toDataURL("image/png")
      .replace("image/png", "image/octet-stream");
    let downloadLink = document.createElement("a");
    downloadLink.href = pngUrl;
    downloadLink.download = "code.png";
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };
  render() {
    const {ctcInfoStr} = this.props;
    return (
      <div>
        Waiting for Attacher to join...
        <br /> Please give them this contract info:
        <div className='ContractInfo'>
          <QRCode 
          id="code"
          size={500}
          level={"H"}
          value={ctcInfoStr} />
        </div>
        <button
          onClick={this.downloadQR}
        >Download QR code</button>
      </div>
    )
  }
}


export default exports;