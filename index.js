import React from 'react';
import AppViews from './views/AppViews';
import FactoryViews from './views/FactoryViews';
import WarehouseViews from './views/WarehouseViews';
import {renderDOM, renderView} from './views/render';
import './index.css'
import * as backend from './build/index.main.mjs'
import {loadStdlib} from '@reach-sh/stdlib';
const reach = loadStdlib(process.env);

import { ALGO_MyAlgoConnect as MyAlgoConnect } from '@reach-sh/stdlib';
reach.setWalletFallback(reach.walletFallback({providerEnv: 'TestNet', MyAlgoConnect}))
const {standardUnit} = reach;
const defaults = {defaultFundAmt: '10', standardUnit}

class App extends React.Component{
    constructor(props){
        super(props)
        this.state = {view: 'ConnectAccount', ...defaults}
    }
    async componentDidMount(){

        const acc = await reach.getDefaultAccount();
        const balAtomic = await reach.balanceOf(acc)
        const bal = reach.formatCurrency(balAtomic, 4)
        this.setState({acc, bal})
        if(await reach.canFundFromFaucet()){
            this.setState({view: 'FundAccount'})
        } else{
            this.setState({view: 'selectRole'})
        }
    }
    render(){ 
        return renderView(this, AppViews)
    }
    async fundAccount(fundAmount){
        await reach.fundFromFaucet(this.state.acc, reach.parseCurrency(fundAmount))
        this.setState({view: 'selectRole'})
    }
    async skipFundAccount(){this.setState({view:'selectRole'})}
    selectWarehouse(){
        this.setState({view:'Wrapper', ContentView: Warehouse})
    }
    selectFactory(){
        this.setState({view:'Wrapper', ContentView: Factory})
    }
}

class commonInteract extends React.Component{
    random(){ return reach.hasRandom.random()}

    reportInventory(inventory){
        this.setState({view: 'Outcome', inventory})
    }

    informTimeout(){
        this.setState({view:'Timeout'})
    }

    seeOutcome(result, factoryName, warehouseName, timestamp, supplierID, supplierName, materialID, materialName, batchNumber, quantity){
         const details  = "{Supplier ID: " + supplierID + ",Supplier Name: " + supplierName + ",Material ID: " + materialID + ",Material Name: " + materialName + ",Batch Number: " + batchNumber + ",Quantity: " + quantity + "}"; 
        this.setState({view:'Outcome', result, factoryName, warehouseName, timestamp, details})
    }
}

class Warehouse extends commonInteract{
    constructor(props){
        super(props)
        this.state = {view: 'Deploy'}
    }

    async deploy(warehouseName, inventoryWarehouse, supplierID, supplierName, staffID, staffName, materialID, materialName, batchNumber, quantity){
        this.timestamp = new Date().toLocaleString();
        this.warehouseName = warehouseName
        this.inventoryWarehouse = inventoryWarehouse
        this.supplierID = supplierID
        this.supplierName = supplierName
        this.staffID = staffID
        this.staffName = staffName
        this.materialID = materialID
        this.materialName = materialName
        this.batchNumber = batchNumber
        this.quantity = quantity
        const ctc = this.props.acc.contract(backend)
        this.setState({view:'Deploying', ctc})
        this.deadline = {ETH: 100, ALGO: 100, CFX: 1000} [reach.connector]
        backend.Warehouse(ctc, this)
        const ctcInfoStr = JSON.stringify(await ctc.getInfo(), null, 2)
        this.setState({view: 'WaitingForAttacher', ctcInfoStr})
    }

    render(){
        return renderView(this, WarehouseViews)
    }
}

class Factory extends commonInteract{
    constructor(props){
        super(props)
        this.state = {view: 'Attach'}
    }

    async attach(factoryName, inventoryFactory, ctcInfoStr){
        this.factoryName = factoryName
        this.inventoryFactory = inventoryFactory
        const ctc = this.props.acc.contract(backend, JSON.parse(ctcInfoStr))
        this.setState({view: 'Attaching'})
        backend.Factory(ctc, this)
    }

    render(){
        return renderView(this, FactoryViews)
    }

    async acceptMaterial(supplierID, supplierName, materialID, materialName, batchNumber, quantity){
        return await new Promise(resolveAcceptedP => {
            quantity = parseInt(quantity)
            this.setState({view: 'AcceptMaterial', supplierID, supplierName, materialID, materialName, batchNumber, quantity, resolveAcceptedP})
        })
    }
    response(result){
        this.state.resolveAcceptedP(result)
        this.setState({view:'PublishResult'})
    }
}

renderDOM(<App />)