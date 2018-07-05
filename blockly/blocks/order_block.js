Blockly.Blocks['order'] = {
  init: function() {
    this.appendStatementInput("order")
        .setCheck("Array")
        .appendField("命令文書き入れ");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(300);
 this.setTooltip("命令文を書き入れ、画面内に様々なものを表示するブロック");
 this.setHelpUrl("");
  }
};