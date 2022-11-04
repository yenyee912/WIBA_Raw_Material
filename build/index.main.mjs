// Automatically generated with Reach 0.1.12 (96568703)
/* eslint-disable */
export const _version = '0.1.12';
export const _versionHash = '0.1.12 (96568703)';
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
  Bytecode: `0x60806040526040516109cd3803806109cd83398101604081905261002291610260565b60008055436003556040517fd817d9b174aa3788261be30a272b86ce0498c52768cdcf05fe544417bcb83b0c9061005c903390849061035d565b60405180910390a1610070341560076100ae565b600160008181554390915560408051602080820184905282518083038201815291830190925280516100a69260029201906100d7565b50505061056c565b816100d35760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b8280546100e390610531565b90600052602060002090601f016020900481019282610105576000855561014b565b82601f1061011e57805160ff191683800117855561014b565b8280016001018555821561014b579182015b8281111561014b578251825591602001919060010190610130565b5061015792915061015b565b5090565b5b80821115610157576000815560010161015c565b604080519081016001600160401b03811182821017156101a057634e487b7160e01b600052604160045260246000fd5b60405290565b60405161016081016001600160401b03811182821017156101a057634e487b7160e01b600052604160045260246000fd5b6000608082840312156101e957600080fd5b604051608081016001600160401b038111828210171561021957634e487b7160e01b600052604160045260246000fd5b8060405250809150825181526020830151602082015260408301516040820152606083015163ffffffff60e01b8116811461025357600080fd5b6060919091015292915050565b600081830361048081121561027457600080fd5b61027c610170565b8351815261046080601f198401121561029457600080fd5b61029c6101a6565b925060208501518352604085015160208401526102bc86606087016101d7565b60408401526102ce8660e087016101d7565b60608401526102e18661016087016101d7565b60808401526102f4866101e087016101d7565b60a08401526103078661026087016101d7565b60c084015261031a866102e087016101d7565b60e084015261032d8661036087016101d7565b610100840152610341866103e087016101d7565b6101208401529390930151610140820152602083015250919050565b60006104a08201905060018060a01b0384168252825160208301526020830151805160408401526020810151606084015260408101516103c860808501828051825260208082015190830152604080820151908301526060908101516001600160e01b031916910152565b506060810151610100610405818601838051825260208082015190830152604080820151908301526060908101516001600160e01b031916910152565b608083015180516101808701526020808201516101a08801526040808301516101c08901526060928301516001600160e01b03199081166101e08a015260a087015180516102008b0152808401516102208b0152808301516102408b015284015181166102608a015260c087015180516102808b0152808401516102a08b0152808301516102c08b015284015181166102e08a015260e087015180516103008b0152808401516103208b0152808301516103408b015284015181166103608a01529386015180516103808a0152808301516103a08a0152808201516103c08a015283015184166103e089015261012086015180516104008a0152918201516104208901528101516104408801520151166104608501525061014001516104809092019190915292915050565b600181811c9082168061054557607f821691505b6020821081141561056657634e487b7160e01b600052602260045260246000fd5b50919050565b6104528061057b6000396000f3fe6080604052600436106100405760003560e01c80631e93b0f1146100495780635465ff651461006d5780638323075714610080578063ab53f2c61461009557005b3661004757005b005b34801561005557600080fd5b506003545b6040519081526020015b60405180910390f35b61004761007b3660046102fe565b6100b8565b34801561008c57600080fd5b5060015461005a565b3480156100a157600080fd5b506100aa6101e6565b604051610064929190610316565b6100c86001600054146009610283565b6100e2813515806100db57506001548235145b600a610283565b6000808055600280546100f490610373565b80601f016020809104026020016040519081016040528092919081815260200182805461012090610373565b801561016d5780601f106101425761010080835404028352916020019161016d565b820191906000526020600020905b81548152906001019060200180831161015057829003601f168201915b505050505080602001905181019061018591906103b6565b90507ff75f9b1c70fa45a70ef0adaf150738a5ac6e00c1a147529d67d8011998d522eb33836040516101b89291906103da565b60405180910390a16101cc34156008610283565b600080805560018190556101e2906002906102a8565b5050565b6000606060005460028080546101fb90610373565b80601f016020809104026020016040519081016040528092919081815260200182805461022790610373565b80156102745780601f1061024957610100808354040283529160200191610274565b820191906000526020600020905b81548152906001019060200180831161025757829003601f168201915b50505050509050915091509091565b816101e25760405163100960cb60e01b81526004810182905260240160405180910390fd5b5080546102b490610373565b6000825580601f106102c4575050565b601f0160209004906000526020600020908101906102e291906102e5565b50565b5b808211156102fa57600081556001016102e6565b5090565b60006060828403121561031057600080fd5b50919050565b82815260006020604081840152835180604085015260005b8181101561034a5785810183015185820160600152820161032e565b8181111561035c576000606083870101525b50601f01601f191692909201606001949350505050565b600181811c9082168061038757607f821691505b6020821081141561031057634e487b7160e01b600052602260045260246000fd5b80151581146102e257600080fd5b6000602082840312156103c857600080fd5b81516103d3816103a8565b9392505050565b600060808201905060018060a01b03841682528235602083015260208301356040830152604083013561040c816103a8565b801515606084015250939250505056fea264697066735822122008b5d40fdac212efcc412044da8d670502ada07c4d4c7da34d6eaeac0b070ce164736f6c634300080c0033`,
  BytecodeLen: 2509,
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
