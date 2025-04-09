function RTW_Sid2UrlHash() {
	this.urlHashMap = new Array();
	/* <S1>/Data Type Conversion */
	this.urlHashMap["OPC_UA_block_converter:161"] = "OPC_UA_block_converter.st:51";
	/* <S1>/MATLAB Function */
	this.urlHashMap["OPC_UA_block_converter:158"] = "OPC_UA_block_converter.st:35,49";
	/* <S2>:1 */
	this.urlHashMap["OPC_UA_block_converter:158:1"] = "OPC_UA_block_converter.st:36";
	/* <S2>:1:3 */
	this.urlHashMap["OPC_UA_block_converter:158:1:3"] = "OPC_UA_block_converter.st:37";
	/* <S2>:1:4 */
	this.urlHashMap["OPC_UA_block_converter:158:1:4"] = "OPC_UA_block_converter.st:39,42";
	/* <S2>:1:5 */
	this.urlHashMap["OPC_UA_block_converter:158:1:5"] = "OPC_UA_block_converter.st:45";
	/* <S2>:1:6 */
	this.urlHashMap["OPC_UA_block_converter:158:1:6"] = "OPC_UA_block_converter.st:46";
	this.getUrlHash = function(sid) { return this.urlHashMap[sid];}
}
RTW_Sid2UrlHash.instance = new RTW_Sid2UrlHash();
function RTW_rtwnameSIDMap() {
	this.rtwnameHashMap = new Array();
	this.sidHashMap = new Array();
	this.rtwnameHashMap["<Root>"] = {sid: "OPC_UA_block_converter"};
	this.sidHashMap["OPC_UA_block_converter"] = {rtwname: "<Root>"};
	this.rtwnameHashMap["<S1>/fVRef"] = {sid: "OPC_UA_block_converter:156"};
	this.sidHashMap["OPC_UA_block_converter:156"] = {rtwname: "<S1>/fVRef"};
	this.rtwnameHashMap["<S1>/fErrorMax"] = {sid: "OPC_UA_block_converter:159"};
	this.sidHashMap["OPC_UA_block_converter:159"] = {rtwname: "<S1>/fErrorMax"};
	this.rtwnameHashMap["<S1>/fError"] = {sid: "OPC_UA_block_converter:160"};
	this.sidHashMap["OPC_UA_block_converter:160"] = {rtwname: "<S1>/fError"};
	this.rtwnameHashMap["<S1>/Data Type Conversion"] = {sid: "OPC_UA_block_converter:161"};
	this.sidHashMap["OPC_UA_block_converter:161"] = {rtwname: "<S1>/Data Type Conversion"};
	this.rtwnameHashMap["<S1>/MATLAB Function"] = {sid: "OPC_UA_block_converter:158"};
	this.sidHashMap["OPC_UA_block_converter:158"] = {rtwname: "<S1>/MATLAB Function"};
	this.rtwnameHashMap["<S1>/bReset"] = {sid: "OPC_UA_block_converter:157"};
	this.sidHashMap["OPC_UA_block_converter:157"] = {rtwname: "<S1>/bReset"};
	this.rtwnameHashMap["<S2>:1"] = {sid: "OPC_UA_block_converter:158:1"};
	this.sidHashMap["OPC_UA_block_converter:158:1"] = {rtwname: "<S2>:1"};
	this.rtwnameHashMap["<S2>:1:3"] = {sid: "OPC_UA_block_converter:158:1:3"};
	this.sidHashMap["OPC_UA_block_converter:158:1:3"] = {rtwname: "<S2>:1:3"};
	this.rtwnameHashMap["<S2>:1:4"] = {sid: "OPC_UA_block_converter:158:1:4"};
	this.sidHashMap["OPC_UA_block_converter:158:1:4"] = {rtwname: "<S2>:1:4"};
	this.rtwnameHashMap["<S2>:1:5"] = {sid: "OPC_UA_block_converter:158:1:5"};
	this.sidHashMap["OPC_UA_block_converter:158:1:5"] = {rtwname: "<S2>:1:5"};
	this.rtwnameHashMap["<S2>:1:6"] = {sid: "OPC_UA_block_converter:158:1:6"};
	this.sidHashMap["OPC_UA_block_converter:158:1:6"] = {rtwname: "<S2>:1:6"};
	this.getSID = function(rtwname) { return this.rtwnameHashMap[rtwname];}
	this.getRtwname = function(sid) { return this.sidHashMap[sid];}
}
RTW_rtwnameSIDMap.instance = new RTW_rtwnameSIDMap();
