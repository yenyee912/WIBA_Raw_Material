import React from 'react';
import BarcodeScannerComponent from "react-qr-barcode-scanner";
import jsQR from "jsqr";
import commonInteract from './commonInteract';

const exports = {...commonInteract};


exports.Wrapper = class extends React.Component {
  render() {
    const {content} = this.props;
    return (
      <div className="Attacher">
        <div className="header">
          <br/>
            <b className="user">Welcome, Factory</b>
            <br/>
            <i>-- Trace the origin, control the quality --</i>
            <br/>
            <br/>
        </div>
        {content}
      </div>
    );
  }
}

exports.Attach = class extends React.Component {  
    render() {
        const {parent} = this.props;
        const {factoryName, inventoryFactory, ctcInfoStr} = this.state || {};
        const readQrCode = (fileReaderResult)=>{
          let img = new Image();
          img.src = fileReaderResult;
          img.onload = ()=>{
            let imgWidth = img.width;
            let imgHeight = img.height;
            let c = document.createElement("canvas");
            c.width = imgWidth ;
            c.height = imgHeight;
            let ctx = c.getContext("2d");
            let o = ctx.drawImage(img,0,0,imgWidth,imgHeight);
            let imageData = ctx.getImageData(0,0,imgWidth, imgHeight);
            let code = jsQR(imageData.data, imgWidth, imgHeight);
            if (code) this.setState({ctcInfoStr: code.data})
            else console.log("QR code not found");
          };
        }
        const onInputChange = (element)=>{
          let fr = new FileReader();
          fr.onload = ()=>readQrCode(fr.result);
          fr.readAsDataURL(element.currentTarget.files[0]);
        }
        return (
            <div>
                Factory's Name:
                <br/>
                <input
                type='text'
                onChange={(e) => this.setState({factoryName : e.currentTarget.value})}
                maxLength="110"
                /> 
                <br />
                Factory's current inventory number (integer):<br></br>
                <input
                type='number'
                min={0}
                onChange={(e) => this.setState({inventoryFactory : e.currentTarget.value})}
                /> 
                <br />
                <br />
                Please scan the contract info to attach to Warehouse's network:
                <br/>Upload file:&nbsp;
                <input type="file" id="file" accept="image/png" onChange={onInputChange}/>
                <br/>
                OR
                <br/>
                <BarcodeScannerComponent
                    width={500}
                    height={500}
                    onUpdate={(err, result) => {
                      if (result) {
                        this.setState({ctcInfoStr:result.text});
                      console.log(result)}
                      else console.log('Not found');
                    }}
                  />
                <br />
                <button
                    disabled={!ctcInfoStr}
                    onClick={() => parent.attach(factoryName, inventoryFactory, ctcInfoStr)}
                >Attach</button>
            </div>
        );
    }
}
  
exports.Attaching = class extends React.Component {
    render() {
        return (
        <div>
            <br/>
            Request to attach to Warehouse's network, please wait...
          <div class="load">Loading
          <span></span>
          </div>
        </div>
        );
    }
}

exports.AcceptMaterial = class extends React.Component {
  render() {
    const {supplierID, supplierName, materialID, materialName, batchNumber, quantity, parent} = this.props;
    const {disabled} = this.state || {};
    return (
      <div className='TransactionInfo'>
        Welcome to the warehouse's network.
        Do you want to accept the raw material from warehouse? <br></br> 
        Below are the details: 
        <pre>
          Supplier ID: {supplierID} <br></br>
          Supplier Name: {supplierName} <br></br>
          Material ID: {materialID} <br></br>
          Material Name: {materialName} <br></br>
          Material Batch Number: {batchNumber} <br></br>
        </pre>
        Quantity to be transferred : {quantity}
        <br />
        <br />
        <button
          disabled={disabled}
          onClick={() => {
            this.setState({disabled: true});
            parent.response(true);
          }}
        >Accept</button>&nbsp;
        <button
          disabled={disabled}
          onClick={() => {
            this.setState({disabled: true});
            parent.response(false);
          }}
        >Reject</button>

      </div>
    );
  }
}


exports.PublishResult = class extends React.Component {
  render() {
    return (
      <div>
          <br/>
        Sending your response to blockchain. Please wait...
        <div class="load">Loading
          <span></span>
        </div>
      </div>
      
    );
  }
}

export default exports;
