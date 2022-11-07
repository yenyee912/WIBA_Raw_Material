// Automatically generated with Reach 0.1.12 (796d7fb3)
/* eslint-disable */
export const _version = '0.1.12';
export const _versionHash = '0.1.12 (796d7fb3)';
export const _backendVersion = 25;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_UInt;
  
  return {
    infos: {
      },
    views: {
      1: [ctc0]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Tuple([]);
  return {
    mapDataTy: ctc0
    };
  };
export async function Factory(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Factory expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Factory expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '100'));
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Bool;
  const ctc3 = stdlib.T_Null;
  
  
  const v122 = stdlib.protect(ctc0, interact.factoryName, 'for Factory\'s interact field factoryName');
  const v123 = stdlib.protect(ctc1, interact.inventoryFactory, 'for Factory\'s interact field inventoryFactory');
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 12,
    funcNum: 0,
    out_tys: [ctc0, ctc1, ctc1, ctc0, ctc0, ctc0, ctc0, ctc0, ctc0, ctc0, ctc0, ctc1],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v127, v128, v129, v130, v131, v132, v133, v134, v135, v136, v137, v138], secs: v140, time: v139, didSend: v51, from: v126 } = txn1;
  ;
  const v147 = stdlib.safeAdd(v139, v129);
  const v151 = stdlib.protect(ctc2, await interact.acceptMaterial(v130, v131, v135, v136, v137, v138), {
    at: './index.rsh:69:58:application',
    fs: ['at ./index.rsh:66:17:application call to [unknown function] (defined at: ./index.rsh:66:21:function exp)'],
    msg: 'acceptMaterial',
    who: 'Factory'
    });
  
  const txn2 = await (ctc.sendrecv({
    args: [v147, v122, v123, v151],
    evt_cnt: 3,
    funcNum: 1,
    lct: v139,
    onlyIf: true,
    out_tys: [ctc0, ctc1, ctc2],
    pay: [stdlib.checkedBigNumberify('./index.rsh:71:13:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v153, v154, v155], secs: v157, time: v156, didSend: v62, from: v152 } = txn2;
      
      ;
      sim_r.txns.push({
        kind: 'halt',
        tok: undefined /* Nothing */
        })
      sim_r.isHalt = true;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: ['time', v147],
    tys: [ctc1, ctc0, ctc1, ctc2],
    waitIfNotPresent: false
    }));
  if (txn2.didTimeout) {
    const txn3 = await (ctc.sendrecv({
      args: [v147],
      evt_cnt: 0,
      funcNum: 2,
      lct: v139,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [], secs: v166, time: v165, didSend: v87, from: v164 } = txn3;
        
        ;
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        
        return sim_r;
        }),
      soloSend: false,
      timeoutAt: undefined /* mto */,
      tys: [ctc1],
      waitIfNotPresent: false
      }));
    const {data: [], secs: v166, time: v165, didSend: v87, from: v164 } = txn3;
    ;
    stdlib.protect(ctc3, await interact.informTimeout(), {
      at: './index.rsh:45:35:application',
      fs: ['at ./index.rsh:44:13:application call to [unknown function] (defined at: ./index.rsh:44:40:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:43:30:function exp)', 'at ./index.rsh:72:55:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
      msg: 'informTimeout',
      who: 'Factory'
      });
    
    return;
    
    }
  else {
    const {data: [v153, v154, v155], secs: v157, time: v156, didSend: v62, from: v152 } = txn2;
    ;
    stdlib.protect(ctc3, await interact.seeOutcome(v155, v153, v127, v132), {
      at: './index.rsh:76:28:application',
      fs: ['at ./index.rsh:75:9:application call to [unknown function] (defined at: ./index.rsh:75:35:function exp)'],
      msg: 'seeOutcome',
      who: 'Factory'
      });
    
    return;
    }
  
  
  
  };
