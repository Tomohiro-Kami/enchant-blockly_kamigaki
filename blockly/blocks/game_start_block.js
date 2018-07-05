Blockly.Blocks['game_start'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("ゲーム開始");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(345);
 this.setTooltip("ゲームを開始させるブロックです");
 this.setHelpUrl("");
  }
};