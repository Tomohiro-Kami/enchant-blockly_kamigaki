Blockly.Blocks['goal'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("ゴール");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setColour(230);
 this.setTooltip("終了処理を行うブロックです");
 this.setHelpUrl("");
  }
};