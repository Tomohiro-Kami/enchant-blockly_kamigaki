Blockly.Blocks['grassland'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("背景③描画");
    this.appendValueInput("number")
        .setCheck("Number")
        .appendField("number");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(180);
 this.setTooltip("背景③描画のためのブロックです。0~3のどれかの番号を入れなければなりません。");
 this.setHelpUrl("");
  }
};