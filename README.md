# bitcoingoldjs-lib
A javascript library for Bitcoin Gold.

# Usage Example
```javascript
var btg = require('bitcoingoldjs-lib');

var test_pubkey = new Buffer("02A63FCB2B36CFCEF3341E29A3982FB8052AA8F5B40483D59B6D898B3EA8720EB8", 'hex');
var test_redeem = new Buffer("522102248560619cbc25a24460c06a00cc809f9e6a451d444678b026618cd162b5f7b221022fefca32a287b55273e88aa3b34036a4452483b3cbbe426c0f763f786f2682f5210384b790e3002ddca4a2278dfcf815bd3710f18b1b7b6f1b55d69c2ac990ea8f3253ae", 'hex');

var p2pkh_address = btg.address.fromPubKey(test_pubkey);
var p2sh_address = btg.address.fromRedeemScript(test_redeem);

console.log(p2pkh_address);
console.log(p2sh_address);

console.log(btg.address.validateAddress(p2pkh_address));
console.log(btg.address.validateAddress(p2sh_address));

console.log(btg.address.toKeyHash(p2pkh_address));
console.log(btg.address.toKeyHash(p2sh_address));
```