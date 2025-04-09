function RTW_SidParentMap() {
    this.sidParentMap = new Array();
    this.sidParentMap["OPC_UA_block_converter:156"] = "OPC_UA_block_converter:155";
    this.sidParentMap["OPC_UA_block_converter:159"] = "OPC_UA_block_converter:155";
    this.sidParentMap["OPC_UA_block_converter:160"] = "OPC_UA_block_converter:155";
    this.sidParentMap["OPC_UA_block_converter:161"] = "OPC_UA_block_converter:155";
    this.sidParentMap["OPC_UA_block_converter:158"] = "OPC_UA_block_converter:155";
    this.sidParentMap["OPC_UA_block_converter:157"] = "OPC_UA_block_converter:155";
    this.sidParentMap["OPC_UA_block_converter:158:1"] = "OPC_UA_block_converter:158";
    this.sidParentMap["OPC_UA_block_converter:158:1:3"] = "OPC_UA_block_converter:158";
    this.sidParentMap["OPC_UA_block_converter:158:1:4"] = "OPC_UA_block_converter:158";
    this.sidParentMap["OPC_UA_block_converter:158:1:5"] = "OPC_UA_block_converter:158";
    this.sidParentMap["OPC_UA_block_converter:158:1:6"] = "OPC_UA_block_converter:158";
    this.getParentSid = function(sid) { return this.sidParentMap[sid];}
}
    RTW_SidParentMap.instance = new RTW_SidParentMap();
