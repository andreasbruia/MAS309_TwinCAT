function RTW_Sid2UrlHash() {
	this.urlHashMap = new Array();
	/* <S1>/Sum */
	this.urlHashMap["OPC_UA_block_converter:75"] = "OPC_UA_block_converter.st:74";
	/* <S2>/Data Type
Duplicate */
	this.urlHashMap["OPC_UA_block_converter:74:2"] = "msg=rtwMsg_notTraceable&block=OPC_UA_block_converter:74:2";
	/* <S2>/Diff */
	this.urlHashMap["OPC_UA_block_converter:74:3"] = "OPC_UA_block_converter.st:56,59";
	/* <S2>/TSamp */
	this.urlHashMap["OPC_UA_block_converter:74:4"] = "OPC_UA_block_converter.st:50,52";
	/* <S2>/UD */
	this.urlHashMap["OPC_UA_block_converter:74:5"] = "OPC_UA_block_converter.st:41,43,57,63,67,69";
	this.getUrlHash = function(sid) { return this.urlHashMap[sid];}
}
RTW_Sid2UrlHash.instance = new RTW_Sid2UrlHash();
function RTW_rtwnameSIDMap() {
	this.rtwnameHashMap = new Array();
	this.sidHashMap = new Array();
	this.rtwnameHashMap["<Root>"] = {sid: "OPC_UA_block_converter"};
	this.sidHashMap["OPC_UA_block_converter"] = {rtwname: "<Root>"};
	this.rtwnameHashMap["<S1>/ThetaRef"] = {sid: "OPC_UA_block_converter:71"};
	this.sidHashMap["OPC_UA_block_converter:71"] = {rtwname: "<S1>/ThetaRef"};
	this.rtwnameHashMap["<S1>/PID"] = {sid: "OPC_UA_block_converter:76"};
	this.sidHashMap["OPC_UA_block_converter:76"] = {rtwname: "<S1>/PID"};
	this.rtwnameHashMap["<S1>/Discrete Derivative"] = {sid: "OPC_UA_block_converter:74"};
	this.sidHashMap["OPC_UA_block_converter:74"] = {rtwname: "<S1>/Discrete Derivative"};
	this.rtwnameHashMap["<S1>/Sum"] = {sid: "OPC_UA_block_converter:75"};
	this.sidHashMap["OPC_UA_block_converter:75"] = {rtwname: "<S1>/Sum"};
	this.rtwnameHashMap["<S1>/ValveOut"] = {sid: "OPC_UA_block_converter:72"};
	this.sidHashMap["OPC_UA_block_converter:72"] = {rtwname: "<S1>/ValveOut"};
	this.rtwnameHashMap["<S2>/U"] = {sid: "OPC_UA_block_converter:74:1"};
	this.sidHashMap["OPC_UA_block_converter:74:1"] = {rtwname: "<S2>/U"};
	this.rtwnameHashMap["<S2>/Data Type Duplicate"] = {sid: "OPC_UA_block_converter:74:2"};
	this.sidHashMap["OPC_UA_block_converter:74:2"] = {rtwname: "<S2>/Data Type Duplicate"};
	this.rtwnameHashMap["<S2>/Diff"] = {sid: "OPC_UA_block_converter:74:3"};
	this.sidHashMap["OPC_UA_block_converter:74:3"] = {rtwname: "<S2>/Diff"};
	this.rtwnameHashMap["<S2>/TSamp"] = {sid: "OPC_UA_block_converter:74:4"};
	this.sidHashMap["OPC_UA_block_converter:74:4"] = {rtwname: "<S2>/TSamp"};
	this.rtwnameHashMap["<S2>/UD"] = {sid: "OPC_UA_block_converter:74:5"};
	this.sidHashMap["OPC_UA_block_converter:74:5"] = {rtwname: "<S2>/UD"};
	this.rtwnameHashMap["<S2>/Y"] = {sid: "OPC_UA_block_converter:74:6"};
	this.sidHashMap["OPC_UA_block_converter:74:6"] = {rtwname: "<S2>/Y"};
	this.getSID = function(rtwname) { return this.rtwnameHashMap[rtwname];}
	this.getRtwname = function(sid) { return this.sidHashMap[sid];}
}
RTW_rtwnameSIDMap.instance = new RTW_rtwnameSIDMap();