export async function Warehouse(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Warehouse expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Warehouse expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '100'));
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Bool;
  const ctc3 = stdlib.T_Null;
  
  
  const v110 = stdlib.protect(ctc0, interact.batchNumber, 'for Warehouse\'s interact field batchNumber');
  const v111 = stdlib.protect(ctc1, interact.deadline, 'for Warehouse\'s interact field deadline');
  const v112 = stdlib.protect(ctc1, interact.inventoryWarehouse, 'for Warehouse\'s interact field inventoryWarehouse');
  const v113 = stdlib.protect(ctc0, interact.materialID, 'for Warehouse\'s interact field materialID');
  const v114 = stdlib.protect(ctc0, interact.materialName, 'for Warehouse\'s interact field materialName');
  const v115 = stdlib.protect(ctc1, interact.quantity, 'for Warehouse\'s interact field quantity');
  const v116 = stdlib.protect(ctc0, interact.staffID, 'for Warehouse\'s interact field staffID');
  const v117 = stdlib.protect(ctc0, interact.staffName, 'for Warehouse\'s interact field staffName');
  const v118 = stdlib.protect(ctc0, interact.supplierID, 'for Warehouse\'s interact field supplierID');
  const v119 = stdlib.protect(ctc0, interact.supplierName, 'for Warehouse\'s interact field supplierName');
  const v120 = stdlib.protect(ctc0, interact.timestamp, 'for Warehouse\'s interact field timestamp');
  const v121 = stdlib.protect(ctc0, interact.warehouseName, 'for Warehouse\'s interact field warehouseName');
  
  const txn1 = await (ctc.sendrecv({
    args: [v121, v112, v111, v118, v119, v120, v116, v117, v113, v114, v110, v115],
    evt_cnt: 12,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:63:15:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc0, ctc1, ctc1, ctc0, ctc0, ctc0, ctc0, ctc0, ctc0, ctc0, ctc0, ctc1],
    pay: [stdlib.checkedBigNumberify('./index.rsh:63:15:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v127, v128, v129, v130, v131, v132, v133, v134, v135, v136, v137, v138], secs: v140, time: v139, didSend: v51, from: v126 } = txn1;
      
      ;
      const v147 = stdlib.safeAdd(v139, v129);
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc1, ctc1, ctc0, ctc0, ctc0, ctc0, ctc0, ctc0, ctc0, ctc0, ctc1],
    waitIfNotPresent: false
    }));
  const {data: [v127, v128, v129, v130, v131, v132, v133, v134, v135, v136, v137, v138], secs: v140, time: v139, didSend: v51, from: v126 } = txn1;
  ;
  const v147 = stdlib.safeAdd(v139, v129);
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 3,
    funcNum: 1,
    out_tys: [ctc0, ctc1, ctc2],
    timeoutAt: ['time', v147],
    waitIfNotPresent: false
    }));
  if (txn2.didTimeout) {
    const txn3 = await (ctc.sendrecv({
      args: [v147],
      evt_cnt: 0,
      funcNum: 2,
      lct: v139,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [], secs: v166, time: v165, didSend: v87, from: v164 } = txn3;
        
        ;
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        
        return sim_r;
        }),
      soloSend: false,
      timeoutAt: undefined /* mto */,
      tys: [ctc1],
      waitIfNotPresent: false
      }));
    const {data: [], secs: v166, time: v165, didSend: v87, from: v164 } = txn3;
    ;
    stdlib.protect(ctc3, await interact.informTimeout(), {
      at: './index.rsh:45:35:application',
      fs: ['at ./index.rsh:44:13:application call to [unknown function] (defined at: ./index.rsh:44:40:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:43:30:function exp)', 'at ./index.rsh:72:55:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
      msg: 'informTimeout',
      who: 'Warehouse'
      });
    
    return;
    
    }
  else {
    const {data: [v153, v154, v155], secs: v157, time: v156, didSend: v62, from: v152 } = txn2;
    ;
    stdlib.protect(ctc3, await interact.seeOutcome(v155, v153, v127, v132), {
      at: './index.rsh:76:28:application',
      fs: ['at ./index.rsh:75:9:application call to [unknown function] (defined at: ./index.rsh:75:35:function exp)'],
      msg: 'seeOutcome',
      who: 'Warehouse'
      });
    
    return;
    }
  
  
  
  };
const _ALGO = {
  ABI: {
    impure: [],
    pure: [],
    sigs: []
    },
  appApproval: `ByAEAAFkAiYCAQAAIjUAMRhBAaYpZEkiWzUBgQhbNQI2GgAXSUEAByI1BCM1BgA2GgIXNQQ2GgM2GgEXSSMMQAB2SSUMQAAoJRJEIzQBEkQ0BEkiEkw0AhIRRChkNQOABEGxQE2wMgY0AxcPREIA+kgjNAESRDQESSISTDQCEhFEKGQ1A0k1BUlJVwBkNf8kWzX+V2wBFzX9gARflCTtNP9QNP4WUDT9FlEHCFCwMgY0AxcMREIAskiBoI0GiAEXIjQBEkQ0BEkiEkw0AhIRREk1BUlKSkpKSlcAZDX/JFs1/oFsWzX9V3RkNfxX2GQ1+4G8AiRYNfqBoAMkWDX5gYQEJFg1+IHoBCRYNfeBzAUkWDX2gbAGJFg19YGUB1s19IAEvSdO4zT/UDT+FlA0/RZQNPxQNPtQNPpQNPlQNPhQNPdQNPZQNPVQNPQWULAyBjT9CEk18xYoSwFXAAhnSCM1ATIGNQJCABwxGYEFEkSxIrIBIrIII7IQMgmyCTIKsgezQgAFMRkiEkQpNAEWNAIWUGc0BkEACoAEFR98dTQHULA0AEkjCDIEEkQxFhJEI0MxGSISREL/3yIxNBJEJTE1EkQiMTYSRCIxNxJEIjUBIjUCQv+vNABJSiMINQA4BzIKEkQ4ECMSRDgIEkSJ`,
  appClear: `Bw==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 1,
  stateSize: 8,
  unsupported: [],
  version: 11,
  warnings: []
  };
const _ETH = {
  ABI: `[
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "bytes32",
                    "name": "elem0",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem1",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem2",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes4",
                    "name": "elem3",
                    "type": "bytes4"
                  }
                ],
                "internalType": "struct T1",
                "name": "v127",
                "type": "tuple"
              },
              {
                "internalType": "uint256",
                "name": "v128",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v129",
                "type": "uint256"
              },
              {
                "components": [
                  {
                    "internalType": "bytes32",
                    "name": "elem0",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem1",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem2",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes4",
                    "name": "elem3",
                    "type": "bytes4"
                  }
                ],
                "internalType": "struct T1",
                "name": "v130",
                "type": "tuple"
              },
              {
                "components": [
                  {
                    "internalType": "bytes32",
                    "name": "elem0",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem1",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem2",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes4",
                    "name": "elem3",
                    "type": "bytes4"
                  }
                ],
                "internalType": "struct T1",
                "name": "v131",
                "type": "tuple"
              },
              {
                "components": [
                  {
                    "internalType": "bytes32",
                    "name": "elem0",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem1",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem2",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes4",
                    "name": "elem3",
                    "type": "bytes4"
                  }
                ],
                "internalType": "struct T1",
                "name": "v132",
                "type": "tuple"
              },
              {
                "components": [
                  {
                    "internalType": "bytes32",
                    "name": "elem0",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem1",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem2",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes4",
                    "name": "elem3",
                    "type": "bytes4"
                  }
                ],
                "internalType": "struct T1",
                "name": "v133",
                "type": "tuple"
              },
              {
                "components": [
                  {
                    "internalType": "bytes32",
                    "name": "elem0",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem1",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem2",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes4",
                    "name": "elem3",
                    "type": "bytes4"
                  }
                ],
                "internalType": "struct T1",
                "name": "v134",
                "type": "tuple"
              },
              {
                "components": [
                  {
                    "internalType": "bytes32",
                    "name": "elem0",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem1",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem2",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes4",
                    "name": "elem3",
                    "type": "bytes4"
                  }
                ],
                "internalType": "struct T1",
                "name": "v135",
                "type": "tuple"
              },
              {
                "components": [
                  {
                    "internalType": "bytes32",
                    "name": "elem0",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem1",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem2",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes4",
                    "name": "elem3",
                    "type": "bytes4"
                  }
                ],
                "internalType": "struct T1",
                "name": "v136",
                "type": "tuple"
              },
              {
                "components": [
                  {
                    "internalType": "bytes32",
                    "name": "elem0",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem1",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem2",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes4",
                    "name": "elem3",
                    "type": "bytes4"
                  }
                ],
                "internalType": "struct T1",
                "name": "v137",
                "type": "tuple"
              },
              {
                "internalType": "uint256",
                "name": "v138",
                "type": "uint256"
              }
            ],
            "internalType": "struct T2",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T3",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "msg",
        "type": "uint256"
      }
    ],
    "name": "ReachError",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "bytes32",
                    "name": "elem0",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem1",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem2",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes4",
                    "name": "elem3",
                    "type": "bytes4"
                  }
                ],
                "internalType": "struct T1",
                "name": "v127",
                "type": "tuple"
              },
              {
                "internalType": "uint256",
                "name": "v128",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v129",
                "type": "uint256"
              },
              {
                "components": [
                  {
                    "internalType": "bytes32",
                    "name": "elem0",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem1",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem2",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes4",
                    "name": "elem3",
                    "type": "bytes4"
                  }
                ],
                "internalType": "struct T1",
                "name": "v130",
                "type": "tuple"
              },
              {
                "components": [
                  {
                    "internalType": "bytes32",
                    "name": "elem0",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem1",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem2",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes4",
                    "name": "elem3",
                    "type": "bytes4"
                  }
                ],
                "internalType": "struct T1",
                "name": "v131",
                "type": "tuple"
              },
              {
                "components": [
                  {
                    "internalType": "bytes32",
                    "name": "elem0",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem1",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem2",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes4",
                    "name": "elem3",
                    "type": "bytes4"
                  }
                ],
                "internalType": "struct T1",
                "name": "v132",
                "type": "tuple"
              },
              {
                "components": [
                  {
                    "internalType": "bytes32",
                    "name": "elem0",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem1",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem2",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes4",
                    "name": "elem3",
                    "type": "bytes4"
                  }
                ],
                "internalType": "struct T1",
                "name": "v133",
                "type": "tuple"
              },
              {
                "components": [
                  {
                    "internalType": "bytes32",
                    "name": "elem0",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem1",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem2",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes4",
                    "name": "elem3",
                    "type": "bytes4"
                  }
                ],
                "internalType": "struct T1",
                "name": "v134",
                "type": "tuple"
              },
              {
                "components": [
                  {
                    "internalType": "bytes32",
                    "name": "elem0",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem1",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem2",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes4",
                    "name": "elem3",
                    "type": "bytes4"
                  }
                ],
                "internalType": "struct T1",
                "name": "v135",
                "type": "tuple"
              },
              {
                "components": [
                  {
                    "internalType": "bytes32",
                    "name": "elem0",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem1",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem2",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes4",
                    "name": "elem3",
                    "type": "bytes4"
                  }
                ],
                "internalType": "struct T1",
                "name": "v136",
                "type": "tuple"
              },
              {
                "components": [
                  {
                    "internalType": "bytes32",
                    "name": "elem0",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem1",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem2",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes4",
                    "name": "elem3",
                    "type": "bytes4"
                  }
                ],
                "internalType": "struct T1",
                "name": "v137",
                "type": "tuple"
              },
              {
                "internalType": "uint256",
                "name": "v138",
                "type": "uint256"
              }
            ],
            "internalType": "struct T2",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T3",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e0",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "bytes32",
                    "name": "elem0",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem1",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem2",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes4",
                    "name": "elem3",
                    "type": "bytes4"
                  }
                ],
                "internalType": "struct T1",
                "name": "v153",
                "type": "tuple"
              },
              {
                "internalType": "uint256",
                "name": "v154",
                "type": "uint256"
              },
              {
                "internalType": "bool",
                "name": "v155",
                "type": "bool"
              }
            ],
            "internalType": "struct T4",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T5",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e1",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e2",
    "type": "event"
  },
  {
    "stateMutability": "payable",
    "type": "fallback"
  },
  {
    "inputs": [],
    "name": "_reachCreationTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentState",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "",
        "type": "bytes"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "bytes32",
                    "name": "elem0",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem1",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem2",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes4",
                    "name": "elem3",
                    "type": "bytes4"
                  }
                ],
                "internalType": "struct T1",
                "name": "v153",
                "type": "tuple"
              },
              {
                "internalType": "uint256",
                "name": "v154",
                "type": "uint256"
              },
              {
                "internalType": "bool",
                "name": "v155",
                "type": "bool"
              }
            ],
            "internalType": "struct T4",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T5",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m1",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m2",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x608060405260405162000d1538038062000d15833981016040819052620000269162000318565b60008080554360035560408051602081018252918252517f58c38963708595f31da65d7e0640c10d35ed86a1cb34d6ed76963c92f4919257906200006e903390859062000441565b60405180910390a16200008434156007620000fb565b6200009e438360200151604001516200012660201b60201c565b81526040805160208101909152600081528151808252600160008190554390556040805160208101929092520160405160208183030381529060405260029080519060200190620000f19291906200017d565b50505050620006a6565b81620001225760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b5050565b60008262000135838262000642565b9150811015620001775760405162461bcd60e51b815260206004820152600c60248201526b616464206f766572666c6f7760a01b604482015260640162000119565b92915050565b8280546200018b9062000669565b90600052602060002090601f016020900481019282620001af5760008555620001fa565b82601f10620001ca57805160ff1916838001178555620001fa565b82800160010185558215620001fa579182015b82811115620001fa578251825591602001919060010190620001dd565b50620002089291506200020c565b5090565b5b808211156200020857600081556001016200020d565b604080519081016001600160401b03811182821017156200025457634e487b7160e01b600052604160045260246000fd5b60405290565b60405161018081016001600160401b03811182821017156200025457634e487b7160e01b600052604160045260246000fd5b6000608082840312156200029f57600080fd5b604051608081016001600160401b0381118282101715620002d057634e487b7160e01b600052604160045260246000fd5b8060405250809150825181526020830151602082015260408301516040820152606083015163ffffffff60e01b811681146200030b57600080fd5b6060919091015292915050565b60008183036105008112156200032d57600080fd5b6200033762000223565b835181526104e080601f19840112156200035057600080fd5b6200035a6200025a565b92506200036b86602087016200028c565b835260a0850151602084015260c08501516040840152620003908660e087016200028c565b6060840152610160620003a6878288016200028c565b6080850152620003bb876101e088016200028c565b60a0850152620003d08761026088016200028c565b60c0850152620003e5876102e088016200028c565b60e0850152620003fa8761036088016200028c565b61010085015262000410876103e088016200028c565b610120850152620004268761046088016200028c565b61014085015294015193820193909352602083015250919050565b60006105208201905060018060a01b0384168252825160208301526020830151620004986040840182518051825260208082015190830152604080820151908301526060908101516001600160e01b031916910152565b602081015160c0840152604081015160e08401526060810151610100620004e9818601838051825260208082015190830152604080820151908301526060908101516001600160e01b031916910152565b608083015180516101808701526020808201516101a08801526040808301516101c08901526060928301516001600160e01b03199081166101e08a015260a087015180516102008b0152808401516102208b0152808301516102408b015284015181166102608a015260c087015180516102808b0152808401516102a08b0152808301516102c08b015284015181166102e08a015260e087015180516103008b0152808401516103208b0152808301516103408b015284015181166103608a01529386015180516103808a0152808301516103a08a0152808201516103c08a015283015184166103e089015261012086015180516104008a0152808301516104208a0152808201516104408a0152830151841661046089015261014086015180516104808a0152918201516104a08901528101516104c08801520151166104e08501525061016001516105009092019190915292915050565b600082198211156200066457634e487b7160e01b600052601160045260246000fd5b500190565b600181811c908216806200067e57607f821691505b60208210811415620006a057634e487b7160e01b600052602260045260246000fd5b50919050565b61065f80620006b66000396000f3fe60806040526004361061004b5760003560e01c80631e93b0f1146100545780637eea518c14610078578063832307571461008b578063a0a8adfc146100a0578063ab53f2c6146100b357005b3661005257005b005b34801561006057600080fd5b506003545b6040519081526020015b60405180910390f35b610052610086366004610453565b6100d6565b34801561009757600080fd5b50600154610065565b6100526100ae36600461046b565b610216565b3480156100bf57600080fd5b506100c861033b565b60405161006f92919061047d565b6100e6600160005414600d6103d8565b610100813515806100f957506001548235145b600e6103d8565b600080805560028054610112906104da565b80601f016020809104026020016040519081016040528092919081815260200182805461013e906104da565b801561018b5780601f106101605761010080835404028352916020019161018b565b820191906000526020600020905b81548152906001019060200180831161016e57829003601f168201915b50505050508060200190518101906101a3919061050f565b90506101b78160000151431015600f6103d8565b7f919263be6d51bec670ce110fb6a7df03fe323e3de4dade5355bccc6a4b06d95033836040516101e8929190610574565b60405180910390a16101fc3415600c6103d8565b60008080556001819055610212906002906103fd565b5050565b61022660016000541460096103d8565b6102408135158061023957506001548235145b600a6103d8565b600080805560028054610252906104da565b80601f016020809104026020016040519081016040528092919081815260200182805461027e906104da565b80156102cb5780601f106102a0576101008083540402835291602001916102cb565b820191906000526020600020905b8154815290600101906020018083116102ae57829003601f168201915b50505050508060200190518101906102e3919061050f565b90506102f681600001514310600b6103d8565b7f5978c5c8d3760aa54178300fbffea5c7702158f38231b8f0a8dd533c0d485ceb33836040516103279291906105a9565b60405180910390a16101fc341560086103d8565b600060606000546002808054610350906104da565b80601f016020809104026020016040519081016040528092919081815260200182805461037c906104da565b80156103c95780601f1061039e576101008083540402835291602001916103c9565b820191906000526020600020905b8154815290600101906020018083116103ac57829003601f168201915b50505050509050915091509091565b816102125760405163100960cb60e01b81526004810182905260240160405180910390fd5b508054610409906104da565b6000825580601f10610419575050565b601f016020900490600052602060002090810190610437919061043a565b50565b5b8082111561044f576000815560010161043b565b5090565b60006040828403121561046557600080fd5b50919050565b600060e0828403121561046557600080fd5b82815260006020604081840152835180604085015260005b818110156104b157858101830151858201606001528201610495565b818111156104c3576000606083870101525b50601f01601f191692909201606001949350505050565b600181811c908216806104ee57607f821691505b6020821081141561046557634e487b7160e01b600052602260045260246000fd5b60006020828403121561052157600080fd5b6040516020810181811067ffffffffffffffff8211171561055257634e487b7160e01b600052604160045260246000fd5b6040529151825250919050565b8035801515811461056f57600080fd5b919050565b6001600160a01b03831681528135602080830191909152606082019061059b90840161055f565b151560408301529392505050565b60006101008201905060018060a01b038416825282356020830152602083013560408301526040830135606083015260608301356080830152608083013563ffffffff60e01b81168082146105fd57600080fd5b8060a0850152505060a083013560c083015261061b60c0840161055f565b151560e0830152939250505056fea2646970667358221220378e743df0286f9fc7d27bbc375f9485d497dc4affa4e23429df4faf7e6d090364736f6c634300080c0033`,
  BytecodeLen: 3349,
  Which: `oD`,
  version: 8,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:64:5:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  2: {
    at: 'reach standard library:199:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:72:55:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:73:5:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    }
  };
export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };
export const _Participants = {
  "Factory": Factory,
  "Warehouse": Warehouse
  };
export const _APIs = {
  };
