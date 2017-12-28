var sha256 = require('sha256');
var RIPEMD160 = require('ripemd160');
var base58check = require('base58check');

var P2PKH_ADDRESS_VERSION = 0x26;
var P2SH_ADDRESS_VERSION = 0x05;

function fromPubKey(pubkey){
	var keyHash = hash160(pubkey).writeInt8(P2PKH_ADDRESS_VERSION);
	var chksum = checksum(keyHash);

	var address = Buffer.concat([keyHash, checksum], keyHash.length + chksum.length);

	return base58check.encode(address);
}

function hash160(data){
	return new RIPEMD160().update(Buffer.from(sha256(data, { asBytes: true }))).digest();
}

function checksum(keyHash){
	return new Buffer(sha256.x2(keyHash).substring(0, 4), 'hex');
}

module.exports = {

	fromPubKey: fromPubKey

};