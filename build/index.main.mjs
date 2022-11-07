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
  const ctc0 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '50'));
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
  const ctc0 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '50'));
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
  appApproval: `ByADAAEyJgEAIjUAMRhBAVooZEkiWzUBgQhbNQI2GgAXSUEAByI1BCM1BgA2GgIXNQQ2GgM2GgEXSSMMQAA/IxJEIzQBEkQ0BEkiEkw0AhIRREk1BUlJVwAyNf8kWzX+VzoBFzX9gATuU/ZrNP9QNP4WUDT9FlEHCFCwQgCdSIGgjQaIAQIiNAESRDQESSISTDQCEhFESTUFSUpKSkpKVwAyNf8kWzX+gTpbNf1XQjI1/Fd0MjX7V6YyNfpX2DI1+YGKAiRYNfiBvAIkWDX3ge4CJFg19oGgAyRYNfWB0gNbNfSABEj1MsA0/1A0/hZQNP0WUDT8UDT7UDT6UDT5UDT4UDT3UDT2UDT1UDT0FlCwIzUBMgY1AkIAHDEZgQUSRLEisgEisggjshAyCbIJMgqyB7NCAAUxGSISRCg0ARY0AhZQZzQGQQAKgAQVH3x1NAdQsDQASSMIMgQSRDEWEkQjQzEZIhJEQv/fIjE0EkQjMTUSRCIxNhJEIjE3EkQiNQEiNQJC/680AElKIwg1ADgHMgoSRDgQIxJEOAgSRIk=`,
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
                    "internalType": "bytes18",
                    "name": "elem1",
                    "type": "bytes18"
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
                    "internalType": "bytes18",
                    "name": "elem1",
                    "type": "bytes18"
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
                    "internalType": "bytes18",
                    "name": "elem1",
                    "type": "bytes18"
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
                    "internalType": "bytes18",
                    "name": "elem1",
                    "type": "bytes18"
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
                    "internalType": "bytes18",
                    "name": "elem1",
                    "type": "bytes18"
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
                    "internalType": "bytes18",
                    "name": "elem1",
                    "type": "bytes18"
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
                    "internalType": "bytes18",
                    "name": "elem1",
                    "type": "bytes18"
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
                    "internalType": "bytes18",
                    "name": "elem1",
                    "type": "bytes18"
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
                    "internalType": "bytes18",
                    "name": "elem1",
                    "type": "bytes18"
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
                    "internalType": "bytes18",
                    "name": "elem1",
                    "type": "bytes18"
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
                    "internalType": "bytes18",
                    "name": "elem1",
                    "type": "bytes18"
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
                    "internalType": "bytes18",
                    "name": "elem1",
                    "type": "bytes18"
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
                    "internalType": "bytes18",
                    "name": "elem1",
                    "type": "bytes18"
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
                    "internalType": "bytes18",
                    "name": "elem1",
                    "type": "bytes18"
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
                    "internalType": "bytes18",
                    "name": "elem1",
                    "type": "bytes18"
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
                    "internalType": "bytes18",
                    "name": "elem1",
                    "type": "bytes18"
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
                    "internalType": "bytes18",
                    "name": "elem1",
                    "type": "bytes18"
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
                    "internalType": "bytes18",
                    "name": "elem1",
                    "type": "bytes18"
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
                    "internalType": "bytes18",
                    "name": "elem1",
                    "type": "bytes18"
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
                    "internalType": "bytes18",
                    "name": "elem1",
                    "type": "bytes18"
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
  Bytecode: `0x6080604052604051620009623803806200096283398101604081905261002491610220565b60008055436003556040517faea7ff8baf8e39ea94ad5491b4b16c8992f5d31715de51181bed97004847468e9061005e9033908490610332565b60405180910390a1610072341560076100b0565b600160008181554390915560408051602080820184905282518083038201815291830190925280516100a89260029201906100d9565b5050506104c9565b816100d55760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b8280546100e59061048e565b90600052602060002090601f016020900481019282610107576000855561014d565b82601f1061012057805160ff191683800117855561014d565b8280016001018555821561014d579182015b8281111561014d578251825591602001919060010190610132565b5061015992915061015d565b5090565b5b80821115610159576000815560010161015e565b604080519081016001600160401b03811182821017156101a257634e487b7160e01b600052604160045260246000fd5b60405290565b60405161018081016001600160401b03811182821017156101a257634e487b7160e01b600052604160045260246000fd5b6000604082840312156101eb57600080fd5b6101f3610172565b8251815260208301519091506001600160701b03198116811461021557600080fd5b602082015292915050565b60008183036102c081121561023457600080fd5b61023c610172565b835181526102a080601f198401121561025457600080fd5b61025c6101a8565b925061026b86602087016101d9565b8352606085015160208401526080850151604084015261028e8660a087016101d9565b60608401526102a08660e087016101d9565b60808401526101206102b4878288016101d9565b60a08501526101606102c8888289016101d9565b60c08601526102db886101a089016101d9565b60e08601526102ee886101e089016101d9565b6101008601526103028861022089016101d9565b828601526103148861026089016101d9565b61014086015291909501519083015260208101919091529392505050565b6001600160a01b0383168152815160208083019190915280830151805180516040850152909101516001600160701b03191660608301526102e08201906020818101516080850152604082015160a08501526060820151805160c0860152908101516001600160701b03191660e08501525060808101516101006103cc81860183805182526020908101516001600160701b031916910152565b60a083015191506101406103f681870184805182526020908101516001600160701b031916910152565b60c084015180516101808801526020908101516001600160701b03199081166101a089015260e086015180516101c08a015282015181166101e08901529285015180516102008901528101518316610220880152610120850151805161024089015281015183166102608801529084015180516102808801520151166102a08501525061016001516102c09092019190915292915050565b600181811c908216806104a257607f821691505b602082108114156104c357634e487b7160e01b600052602260045260246000fd5b50919050565b61048980620004d96000396000f3fe6080604052600436106100405760003560e01c80631e93b0f114610049578063643059b91461006d5780638323075714610080578063ab53f2c61461009557005b3661004757005b005b34801561005557600080fd5b506003545b6040519081526020015b60405180910390f35b61004761007b3660046102fe565b6100b8565b34801561008c57600080fd5b5060015461005a565b3480156100a157600080fd5b506100aa6101e6565b604051610064929190610316565b6100c86001600054146009610283565b6100e2813515806100db57506001548235145b600a610283565b6000808055600280546100f490610373565b80601f016020809104026020016040519081016040528092919081815260200182805461012090610373565b801561016d5780601f106101425761010080835404028352916020019161016d565b820191906000526020600020905b81548152906001019060200180831161015057829003601f168201915b505050505080602001905181019061018591906103b6565b90507fdab7c0c32bf5381eb9a8dd756549088e37c2722e1539554792a5f8431561c94033836040516101b89291906103da565b60405180910390a16101cc34156008610283565b600080805560018190556101e2906002906102a8565b5050565b6000606060005460028080546101fb90610373565b80601f016020809104026020016040519081016040528092919081815260200182805461022790610373565b80156102745780601f1061024957610100808354040283529160200191610274565b820191906000526020600020905b81548152906001019060200180831161025757829003601f168201915b50505050509050915091509091565b816101e25760405163100960cb60e01b81526004810182905260240160405180910390fd5b5080546102b490610373565b6000825580601f106102c4575050565b601f0160209004906000526020600020908101906102e291906102e5565b50565b5b808211156102fa57600081556001016102e6565b5090565b600060a0828403121561031057600080fd5b50919050565b82815260006020604081840152835180604085015260005b8181101561034a5785810183015185820160600152820161032e565b8181111561035c576000606083870101525b50601f01601f191692909201606001949350505050565b600181811c9082168061038757607f821691505b6020821081141561031057634e487b7160e01b600052602260045260246000fd5b80151581146102e257600080fd5b6000602082840312156103c857600080fd5b81516103d3816103a8565b9392505050565b6001600160a01b0383168152813560208083019190915282013560408083019190915260c08201908301356dffffffffffffffffffffffffffff19811680821461042357600080fd5b8060608501525050606083013560808301526080830135610443816103a8565b80151560a084015250939250505056fea26469706673582212202f5adb5545c79cf94fc2f13af089d9f6304a50239ce723bac3d8321e22ad0a2264736f6c634300080c0033`,
  BytecodeLen: 2402,
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
