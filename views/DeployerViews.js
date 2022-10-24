import React, { useState, useRef, useWindowDimensions } from 'react';
import PlayerViews from './PlayerViews.js';

const exports = {...PlayerViews};

const sleep = (milliseconds) => new Promise(resolve => setTimeout(resolve, milliseconds));

exports.Wrapper = class extends React.Component {
  render() {
    const {content} = this.props;
    return (
      <div className="Deployer">
        <div className="headerbar">
            <b className="user">Welcome, Alice</b>
        </div>
        {content}
      </div>
    );
  }
}

exports.SetWager = class extends React.Component {
  render() {
    const {parent, defaultWager, standardUnit} = this.props;
    const wager = (this.state || {}).wager || defaultWager;
    // const [title, setTitle] = useState("");
    // const [details, setDetails] = useState("");
    // const [category, setCategory] = useState([]);
    // const [image, setImg] = useState("");
    // const [name, setName] = useState("")
    // const [url, setUrl] = useState("");
    // const [path, setPath] = useState("");
    // const PostCollectionRef = doc(collection(db, "Post"));
    // const history = useHistory()
  
    const addForm = async () => {
      if (!title || !details || !category.value) {
        alert("All Information must be filled out.")
        return false;
      }
  
      if (!false) {
        const imgRef = ref(
          storage,
          `Img/${new Date().getTime()} - ${image.name}`
        );
  
  
        const snap = await uploadBytes(imgRef, image);
        const url = await getDownloadURL(ref(storage, snap.ref.fullPath));
  
        setImg("");
  
        await setDoc(PostCollectionRef,
          {
            title: title,
            details: details,
            userID: auth.currentUser.uid,
            category: category.value,
            time: new Date(),
            postImg: url,
            postImgPath: snap.ref.fullPath,
            postID: PostCollectionRef.id,
            username: name,
          }
        )
        history.go(0);
      }
    }
    return (
      <div>
        <input
          type='number'
          placeholder={defaultWager}
          onChange={(e) => this.setState({wager: e.currentTarget.value})}/> 
          {standardUnit}
        <br />
        <button
          onClick={() => parent.setWager(wager)}>
          Set wager
        </button>
        <br/>
        <div className='form-box'>
        <form >
          <label>
            Name: &nbsp;
          </label>
          <input type="text" name="name" />
          <label>
            Entry date: &nbsp;
          </label>
          <input type="text" name="name" />
          
          <label>
            Quantity: &nbsp;
          </label>
          <input type="text" name="name" />
          
          <label>
            Material Type: &nbsp;
          </label>
          <input type="text" name="name" />
          <label>
            Supplier address: &nbsp;
          </label>
          <input type="text" name="name" />
        </form>
        </div>
        
      </div>
      

    );
  }
}

exports.Deploy = class extends React.Component {
  render() {
    const {parent, wager, standardUnit} = this.props;
    return (
      <div>
        Wager (pay to deploy): <strong>{wager}</strong> {standardUnit}
        <br />
        <button
          onClick={() => parent.deploy()}
        >Deploy</button>
      </div>
    );
  }
}

exports.Deploying = class extends React.Component {
  render() {
    return (
      <div>Deploying... please wait.</div>
    );
  }
}

exports.WaitingForAttacher = class extends React.Component {
  async copyToClipboard(button) {
    const {ctcInfoStr} = this.props;
    navigator.clipboard.writeText(ctcInfoStr);
    const origInnerHTML = button.innerHTML;
    button.innerHTML = 'Copied!';
    button.disabled = true;
    await sleep(1000);
    button.innerHTML = origInnerHTML;
    button.disabled = false;
  }

  render() {
    const {ctcInfoStr} = this.props;
    return (
      <div>
        Waiting for Attacher to join...
        <br /> Please give them this contract info:
        <pre className='ContractInfo'>
          {ctcInfoStr}
        </pre>
        <button
          onClick={(e) => this.copyToClipboard(e.currentTarget)}
        >Copy to clipboard</button>
      </div>
    )
  }
}

export default exports;
