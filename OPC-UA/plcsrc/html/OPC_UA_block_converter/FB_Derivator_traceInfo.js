function RTW_Sid2UrlHash() {
	this.urlHashMap = new Array();
	/* <S1>/Input */
	this.urlHashMap["OPC_UA_block_converter:211"] = "msg=&block=OPC_UA_block_converter:211";
	/* <S1>/Discrete Derivative */
	this.urlHashMap["OPC_UA_block_converter:213"] = "msg=&block=OPC_UA_block_converter:213";
	/* <S1>/Derivated_output */
	this.urlHashMap["OPC_UA_block_converter:212"] = "msg=&block=OPC_UA_block_converter:212";
	/* <S2>/U */
	this.urlHashMap["OPC_UA_block_converter:213:1"] = "msg=&block=OPC_UA_block_converter:213:1";
	/* <S2>/Data Type
Duplicate */
	this.urlHashMap["OPC_UA_block_converter:213:2"] = "msg=&block=OPC_UA_block_converter:213:2";
	/* <S2>/Diff */
	this.urlHashMap["OPC_UA_block_converter:213:3"] = "OPC_UA_block_converter.st:55,58";
	/* <S2>/TSamp */
	this.urlHashMap["OPC_UA_block_converter:213:4"] = "OPC_UA_block_converter.st:48,50";
	/* <S2>/UD */
	this.urlHashMap["OPC_UA_block_converter:213:5"] = "OPC_UA_block_converter.st:39,41,56,62,66,68";
	/* <S2>/Y */
	this.urlHashMap["OPC_UA_block_converter:213:6"] = "msg=&block=OPC_UA_block_converter:213:6";
	this.getUrlHash = function(sid) { return this.urlHashMap[sid];}
}
RTW_Sid2UrlHash.instance = new RTW_Sid2UrlHash();
function RTW_rtwnameSIDMap() {
	this.rtwnameHashMap = new Array();
	this.sidHashMap = new Array();
	this.rtwnameHashMap["<Root>"] = {sid: "OPC_UA_block_converter"};
	this.sidHashMap["OPC_UA_block_converter"] = {rtwname: "<Root>"};
	this.rtwnameHashMap["<S1>/Input"] = {sid: "OPC_UA_block_converter:211"};
	this.sidHashMap["OPC_UA_block_converter:211"] = {rtwname: "<S1>/Input"};
	this.rtwnameHashMap["<S1>/Discrete Derivative"] = {sid: "OPC_UA_block_converter:213"};
	this.sidHashMap["OPC_UA_block_converter:213"] = {rtwname: "<S1>/Discrete Derivative"};
	this.rtwnameHashMap["<S1>/Derivated_output"] = {sid: "OPC_UA_block_converter:212"};
	this.sidHashMap["OPC_UA_block_converter:212"] = {rtwname: "<S1>/Derivated_output"};
	this.rtwnameHashMap["<S2>/U"] = {sid: "OPC_UA_block_converter:213:1"};
	this.sidHashMap["OPC_UA_block_converter:213:1"] = {rtwname: "<S2>/U"};
	this.rtwnameHashMap["<S2>/Data Type Duplicate"] = {sid: "OPC_UA_block_converter:213:2"};
	this.sidHashMap["OPC_UA_block_converter:213:2"] = {rtwname: "<S2>/Data Type Duplicate"};
	this.rtwnameHashMap["<S2>/Diff"] = {sid: "OPC_UA_block_converter:213:3"};
	this.sidHashMap["OPC_UA_block_converter:213:3"] = {rtwname: "<S2>/Diff"};
	this.rtwnameHashMap["<S2>/TSamp"] = {sid: "OPC_UA_block_converter:213:4"};
	this.sidHashMap["OPC_UA_block_converter:213:4"] = {rtwname: "<S2>/TSamp"};
	this.rtwnameHashMap["<S2>/UD"] = {sid: "OPC_UA_block_converter:213:5"};
	this.sidHashMap["OPC_UA_block_converter:213:5"] = {rtwname: "<S2>/UD"};
	this.rtwnameHashMap["<S2>/Y"] = {sid: "OPC_UA_block_converter:213:6"};
	this.sidHashMap["OPC_UA_block_converter:213:6"] = {rtwname: "<S2>/Y"};
	this.getSID = function(rtwname) { return this.rtwnameHashMap[rtwname];}
	this.getRtwname = function(sid) { return this.sidHashMap[sid];}
}
RTW_rtwnameSIDMap.instance = new RTW_rtwnameSIDMap();
