function RTW_SidParentMap() {
    this.sidParentMap = new Array();
    this.sidParentMap["OPC_UA_block_converter:71"] = "OPC_UA_block_converter:70";
    this.sidParentMap["OPC_UA_block_converter:76"] = "OPC_UA_block_converter:70";
    this.sidParentMap["OPC_UA_block_converter:74"] = "OPC_UA_block_converter:70";
    this.sidParentMap["OPC_UA_block_converter:75"] = "OPC_UA_block_converter:70";
    this.sidParentMap["OPC_UA_block_converter:72"] = "OPC_UA_block_converter:70";
    this.sidParentMap["OPC_UA_block_converter:74:1"] = "OPC_UA_block_converter:74";
    this.sidParentMap["OPC_UA_block_converter:74:2"] = "OPC_UA_block_converter:74";
    this.sidParentMap["OPC_UA_block_converter:74:3"] = "OPC_UA_block_converter:74";
    this.sidParentMap["OPC_UA_block_converter:74:4"] = "OPC_UA_block_converter:74";
    this.sidParentMap["OPC_UA_block_converter:74:5"] = "OPC_UA_block_converter:74";
    this.sidParentMap["OPC_UA_block_converter:74:6"] = "OPC_UA_block_converter:74";
    this.getParentSid = function(sid) { return this.sidParentMap[sid];}
}
    RTW_SidParentMap.instance = new RTW_SidParentMap();
