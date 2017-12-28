var sha256 = require('sha256');
var RIPEMD160 = require('ripemd160');
var base58check = require('base58check');

var P2PKH_ADDRESS_VERSION = '26';
var P2SH_ADDRESS_VERSION = '17';

function fromPubKey(pubkey){
	var keyHash = hash160(pubkey);
	return base58check.encode(keyHash, P2PKH_ADDRESS_VERSION, 'hex');
}

function fromRedeemScript(redeemScript){
	var keyHash = hash160(redeemScript);
	return base58check.encode(keyHash, P2SH_ADDRESS_VERSION, 'hex');
}

function hash160(data){
	return new RIPEMD160().update(Buffer.from(sha256(data, { asBytes: true }))).digest();
}

module.exports = {

	fromPubKey: fromPubKey,
	fromRedeemScript: fromRedeemScript

};