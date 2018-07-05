Blockly.JavaScript['number'] = function(block) {
  var text_number = block.getFieldValue('Number');
  // TODO: Assemble JavaScript into code variable.
  var code = text_number;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};