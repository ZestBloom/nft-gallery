// Automatically generated with Reach 0.1.5
/* eslint-disable */
export const _version = '0.1.5';
export const _backendVersion = 3;


export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };

export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_Token;
  const ctc2 = stdlib.T_UInt;
  
  return {
    infos: {
      },
    views: {
      1: [ctc0, ctc1, ctc2, ctc2, ctc2],
      2: [ctc0, ctc1, ctc2, ctc2, ctc2]
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

export async function Alice(ctc, interact) {
  if (typeof(ctc) !== 'object' || ctc.sendrecv === undefined) {
    return Promise.reject(new Error(`The backend for Alice expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Alice expects to receive an interact object as its second argument.`));}
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Token;
  const ctc2 = stdlib.T_Object({
    amountAlgo: ctc0,
    amountToken: ctc0,
    time: ctc0,
    token: ctc1
    });
  const ctc3 = stdlib.T_Null;
  const ctc4 = stdlib.T_Address;
  
  
  const v98 = stdlib.protect(ctc2, await interact.getSwap(), {
    at: './safeTransfer.rsh:34:85:application',
    fs: ['at ./safeTransfer.rsh:33:11:application call to [unknown function] (defined at: ./safeTransfer.rsh:33:15:function exp)'],
    msg: 'getSwap',
    who: 'Alice'
    });
  const v99 = v98.token;
  const v100 = v98.amountToken;
  const v101 = v98.amountAlgo;
  const v102 = v98.time;
  
  const txn1 = await (ctc.sendrecv({
    args: [v99, v100, v101, v102],
    evt_cnt: 4,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./safeTransfer.rsh:36:7:dot', stdlib.UInt_max, 0),
    onlyIf: true,
    out_tys: [ctc1, ctc0, ctc0, ctc0],
    pay: [stdlib.checkedBigNumberify('./safeTransfer.rsh:decimal', stdlib.UInt_max, 0), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
      
      const {data: [v104, v105, v106, v107], secs: v109, time: v108, didSend: v31, from: v103 } = txn1;
      
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0),
        kind: 'init',
        tok: v104
        });
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('./safeTransfer.rsh:decimal', stdlib.UInt_max, 0),
        kind: 'to',
        tok: undefined
        });
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined,
    tys: [ctc1, ctc0, ctc0, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v104, v105, v106, v107], secs: v109, time: v108, didSend: v31, from: v103 } = txn1;
  ;
  ;
  const txn2 = await (ctc.sendrecv({
    args: [v103, v104, v105, v106, v107],
    evt_cnt: 0,
    funcNum: 1,
    lct: v108,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./safeTransfer.rsh:40:7:dot', stdlib.UInt_max, 0), [[v105, v104]]],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
      
      const {data: [], secs: v113, time: v112, didSend: v39, from: v111 } = txn2;
      
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('./safeTransfer.rsh:40:7:dot', stdlib.UInt_max, 0),
        kind: 'to',
        tok: undefined
        });
      sim_r.txns.push({
        amt: v105,
        kind: 'to',
        tok: v104
        });
      const v117 = stdlib.addressEq(v103, v111);
      stdlib.assert(v117, {
        at: './safeTransfer.rsh:40:7:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Alice'
        });
      const v119 = stdlib.add(v112, v107);
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined,
    tys: [ctc4, ctc1, ctc0, ctc0, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v113, time: v112, didSend: v39, from: v111 } = txn2;
  ;
  ;
  const v117 = stdlib.addressEq(v103, v111);
  stdlib.assert(v117, {
    at: './safeTransfer.rsh:40:7:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Alice'
    });
  const v119 = stdlib.add(v112, v107);
  const txn3 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 2,
    out_tys: [],
    timeoutAt: ['time', v119],
    waitIfNotPresent: false
    }));
  if (txn3.didTimeout) {
    const txn4 = await (ctc.sendrecv({
      args: [v103, v104, v105, v106, v119],
      evt_cnt: 0,
      funcNum: 3,
      lct: v112,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('./safeTransfer.rsh:decimal', stdlib.UInt_max, 0), []],
      sim_p: (async (txn4) => {
        const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
        
        const {data: [], secs: v146, time: v145, didSend: v79, from: v144 } = txn4;
        
        sim_r.txns.push({
          amt: stdlib.checkedBigNumberify('./safeTransfer.rsh:decimal', stdlib.UInt_max, 0),
          kind: 'to',
          tok: undefined
          });
        const v148 = stdlib.addressEq(v103, v144);
        stdlib.assert(v148, {
          at: './safeTransfer.rsh:51:15:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Alice'
          });
        sim_r.txns.push({
          amt: v105,
          kind: 'from',
          to: v103,
          tok: v104
          });
        
        sim_r.txns.push({
          kind: 'halt',
          tok: v104
          })
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined
          })
        sim_r.isHalt = true;
        
        return sim_r;
        }),
      soloSend: true,
      timeoutAt: undefined,
      tys: [ctc4, ctc1, ctc0, ctc0, ctc0],
      waitIfNotPresent: false
      }));
    const {data: [], secs: v146, time: v145, didSend: v79, from: v144 } = txn4;
    ;
    const v148 = stdlib.addressEq(v103, v144);
    stdlib.assert(v148, {
      at: './safeTransfer.rsh:51:15:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Alice'
      });
    ;
    stdlib.protect(ctc3, await interact.seeTimeout(), {
      at: './safeTransfer.rsh:53:51:application',
      fs: ['at ./safeTransfer.rsh:53:17:application call to [unknown function] (defined at: ./safeTransfer.rsh:53:29:function exp)'],
      msg: 'seeTimeout',
      who: 'Alice'
      });
    
    return;
    }
  else {
    const {data: [], secs: v127, time: v126, didSend: v50, from: v125 } = txn3;
    ;
    ;
    ;
    stdlib.protect(ctc3, await interact.seeTransfer(), {
      at: './safeTransfer.rsh:61:44:application',
      fs: ['at ./safeTransfer.rsh:61:9:application call to [unknown function] (defined at: ./safeTransfer.rsh:61:21:function exp)'],
      msg: 'seeTransfer',
      who: 'Alice'
      });
    
    return;}
  
  
  
  };
