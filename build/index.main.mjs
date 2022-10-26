// Automatically generated with Reach 0.1.12 (af6530ae)
/* eslint-disable */
export const _version = '0.1.12';
export const _versionHash = '0.1.12 (af6530ae)';
export const _backendVersion = 24;

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
  const ctc0 = stdlib.T_Address;
  
  return {
    infos: {
      },
    views: {
      1: [],
      2: [ctc0]
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
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Bool;
  const ctc2 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '100'));
  const ctc3 = stdlib.T_Null;
  const ctc4 = stdlib.T_Address;
  
  
  const v94 = stdlib.protect(ctc0, interact.inventoryFactory, 'for Factory\'s interact field inventoryFactory');
  const v95 = stdlib.protect(ctc1, interact.result, 'for Factory\'s interact field result');
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 11,
    funcNum: 0,
    out_tys: [ctc0, ctc0, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v99, v100, v101, v102, v103, v104, v105, v106, v107, v108, v109], secs: v111, time: v110, didSend: v49, from: v98 } = txn1;
  ;
  stdlib.protect(ctc3, await interact.acceptMaterial(v101, v102, v106, v107, v108, v109), {
    at: './index.rsh:63:32:application',
    fs: ['at ./index.rsh:61:17:application call to [unknown function] (defined at: ./index.rsh:61:21:function exp)'],
    msg: 'acceptMaterial',
    who: 'Factory'
    });
  
  const txn2 = await (ctc.sendrecv({
    args: [v94],
    evt_cnt: 1,
    funcNum: 1,
    lct: v110,
    onlyIf: true,
    out_tys: [ctc0],
    pay: [stdlib.checkedBigNumberify('./index.rsh:65:13:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v115], secs: v117, time: v116, didSend: v57, from: v114 } = txn2;
      
      ;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v115], secs: v117, time: v116, didSend: v57, from: v114 } = txn2;
  ;
  const txn3 = await (ctc.sendrecv({
    args: [v114, v95],
    evt_cnt: 1,
    funcNum: 2,
    lct: v116,
    onlyIf: true,
    out_tys: [ctc1],
    pay: [stdlib.checkedBigNumberify('./index.rsh:71:13:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn3) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v121], secs: v123, time: v122, didSend: v66, from: v120 } = txn3;
      
      ;
      sim_r.txns.push({
        kind: 'halt',
        tok: undefined /* Nothing */
        })
      sim_r.isHalt = true;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc4, ctc1],
    waitIfNotPresent: false
    }));
  const {data: [v121], secs: v123, time: v122, didSend: v66, from: v120 } = txn3;
  ;
  const v124 = stdlib.addressEq(v114, v120);
  stdlib.assert(v124, {
    at: './index.rsh:71:13:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Factory'
    });
  stdlib.protect(ctc3, await interact.seeOutcome(v121), {
    at: './index.rsh:75:28:application',
    fs: ['at ./index.rsh:74:9:application call to [unknown function] (defined at: ./index.rsh:74:35:function exp)'],
    msg: 'seeOutcome',
    who: 'Factory'
    });
  
  return;
  
  
  
  
  
  
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
  
  
  const v83 = stdlib.protect(ctc0, interact.batchNumber, 'for Warehouse\'s interact field batchNumber');
  const v84 = stdlib.protect(ctc1, interact.deadline, 'for Warehouse\'s interact field deadline');
  const v85 = stdlib.protect(ctc1, interact.inventoryWarehouse, 'for Warehouse\'s interact field inventoryWarehouse');
  const v86 = stdlib.protect(ctc0, interact.materialID, 'for Warehouse\'s interact field materialID');
  const v87 = stdlib.protect(ctc0, interact.materialName, 'for Warehouse\'s interact field materialName');
  const v88 = stdlib.protect(ctc1, interact.quantity, 'for Warehouse\'s interact field quantity');
  const v89 = stdlib.protect(ctc0, interact.staffID, 'for Warehouse\'s interact field staffID');
  const v90 = stdlib.protect(ctc0, interact.staffName, 'for Warehouse\'s interact field staffName');
  const v91 = stdlib.protect(ctc0, interact.supplierID, 'for Warehouse\'s interact field supplierID');
  const v92 = stdlib.protect(ctc0, interact.supplierName, 'for Warehouse\'s interact field supplierName');
  const v93 = stdlib.protect(ctc0, interact.timestamp, 'for Warehouse\'s interact field timestamp');
  
  const txn1 = await (ctc.sendrecv({
    args: [v85, v84, v91, v92, v93, v89, v90, v86, v87, v83, v88],
    evt_cnt: 11,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:58:15:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc1, ctc1, ctc0, ctc0, ctc0, ctc0, ctc0, ctc0, ctc0, ctc0, ctc1],
    pay: [stdlib.checkedBigNumberify('./index.rsh:58:15:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v99, v100, v101, v102, v103, v104, v105, v106, v107, v108, v109], secs: v111, time: v110, didSend: v49, from: v98 } = txn1;
      
      ;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc1, ctc1, ctc0, ctc0, ctc0, ctc0, ctc0, ctc0, ctc0, ctc0, ctc1],
    waitIfNotPresent: false
    }));
  const {data: [v99, v100, v101, v102, v103, v104, v105, v106, v107, v108, v109], secs: v111, time: v110, didSend: v49, from: v98 } = txn1;
  ;
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 1,
    out_tys: [ctc1],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v115], secs: v117, time: v116, didSend: v57, from: v114 } = txn2;
  ;
  const txn3 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 2,
    out_tys: [ctc2],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v121], secs: v123, time: v122, didSend: v66, from: v120 } = txn3;
  ;
  const v124 = stdlib.addressEq(v114, v120);
  stdlib.assert(v124, {
    at: './index.rsh:71:13:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Warehouse'
    });
  stdlib.protect(ctc3, await interact.seeOutcome(v121), {
    at: './index.rsh:75:28:application',
    fs: ['at ./index.rsh:74:9:application call to [unknown function] (defined at: ./index.rsh:74:35:function exp)'],
    msg: 'seeOutcome',
    who: 'Warehouse'
    });
  
  return;
  
  
  
  
  
  
  };
