function RTW_Sid2UrlHash() {
	this.urlHashMap = new Array();
	/* <S1>/Constant */
	this.urlHashMap["OPC_UA_block_converter:95"] = "OPC_UA_block_converter.st:74";
	/* <S1>/Constant1 */
	this.urlHashMap["OPC_UA_block_converter:102"] = "OPC_UA_block_converter.st:126";
	/* <S1>/Constant2 */
	this.urlHashMap["OPC_UA_block_converter:106"] = "OPC_UA_block_converter.st:90";
	/* <S1>/Discrete-Time
Integrator1 */
	this.urlHashMap["OPC_UA_block_converter:91"] = "OPC_UA_block_converter.st:54,69,75,131,142";
	/* <S1>/Divide */
	this.urlHashMap["OPC_UA_block_converter:99"] = "OPC_UA_block_converter.st:132";
	/* <S1>/Product */
	this.urlHashMap["OPC_UA_block_converter:89"] = "OPC_UA_block_converter.st:67";
	/* <S1>/Product1 */
	this.urlHashMap["OPC_UA_block_converter:90"] = "OPC_UA_block_converter.st:133";
	/* <S1>/Saturation */
	this.urlHashMap["OPC_UA_block_converter:97"] = "OPC_UA_block_converter.st:110,118";
	/* <S1>/Sum */
	this.urlHashMap["OPC_UA_block_converter:83"] = "OPC_UA_block_converter.st:65";
	/* <S1>/Sum1 */
	this.urlHashMap["OPC_UA_block_converter:84"] = "OPC_UA_block_converter.st:134";
	/* <S1>/Sum3 */
	this.urlHashMap["OPC_UA_block_converter:98"] = "OPC_UA_block_converter.st:135";
	/* <S1>/Sum5 */
	this.urlHashMap["OPC_UA_block_converter:103"] = "OPC_UA_block_converter.st:108";
	/* <S1>/Switch1 */
	this.urlHashMap["OPC_UA_block_converter:100"] = "OPC_UA_block_converter.st:120,129";
	/* <S1>/Switch2 */
	this.urlHashMap["OPC_UA_block_converter:93"] = "OPC_UA_block_converter.st:73,81";
	/* <S1>/Switch3 */
	this.urlHashMap["OPC_UA_block_converter:108"] = "OPC_UA_block_converter.st:89,106";
	/* <S2>/Data Type
Duplicate */
	this.urlHashMap["OPC_UA_block_converter:107:2"] = "msg=rtwMsg_notTraceable&block=OPC_UA_block_converter:107:2";
	/* <S2>/Diff */
	this.urlHashMap["OPC_UA_block_converter:107:3"] = "OPC_UA_block_converter.st:91,94";
	/* <S2>/TSamp */
	this.urlHashMap["OPC_UA_block_converter:107:4"] = "OPC_UA_block_converter.st:83,85";
	/* <S2>/UD */
	this.urlHashMap["OPC_UA_block_converter:107:5"] = "OPC_UA_block_converter.st:56,58,92,98,144,146";
	this.getUrlHash = function(sid) { return this.urlHashMap[sid];}
}
RTW_Sid2UrlHash.instance = new RTW_Sid2UrlHash();
function RTW_rtwnameSIDMap() {
	this.rtwnameHashMap = new Array();
	this.sidHashMap = new Array();
	this.rtwnameHashMap["<Root>"] = {sid: "OPC_UA_block_converter"};
	this.sidHashMap["OPC_UA_block_converter"] = {rtwname: "<Root>"};
	this.rtwnameHashMap["<S1>/fSignalReference"] = {sid: "OPC_UA_block_converter:81"};
	this.sidHashMap["OPC_UA_block_converter:81"] = {rtwname: "<S1>/fSignalReference"};
	this.rtwnameHashMap["<S1>/fSignalFeedback"] = {sid: "OPC_UA_block_converter:85"};
	this.sidHashMap["OPC_UA_block_converter:85"] = {rtwname: "<S1>/fSignalFeedback"};
	this.rtwnameHashMap["<S1>/fProportionalGain"] = {sid: "OPC_UA_block_converter:87"};
	this.sidHashMap["OPC_UA_block_converter:87"] = {rtwname: "<S1>/fProportionalGain"};
	this.rtwnameHashMap["<S1>/fIntegralGain"] = {sid: "OPC_UA_block_converter:88"};
	this.sidHashMap["OPC_UA_block_converter:88"] = {rtwname: "<S1>/fIntegralGain"};
	this.rtwnameHashMap["<S1>/bIntegralControlReset"] = {sid: "OPC_UA_block_converter:92"};
	this.sidHashMap["OPC_UA_block_converter:92"] = {rtwname: "<S1>/bIntegralControlReset"};
	this.rtwnameHashMap["<S1>/bActivateIntegralControl"] = {sid: "OPC_UA_block_converter:94"};
	this.sidHashMap["OPC_UA_block_converter:94"] = {rtwname: "<S1>/bActivateIntegralControl"};
	this.rtwnameHashMap["<S1>/bEnable"] = {sid: "OPC_UA_block_converter:101"};
	this.sidHashMap["OPC_UA_block_converter:101"] = {rtwname: "<S1>/bEnable"};
	this.rtwnameHashMap["<S1>/bActivateDerivativeControl"] = {sid: "OPC_UA_block_converter:104"};
	this.sidHashMap["OPC_UA_block_converter:104"] = {rtwname: "<S1>/bActivateDerivativeControl"};
	this.rtwnameHashMap["<S1>/fDerivativeGain"] = {sid: "OPC_UA_block_converter:105"};
	this.sidHashMap["OPC_UA_block_converter:105"] = {rtwname: "<S1>/fDerivativeGain"};
	this.rtwnameHashMap["<S1>/Constant"] = {sid: "OPC_UA_block_converter:95"};
	this.sidHashMap["OPC_UA_block_converter:95"] = {rtwname: "<S1>/Constant"};
	this.rtwnameHashMap["<S1>/Constant1"] = {sid: "OPC_UA_block_converter:102"};
	this.sidHashMap["OPC_UA_block_converter:102"] = {rtwname: "<S1>/Constant1"};
	this.rtwnameHashMap["<S1>/Constant2"] = {sid: "OPC_UA_block_converter:106"};
	this.sidHashMap["OPC_UA_block_converter:106"] = {rtwname: "<S1>/Constant2"};
	this.rtwnameHashMap["<S1>/Discrete Derivative"] = {sid: "OPC_UA_block_converter:107"};
	this.sidHashMap["OPC_UA_block_converter:107"] = {rtwname: "<S1>/Discrete Derivative"};
	this.rtwnameHashMap["<S1>/Discrete-Time Integrator1"] = {sid: "OPC_UA_block_converter:91"};
	this.sidHashMap["OPC_UA_block_converter:91"] = {rtwname: "<S1>/Discrete-Time Integrator1"};
	this.rtwnameHashMap["<S1>/Divide"] = {sid: "OPC_UA_block_converter:99"};
	this.sidHashMap["OPC_UA_block_converter:99"] = {rtwname: "<S1>/Divide"};
	this.rtwnameHashMap["<S1>/Product"] = {sid: "OPC_UA_block_converter:89"};
	this.sidHashMap["OPC_UA_block_converter:89"] = {rtwname: "<S1>/Product"};
	this.rtwnameHashMap["<S1>/Product1"] = {sid: "OPC_UA_block_converter:90"};
	this.sidHashMap["OPC_UA_block_converter:90"] = {rtwname: "<S1>/Product1"};
	this.rtwnameHashMap["<S1>/Saturation"] = {sid: "OPC_UA_block_converter:97"};
	this.sidHashMap["OPC_UA_block_converter:97"] = {rtwname: "<S1>/Saturation"};
	this.rtwnameHashMap["<S1>/Sum"] = {sid: "OPC_UA_block_converter:83"};
	this.sidHashMap["OPC_UA_block_converter:83"] = {rtwname: "<S1>/Sum"};
	this.rtwnameHashMap["<S1>/Sum1"] = {sid: "OPC_UA_block_converter:84"};
	this.sidHashMap["OPC_UA_block_converter:84"] = {rtwname: "<S1>/Sum1"};
	this.rtwnameHashMap["<S1>/Sum3"] = {sid: "OPC_UA_block_converter:98"};
	this.sidHashMap["OPC_UA_block_converter:98"] = {rtwname: "<S1>/Sum3"};
	this.rtwnameHashMap["<S1>/Sum5"] = {sid: "OPC_UA_block_converter:103"};
	this.sidHashMap["OPC_UA_block_converter:103"] = {rtwname: "<S1>/Sum5"};
	this.rtwnameHashMap["<S1>/Switch1"] = {sid: "OPC_UA_block_converter:100"};
	this.sidHashMap["OPC_UA_block_converter:100"] = {rtwname: "<S1>/Switch1"};
	this.rtwnameHashMap["<S1>/Switch2"] = {sid: "OPC_UA_block_converter:93"};
	this.sidHashMap["OPC_UA_block_converter:93"] = {rtwname: "<S1>/Switch2"};
	this.rtwnameHashMap["<S1>/Switch3"] = {sid: "OPC_UA_block_converter:108"};
	this.sidHashMap["OPC_UA_block_converter:108"] = {rtwname: "<S1>/Switch3"};
	this.rtwnameHashMap["<S1>/fClosedLoopSignal"] = {sid: "OPC_UA_block_converter:82"};
	this.sidHashMap["OPC_UA_block_converter:82"] = {rtwname: "<S1>/fClosedLoopSignal"};
	this.rtwnameHashMap["<S1>/fSignalError"] = {sid: "OPC_UA_block_converter:86"};
	this.sidHashMap["OPC_UA_block_converter:86"] = {rtwname: "<S1>/fSignalError"};
	this.rtwnameHashMap["<S1>/P_out"] = {sid: "OPC_UA_block_converter:109"};
	this.sidHashMap["OPC_UA_block_converter:109"] = {rtwname: "<S1>/P_out"};
	this.rtwnameHashMap["<S1>/I_out"] = {sid: "OPC_UA_block_converter:110"};
	this.sidHashMap["OPC_UA_block_converter:110"] = {rtwname: "<S1>/I_out"};
	this.rtwnameHashMap["<S1>/D_out"] = {sid: "OPC_UA_block_converter:111"};
	this.sidHashMap["OPC_UA_block_converter:111"] = {rtwname: "<S1>/D_out"};
	this.rtwnameHashMap["<S2>/U"] = {sid: "OPC_UA_block_converter:107:1"};
	this.sidHashMap["OPC_UA_block_converter:107:1"] = {rtwname: "<S2>/U"};
	this.rtwnameHashMap["<S2>/Data Type Duplicate"] = {sid: "OPC_UA_block_converter:107:2"};
	this.sidHashMap["OPC_UA_block_converter:107:2"] = {rtwname: "<S2>/Data Type Duplicate"};
	this.rtwnameHashMap["<S2>/Diff"] = {sid: "OPC_UA_block_converter:107:3"};
	this.sidHashMap["OPC_UA_block_converter:107:3"] = {rtwname: "<S2>/Diff"};
	this.rtwnameHashMap["<S2>/TSamp"] = {sid: "OPC_UA_block_converter:107:4"};
	this.sidHashMap["OPC_UA_block_converter:107:4"] = {rtwname: "<S2>/TSamp"};
	this.rtwnameHashMap["<S2>/UD"] = {sid: "OPC_UA_block_converter:107:5"};
	this.sidHashMap["OPC_UA_block_converter:107:5"] = {rtwname: "<S2>/UD"};
	this.rtwnameHashMap["<S2>/Y"] = {sid: "OPC_UA_block_converter:107:6"};
	this.sidHashMap["OPC_UA_block_converter:107:6"] = {rtwname: "<S2>/Y"};
	this.getSID = function(rtwname) { return this.rtwnameHashMap[rtwname];}
	this.getRtwname = function(sid) { return this.sidHashMap[sid];}
}
RTW_rtwnameSIDMap.instance = new RTW_rtwnameSIDMap();
