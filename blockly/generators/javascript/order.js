Blockly.JavaScript['order'] = function(block) {
  var statements_order = Blockly.JavaScript.statementToCode(block, 'order');
  // TODO: Assemble JavaScript into code variable.
  var code = '  //↓の中に様々な命令文を書き入れることで、\n' +
             '  //表示されている画面内に様々なものを表示\n' +
             '  //できるようになる\n' +
             '  game.onload = function() {\n';
  return code;
};