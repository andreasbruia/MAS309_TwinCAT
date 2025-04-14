function RTW_SidParentMap() {
    this.sidParentMap = new Array();
    this.sidParentMap["OPC_UA_block_converter:211"] = "OPC_UA_block_converter:210";
    this.sidParentMap["OPC_UA_block_converter:213"] = "OPC_UA_block_converter:210";
    this.sidParentMap["OPC_UA_block_converter:212"] = "OPC_UA_block_converter:210";
    this.sidParentMap["OPC_UA_block_converter:213:1"] = "OPC_UA_block_converter:213";
    this.sidParentMap["OPC_UA_block_converter:213:2"] = "OPC_UA_block_converter:213";
    this.sidParentMap["OPC_UA_block_converter:213:3"] = "OPC_UA_block_converter:213";
    this.sidParentMap["OPC_UA_block_converter:213:4"] = "OPC_UA_block_converter:213";
    this.sidParentMap["OPC_UA_block_converter:213:5"] = "OPC_UA_block_converter:213";
    this.sidParentMap["OPC_UA_block_converter:213:6"] = "OPC_UA_block_converter:213";
    this.getParentSid = function(sid) { return this.sidParentMap[sid];}
}
    RTW_SidParentMap.instance = new RTW_SidParentMap();
