import React from 'react';
import AppViews from './views/AppViews.js';
import DeployerViews from './views/DeployerViews.js';
import AttacherViews from './views/AttacherViews.js';
import { renderDOM, renderView } from './views/render.js';
import './index.css';
import * as backend from './build/index.main.mjs';
import { loadStdlib } from '@reach-sh/stdlib';
import { ALGO_MyAlgoConnect as MyAlgoConnect } from '@reach-sh/stdlib';


const reach = loadStdlib(process.env);
reach.setWalletFallback(reach.walletFallback({
    providerEnv: 'TestNet', MyAlgoConnect }));

const handToInt ={ 'ROCK': 0, 'PAPER':1, 'SCISSORS': 2};
const intToOutcome = ['Bob wins!', 'Draw!', 'Alice wins!'];
const {standardUnit} = reach;
const defaults ={defaultFundAmt: '10', defaultWager:'3', standardUnit};

class App extends React.Component {
    constructor(props){
        super(props);
        this.state ={view:'ConnectAccount', ...defaults};
    }

    async componentDidMount(){
        const acc = await reach.getDefaultAccount();
        const balAtomic = await reach.balanceOf(acc);
        const bal = reach.formatCurrency(balAtomic, 4);
        this.setState({acc, bal});
        if(await reach.canFundFromFaucet()){
            this.setState({view: 'FundAccount'});
        }else{
            this.setState({view: 'Role'});
        }
    }

    async fundAccount(fundAmount){
        await reach.fundFromFaucet(this.state.acc, reach.parseCurrency(fundAmount));
        this.setState({view:'Role'});
    }
    async skipFundAccount(){
        this.setState({view:'Role'});
    }
    selectAttacher(){
        this.setState({view:'Wrapper', ContentView:Attacher});
    }
    selectDeployer(){
        this.setState({view:'Wrapper', ContentView: Deployer});
    }
    render(){ return renderView(this, AppViews);}

}

class commonInteract extends React.Component{
    random(){ return reach.hasRandom.random();}
    informTimeout(){this.setState({view:'Timeout'});}
    async reportInventory(){
        const report = await new Promise(resolveReport => {
            this.setState({view:'getFinger', playable:true, resolveReport});
        });
    this.setState({view:'WaitingForResults', report});
    return report;
    }
    showReport(report){ this.state.resolveReport(report);}
    // inventory = reach.parseCurrency(this.state.inventory); //UInt
    inventory = this.state.inventory;
}

class warehouseInteract extends commonInteract{
    deadline = { ETH: 10, ALGO: 100, CFX: 1000}[reach.connector]; //UInt
    quantity = this.state.quantity;
    supplierID = this.state.supplierID;
    supplierName= this.state.supplierName;
    timestamp= new Date().toLocaleString();
    staffID= this.state.staffID;
    staffName= this.state.staffName;
    materialID= this.state.materialID;
    materialName= this.state.materialName;
    batchNumber= this.state.batchNumber;// one batch + id= one contract  
    }

class factoryInteract extends commonInteract{
    async acceptMaterial(wagerAtomic){ //Fun([UInt], Null)
        const wager = reach.formatCurrency(wagerAtomic, 4);
        return await new Promise(resolveAcceptedP => {
            this.setState({view:'AcceptTerms', wager, resolveAcceptedP});
        });
    }
}

class Deployer extends warehouseInteract{
    constructor(props){
        super(props);
        this.state ={view:'SetWager'};
    }
    // setInventory(inventory){ this.setState({view:'Deploy', inventory});}
    // setWager(wager){ this.setState({view:'Deploy', wager});}
    async deploy(){
        const ctc = this.props.acc.contract(backend);
        this.setState({view:'Deploying', ctc});
      
       
        backend.Warehouse(ctc, this);
        const ctcInfoStr = JSON.stringify(await ctc.getInfo(), null, 2);
        this.setState({view:'WaitingForAttacher', ctcInfoStr});
    }
    render(){ return renderView(this, DeployerViews);}
}

class Attacher extends factoryInteract {
    constructor(props){
        super(props);
        this.state ={ view: 'Attach'};
    }
    attach(ctcInfoStr){
        const ctc = this.props.acc.contract(backend, JSON.parse(ctcInfoStr));
        this.setState({view:'Attaching'});
        backend.Bob(ctc, this);
    }
    
    termsAccepted(){
        this.state.resolveAcceptedP();
        this.setState({view:'WaitingForTurn'});
    }
    render(){ return renderView(this, AttacherViews);}
}

renderDOM(<App />)
