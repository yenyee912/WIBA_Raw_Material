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
  
  return {
    infos: {
      },
    views: {
      1: []
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
  
  
  const v91 = stdlib.protect(ctc0, interact.factoryName, 'for Factory\'s interact field factoryName');
  const v92 = stdlib.protect(ctc1, interact.inventoryFactory, 'for Factory\'s interact field inventoryFactory');
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 12,
    funcNum: 0,
    out_tys: [ctc0, ctc1, ctc1, ctc0, ctc0, ctc0, ctc0, ctc0, ctc0, ctc0, ctc0, ctc1],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v96, v97, v98, v99, v100, v101, v102, v103, v104, v105, v106, v107], secs: v109, time: v108, didSend: v51, from: v95 } = txn1;
  ;
  const v112 = stdlib.protect(ctc2, await interact.acceptMaterial(v99, v100, v104, v105, v106, v107), {
    at: './index.rsh:69:58:application',
    fs: ['at ./index.rsh:66:17:application call to [unknown function] (defined at: ./index.rsh:66:21:function exp)'],
    msg: 'acceptMaterial',
    who: 'Factory'
    });
  
  const txn2 = await (ctc.sendrecv({
    args: [v91, v92, v112],
    evt_cnt: 3,
    funcNum: 1,
    lct: v108,
    onlyIf: true,
    out_tys: [ctc0, ctc1, ctc2],
    pay: [stdlib.checkedBigNumberify('./index.rsh:71:13:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v114, v115, v116], secs: v118, time: v117, didSend: v62, from: v113 } = txn2;
      
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
    tys: [ctc0, ctc1, ctc2],
    waitIfNotPresent: false
    }));
  const {data: [v114, v115, v116], secs: v118, time: v117, didSend: v62, from: v113 } = txn2;
  ;
  stdlib.protect(ctc3, await interact.seeOutcome(v116, v114, v96, v101), {
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
  
  
  const v79 = stdlib.protect(ctc0, interact.batchNumber, 'for Warehouse\'s interact field batchNumber');
  const v80 = stdlib.protect(ctc1, interact.deadline, 'for Warehouse\'s interact field deadline');
  const v81 = stdlib.protect(ctc1, interact.inventoryWarehouse, 'for Warehouse\'s interact field inventoryWarehouse');
  const v82 = stdlib.protect(ctc0, interact.materialID, 'for Warehouse\'s interact field materialID');
  const v83 = stdlib.protect(ctc0, interact.materialName, 'for Warehouse\'s interact field materialName');
  const v84 = stdlib.protect(ctc1, interact.quantity, 'for Warehouse\'s interact field quantity');
  const v85 = stdlib.protect(ctc0, interact.staffID, 'for Warehouse\'s interact field staffID');
  const v86 = stdlib.protect(ctc0, interact.staffName, 'for Warehouse\'s interact field staffName');
  const v87 = stdlib.protect(ctc0, interact.supplierID, 'for Warehouse\'s interact field supplierID');
  const v88 = stdlib.protect(ctc0, interact.supplierName, 'for Warehouse\'s interact field supplierName');
  const v89 = stdlib.protect(ctc0, interact.timestamp, 'for Warehouse\'s interact field timestamp');
  const v90 = stdlib.protect(ctc0, interact.warehouseName, 'for Warehouse\'s interact field warehouseName');
  
  const txn1 = await (ctc.sendrecv({
    args: [v90, v81, v80, v87, v88, v89, v85, v86, v82, v83, v79, v84],
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
      
      
      const {data: [v96, v97, v98, v99, v100, v101, v102, v103, v104, v105, v106, v107], secs: v109, time: v108, didSend: v51, from: v95 } = txn1;
      
      ;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc1, ctc1, ctc0, ctc0, ctc0, ctc0, ctc0, ctc0, ctc0, ctc0, ctc1],
    waitIfNotPresent: false
    }));
  const {data: [v96, v97, v98, v99, v100, v101, v102, v103, v104, v105, v106, v107], secs: v109, time: v108, didSend: v51, from: v95 } = txn1;
  ;
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 3,
    funcNum: 1,
    out_tys: [ctc0, ctc1, ctc2],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v114, v115, v116], secs: v118, time: v117, didSend: v62, from: v113 } = txn2;
  ;
  stdlib.protect(ctc3, await interact.seeOutcome(v116, v114, v96, v101), {
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
  appApproval: `ByADAAFkJgEAIjUAMRhBAV4oZEkiWzUBgQhbNQI2GgAXSUEAByI1BCM1BgA2GgIXNQQ2GgM2GgEXSSMMQAA/IxJEIzQBEkQ0BEkiEkw0AhIRREk1BUlJVwBkNf8kWzX+V2wBFzX9gARflCTtNP9QNP4WUDT9FlEHCFCwQgChSIGgjQaIAQYiNAESRDQESSISTDQCEhFESTUFSUpKSkpKVwBkNf8kWzX+gWxbNf1XdGQ1/FfYZDX7gbwCJFg1+oGgAyRYNfmBhAQkWDX4gegEJFg194HMBSRYNfaBsAYkWDX1gZQHWzX0gAS9J07jNP9QNP4WUDT9FlA0/FA0+1A0+lA0+VA0+FA091A09lA09VA09BZQsCM1ATIGNQJCABwxGYEFEkSxIrIBIrIII7IQMgmyCTIKsgezQgAFMRkiEkQoNAEWNAIWUGc0BkEACoAEFR98dTQHULA0AEkjCDIEEkQxFhJEI0MxGSISREL/3yIxNBJEIzE1EkQiMTYSRCIxNxJEIjUBIjUCQv+vNABJSiMINQA4BzIKEkQ4ECMSRDgIEkSJ`,
  appClear: `Bw==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 0,
  stateSize: 0,
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
                "name": "v96",
                "type": "tuple"
              },
              {
                "internalType": "uint256",
                "name": "v97",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v98",
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
                "name": "v99",
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
                "name": "v100",
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
                "internalType": "uint256",
                "name": "v107",
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
                "name": "v96",
                "type": "tuple"
              },
              {
                "internalType": "uint256",
                "name": "v97",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v98",
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
                "name": "v99",
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
                "name": "v100",
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
                "internalType": "uint256",
                "name": "v107",
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
                "name": "v114",
                "type": "tuple"
              },
              {
                "internalType": "uint256",
                "name": "v115",
                "type": "uint256"
              },
              {
                "internalType": "bool",
                "name": "v116",
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
                "name": "v114",
                "type": "tuple"
              },
              {
                "internalType": "uint256",
                "name": "v115",
                "type": "uint256"
              },
              {
                "internalType": "bool",
                "name": "v116",
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
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x6080604052604051610a4e380380610a4e83398101604081905261002291610260565b60008055436003556040517f58c38963708595f31da65d7e0640c10d35ed86a1cb34d6ed76963c92f49192579061005c9033908490610371565b60405180910390a1610070341560076100ae565b600160008181554390915560408051602080820184905282518083038201815291830190925280516100a69260029201906100d7565b5050506105ab565b816100d35760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b8280546100e390610570565b90600052602060002090601f016020900481019282610105576000855561014b565b82601f1061011e57805160ff191683800117855561014b565b8280016001018555821561014b579182015b8281111561014b578251825591602001919060010190610130565b5061015792915061015b565b5090565b5b80821115610157576000815560010161015c565b604080519081016001600160401b03811182821017156101a057634e487b7160e01b600052604160045260246000fd5b60405290565b60405161018081016001600160401b03811182821017156101a057634e487b7160e01b600052604160045260246000fd5b6000608082840312156101e957600080fd5b604051608081016001600160401b038111828210171561021957634e487b7160e01b600052604160045260246000fd5b8060405250809150825181526020830151602082015260408301516040820152606083015163ffffffff60e01b8116811461025357600080fd5b6060919091015292915050565b600081830361050081121561027457600080fd5b61027c610170565b835181526104e080601f198401121561029457600080fd5b61029c6101a6565b92506102ab86602087016101d7565b835260a0850151602084015260c085015160408401526102ce8660e087016101d7565b60608401526101606102e2878288016101d7565b60808501526102f5876101e088016101d7565b60a08501526103088761026088016101d7565b60c085015261031b876102e088016101d7565b60e085015261032e8761036088016101d7565b610100850152610342876103e088016101d7565b6101208501526103568761046088016101d7565b61014085015294015193820193909352602083015250919050565b60006105208201905060018060a01b03841682528251602083015260208301516103c76040840182518051825260208082015190830152604080820151908301526060908101516001600160e01b031916910152565b602081015160c0840152604081015160e08401526060810151610100610417818601838051825260208082015190830152604080820151908301526060908101516001600160e01b031916910152565b608083015180516101808701526020808201516101a08801526040808301516101c08901526060928301516001600160e01b03199081166101e08a015260a087015180516102008b0152808401516102208b0152808301516102408b015284015181166102608a015260c087015180516102808b0152808401516102a08b0152808301516102c08b015284015181166102e08a015260e087015180516103008b0152808401516103208b0152808301516103408b015284015181166103608a01529386015180516103808a0152808301516103a08a0152808201516103c08a015283015184166103e089015261012086015180516104008a0152808301516104208a0152808201516104408a0152830151841661046089015261014086015180516104808a0152918201516104a08901528101516104c08801520151166104e08501525061016001516105009092019190915292915050565b600181811c9082168061058457607f821691505b602082108114156105a557634e487b7160e01b600052602260045260246000fd5b50919050565b610494806105ba6000396000f3fe6080604052600436106100405760003560e01c80631e93b0f114610049578063832307571461006d578063a0a8adfc14610082578063ab53f2c61461009557005b3661004757005b005b34801561005557600080fd5b506003545b6040519081526020015b60405180910390f35b34801561007957600080fd5b5060015461005a565b6100476100903660046102fe565b6100b8565b3480156100a157600080fd5b506100aa6101e6565b604051610064929190610316565b6100c86001600054146009610283565b6100e2813515806100db57506001548235145b600a610283565b6000808055600280546100f490610373565b80601f016020809104026020016040519081016040528092919081815260200182805461012090610373565b801561016d5780601f106101425761010080835404028352916020019161016d565b820191906000526020600020905b81548152906001019060200180831161015057829003601f168201915b505050505080602001905181019061018591906103b6565b90507f5978c5c8d3760aa54178300fbffea5c7702158f38231b8f0a8dd533c0d485ceb33836040516101b89291906103da565b60405180910390a16101cc34156008610283565b600080805560018190556101e2906002906102a8565b5050565b6000606060005460028080546101fb90610373565b80601f016020809104026020016040519081016040528092919081815260200182805461022790610373565b80156102745780601f1061024957610100808354040283529160200191610274565b820191906000526020600020905b81548152906001019060200180831161025757829003601f168201915b50505050509050915091509091565b816101e25760405163100960cb60e01b81526004810182905260240160405180910390fd5b5080546102b490610373565b6000825580601f106102c4575050565b601f0160209004906000526020600020908101906102e291906102e5565b50565b5b808211156102fa57600081556001016102e6565b5090565b600060e0828403121561031057600080fd5b50919050565b82815260006020604081840152835180604085015260005b8181101561034a5785810183015185820160600152820161032e565b8181111561035c576000606083870101525b50601f01601f191692909201606001949350505050565b600181811c9082168061038757607f821691505b6020821081141561031057634e487b7160e01b600052602260045260246000fd5b80151581146102e257600080fd5b6000602082840312156103c857600080fd5b81516103d3816103a8565b9392505050565b60006101008201905060018060a01b038416825282356020830152602083013560408301526040830135606083015260608301356080830152608083013563ffffffff60e01b811680821461042e57600080fd5b8060a0850152505060a083013560c083015260c083013561044e816103a8565b80151560e084015250939250505056fea2646970667358221220b35714c65243d58a61d6eb73952912aee57c456be1cc10485b09887f5652f2dd64736f6c634300080c0033`,
  BytecodeLen: 2638,
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
