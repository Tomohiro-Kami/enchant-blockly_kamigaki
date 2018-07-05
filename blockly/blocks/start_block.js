Blockly.Blocks['start'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("スタート");
    this.setInputsInline(true);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("スタートするための処理を行うブロックです");
 this.setHelpUrl("");
  }
};