export async function Bob(ctc, interact) {
  if (typeof(ctc) !== 'object' || ctc.sendrecv === undefined) {
    return Promise.reject(new Error(`The backend for Bob expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Bob expects to receive an interact object as its second argument.`));}
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Token;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Bool;
  const ctc3 = stdlib.T_Null;
  const ctc4 = stdlib.T_Address;
  
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 4,
    funcNum: 0,
    out_tys: [ctc0, ctc1, ctc1, ctc1],
    timeoutAt: undefined,
    waitIfNotPresent: false
    }));
  const {data: [v104, v105, v106, v107], secs: v109, time: v108, didSend: v31, from: v103 } = txn1;
  ;
  ;
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 1,
    out_tys: [],
    timeoutAt: undefined,
    waitIfNotPresent: false
    }));
  const {data: [], secs: v113, time: v112, didSend: v39, from: v111 } = txn2;
  ;
  ;
  const v117 = stdlib.addressEq(v103, v111);
  stdlib.assert(v117, {
    at: './safeTransfer.rsh:40:7:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Bob'
    });
  const v119 = stdlib.add(v112, v107);
  const v123 = {
    amountAlgo: v106,
    amountToken: v105,
    time: v107,
    token: v104
    };
  const v124 = stdlib.protect(ctc2, await interact.acceptSwap(v123), {
    at: './safeTransfer.rsh:45:64:application',
    fs: ['at ./safeTransfer.rsh:44:11:application call to [unknown function] (defined at: ./safeTransfer.rsh:44:15:function exp)'],
    msg: 'acceptSwap',
    who: 'Bob'
    });
  
  const txn3 = await (ctc.sendrecv({
    args: [v103, v104, v105, v106, v119],
    evt_cnt: 0,
    funcNum: 2,
    lct: v112,
    onlyIf: v124,
    out_tys: [],
    pay: [v106, []],
    sim_p: (async (txn3) => {
      const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
      
      const {data: [], secs: v127, time: v126, didSend: v50, from: v125 } = txn3;
      
      sim_r.txns.push({
        amt: v106,
        kind: 'to',
        tok: undefined
        });
      sim_r.txns.push({
        amt: v106,
        kind: 'from',
        to: v103,
        tok: undefined
        });
      sim_r.txns.push({
        amt: v105,
        kind: 'from',
        to: v125,
        tok: v104
        });
      
      sim_r.txns.push({
        kind: 'halt',
        tok: v104
        })
      sim_r.txns.push({
        kind: 'halt',
        tok: undefined
        })
      sim_r.isHalt = true;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: ['time', v119],
    tys: [ctc4, ctc0, ctc1, ctc1, ctc1],
    waitIfNotPresent: false
    }));
  if (txn3.didTimeout) {
    const txn4 = await (ctc.recv({
      didSend: false,
      evt_cnt: 0,
      funcNum: 3,
      out_tys: [],
      timeoutAt: undefined,
      waitIfNotPresent: false
      }));
    const {data: [], secs: v146, time: v145, didSend: v79, from: v144 } = txn4;
    ;
    const v148 = stdlib.addressEq(v103, v144);
    stdlib.assert(v148, {
      at: './safeTransfer.rsh:51:15:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Bob'
      });
    ;
    stdlib.protect(ctc3, await interact.seeTimeout(), {
      at: './safeTransfer.rsh:53:51:application',
      fs: ['at ./safeTransfer.rsh:53:17:application call to [unknown function] (defined at: ./safeTransfer.rsh:53:29:function exp)'],
      msg: 'seeTimeout',
      who: 'Bob'
      });
    
    return;
    }
  else {
    const {data: [], secs: v127, time: v126, didSend: v50, from: v125 } = txn3;
    ;
    ;
    ;
    stdlib.protect(ctc3, await interact.seeTransfer(), {
      at: './safeTransfer.rsh:61:44:application',
      fs: ['at ./safeTransfer.rsh:61:9:application call to [unknown function] (defined at: ./safeTransfer.rsh:61:21:function exp)'],
      msg: 'seeTransfer',
      who: 'Bob'
      });
    
    return;}
  
  
  
  };

const _ALGO = {
  appApproval: `#pragma version 4
txn RekeyTo
global ZeroAddress
==
assert
txn Lease
global ZeroAddress
==
assert
int 0
store 0
txn ApplicationID
bz alloc
byte base64()
app_global_get
dup
substring 0 8
btoi
store 1
dup
substring 8 16
btoi
store 2
substring 16 48
store 3
txn NumAppArgs
int 3
==
assert
txna ApplicationArgs 0
btoi
// Handler 0
dup
int 0
==
bz l0
pop
// check step
int 0
load 1
==
assert
// check time
txna ApplicationArgs 1
btoi
load 2
==
assert
byte base64()
pop
txna ApplicationArgs 2
dup
len
int 64
==
assert
dup
substring 0 32
store 255
dup
substring 32 40
btoi
store 254
dup
substring 40 48
btoi
store 253
dup
substring 48 56
btoi
store 252
dup
substring 56 64
btoi
store 251
pop
txn Sender
global CreatorAddress
==
assert
load 255
store 3
// "CheckPay"
// "./safeTransfer.rsh:36:7:dot"
// "[]"
int 100000
dup
bz l1
load 0
dup
int 1
+
store 0
swap
dig 1
gtxns Amount
==
assert
int pay
dig 1
gtxns TypeEnum
==
assert
int 0
dig 1
gtxns Fee
==
assert
global ZeroAddress
dig 1
gtxns Lease
==
assert
global ZeroAddress
dig 1
gtxns RekeyTo
==
assert
load 3
dig 1
gtxns Receiver
==
assert
l1:
pop
// Initializing token
int 100000
load 0
dup
int 1
+
store 0
swap
dig 1
gtxns Amount
==
assert
int pay
dig 1
gtxns TypeEnum
==
assert
int 0
dig 1
gtxns Fee
==
assert
global ZeroAddress
dig 1
gtxns Lease
==
assert
global ZeroAddress
dig 1
gtxns RekeyTo
==
assert
load 3
dig 1
gtxns Receiver
==
assert
l2:
pop
int 0
load 0
dup
int 1
+
store 0
swap
dig 1
gtxns AssetAmount
==
assert
load 254
dig 1
gtxns XferAsset
==
assert
int axfer
dig 1
gtxns TypeEnum
==
assert
int 0
dig 1
gtxns Fee
==
assert
global ZeroAddress
dig 1
gtxns Lease
==
assert
global ZeroAddress
dig 1
gtxns RekeyTo
==
assert
load 3
dig 1
gtxns Sender
==
assert
load 3
dig 1
gtxns AssetReceiver
==
assert
l3:
pop
// "CheckPay"
// "./safeTransfer.rsh:36:7:dot"
// "[]"
txn Sender
load 254
itob
concat
load 253
itob
concat
load 252
itob
concat
load 251
itob
concat
int 1
bzero
dig 1
substring 0 64
app_global_put
pop
int 1
store 1
global Round
store 2
txn OnCompletion
int NoOp
==
assert
b updateState
l0:
// Handler 1
dup
int 1
==
bz l4
pop
// check step
int 1
load 1
==
assert
// check time
txna ApplicationArgs 1
btoi
load 2
==
assert
int 1
bzero
app_global_get
dup
substring 0 32
store 255
dup
substring 32 40
btoi
store 254
dup
substring 40 48
btoi
store 253
dup
substring 48 56
btoi
store 252
dup
substring 56 64
btoi
store 251
pop
txna ApplicationArgs 2
dup
len
int 0
==
assert
pop
// "CheckPay"
// "./safeTransfer.rsh:40:7:dot"
// "[]"
// "CheckPay"
// "./safeTransfer.rsh:40:7:dot"
// "[]"
load 253
dup
bz l5
load 0
dup
int 1
+
store 0
swap
dig 1
gtxns AssetAmount
==
assert
load 254
dig 1
gtxns XferAsset
==
assert
int axfer
dig 1
gtxns TypeEnum
==
assert
int 0
dig 1
gtxns Fee
==
assert
global ZeroAddress
dig 1
gtxns Lease
==
assert
global ZeroAddress
dig 1
gtxns RekeyTo
==
assert
load 3
dig 1
gtxns AssetReceiver
==
assert
l5:
pop
// Just "sender correct"
// "./safeTransfer.rsh:40:7:dot"
// "[]"
load 255
txn Sender
==
assert
global Round
load 251
+
store 250
load 255
load 254
itob
concat
load 253
itob
concat
load 252
itob
concat
load 250
itob
concat
int 1
bzero
dig 1
substring 0 64
app_global_put
pop
int 2
store 1
global Round
store 2
txn OnCompletion
int NoOp
==
assert
b updateState
l4:
// Handler 2
dup
int 2
==
bz l6
pop
// check step
int 2
load 1
==
assert
// check time
txna ApplicationArgs 1
btoi
load 2
==
assert
int 1
bzero
app_global_get
dup
substring 0 32
store 255
dup
substring 32 40
btoi
store 254
dup
substring 40 48
btoi
store 253
dup
substring 48 56
btoi
store 252
dup
substring 56 64
btoi
store 251
pop
txna ApplicationArgs 2
dup
len
int 0
==
assert
pop
global Round
load 251
<
assert
// "CheckPay"
// "./safeTransfer.rsh:49:7:dot"
// "[]"
load 252
dup
bz l7
load 0
dup
int 1
+
store 0
swap
dig 1
gtxns Amount
==
assert
int pay
dig 1
gtxns TypeEnum
==
assert
int 0
dig 1
gtxns Fee
==
assert
global ZeroAddress
dig 1
gtxns Lease
==
assert
global ZeroAddress
dig 1
gtxns RekeyTo
==
assert
load 3
dig 1
gtxns Receiver
==
assert
l7:
pop
load 252
dup
bz l8
load 0
dup
int 1
+
store 0
swap
dig 1
gtxns Amount
==
assert
int pay
dig 1
gtxns TypeEnum
==
assert
int 0
dig 1
gtxns Fee
==
assert
global ZeroAddress
dig 1
gtxns Lease
==
assert
global ZeroAddress
dig 1
gtxns RekeyTo
==
assert
load 3
dig 1
gtxns Sender
==
assert
load 255
dig 1
gtxns Receiver
==
assert
l8:
pop
load 253
dup
bz l9
load 0
dup
int 1
+
store 0
swap
dig 1
gtxns AssetAmount
==
assert
load 254
dig 1
gtxns XferAsset
==
assert
int axfer
dig 1
gtxns TypeEnum
==
assert
int 0
dig 1
gtxns Fee
==
assert
global ZeroAddress
dig 1
gtxns Lease
==
assert
global ZeroAddress
dig 1
gtxns RekeyTo
==
assert
load 3
dig 1
gtxns Sender
==
assert
txn Sender
dig 1
gtxns AssetReceiver
==
assert
l9:
pop
int 0
load 0
dup
int 1
+
store 0
swap
dig 1
gtxns AssetAmount
==
assert
load 254
dig 1
gtxns XferAsset
==
assert
int axfer
dig 1
gtxns TypeEnum
==
assert
int 0
dig 1
gtxns Fee
==
assert
global ZeroAddress
dig 1
gtxns Lease
==
assert
global ZeroAddress
dig 1
gtxns RekeyTo
==
assert
load 3
dig 1
gtxns Sender
==
assert
global CreatorAddress
dig 1
gtxns AssetCloseTo
==
assert
l10:
pop
int 0
load 0
dup
int 1
+
store 0
swap
dig 1
gtxns Amount
==
assert
int pay
dig 1
gtxns TypeEnum
==
assert
int 0
dig 1
gtxns Fee
==
assert
global ZeroAddress
dig 1
gtxns Lease
==
assert
global ZeroAddress
dig 1
gtxns RekeyTo
==
assert
load 3
dig 1
gtxns Sender
==
assert
global CreatorAddress
dig 1
gtxns CloseRemainderTo
==
assert
l11:
pop
txn OnCompletion
int DeleteApplication
==
assert
b updateState
l6:
// Handler 3
dup
int 3
==
bz l12
pop
// check step
int 2
load 1
==
assert
// check time
txna ApplicationArgs 1
btoi
load 2
==
assert
int 1
bzero
app_global_get
dup
substring 0 32
store 255
dup
substring 32 40
btoi
store 254
dup
substring 40 48
btoi
store 253
dup
substring 48 56
btoi
store 252
dup
substring 56 64
btoi
store 251
pop
txna ApplicationArgs 2
dup
len
int 0
==
assert
pop
global Round
load 251
>=
assert
// "CheckPay"
// "./safeTransfer.rsh:51:15:dot"
// "[]"
// Just "sender correct"
// "./safeTransfer.rsh:51:15:dot"
// "[]"
load 255
txn Sender
==
assert
load 253
dup
bz l13
load 0
dup
int 1
+
store 0
swap
dig 1
gtxns AssetAmount
==
assert
load 254
dig 1
gtxns XferAsset
==
assert
int axfer
dig 1
gtxns TypeEnum
==
assert
int 0
dig 1
gtxns Fee
==
assert
global ZeroAddress
dig 1
gtxns Lease
==
assert
global ZeroAddress
dig 1
gtxns RekeyTo
==
assert
load 3
dig 1
gtxns Sender
==
assert
load 255
dig 1
gtxns AssetReceiver
==
assert
l13:
pop
int 0
load 0
dup
int 1
+
store 0
swap
dig 1
gtxns AssetAmount
==
assert
load 254
dig 1
gtxns XferAsset
==
assert
int axfer
dig 1
gtxns TypeEnum
==
assert
int 0
dig 1
gtxns Fee
==
assert
global ZeroAddress
dig 1
gtxns Lease
==
assert
global ZeroAddress
dig 1
gtxns RekeyTo
==
assert
load 3
dig 1
gtxns Sender
==
assert
global CreatorAddress
dig 1
gtxns AssetCloseTo
==
assert
l14:
pop
int 0
load 0
dup
int 1
+
store 0
swap
dig 1
gtxns Amount
==
assert
int pay
dig 1
gtxns TypeEnum
==
assert
int 0
dig 1
gtxns Fee
==
assert
global ZeroAddress
dig 1
gtxns Lease
==
assert
global ZeroAddress
dig 1
gtxns RekeyTo
==
assert
load 3
dig 1
gtxns Sender
==
assert
global CreatorAddress
dig 1
gtxns CloseRemainderTo
==
assert
l15:
pop
txn OnCompletion
int DeleteApplication
==
assert
b updateState
l12:
int 0
assert
updateState:
byte base64()
load 1
itob
load 2
itob
load 3
concat
concat
app_global_put
checkSize:
load 0
dup
dup
int 1
+
global GroupSize
==
assert
txn GroupIndex
==
assert
int 1000
*
txn Fee
<=
assert
done:
int 1
return
alloc:
txn OnCompletion
int NoOp
==
assert
int 0
store 1
int 0
store 2
global ZeroAddress
store 3
b updateState
`,
  appClear: `#pragma version 4
int 0
`,
  escrow: `#pragma version 4
global GroupSize
int 1
-
dup
gtxns TypeEnum
int appl
==
assert
gtxns ApplicationID
int {{ApplicationID}}
==
assert
done:
int 1
`,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 1,
  stateSize: 64,
  unsupported: [],
  version: 4
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
                "internalType": "address payable",
                "name": "v104",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v105",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v106",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v107",
                "type": "uint256"
              }
            ],
            "internalType": "struct T1",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T2",
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
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v104",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v105",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v106",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v107",
                "type": "uint256"
              }
            ],
            "internalType": "struct T1",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T2",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e0",
    "type": "event"
  },
  {
    "anonymous": false,
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
        "indexed": false,
        "internalType": "struct T5",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e1",
    "type": "event"
  },
  {
    "anonymous": false,
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
        "indexed": false,
        "internalType": "struct T5",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e2",
    "type": "event"
  },
  {
    "anonymous": false,
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
        "indexed": false,
        "internalType": "struct T5",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e3",
    "type": "event"
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
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T5",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "m1",
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
        "internalType": "struct T5",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "m2",
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
        "internalType": "struct T5",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "m3",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x608060405260405162000e3038038062000e30833981016040819052620000269162000256565b60008055604080518251815260208084015180516001600160a01b0316828401529081015182840152808301516060808401919091520151608082015290517ffefad5e0d88b997203a7f63b283abe03e4e673fa9ccc91b6b9327ca8f53a9be19181900360a00190a16200009d3415600762000186565b620000e26040518060a0016040528060006001600160a01b0316815260200160006001600160a01b031681526020016000815260200160008152602001600081525090565b3380825260208381018051516001600160a01b039081168386019081528251840151604080880191825284518101516060808a0191825295518601516080808b01918252600160008190554390558351808a019a909a5294519095168883015291519487019490945251908501525160a0808501919091528151808503909101815260c0909301905281516200017d926002920190620001b0565b50505062000384565b81620001ac5760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b828054620001be9062000347565b90600052602060002090601f016020900481019282620001e257600085556200022d565b82601f10620001fd57805160ff19168380011785556200022d565b828001600101855582156200022d579182015b828111156200022d57825182559160200191906001019062000210565b506200023b9291506200023f565b5090565b5b808211156200023b576000815560010162000240565b600081830360a08112156200026a57600080fd5b604080519081016001600160401b03811182821017156200029b57634e487b7160e01b600052604160045260246000fd5b604052835181526080601f1983011215620002b557600080fd5b620002bf62000310565b60208501519092506001600160a01b0381168114620002dd57600080fd5b80835250604084015160208301526060840151604083015260808401516060830152816020820152809250505092915050565b604051608081016001600160401b03811182821017156200034157634e487b7160e01b600052604160045260246000fd5b60405290565b600181811c908216806200035c57607f821691505b602082108114156200037e57634e487b7160e01b600052602260045260246000fd5b50919050565b610a9c80620003946000396000f3fe6080604052600436106100435760003560e01c80637963168e1461004f5780638323075714610064578063f147248d14610086578063fd948b861461009957600080fd5b3661004a57005b600080fd5b61006261005d366004610985565b6100ac565b005b34801561007057600080fd5b5060015460405190815260200160405180910390f35b610062610094366004610985565b6102bc565b6100626100a7366004610985565b61041f565b6100bc600160005414600b61058f565b6001546100cd90823514600c61058f565b6000808055600280546100df90610a23565b80601f016020809104026020016040519081016040528092919081815260200182805461010b90610a23565b80156101585780601f1061012d57610100808354040283529160200191610158565b820191906000526020600020905b81548152906001019060200180831161013b57829003601f168201915b50505050508060200190518101906101709190610969565b90506101886040518060200160405280600081525090565b7f9f41c6cf17ede288cbb2cfbbafdd05b2b2025dea3b047cdb79dbc892d7a9286d836040516101b791906109d8565b60405180910390a16101cb3415600861058f565b6101e86101e133846020015185604001516105b9565b600961058f565b8151610200906001600160a01b03163314600a61058f565b608082015161020f90436109fd565b81526040805160a0808201835260008083526020808401828152848601838152606080870185815260808089018781528c516001600160a01b03908116808c528e890151821688528e8d015187528e86015185528d5183526002998a9055436001558c51808a0191909152965116868c0152935192850192909252519083015251818501528551808203909401845260c001909452815192936102b593919201906107d0565b5050505050565b6102cc600260005414601361058f565b6001546102dd90823514601461058f565b6000808055600280546102ef90610a23565b80601f016020809104026020016040519081016040528092919081815260200182805461031b90610a23565b80156103685780601f1061033d57610100808354040283529160200191610368565b820191906000526020600020905b81548152906001019060200180831161034b57829003601f168201915b50505050508060200190518101906103809190610969565b90506103948160800151431015601561058f565b7fe92d4e1229145c13e718fdc692a322df4a6700c6bebac0841f0e9f44c56a1529826040516103c391906109d8565b60405180910390a16103d73415601161058f565b80516103ef906001600160a01b03163314601261058f565b6104068160200151826000015183604001516105d1565b6000808055600181905561041c90600290610854565b33ff5b61042f600260005414600e61058f565b60015461044090823514600f61058f565b60008080556002805461045290610a23565b80601f016020809104026020016040519081016040528092919081815260200182805461047e90610a23565b80156104cb5780601f106104a0576101008083540402835291602001916104cb565b820191906000526020600020905b8154815290600101906020018083116104ae57829003601f168201915b50505050508060200190518101906104e39190610969565b90506104f681608001514310601061058f565b7fe0777bbb0edbebd8a5c254bf54fd955256e9bf9fb0fe4138cd88ac193a101d158260405161052591906109d8565b60405180910390a161053e81606001513414600d61058f565b805160608201516040516001600160a01b039092169181156108fc0291906000818181858888f1935050505015801561057b573d6000803e3d6000fd5b5061040681602001513383604001516105d1565b816105b55760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b5050565b60006105c7838530856105ea565b90505b9392505050565b6105dc8383836106c4565b6105e557600080fd5b505050565b604080516001600160a01b0385811660248301528481166044830152606480830185905283518084039091018152608490920183526020820180516001600160e01b03166323b872dd60e01b1790529151600092839283929189169183916106519161099d565b60006040518083038185875af1925050503d806000811461068e576040519150601f19603f3d011682016040523d82523d6000602084013e610693565b606091505b50915091506106a482826001610795565b50808060200190518101906106b9919061094c565b979650505050505050565b604080516001600160a01b038481166024830152604480830185905283518084039091018152606490920183526020820180516001600160e01b031663a9059cbb60e01b1790529151600092839283929188169183916107239161099d565b60006040518083038185875af1925050503d8060008114610760576040519150601f19603f3d011682016040523d82523d6000602084013e610765565b606091505b509150915061077682826002610795565b508080602001905181019061078b919061094c565b9695505050505050565b606083156107a45750816105ca565b8251156107b45782518084602001fd5b60405163100960cb60e01b8152600481018390526024016105ac565b8280546107dc90610a23565b90600052602060002090601f0160209004810192826107fe5760008555610844565b82601f1061081757805160ff1916838001178555610844565b82800160010185558215610844579182015b82811115610844578251825591602001919060010190610829565b50610850929150610891565b5090565b50805461086090610a23565b6000825580601f10610870575050565b601f01602090049060005260206000209081019061088e9190610891565b50565b5b808211156108505760008155600101610892565b80516001600160a01b03811681146108bd57600080fd5b919050565b600060a082840312156108d457600080fd5b60405160a0810181811067ffffffffffffffff8211171561090557634e487b7160e01b600052604160045260246000fd5b604052905080610914836108a6565b8152610922602084016108a6565b60208201526040830151604082015260608301516060820152608083015160808201525092915050565b60006020828403121561095e57600080fd5b81516105ca81610a58565b600060a0828403121561097b57600080fd5b6105ca83836108c2565b60006040828403121561099757600080fd5b50919050565b6000825160005b818110156109be57602081860181015185830152016109a4565b818111156109cd576000828501525b509190910192915050565b813581526040810160208301356109ee81610a58565b80151560208401525092915050565b60008219821115610a1e57634e487b7160e01b600052601160045260246000fd5b500190565b600181811c90821680610a3757607f821691505b6020821081141561099757634e487b7160e01b600052602260045260246000fd5b801515811461088e57600080fdfea2646970667358221220dae79d853fd52837c8ffffd4afc098f503f7d5152ec6b67666fd09110cf58bd164736f6c63430008070033`,
  BytecodeLen: 3632,
  Which: `oD`,
  version: 3,
  views: {
    }
  };

export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };
