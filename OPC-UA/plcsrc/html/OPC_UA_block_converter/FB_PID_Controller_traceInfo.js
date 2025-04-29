function RTW_Sid2UrlHash() {
	this.urlHashMap = new Array();
	/* <S1>/Constant */
	this.urlHashMap["OPC_UA_block_converter:175"] = "OPC_UA_block_converter.st:74";
	/* <S1>/Constant1 */
	this.urlHashMap["OPC_UA_block_converter:176"] = "OPC_UA_block_converter.st:136";
	/* <S1>/Constant2 */
	this.urlHashMap["OPC_UA_block_converter:177"] = "OPC_UA_block_converter.st:103";
	/* <S1>/Discrete-Time
Integrator1 */
	this.urlHashMap["OPC_UA_block_converter:179"] = "OPC_UA_block_converter.st:54,69,75,141,152";
	/* <S1>/Divide */
	this.urlHashMap["OPC_UA_block_converter:180"] = "OPC_UA_block_converter.st:142";
	/* <S1>/Product */
	this.urlHashMap["OPC_UA_block_converter:183"] = "OPC_UA_block_converter.st:67";
	/* <S1>/Product1 */
	this.urlHashMap["OPC_UA_block_converter:184"] = "OPC_UA_block_converter.st:143";
	/* <S1>/Product2 */
	this.urlHashMap["OPC_UA_block_converter:217"] = "OPC_UA_block_converter.st:96";
	/* <S1>/Saturation */
	this.urlHashMap["OPC_UA_block_converter:185"] = "OPC_UA_block_converter.st:85,93";
	/* <S1>/Saturation1 */
	this.urlHashMap["OPC_UA_block_converter:215"] = "OPC_UA_block_converter.st:125,133";
	/* <S1>/Sum */
	this.urlHashMap["OPC_UA_block_converter:186"] = "OPC_UA_block_converter.st:65";
	/* <S1>/Sum1 */
	this.urlHashMap["OPC_UA_block_converter:187"] = "OPC_UA_block_converter.st:144";
	/* <S1>/Sum2 */
	this.urlHashMap["OPC_UA_block_converter:216"] = "OPC_UA_block_converter.st:123";
	/* <S1>/Sum3 */
	this.urlHashMap["OPC_UA_block_converter:188"] = "OPC_UA_block_converter.st:145";
	/* <S1>/Sum5 */
	this.urlHashMap["OPC_UA_block_converter:189"] = "OPC_UA_block_converter.st:83";
	/* <S1>/Switch1 */
	this.urlHashMap["OPC_UA_block_converter:191"] = "OPC_UA_block_converter.st:121,139";
	/* <S1>/Switch2 */
	this.urlHashMap["OPC_UA_block_converter:192"] = "OPC_UA_block_converter.st:73,81";
	/* <S1>/Switch3 */
	this.urlHashMap["OPC_UA_block_converter:193"] = "OPC_UA_block_converter.st:102,119";
	/* <S2>/Data Type
Duplicate */
	this.urlHashMap["OPC_UA_block_converter:178:2"] = "msg=rtwMsg_notTraceable&block=OPC_UA_block_converter:178:2";
	/* <S2>/Diff */
	this.urlHashMap["OPC_UA_block_converter:178:3"] = "OPC_UA_block_converter.st:104,107";
	/* <S2>/TSamp */
	this.urlHashMap["OPC_UA_block_converter:178:4"] = "OPC_UA_block_converter.st:95,98";
	/* <S2>/UD */
	this.urlHashMap["OPC_UA_block_converter:178:5"] = "OPC_UA_block_converter.st:56,58,105,111,154,156";
	this.getUrlHash = function(sid) { return this.urlHashMap[sid];}
}
RTW_Sid2UrlHash.instance = new RTW_Sid2UrlHash();
function RTW_rtwnameSIDMap() {
	this.rtwnameHashMap = new Array();
	this.sidHashMap = new Array();
	this.rtwnameHashMap["<Root>"] = {sid: "OPC_UA_block_converter"};
	this.sidHashMap["OPC_UA_block_converter"] = {rtwname: "<Root>"};
	this.rtwnameHashMap["<S1>/fSignalReference"] = {sid: "OPC_UA_block_converter:163"};
	this.sidHashMap["OPC_UA_block_converter:163"] = {rtwname: "<S1>/fSignalReference"};
	this.rtwnameHashMap["<S1>/fSignalFeedback"] = {sid: "OPC_UA_block_converter:164"};
	this.sidHashMap["OPC_UA_block_converter:164"] = {rtwname: "<S1>/fSignalFeedback"};
	this.rtwnameHashMap["<S1>/fProportionalGain"] = {sid: "OPC_UA_block_converter:165"};
	this.sidHashMap["OPC_UA_block_converter:165"] = {rtwname: "<S1>/fProportionalGain"};
	this.rtwnameHashMap["<S1>/fIntegralGain"] = {sid: "OPC_UA_block_converter:166"};
	this.sidHashMap["OPC_UA_block_converter:166"] = {rtwname: "<S1>/fIntegralGain"};
	this.rtwnameHashMap["<S1>/bIntegralControlReset"] = {sid: "OPC_UA_block_converter:167"};
	this.sidHashMap["OPC_UA_block_converter:167"] = {rtwname: "<S1>/bIntegralControlReset"};
	this.rtwnameHashMap["<S1>/bActivateIntegralControl"] = {sid: "OPC_UA_block_converter:168"};
	this.sidHashMap["OPC_UA_block_converter:168"] = {rtwname: "<S1>/bActivateIntegralControl"};
	this.rtwnameHashMap["<S1>/bEnable"] = {sid: "OPC_UA_block_converter:169"};
	this.sidHashMap["OPC_UA_block_converter:169"] = {rtwname: "<S1>/bEnable"};
	this.rtwnameHashMap["<S1>/bActivateDerivativeControl"] = {sid: "OPC_UA_block_converter:170"};
	this.sidHashMap["OPC_UA_block_converter:170"] = {rtwname: "<S1>/bActivateDerivativeControl"};
	this.rtwnameHashMap["<S1>/fDerivativeGain"] = {sid: "OPC_UA_block_converter:171"};
	this.sidHashMap["OPC_UA_block_converter:171"] = {rtwname: "<S1>/fDerivativeGain"};
	this.rtwnameHashMap["<S1>/Constant"] = {sid: "OPC_UA_block_converter:175"};
	this.sidHashMap["OPC_UA_block_converter:175"] = {rtwname: "<S1>/Constant"};
	this.rtwnameHashMap["<S1>/Constant1"] = {sid: "OPC_UA_block_converter:176"};
	this.sidHashMap["OPC_UA_block_converter:176"] = {rtwname: "<S1>/Constant1"};
	this.rtwnameHashMap["<S1>/Constant2"] = {sid: "OPC_UA_block_converter:177"};
	this.sidHashMap["OPC_UA_block_converter:177"] = {rtwname: "<S1>/Constant2"};
	this.rtwnameHashMap["<S1>/Discrete Derivative"] = {sid: "OPC_UA_block_converter:178"};
	this.sidHashMap["OPC_UA_block_converter:178"] = {rtwname: "<S1>/Discrete Derivative"};
	this.rtwnameHashMap["<S1>/Discrete-Time Integrator1"] = {sid: "OPC_UA_block_converter:179"};
	this.sidHashMap["OPC_UA_block_converter:179"] = {rtwname: "<S1>/Discrete-Time Integrator1"};
	this.rtwnameHashMap["<S1>/Divide"] = {sid: "OPC_UA_block_converter:180"};
	this.sidHashMap["OPC_UA_block_converter:180"] = {rtwname: "<S1>/Divide"};
	this.rtwnameHashMap["<S1>/From"] = {sid: "OPC_UA_block_converter:181"};
	this.sidHashMap["OPC_UA_block_converter:181"] = {rtwname: "<S1>/From"};
	this.rtwnameHashMap["<S1>/Goto"] = {sid: "OPC_UA_block_converter:182"};
	this.sidHashMap["OPC_UA_block_converter:182"] = {rtwname: "<S1>/Goto"};
	this.rtwnameHashMap["<S1>/Product"] = {sid: "OPC_UA_block_converter:183"};
	this.sidHashMap["OPC_UA_block_converter:183"] = {rtwname: "<S1>/Product"};
	this.rtwnameHashMap["<S1>/Product1"] = {sid: "OPC_UA_block_converter:184"};
	this.sidHashMap["OPC_UA_block_converter:184"] = {rtwname: "<S1>/Product1"};
	this.rtwnameHashMap["<S1>/Product2"] = {sid: "OPC_UA_block_converter:217"};
	this.sidHashMap["OPC_UA_block_converter:217"] = {rtwname: "<S1>/Product2"};
	this.rtwnameHashMap["<S1>/Saturation"] = {sid: "OPC_UA_block_converter:185"};
	this.sidHashMap["OPC_UA_block_converter:185"] = {rtwname: "<S1>/Saturation"};
	this.rtwnameHashMap["<S1>/Saturation1"] = {sid: "OPC_UA_block_converter:215"};
	this.sidHashMap["OPC_UA_block_converter:215"] = {rtwname: "<S1>/Saturation1"};
	this.rtwnameHashMap["<S1>/Sum"] = {sid: "OPC_UA_block_converter:186"};
	this.sidHashMap["OPC_UA_block_converter:186"] = {rtwname: "<S1>/Sum"};
	this.rtwnameHashMap["<S1>/Sum1"] = {sid: "OPC_UA_block_converter:187"};
	this.sidHashMap["OPC_UA_block_converter:187"] = {rtwname: "<S1>/Sum1"};
	this.rtwnameHashMap["<S1>/Sum2"] = {sid: "OPC_UA_block_converter:216"};
	this.sidHashMap["OPC_UA_block_converter:216"] = {rtwname: "<S1>/Sum2"};
	this.rtwnameHashMap["<S1>/Sum3"] = {sid: "OPC_UA_block_converter:188"};
	this.sidHashMap["OPC_UA_block_converter:188"] = {rtwname: "<S1>/Sum3"};
	this.rtwnameHashMap["<S1>/Sum5"] = {sid: "OPC_UA_block_converter:189"};
	this.sidHashMap["OPC_UA_block_converter:189"] = {rtwname: "<S1>/Sum5"};
	this.rtwnameHashMap["<S1>/Switch1"] = {sid: "OPC_UA_block_converter:191"};
	this.sidHashMap["OPC_UA_block_converter:191"] = {rtwname: "<S1>/Switch1"};
	this.rtwnameHashMap["<S1>/Switch2"] = {sid: "OPC_UA_block_converter:192"};
	this.sidHashMap["OPC_UA_block_converter:192"] = {rtwname: "<S1>/Switch2"};
	this.rtwnameHashMap["<S1>/Switch3"] = {sid: "OPC_UA_block_converter:193"};
	this.sidHashMap["OPC_UA_block_converter:193"] = {rtwname: "<S1>/Switch3"};
	this.rtwnameHashMap["<S1>/fClosedLoopSignal"] = {sid: "OPC_UA_block_converter:194"};
	this.sidHashMap["OPC_UA_block_converter:194"] = {rtwname: "<S1>/fClosedLoopSignal"};
	this.rtwnameHashMap["<S1>/fSignalError"] = {sid: "OPC_UA_block_converter:195"};
	this.sidHashMap["OPC_UA_block_converter:195"] = {rtwname: "<S1>/fSignalError"};
	this.rtwnameHashMap["<S1>/P_out"] = {sid: "OPC_UA_block_converter:196"};
	this.sidHashMap["OPC_UA_block_converter:196"] = {rtwname: "<S1>/P_out"};
	this.rtwnameHashMap["<S1>/I_out"] = {sid: "OPC_UA_block_converter:197"};
	this.sidHashMap["OPC_UA_block_converter:197"] = {rtwname: "<S1>/I_out"};
	this.rtwnameHashMap["<S1>/D_out"] = {sid: "OPC_UA_block_converter:198"};
	this.sidHashMap["OPC_UA_block_converter:198"] = {rtwname: "<S1>/D_out"};
	this.rtwnameHashMap["<S2>/U"] = {sid: "OPC_UA_block_converter:178:1"};
	this.sidHashMap["OPC_UA_block_converter:178:1"] = {rtwname: "<S2>/U"};
	this.rtwnameHashMap["<S2>/Data Type Duplicate"] = {sid: "OPC_UA_block_converter:178:2"};
	this.sidHashMap["OPC_UA_block_converter:178:2"] = {rtwname: "<S2>/Data Type Duplicate"};
	this.rtwnameHashMap["<S2>/Diff"] = {sid: "OPC_UA_block_converter:178:3"};
	this.sidHashMap["OPC_UA_block_converter:178:3"] = {rtwname: "<S2>/Diff"};
	this.rtwnameHashMap["<S2>/TSamp"] = {sid: "OPC_UA_block_converter:178:4"};
	this.sidHashMap["OPC_UA_block_converter:178:4"] = {rtwname: "<S2>/TSamp"};
	this.rtwnameHashMap["<S2>/UD"] = {sid: "OPC_UA_block_converter:178:5"};
	this.sidHashMap["OPC_UA_block_converter:178:5"] = {rtwname: "<S2>/UD"};
	this.rtwnameHashMap["<S2>/Y"] = {sid: "OPC_UA_block_converter:178:6"};
	this.sidHashMap["OPC_UA_block_converter:178:6"] = {rtwname: "<S2>/Y"};
	this.getSID = function(rtwname) { return this.rtwnameHashMap[rtwname];}
	this.getRtwname = function(sid) { return this.sidHashMap[sid];}
}
RTW_rtwnameSIDMap.instance = new RTW_rtwnameSIDMap();