const _ALGO = {
  ABI: {
    impure: [],
    pure: [],
    sigs: []
    },
  appApproval: `ByAFAAECZAgmAgABACI1ADEYQQGFKGRJIls1ASEEWzUCNhoAF0lBAAciNQQjNQYANhoCFzUENhoDNhoBF0kjDEAAcEkkDEAANCQSRCQ0ARJENARJIhJMNAISEUQpZDUDSTUFFzX/gARqEToINP8WUQcIULA0AzEAEkRCAM1IIzQBEkQ0BEkiEkw0AhIRREk1BRc1/4AE1RUZFDT/FlCwMQApSwFXACBnSCQ1ATIGNQJCALNIgaCNBogA/CI0ARJENARJIhJMNAISEURJNQVJSkpKSkkiWzX/IQRbNf5XEGQ1/Vd0ZDX8V9hkNfuBvAIlWDX6gaADJVg1+YGEBCVYNfiB6AQlWDX3gcwFJVg19oGwBls19YAEISk47jT/FlA0/hZQNP1QNPxQNPtQNPpQNPlQNPhQNPdQNPZQNPUWULAjNQEyBjUCQgAcMRmBBRJEsSKyASKyCCOyEDIJsgkyCrIHs0IABTEZIhJEKDQBFjQCFlBnNAZBAAqABBUffHU0B1CwNABJIwgyBBJEMRYSRCNDMRkiEkRC/98iMTQSRCQxNRJEIjE2EkQiMTcSRCI1ASI1AkL/rzQASUojCDUAOAcyChJEOBAjEkQ4CBJEiQ==`,
  appClear: `Bw==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 1,
  stateSize: 32,
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
                "internalType": "uint256",
                "name": "v99",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v100",
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
                "name": "v101",
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
                "name": "v102",
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
                "name": "v103",
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
                "name": "v104",
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
                "name": "v105",
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
                "name": "v106",
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
                "name": "v107",
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
                "name": "v108",
                "type": "tuple"
              },
              {
                "internalType": "uint256",
                "name": "v109",
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
                "internalType": "uint256",
                "name": "v99",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v100",
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
                "name": "v101",
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
                "name": "v102",
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
                "name": "v103",
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
                "name": "v104",
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
                "name": "v105",
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
                "name": "v106",
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
                "name": "v107",
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
                "name": "v108",
                "type": "tuple"
              },
              {
                "internalType": "uint256",
                "name": "v109",
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
                "internalType": "uint256",
                "name": "v115",
                "type": "uint256"
              }
            ],
            "internalType": "struct T5",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T6",
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
            "components": [
              {
                "internalType": "bool",
                "name": "v121",
                "type": "bool"
              }
            ],
            "internalType": "struct T7",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T8",
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
                "internalType": "uint256",
                "name": "v115",
                "type": "uint256"
              }
            ],
            "internalType": "struct T5",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T6",
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
            "components": [
              {
                "internalType": "bool",
                "name": "v121",
                "type": "bool"
              }
            ],
            "internalType": "struct T7",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T8",
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
  Bytecode: `0x608060405260405162000ca138038062000ca183398101604081905262000026916200027e565b60008055436003556040517fd817d9b174aa3788261be30a272b86ce0498c52768cdcf05fe544417bcb83b0c9062000062903390849062000391565b60405180910390a16200007834156007620000b9565b60016000818155439091556040805160208082018490528251808303820181529183019092528051620000b0926002920190620000e3565b505050620005a4565b81620000df5760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b828054620000f19062000567565b90600052602060002090601f01602090048101928262000115576000855562000160565b82601f106200013057805160ff191683800117855562000160565b8280016001018555821562000160579182015b828111156200016057825182559160200191906001019062000143565b506200016e92915062000172565b5090565b5b808211156200016e576000815560010162000173565b604080519081016001600160401b0381118282101715620001ba57634e487b7160e01b600052604160045260246000fd5b60405290565b60405161016081016001600160401b0381118282101715620001ba57634e487b7160e01b600052604160045260246000fd5b6000608082840312156200020557600080fd5b604051608081016001600160401b03811182821017156200023657634e487b7160e01b600052604160045260246000fd5b8060405250809150825181526020830151602082015260408301516040820152606083015163ffffffff60e01b811681146200027157600080fd5b6060919091015292915050565b60008183036104808112156200029357600080fd5b6200029d62000189565b8351815261046080601f1984011215620002b657600080fd5b620002c0620001c0565b92506020850151835260408501516020840152620002e28660608701620001f2565b6040840152620002f68660e08701620001f2565b60608401526200030b866101608701620001f2565b608084015262000320866101e08701620001f2565b60a084015262000335866102608701620001f2565b60c08401526200034a866102e08701620001f2565b60e08401526200035f866103608701620001f2565b61010084015262000375866103e08701620001f2565b6101208401529390930151610140820152602083015250919050565b60006104a08201905060018060a01b038416825282516020830152602083015180516040840152602081015160608401526040810151620003fd60808501828051825260208082015190830152604080820151908301526060908101516001600160e01b031916910152565b5060608101516101006200043b818601838051825260208082015190830152604080820151908301526060908101516001600160e01b031916910152565b608083015180516101808701526020808201516101a08801526040808301516101c08901526060928301516001600160e01b03199081166101e08a015260a087015180516102008b0152808401516102208b0152808301516102408b015284015181166102608a015260c087015180516102808b0152808401516102a08b0152808301516102c08b015284015181166102e08a015260e087015180516103008b0152808401516103208b0152808301516103408b015284015181166103608a01529386015180516103808a0152808301516103a08a0152808201516103c08a015283015184166103e089015261012086015180516104008a0152918201516104208901528101516104408801520151166104608501525061014001516104809092019190915292915050565b600181811c908216806200057c57607f821691505b602082108114156200059e57634e487b7160e01b600052602260045260246000fd5b50919050565b6106ed80620005b46000396000f3fe60806040526004361061004b5760003560e01c80631e93b0f1146100545780633e59bac414610078578063832307571461008b578063873779a1146100a0578063ab53f2c6146100b357005b3661005257005b005b34801561006057600080fd5b506003545b6040519081526020015b60405180910390f35b610052610086366004610539565b6100d6565b34801561009757600080fd5b50600154610065565b6100526100ae366004610539565b61021c565b3480156100bf57600080fd5b506100c8610389565b60405161006f92919061055c565b6100e6600260005414600d610426565b610100813515806100f957506001548235145b600e610426565b600080805560028054610112906105b9565b80601f016020809104026020016040519081016040528092919081815260200182805461013e906105b9565b801561018b5780601f106101605761010080835404028352916020019161018b565b820191906000526020600020905b81548152906001019060200180831161016e57829003601f168201915b50505050508060200190518101906101a391906105ee565b90507fea301fa16f4bb7851ebe70b97d841398dfcfaffcc5b90514d4df21d88b62c5bd33836040516101d6929190610662565b60405180910390a16101ea3415600b610426565b8051610202906001600160a01b03163314600c610426565b600080805560018190556102189060029061044b565b5050565b61022c6001600054146009610426565b6102468135158061023f57506001548235145b600a610426565b600080805560028054610258906105b9565b80601f0160208091040260200160405190810160405280929190818152602001828054610284906105b9565b80156102d15780601f106102a6576101008083540402835291602001916102d1565b820191906000526020600020905b8154815290600101906020018083116102b457829003601f168201915b50505050508060200190518101906102e9919061069a565b6040805133815284356020808301919091528501358183015290519192507f3957da95a08a7316b724c4fe20ec058158ff5f626860362a6b6aafcb999f7225919081900360600190a161033e34156008610426565b60408051602080820183523380835260026000554360015583519182015290910160405160208183030381529060405260029080519060200190610383929190610488565b50505050565b60006060600054600280805461039e906105b9565b80601f01602080910402602001604051908101604052809291908181526020018280546103ca906105b9565b80156104175780601f106103ec57610100808354040283529160200191610417565b820191906000526020600020905b8154815290600101906020018083116103fa57829003601f168201915b50505050509050915091509091565b816102185760405163100960cb60e01b81526004810182905260240160405180910390fd5b508054610457906105b9565b6000825580601f10610467575050565b601f016020900490600052602060002090810190610485919061050c565b50565b828054610494906105b9565b90600052602060002090601f0160209004810192826104b657600085556104fc565b82601f106104cf57805160ff19168380011785556104fc565b828001600101855582156104fc579182015b828111156104fc5782518255916020019190600101906104e1565b5061050892915061050c565b5090565b5b80821115610508576000815560010161050d565b60006040828403121561053357600080fd5b50919050565b60006040828403121561054b57600080fd5b6105558383610521565b9392505050565b82815260006020604081840152835180604085015260005b8181101561059057858101830151858201606001528201610574565b818111156105a2576000606083870101525b50601f01601f191692909201606001949350505050565b600181811c908216806105cd57607f821691505b6020821081141561053357634e487b7160e01b600052602260045260246000fd5b60006020828403121561060057600080fd5b6040516020810181811067ffffffffffffffff8211171561063157634e487b7160e01b600052604160045260246000fd5b60405282516001600160a01b038116811461064b57600080fd5b81529392505050565b801515811461048557600080fd5b6001600160a01b03831681528135602080830191909152606082019083013561068a81610654565b8015156040840152509392505050565b6000602082840312156106ac57600080fd5b81516105558161065456fea26469706673582212205ae2968b87ecd46eafb92625482dcd093dadcda6cc0befc49c0dcd81394f702f64736f6c634300080c0033`,
  BytecodeLen: 3233,
  Which: `oD`,
  version: 8,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:59:5:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  2: {
    at: './index.rsh:66:5:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:72:5:after expr stmt',
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
